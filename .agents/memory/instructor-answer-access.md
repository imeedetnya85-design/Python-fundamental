---
name: Instructor answer access
description: Security boundary for trainer notes, answer keys, and solutions in this handbook.
---

Keep instructor-only markdown out of the trainee web artifact, including source files Vite could serve during development. Keep the documents server-side and require a valid signed instructor session on every content route. Use no-store responses and an HttpOnly, SameSite cookie.

**Why:** The user requested password protection so trainees cannot open the Instructor Edition's answers and solutions.

**How to apply:** When adding or moving instructor-only material, verify it is absent from the frontend bundle and only served through authenticated API endpoints.
