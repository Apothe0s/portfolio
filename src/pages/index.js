import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { projects, TimeLineData } from '../constants/constants';

const apps = [
  { id: 'about', title: 'About me', icon: 'notepad', subtitle: 'Meet Angelito' },
  { id: 'projects', title: 'Projects', icon: 'folder', subtitle: 'Things I have built' },
  { id: 'skills', title: 'Skills', icon: 'vscode', subtitle: 'My developer toolkit' },
  { id: 'timeline', title: 'Journey', icon: 'notes', subtitle: 'From 2019 to today' },
  { id: 'contact', title: 'Contact', icon: 'links', subtitle: 'Let’s connect' },
  { id: 'terminal', title: 'Terminal', icon: 'terminal', subtitle: 'A little command line' },
];
const Icon = ({ name }) => <img draggable="false" src={`/desktop/icons/${name}.png`} alt="" />;

function Window({ app, state, active, onFocus, onChange, onClose, children }) {
  const drag = useRef(null);
  return <section aria-label={app.title} className={`app-window ${state.maximized ? 'maximized' : ''} ${active ? 'active' : ''}`} style={{ left: state.x, top: state.y, zIndex: state.z, display: state.minimized ? 'none' : undefined }} onPointerDown={onFocus}>
    <header className="titlebar" onDoubleClick={() => onChange({ maximized: !state.maximized })}
      onPointerDown={e => { if (e.target.closest('button') || state.maximized || window.innerWidth < 700) return; drag.current = { x: e.clientX - state.x, y: e.clientY - state.y }; e.currentTarget.setPointerCapture(e.pointerId); }}
      onPointerMove={e => { if (!drag.current) return; onChange({ x: Math.max(0, Math.min(window.innerWidth - 180, e.clientX - drag.current.x)), y: Math.max(0, Math.min(window.innerHeight - 110, e.clientY - drag.current.y)) }); }}
      onPointerUp={() => { drag.current = null; }} onLostPointerCapture={() => { drag.current = null; }}>
      <span><Icon name={app.icon} />{app.title}</span>
      <div className="window-controls"><button aria-label={`Minimize ${app.title}`} onClick={() => onChange({ minimized: true })}>―</button><button aria-label={`${state.maximized ? 'Restore' : 'Maximize'} ${app.title}`} onClick={() => onChange({ maximized: !state.maximized })}>□</button><button className="close" aria-label={`Close ${app.title}`} onClick={onClose}>×</button></div>
    </header>
    <div className="window-content">{children}</div>
  </section>;
}
function Terminal({ open }) {
  const [lines, setLines] = useState(['Angelito’s portfolio terminal', 'Type help to see available commands.']);
  const [command, setCommand] = useState('');
  function submit(e) {
    e.preventDefault(); const cmd = command.trim().toLowerCase();
    if (cmd === 'clear') setLines([]);
    else { const answers = { help: 'Commands: help, whoami, projects, skills, contact, clear', whoami: 'Angelito Apanto Jr. — Full-stack developer.' }; setLines(old => [...old, `PS C:\\Users\\Angelito> ${command}`, answers[cmd] || (['projects', 'skills', 'contact'].includes(cmd) ? `Opening ${cmd}…` : `Unknown command: ${cmd}. Type help.`)]); if (['projects', 'skills', 'contact'].includes(cmd)) open(cmd); }
    setCommand('');
  }
  return <div className="terminal"><div aria-live="polite">{lines.map((line, i) => <p key={i}>{line}</p>)}</div><form onSubmit={submit}><label htmlFor="command">PS C:\Users\Angelito&gt;</label><input id="command" value={command} onChange={e => setCommand(e.target.value)} autoComplete="off" spellCheck="false" /></form></div>;
}
function Content({ id, open }) {
  if (id === 'about') return <div className="about"><div className="eyebrow">HELLO, WORLD.</div><h1>I’m Angelito<span>.</span></h1><h2>Full-stack developer</h2><p>I build for the web with modern frameworks, modular software architecture, and an interest in cyber security.</p><p>Welcome to my little corner of the internet. Explore the folders to see my work, discover my skills, or get in touch.</p><div className="actions"><button className="primary" onClick={() => open('projects')}>Explore my projects ↗</button><button onClick={() => open('contact')}>Let’s talk</button></div><div className="about-footer"><span className="status-dot" /> Web development · Software engineering · Cyber security</div></div>;
  if (id === 'projects') return <><div className="explorer-path">⌂ <span>Angelito</span> › <strong>Projects</strong></div><div className="projects">{projects.map(project => <article key={project.id}><img src={project.image} alt={`${project.title} preview`} /><div><h2>{project.title}</h2><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{['source', 'visit'].map(key => project[key] && !project[key].includes('google.com') ? <a key={key} href={project[key]} target="_blank" rel="noreferrer">{key === 'source' ? 'Source code' : 'Live demo'} ↗</a> : null)}{project.source.includes('google.com') && <small>Project links coming soon</small>}</div></div></article>)}</div></>;
  if (id === 'skills') return <div className="padded"><div className="eyebrow">MY TOOLKIT</div><h1>Technologies & tools</h1><p className="muted">The stack behind my work.</p>{[['Front-end', 'React.js', 'Next.js', 'TypeScript', 'Styled Components'], ['Back-end', 'Node.js', 'Express', 'MongoDB', 'SQL Databases'], ['DevOps & protocols', 'Git', 'Linux CLI', 'REST', 'WebRTC']].map(([title, ...skills]) => <div className="skill-group" key={title}><h2>{title}</h2><div className="tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>;
  if (id === 'timeline') return <div className="padded"><div className="eyebrow">ONE STEP AT A TIME</div><h1>My journey</h1><div className="timeline">{TimeLineData.map(item => <article key={item.year}><strong>{item.year}</strong><p>{item.text}</p></article>)}</div></div>;
  if (id === 'contact') return <div className="padded"><div className="eyebrow">LET’S CONNECT</div><h1>Say hello<span>.</span></h1><p className="muted">Have an idea or want to talk about a project?</p><div className="contact-links"><a href="mailto:angelitoapantojr@gmail.com">✉ <span>Email<small>angelitoapantojr@gmail.com</small></span>↗</a><a href="tel:+639056382320">☎ <span>Phone<small>+63-905-638-2320</small></span>↗</a>{[['GitHub', 'https://github.com/Apothe0s'], ['LinkedIn', 'https://www.linkedin.com/in/angelitoapantojr/'], ['Instagram', 'https://www.instagram.com/apth0s/']].map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">↗ <span>{label}</span>↗</a>)}</div><blockquote>“The best way to predict the future is to invent it.”<small>— Alan Kay</small></blockquote></div>;
  return <Terminal open={open} />;
}
export default function Home() {
  const [windows, setWindows] = useState({ about: { x: 210, y: 75, z: 2 } });
  const [active, setActive] = useState('about'); const priority = useRef(2);
  const [menu, setMenu] = useState(false); const [search, setSearch] = useState(''); const [time, setTime] = useState(null);
  useEffect(() => { const tick = () => setTime(new Date()); tick(); const timer = setInterval(tick, 1000); return () => clearInterval(timer); }, []);
  useEffect(() => { const escape = e => { if (e.key === 'Escape') setMenu(false); }; window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape); }, []);
  function focus(id) { setActive(id); const z = ++priority.current; setWindows(old => ({ ...old, [id]: { ...old[id], z } })); }
  function open(id) { setMenu(false); setSearch(''); setActive(id); const z = ++priority.current; setWindows(old => ({ ...old, [id]: { x: Math.max(110, Math.min(210 + Object.keys(old).length * 22, window.innerWidth - 740)), y: Math.max(20, Math.min(75 + Object.keys(old).length * 18, window.innerHeight - 650)), ...old[id], minimized: false, z } })); }
  function change(id, patch) { setWindows(old => ({ ...old, [id]: { ...old[id], ...patch } })); }
  return <><Head><title>Angelito Apanto Jr. | Portfolio</title><meta name="description" content="Explore Angelito’s full-stack developer portfolio in a Windows 11 inspired desktop." /><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <main className="desktop" onPointerDown={e => { if (e.target === e.currentTarget) setMenu(false); }}><nav className="desktop-icons" aria-label="Portfolio apps">{apps.map(app => <button key={app.id} onClick={() => open(app.id)}><Icon name={app.icon} /><span>{app.title}</span></button>)}<a href="https://github.com/Apothe0s" target="_blank" rel="noreferrer"><Icon name="githubdesktop" /><span>GitHub ↗</span></a></nav><div className="desktop-caption"><strong>Angelito’s workspace</strong><span>Make yourself at home.</span></div>
    {apps.filter(app => windows[app.id]).map(app => <Window key={app.id} app={app} state={windows[app.id]} active={active === app.id} onFocus={() => focus(app.id)} onChange={patch => change(app.id, patch)} onClose={() => setWindows(old => { const next = { ...old }; delete next[app.id]; return next; })}><Content id={app.id} open={open} /></Window>)}
    </main>
    {menu && <><button className="menu-backdrop" aria-label="Close Start menu" onClick={() => setMenu(false)} /><section className="start-menu" aria-label="Start menu"><input autoFocus aria-label="Search portfolio apps" placeholder="Search for apps, projects, and more" value={search} onChange={e => setSearch(e.target.value)} /><div className="start-heading"><strong>Pinned</strong><span>All apps</span></div><div className="pinned">{apps.filter(app => `${app.title} ${app.subtitle}`.toLowerCase().includes(search.toLowerCase())).map(app => <button key={app.id} onClick={() => open(app.id)}><Icon name={app.icon} /><span>{app.title}</span></button>)}</div>{apps.every(app => !`${app.title} ${app.subtitle}`.toLowerCase().includes(search.toLowerCase())) && <p className="muted">No apps found.</p>}<div className="start-heading"><strong>Recommended</strong></div><button className="recommended" onClick={() => open('projects')}><Icon name="folder" /><span>Explore my work<small>Four projects, one curious developer.</small></span></button><footer><span className="avatar">A</span><strong>Angelito Apanto Jr.</strong><button aria-label="Open contact" onClick={() => open('contact')}>✉</button></footer></section></>}
    <footer className="taskbar"><div className="taskbar-brand"><span className="status-dot" /><span>Portfolio<small>Angelito Apanto Jr.</small></span></div><nav aria-label="Taskbar"><button aria-label="Start" aria-expanded={menu} className={menu ? 'selected' : ''} onClick={() => setMenu(old => !old)}><Icon name="windows" /></button>{apps.map(app => <button key={app.id} aria-label={`Open ${app.title}`} className={`${windows[app.id] ? 'running' : ''} ${active === app.id && windows[app.id] && !windows[app.id].minimized ? 'selected' : ''}`} onClick={() => windows[app.id] && active === app.id && !windows[app.id].minimized ? change(app.id, { minimized: true }) : open(app.id)}><Icon name={app.icon} /></button>)}</nav><div className="system-tray"><span>ENG</span><span aria-hidden="true">⌁　◖))</span><time>{time && <>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}<small>{time.toLocaleDateString()}</small></>}</time><button className="show-desktop" aria-label="Show desktop" onClick={() => setWindows(old => Object.fromEntries(Object.entries(old).map(([id, state]) => [id, { ...state, minimized: true }])))} /></div></footer>
  </>;
}
