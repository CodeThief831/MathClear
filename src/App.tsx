import { lazy, Suspense, useState } from 'react'
import { MathJaxContext } from 'better-react-mathjax'
import { BookOpenCheck, ChartNoAxesCombined, GraduationCap, House, Menu, PanelLeftClose, Sigma, X } from 'lucide-react'
import { CheatSheet } from './components/CheatSheet'
import { MainDashboard } from './components/MainDashboard'
import { StepByStepSolver } from './components/StepByStepSolver'
import { subjects, type SubjectCode } from './data'
import './App.css'

const ConceptVisualizer = lazy(() => import('./components/ConceptVisualizer').then((module) => ({ default: module.ConceptVisualizer })))

type View = 'dashboard' | 'visualizer' | 'solver' | 'cheatsheet'

const navigation: { id: View; label: string; icon: typeof House }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: House },
  { id: 'visualizer', label: 'Visual concepts', icon: ChartNoAxesCombined },
  { id: 'solver', label: 'Step solver', icon: BookOpenCheck },
  { id: 'cheatsheet', label: 'Cheat sheet', icon: Sigma },
]

function App() {
  const [view, setView] = useState<View>('dashboard')
  const [subject, setSubject] = useState<SubjectCode>('21MAT31')
  const [menuOpen, setMenuOpen] = useState(false)
  const current = subjects.find((item) => item.code === subject) ?? subjects[2]

  const navigate = (next: string) => {
    setView(next as View)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <MathJaxContext config={{ tex: { inlineMath: [['\\(', '\\)']] } }}>
      <div className="app-shell">
        <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <div className="brand"><div><GraduationCap size={23} /></div><span><strong>Math<span>Clear</span></strong><small>VTU 2021 · CSE</small></span><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
          <nav aria-label="Main navigation">
            <p>LEARN</p>
            {navigation.map((item) => { const Icon = item.icon; return <button key={item.id} className={view === item.id ? 'active' : ''} onClick={() => navigate(item.id)}><Icon size={19} /><span>{item.label}</span></button> })}
            <p>MY PAPERS</p>
            {subjects.map((item) => <button key={item.code} className={`paper-nav ${subject === item.code ? 'selected' : ''}`} onClick={() => { setSubject(item.code); navigate('dashboard') }}><i style={{ background: item.accent }} /><span>{item.code}</span><small>{item.semester.replace('Semester ', 'S')}</small></button>)}
          </nav>
          <div className="sidebar-note"><PanelLeftClose size={18} /><p><strong>Backlog-safe mode</strong><span>No streak pressure. No shame. Resume anytime.</span></p></div>
        </aside>
        {menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label="Close menu overlay" />}
        <main>
          <header className="topbar">
            <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
            <div><span>{view === 'dashboard' ? 'Good to see you again' : navigation.find((item) => item.id === view)?.label}</span><strong>{view === 'dashboard' ? 'Ready for one small win?' : current.code}</strong></div>
            <label className="subject-select"><span>Active paper</span><select value={subject} onChange={(event) => setSubject(event.target.value as SubjectCode)}>{subjects.map((item) => <option value={item.code} key={item.code}>{item.code}</option>)}</select></label>
          </header>
          <div className="content">
            {view === 'dashboard' && <MainDashboard subject={subject} onSubjectChange={setSubject} onNavigate={navigate} />}
            {view === 'visualizer' && <Suspense fallback={<div className="panel loading-panel">Loading interactive graph…</div>}><ConceptVisualizer /></Suspense>}
            {view === 'solver' && <StepByStepSolver />}
            {view === 'cheatsheet' && <CheatSheet subject={subject} />}
          </div>
        </main>
      </div>
    </MathJaxContext>
  )
}

export default App
