import { type ElementType, type KeyboardEvent, type ReactElement, type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ArrowDownToLine, ArrowLeft, ArrowRight, Clipboard, Code2, RotateCcw, Terminal } from 'lucide-react';
import welcomeMarkdown from '../python-foundations-part1/README.md?raw';
import chapterOneMarkdown from '../python-foundations-part1/chapter1.md?raw';
import chapterTwoMarkdown from '../python-foundations-part1/chapter2.md?raw';
import capstoneMarkdown from '../python-foundations-part1/capstone.md?raw';
import registrationStarter from '../python-foundations-part1/starter_code/registration.py?raw';
import invoiceStarter from '../python-foundations-part1/starter_code/invoice.py?raw';
import profileStarter from '../python-foundations-part1/starter_code/profile_card.py?raw';

const queryClient = new QueryClient();
const pages = [
  { href: '/', label: 'Welcome', number: '00' },
  { href: '/chapter-1', label: 'Introduction & Environment', number: '01' },
  { href: '/chapter-2', label: 'Variables and Data Types', number: '02' },
  { href: '/capstone', label: 'Part 1 capstone', number: '03' },
  { href: '/practice', label: 'Python workspace', number: '04' },
];
const checklist = [
  'Python is installed and `python --version` works',
  'VS Code and the Python extension are set up',
  'I created and activated a virtual environment',
  'I ran `hello.py` from the terminal',
  'I completed the five Chapter 1 exercises',
  'I completed the Chapter 1 quick quiz',
  'I built the Course Registration Receipt project and scored 16 or more',
  'I can name variables correctly and explain why',
  'I can predict the type of any basic value',
  'I completed the six Chapter 2 exercises',
  'I completed the Chapter 2 quick quiz',
  'I built the Mini Shop Invoice project and scored 16 or more',
  'I built the Student Profile Card without looking at earlier projects',
];
const starters = [
  { id: 'registration', label: 'Course Registration Receipt', file: 'registration.py', code: registrationStarter },
  { id: 'invoice', label: 'Mini Shop Invoice', file: 'invoice.py', code: invoiceStarter },
  { id: 'profile', label: 'Student Profile Card', file: 'profile_card.py', code: profileStarter },
];

function inline(text: string) {
  const pieces = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return pieces.map((piece, i) => {
    if (piece.startsWith('`') && piece.endsWith('`')) return <code key={i}>{piece.slice(1, -1)}</code>;
    if (piece.startsWith('**') && piece.endsWith('**')) return <strong key={i}>{piece.slice(2, -2)}</strong>;
    if (piece.startsWith('*') && piece.endsWith('*')) return <em key={i}>{piece.slice(1, -1)}</em>;
    const link = piece.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={i} href={link[2]}>{link[1]}</a>;
    return piece;
  });
}

function FlowDiagram() {
  const node = (x: number, y: number, label: string, detail: string) => (
    <g key={label}>
      <rect className="flow-node" x={x} y={y} width="190" height="54" rx="8" />
      <text className="flow-node-text" x={x + 12} y={y + 22}>{label}</text>
      <text className="flow-small" x={x + 12} y={y + 39}>{detail}</text>
    </g>
  );
  return <figure className="flow-figure" aria-label="Responsive installation and execution flowchart">
    <svg viewBox="0 0 620 510" role="img" aria-labelledby="flow-title flow-desc">
      <title id="flow-title">Installation and execution flowchart</title>
      <desc id="flow-desc">Part A: download Python, run installer, verify. Part B: idea, Python file, interpreter, terminal output, then done or fix and rerun.</desc>
      <defs><marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7z" fill="#8a9b91" /></marker></defs>
      <text className="flow-title" x="12" y="20">PART A — ONE-TIME INSTALLATION</text>
      {node(12, 34, 'Download Python', 'from python.org')}
      {node(215, 34, 'Run installer', 'Add python.exe to PATH')}
      {node(418, 34, 'Verify', 'python --version → Python 3.x')}
      <path className="flow-line" d="M202 61H210M405 61H413" />
      <text className="flow-title" x="12" y="139">PART B — EVERY TIME YOU RUN A PROGRAM</text>
      {node(12, 154, 'Human Mind', 'your idea / problem')}
      {node(215, 154, '.py File', 'instructions saved on disk')}
      {node(418, 154, 'Python Interpreter', 'checks syntax, runs each line')}
      {node(215, 262, 'Terminal Output', 'results or error messages')}
      <path className="flow-line" d="M202 181H210M405 181H413M513 208V236H310V257" />
      <rect className="flow-node" x="215" y="363" width="190" height="53" rx="8" />
      <text className="flow-node-text" x="227" y="385">Output as expected?</text>
      <text className="flow-small" x="227" y="402">Done.</text>
      <path className="flow-line" d="M310 316V358" />
      <rect x="12" y="445" width="594" height="45" rx="7" fill="#f4efe3" stroke="#d2c8b6" />
      <text className="flow-small" x="26" y="464">Error message? Read it, fix the .py file, save, and run again.</text>
      <text className="flow-small" x="26" y="480">The loop continues until your output matches what you expected.</text>
      <path className="flow-line" d="M215 389H90V208" />
    </svg>
    <figcaption className="sr-only">Part A happens once: Download Python from python.org, run installer and tick Add python.exe to PATH on Windows, verify python --version shows Python 3.x. Part B happens every time: Human Mind, .py File, Python Interpreter, Terminal Output. Expected output means done; an error means read it, fix the .py file, save, and run again.</figcaption>
  </figure>;
}

function AnalogyGrid({ kind }: { kind: 'kitchen' | 'storage' }) {
  if (kind === 'kitchen') {
    const items = [
      ['The recipe', 'Your program — a .py file'],
      ['Head Chef', 'The Python interpreter'],
      ['Tasting spoon', 'The REPL — try a small idea'],
      ['Private kitchen station', 'A project’s virtual environment'],
      ['Ingredients', 'Packages installed with pip'],
      ['Serving counter', 'Terminal output'],
    ];
    return <div className="analogy-grid" aria-label="Kitchen analogy visual guide">{items.map(([a, b]) => <div className="analogy-tile" key={a}><b>{a}</b><span>{b}</span></div>)}</div>;
  }
  const items = [
    ['Label', 'age', 'name used to find the value'],
    ['Type', 'int', 'the shape of the value'],
    ['Item inside', '25', 'the value being held'],
  ];
  return <div className="analogy-grid storage-grid" aria-label="Storage box analogy visual guide">{items.map(([a, b, c]) => <div className="analogy-tile" key={a}><b>{a}</b><span><strong>{b}</strong><br />{c}</span></div>)}</div>;
}

function MarkdownReader({ source }: { source: string }) {
  const rows = source.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactElement[] = [];
  let i = 0;
  while (i < rows.length) {
    const line = rows[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || 'text';
      const code: string[] = [];
      i++;
      while (i < rows.length && !rows[i].startsWith('```')) code.push(rows[i++]);
      i++;
      const text = code.join('\n');
      if (text.includes('INSTALLATION & EXECUTION FLOWCHART')) {
        blocks.push(<FlowDiagram key={`flow-${i}`} />);
        blocks.push(<pre className="sr-only" key={`flow-source-${i}`} aria-label="Original textual flowchart source">{text}</pre>);
      } else if (text.startsWith('Label: age') || text.startsWith('x = 5') || text.startsWith('+--------------------+')) {
        blocks.push(<pre key={`code-${i}`}><span className="code-label">{language}</span>{text}</pre>);
      } else {
        blocks.push(<pre key={`code-${i}`}><span className="code-label">{language}</span>{text}</pre>);
      }
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2];
      const Heading = `h${level}` as ElementType;
      const labelClass = /common mistakes/i.test(title) ? 'heading-callout mistake' : /best practices?/i.test(title) ? 'heading-callout practice' : /check your understanding/i.test(title) ? 'heading-callout check' : '';
      blocks.push(<Heading key={`h-${i}`} className={labelClass}>{inline(title)}</Heading>);
      if (/The Kitchen Analogy/.test(title)) blocks.push(<AnalogyGrid key={`analogy-${i}`} kind="kitchen" />);
      if (/Labeled Storage Box Analogy/.test(title)) blocks.push(<AnalogyGrid key={`storage-${i}`} kind="storage" />);
      i++;
      continue;
    }
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < rows.length && rows[i].startsWith('|')) tableLines.push(rows[i++]);
      const parsed = tableLines.filter((row) => !/^\|\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(row.trim())).map((row) => row.split('|').slice(1, -1).map((cell) => cell.trim()));
      if (parsed.length) blocks.push(<table key={`table-${i}`}><thead><tr>{parsed[0].map((cell, j) => <th key={j}>{inline(cell)}</th>)}</tr></thead><tbody>{parsed.slice(1).map((r, ri) => <tr key={ri}>{r.map((cell, j) => <td key={j}>{inline(cell)}</td>)}</tr>)}</tbody></table>);
      continue;
    }
    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const List = ordered ? 'ol' : 'ul';
      const items: string[] = [];
      while (i < rows.length && (/^\s*[-*]\s+/.test(rows[i]) || /^\s*\d+\.\s+/.test(rows[i]))) {
        items.push(rows[i].replace(/^\s*(?:[-*]|\d+\.)\s+/, ''));
        i++;
      }
      blocks.push(<List key={`list-${i}`}>{items.map((item, index) => <li key={index}>{inline(item)}</li>)}</List>);
      continue;
    }
    if (/^\s*>\s?/.test(line)) {
      const quote: string[] = [];
      while (i < rows.length && /^\s*>\s?/.test(rows[i])) quote.push(rows[i++].replace(/^\s*>\s?/, ''));
      blocks.push(<blockquote key={`quote-${i}`}>{quote.map((q, j) => <p key={j}>{inline(q)}</p>)}</blockquote>);
      continue;
    }
    const para: string[] = [];
    while (i < rows.length && rows[i].trim() && !/^(#{1,4}\s|```|\||\s*[-*]\s+|\s*\d+\.\s+|\s*>)/.test(rows[i])) para.push(rows[i++]);
    if (!para.length) { i++; continue; }
    const content = para.join(' ');
    const kind = /^(?:\*\*)?Common mistake/i.test(content) ? 'mistake' : /^(?:\*\*)?Best practice/i.test(content) ? 'practice' : /^(?:\*\*)?Check your understanding/i.test(content) ? 'check' : '';
    if (kind) {
      const label = kind === 'mistake' ? 'Common mistake' : kind === 'practice' ? 'Best practice' : 'Check your understanding';
      const cleaned = content.replace(/^\*\*[^*]+:\*\*\s*/, '').replace(/^\*\*[^*]+\*\*\s*/, '');
      blocks.push(<aside key={`callout-${i}`} className={`callout ${kind}`}><strong>{label}</strong><p>{inline(cleaned)}</p></aside>);
    } else blocks.push(<p key={`p-${i}`}>{inline(content)}</p>);
  }
  return <div className="reader-content">{blocks}</div>;
}

function SharedShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <div className="app-shell">
    <aside className="sidebar">
      <Link href="/" className="brand"><span className="brand-mark">Py</span><span><strong>Python Foundations</strong><small>PART 1 · TRAINEE EDITION</small></span></Link>
      <div className="nav-label">Your workbook</div>
      <nav className="side-nav" aria-label="Study navigation">{pages.map((item) => <Link key={item.href} href={item.href} className={`nav-link ${location === item.href ? 'active' : ''}`}><span className="nav-number">{item.number}</span>{item.label}</Link>)}</nav>
      <div className="sidebar-foot"><b>Ime Edet Nya · CRYOBYTEPRIME</b>Instructor-authored material, made easier to read and practise.</div>
    </aside>
    <header className="mobile-bar">
      <Link href="/" className="mobile-brand"><span className="brand-mark">Py</span>Foundations</Link>
      <nav className="mobile-nav" aria-label="Study navigation">{pages.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? 'active' : ''}>{item.number}</Link>)}</nav>
    </header>
    <main className="main-area"><div className="topline"><span>PYTHON FOUNDATIONS / PART 1</span><span className="topline-right"><i className="online-dot" /> A good place to begin</span></div>{children}</main>
  </div>;
}

function HomePage() {
  const [done, setDone] = useState<boolean[]>(() => {
    try { const saved = JSON.parse(localStorage.getItem('pf-progress') || '[]'); return checklist.map((_, i) => Boolean(saved[i])); } catch { return checklist.map(() => false); }
  });
  useEffect(() => { localStorage.setItem('pf-progress', JSON.stringify(done)); }, [done]);
  const completed = done.filter(Boolean).length;
  const toggle = (index: number) => setDone((current) => current.map((value, i) => i === index ? !value : value));
  return <div className="page-wrap animate-in">
    <section className="hero-home">
      <div><div className="eyebrow">Your first steps in Python · Part 1</div><h1 className="hero-title">Learn it.<br /><em>Try it.</em> Make it yours.</h1><p className="hero-intro">A practical companion for your first programs. Read the instructor’s workbook as written, then take each idea for a spin in your own coding space.</p></div>
      <aside className="hero-aside"><div className="aside-number">01—02</div><p>Two chapters, two guided projects, and a capstone to bring the pieces together.</p></aside>
    </section>
    <div className="section-head"><h2>Choose your next step</h2><span>THE STUDY PATH</span></div>
    <div className="study-grid">
      <Link href="/chapter-1" className="study-card feature"><span className="card-index">01 / CHAPTER</span><h3>Introduction &<br />Environment</h3><p>Install Python, meet the interpreter, and write your first program.</p><span className="card-arrow"><ArrowRight size={19} /></span></Link>
      <Link href="/chapter-2" className="study-card"><span className="card-index">02 / CHAPTER</span><h3>Variables &<br />Data Types</h3><p>Give values a name, inspect their types, and convert them with care.</p><span className="card-arrow"><ArrowRight size={19} /></span></Link>
      <Link href="/capstone" className="study-card"><span className="card-index">03 / BUILD</span><h3>Student Profile<br />Card</h3><p>Bring input, conversion, booleans, and formatted output together.</p><span className="card-arrow"><ArrowRight size={19} /></span></Link>
    </div>
    <div className="two-col">
      <section className="tips-panel"><div className="eyebrow">A note before you begin</div><h3>Small, steady steps win.</h3>
        {['Type every example yourself. The tiny details are where learning sticks.', 'Run your code after each change. Make the feedback loop short.', 'When something breaks, read the exact error before changing anything.', 'Try the exercises first; your trainer can help you untangle the hard parts.'].map((tip, i) => <div className="tip-row" key={tip}><span className="tip-mark">0{i + 1}</span><span>{tip}</span></div>)}
      </section>
      <section className="progress-card"><div className="progress-head"><h3>Your progress</h3><span className="progress-count">{completed} / {checklist.length}</span></div><div className="progress-track" role="progressbar" aria-label="Workbook progress" aria-valuemin={0} aria-valuemax={checklist.length} aria-valuenow={completed}><div className="progress-fill" style={{ width: `${completed / checklist.length * 100}%` }} /></div><div className="check-list">{checklist.map((item, i) => <label className="progress-item" key={item}><input type="checkbox" checked={done[i]} onChange={() => toggle(i)} aria-label={item} /><span>{item.replace(/`/g, '')}</span></label>)}<Link href="/capstone" className="button-outline" style={{ marginTop: 5 }}>Open full capstone checklist <ArrowRight size={14} /></Link></div></section>
    </div>
    <section className="workspace-cta"><div><div className="eyebrow">Ready to practise?</div><h3>A real Python session, right here.</h3><p>Pick a project starter, edit the code, and run it in your browser.</p></div><Link href="/practice" className="button-primary"><Code2 size={16} /> Open workspace <ArrowRight size={15} /></Link></section>
    <section className="reader-page" style={{ paddingTop: 34 }}><div className="eyebrow">Workbook introduction</div><MarkdownReader source={welcomeMarkdown} /></section>
  </div>;
}

function ReaderPage({ title, number, source, prev, next }: { title: string; number: string; source: string; prev?: [string, string]; next?: [string, string] }) {
  return <div className="page-wrap reader-page animate-in">
    <div className="reader-top"><span className="reader-kicker">PART 1 / {number}</span><Link href="/practice" className="button-outline"><Code2 size={14} /> Practise in workspace</Link></div>
    <h1 className="reader-title">{title}</h1>
    <p className="reader-lede">Read at your pace. The workbook content is preserved in full; diagrams and callouts add a little more room to understand each idea.</p>
    <MarkdownReader source={source} />
    <nav className="reader-footer-nav" aria-label="Adjacent sections">{prev ? <Link href={prev[0]}><ArrowLeft size={14} /> {prev[1]}</Link> : <span />}{next && <Link href={next[0]}>{next[1]} <ArrowRight size={14} /></Link>}</nav>
  </div>;
}

declare global {
  interface Window { loadPyodide?: (options?: { indexURL?: string }) => Promise<PyodideInstance>; pyodideReadyPromise?: Promise<PyodideInstance>; }
}
type PyodideInstance = {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (text: string) => void }) => void;
  setStderr: (options: { batched: (text: string) => void }) => void;
  setStdin: (options: { stdin: () => string | null; isatty?: boolean }) => void;
};

async function loadPython() {
  if (window.pyodideReadyPromise) return window.pyodideReadyPromise;
  window.pyodideReadyPromise = new Promise<PyodideInstance>((resolve, reject) => {
    if (window.loadPyodide) { window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/' }).then(resolve, reject); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js';
    script.async = true;
    script.onload = () => window.loadPyodide?.({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/' }).then(resolve, reject);
    script.onerror = () => reject(new Error('Could not load Pyodide from the official CDN. Check your connection and try again.'));
    document.head.appendChild(script);
  }).catch((error: unknown) => { window.pyodideReadyPromise = undefined; throw error; });
  return window.pyodideReadyPromise;
}

function PracticePage() {
  const [selected, setSelected] = useState(starters[0].id);
  const [code, setCode] = useState(() => localStorage.getItem('pf-code-draft') || registrationStarter);
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [runtime, setRuntime] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [running, setRunning] = useState(false);
  const [error, setError] = useState('');
  const codeRef = useRef<HTMLTextAreaElement>(null);
  const starter = starters.find((item) => item.id === selected) || starters[0];
  const lineCount = useMemo(() => Math.max(1, code.split('\n').length), [code]);
  useEffect(() => { localStorage.setItem('pf-code-draft', code); }, [code]);
  const changeStarter = (id: string) => {
    const item = starters.find((entry) => entry.id === id);
    if (item) { setSelected(id); setCode(item.code); setOutput(''); setError(''); }
  };
  const run = async () => {
    setRunning(true); setError(''); setOutput('');
    let captured = '';
    let runtimeLoaded = false;
    try {
      setRuntime('loading');
      const py = await loadPython();
      runtimeLoaded = true;
      setRuntime('ready');
      py.setStdout({ batched: (text) => { captured += text; } });
      py.setStderr({ batched: (text) => { captured += text; } });
      const inputLines = stdin.split(/\r?\n/);
      let inputIndex = 0;
      py.setStdin({ stdin: () => inputIndex < inputLines.length ? inputLines[inputIndex++] : null, isatty: true });
      await py.runPythonAsync(code);
      setOutput(captured || '(Program finished with no output.)');
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : String(caught);
      setError(message);
      setOutput(`${captured}${captured ? '\n' : ''}${message}`);
      if (!runtimeLoaded) setRuntime('error');
    } finally { setRunning(false); }
  };
  const reset = () => { setCode(starter.code); setOutput(''); setError(''); localStorage.setItem('pf-code-draft', starter.code); };
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setOutput('Code copied to clipboard.'); setError(''); }
    catch { setError('Clipboard access is unavailable. Select the code and copy it manually.'); }
  };
  const download = () => {
    const blob = new Blob([code], { type: 'text/x-python;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = starter.file; anchor.click(); URL.revokeObjectURL(url);
  };
  const handleTab = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const el = event.currentTarget;
      const start = el.selectionStart, end = el.selectionEnd;
      const updated = code.slice(0, start) + '    ' + code.slice(end);
      setCode(updated);
      requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = start + 4; });
    }
  };
  return <div className="page-wrap practice-page animate-in">
    <div className="practice-header"><div><div className="eyebrow">A safe place to experiment</div><h1 className="practice-title">Python workspace</h1><p className="practice-subtitle">Edit a starter, add your own ideas, and run Python in your browser.</p></div><div className="runtime-badge"><i className="online-dot" /> {runtime === 'loading' ? 'Loading Python runtime…' : runtime === 'ready' ? 'Python 3 · ready' : runtime === 'error' ? 'Runtime unavailable' : 'Runtime loads on first run'}</div></div>
    <section className="editor-card" aria-label="Python editor">
      <div className="editor-toolbar"><label htmlFor="starter-select" className="sr-only">Choose a starter project</label><select id="starter-select" className="editor-select" value={selected} onChange={(event) => changeStarter(event.target.value)}>{starters.map((item) => <option value={item.id} key={item.id}>{item.label} · {item.file}</option>)}</select>
        <div className="toolbar-actions"><button className="toolbar-button" onClick={reset} aria-label="Reset code to starter"><RotateCcw size={14} /> Reset</button><button className="toolbar-button" onClick={copy} aria-label="Copy code"><Clipboard size={14} /> Copy</button><button className="toolbar-button" onClick={download} aria-label="Download code"><ArrowDownToLine size={14} /> Download</button><button className="toolbar-button run" onClick={run} disabled={running} aria-label="Run Python code"><Terminal size={14} /> {running ? 'Running…' : 'Run'}</button></div>
      </div>
      <div className="editor-wrap"><div className="line-numbers" aria-hidden="true">{Array.from({ length: lineCount }, (_, i) => <div key={i}>{i + 1}</div>)}</div><textarea ref={codeRef} className="code-editor" aria-label={`Python code editor for ${starter.file}`} spellCheck={false} value={code} onChange={(event) => setCode(event.target.value)} onKeyDown={handleTab} /></div>
    </section>
    <div className="practice-bottom">
      <section className="console-panel"><div className="console-head"><strong>Input for input()</strong><small>one answer per line</small></div><div className="console-body"><label className="sr-only" htmlFor="stdin-input">Standard input for your Python program</label><textarea id="stdin-input" className="stdin-area" value={stdin} onChange={(event) => setStdin(event.target.value)} placeholder={'Amara Okafor\\nPython Foundations\\n150000\\n3'} /></div></section>
      <section className="console-panel" aria-live="polite"><div className="console-head"><strong>Output</strong><small>{error ? 'needs attention' : output ? 'latest run' : 'waiting for a run'}</small></div><div className="console-body"><div className={`output ${error ? 'error' : ''}`}>{output || <span className="output-placeholder">Your program’s printout will appear here.</span>}</div>{error && <p className="state-note" role="alert">{error}</p>}</div></section>
    </div>
    <p className="runtime-note">Python runs locally in this page using Pyodide from the official CDN. The runtime is downloaded only when you press Run; your code draft is saved on this device.</p>
  </div>;
}

function Router() {
  return <Switch>
    <Route path="/"><SharedShell><HomePage /></SharedShell></Route>
    <Route path="/chapter-1"><SharedShell><ReaderPage title="Introduction & Environment" number="CHAPTER 01" source={chapterOneMarkdown} next={['/chapter-2', 'Chapter 2']} /></SharedShell></Route>
    <Route path="/chapter-2"><SharedShell><ReaderPage title="Variables and Data Types" number="CHAPTER 02" source={chapterTwoMarkdown} prev={['/chapter-1', 'Chapter 1']} next={['/capstone', 'Part 1 capstone']} /></SharedShell></Route>
    <Route path="/capstone"><SharedShell><ReaderPage title="Part 1 capstone" number="CAPSTONE" source={capstoneMarkdown} prev={['/chapter-2', 'Chapter 2']} next={['/practice', 'Workspace']} /></SharedShell></Route>
    <Route path="/practice"><SharedShell><PracticePage /></SharedShell></Route>
    <Route><SharedShell><NotFound /></SharedShell></Route>
  </Switch>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><RoutedErrorBoundary><Router /></RoutedErrorBoundary></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;
