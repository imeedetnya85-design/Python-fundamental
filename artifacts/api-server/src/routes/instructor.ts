import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import { Router, type IRouter, type Request, type Response } from "express";
import {
  GetInstructorDocumentParams,
  GetInstructorDocumentResponse,
  GetInstructorSessionResponse,
  LoginInstructorBody,
  LoginInstructorResponse,
  LogoutInstructorResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();
const cookieName = "pf_instructor_session";
const sessionLifetimeSeconds = 60 * 60 * 8;
const maxFailedAttempts = 10;
const failedAttemptWindowMs = 15 * 60 * 1000;
const failedAttempts = new Map<string, { count: number; resetAt: number }>();
const documents = {
  overview: "README.md",
  "chapter-1": "chapter1.md",
  "chapter-2": "chapter2.md",
  "chapter-3": "chapter3.md",
  "chapter-4": "chapter4.md",
  "chapter-5": "chapter5.md",
  roadmap: "roadmap.md",
} as const;

function createAuthConfig() {
  const password = process.env.INSTRUCTOR_PASSWORD;
  const sessionSecret = process.env.SESSION_SECRET;
  if (!password || password.length < 12 || !sessionSecret) return null;

  const salt = createHmac("sha256", sessionSecret)
    .update("python-foundations:instructor-password-salt:v1")
    .digest();
  const passwordHash = scryptSync(password, salt, 32);
  const signingKey = createHmac("sha256", sessionSecret)
    .update("python-foundations:instructor-session-signing:v1")
    .update("\0")
    .update(password)
    .digest();

  return { passwordHash, passwordSalt: salt, signingKey };
}

const authConfig = createAuthConfig();

function requestCookie(req: Request): string | undefined {
  const cookies = req.headers.cookie?.split(";") ?? [];
  const pair = cookies.map((part) => part.trim()).find((part) => part.startsWith(`${cookieName}=`));
  return pair?.slice(cookieName.length + 1);
}

function isValidSession(token: string | undefined): boolean {
  if (!authConfig || !token) return false;

  const [version, expiresAtText, signature, extra] = token.split(".");
  if (version !== "v1" || !expiresAtText || !signature || extra !== undefined) return false;

  const expiresAt = Number(expiresAtText);
  const now = Math.floor(Date.now() / 1000);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= now || expiresAt > now + sessionLifetimeSeconds) return false;

  const expected = createHmac("sha256", authConfig.signingKey)
    .update(`${version}.${expiresAtText}`)
    .digest();
  const received = Buffer.from(signature, "base64url");
  return received.length === expected.length && timingSafeEqual(received, expected);
}

function setSessionCookie(req: Request, res: Response) {
  if (!authConfig) return;

  const expiresAt = Math.floor(Date.now() / 1000) + sessionLifetimeSeconds;
  const payload = `v1.${expiresAt}`;
  const signature = createHmac("sha256", authConfig.signingKey).update(payload).digest("base64url");
  const secure = process.env.NODE_ENV === "production" || req.get("x-forwarded-proto")?.split(",")[0].trim() === "https";
  res.setHeader(
    "Set-Cookie",
    `${cookieName}=${payload}.${signature}; Path=/api/instructor; HttpOnly; SameSite=Strict; Max-Age=${sessionLifetimeSeconds}${secure ? "; Secure" : ""}`,
  );
}

function clearSessionCookie(req: Request, res: Response) {
  const secure = process.env.NODE_ENV === "production" || req.get("x-forwarded-proto")?.split(",")[0].trim() === "https";
  res.setHeader(
    "Set-Cookie",
    `${cookieName}=; Path=/api/instructor; HttpOnly; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT${secure ? "; Secure" : ""}`,
  );
}

function failedAttemptStatus(ip: string): number | undefined {
  const record = failedAttempts.get(ip);
  if (!record) return undefined;
  if (record.resetAt <= Date.now()) {
    failedAttempts.delete(ip);
    return undefined;
  }
  return record.count >= maxFailedAttempts ? Math.max(1, Math.ceil((record.resetAt - Date.now()) / 1000)) : undefined;
}

function recordFailedAttempt(ip: string) {
  const now = Date.now();
  const current = failedAttempts.get(ip);
  if (!current || current.resetAt <= now) {
    failedAttempts.set(ip, { count: 1, resetAt: now + failedAttemptWindowMs });
    return;
  }
  current.count += 1;
}

router.get("/instructor/session", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.json(GetInstructorSessionResponse.parse({ authenticated: isValidSession(requestCookie(req)) }));
});

router.post("/instructor/login", (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  const input = LoginInstructorBody.safeParse(req.body);
  if (!input.success) {
    res.status(400).json({ error: "Enter the instructor password." });
    return;
  }

  if (!authConfig) {
    res.status(503).json({ error: "Instructor password access is not configured. Set a password of at least 12 characters in Replit Secrets." });
    return;
  }

  const ip = req.ip || "unknown";
  const waitSeconds = failedAttemptStatus(ip);
  if (waitSeconds) {
    res.setHeader("Retry-After", String(waitSeconds));
    res.status(429).json({ error: "Too many attempts. Wait before trying again." });
    return;
  }

  const submittedHash = scryptSync(input.data.password, authConfig.passwordSalt, 32);
  if (!timingSafeEqual(authConfig.passwordHash, submittedHash)) {
    recordFailedAttempt(ip);
    req.log.warn("Instructor password rejected");
    res.status(401).json({ error: "That password was not accepted." });
    return;
  }

  failedAttempts.delete(ip);
  setSessionCookie(req, res);
  req.log.info("Instructor session started");
  res.json(LoginInstructorResponse.parse({ authenticated: true }));
});

router.post("/instructor/logout", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  clearSessionCookie(req, res);
  res.json(LogoutInstructorResponse.parse({ authenticated: false }));
});

router.get("/instructor/content/:document", async (req, res): Promise<void> => {
  res.setHeader("Cache-Control", "no-store");
  if (!isValidSession(requestCookie(req))) {
    res.status(401).json({ error: "Instructor access is required." });
    return;
  }

  const params = GetInstructorDocumentParams.safeParse(req.params);
  if (!params.success) {
    res.status(404).json({ error: "Instructor document not found." });
    return;
  }

  const document = documents[params.data.document as keyof typeof documents];
  if (!document) {
    res.status(404).json({ error: "Instructor document not found." });
    return;
  }

  try {
    const contentUrl = new URL(`./content/instructor_edition/${document}`, import.meta.url);
    const content = await readFile(contentUrl, "utf8");
    res.json(GetInstructorDocumentResponse.parse({ content }));
  } catch (err) {
    req.log.error({ err, document: params.data.document }, "Could not read instructor document");
    res.status(500).json({ error: "Instructor document is temporarily unavailable." });
  }
});

export default router;
