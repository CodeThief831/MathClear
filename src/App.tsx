import { lazy, Suspense, useState } from 'react'
import { MathJaxContext } from 'better-react-mathjax'
import { BookOpenCheck, ChartNoAxesCombined, Flame, GraduationCap, House, Menu, PanelLeftClose, Sigma, X } from 'lucide-react'
import { CheatSheet } from './components/CheatSheet'
import { MainDashboard } from './components/MainDashboard'
import { MarkdownHandbook } from './components/MarkdownHandbook'
import { M4SurvivalPackage } from './components/M4SurvivalPackage'
import { StepByStepSolver } from './components/StepByStepSolver'
import { SurvivalPackage } from './components/SurvivalPackage'
import { subjects, type SubjectCode } from './data'
import './App.css'

const ConceptVisualizer = lazy(() => import('./components/ConceptVisualizer').then((module) => ({ default: module.ConceptVisualizer })))

type View = 'dashboard' | 'm1-handbook' | 'm2-handbook' | 'survival' | 'm4-survival' | 'visualizer' | 'solver' | 'cheatsheet'

const navigation: { id: View; label: string; icon: typeof House }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: House },
  { id: 'm1-handbook', label: 'M1 · 21MAT11 Tomorrow', icon: Flame },
  { id: 'm2-handbook', label: 'M2 · 21MAT21 Next', icon: Flame },
  { id: 'survival', label: '21MAT31 · VTU Practice', icon: Flame },
  { id: 'm4-survival', label: '21MATCS41 · VTU Practice', icon: Flame },
  { id: 'visualizer', label: 'Visual concepts', icon: ChartNoAxesCombined },
  { id: 'solver', label: 'Step solver', icon: BookOpenCheck },
  { id: 'cheatsheet', label: 'Cheat sheet', icon: Sigma },
]

const subjectViews: Record<SubjectCode, View> = {
  '21MAT11': 'm1-handbook',
  '21MAT21': 'm2-handbook',
  '21MAT31': 'survival',
  '21MATCS41': 'm4-survival',
}

const handbookQuery: Partial<Record<View, string>> = {
  'm1-handbook': 'm1',
  'm2-handbook': 'm2',
}

function App() {
  const initialParams = new URLSearchParams(window.location.search)
  const initialHandbook = initialParams.get('handbook')
  const initialPractice = initialParams.get('view')
  const initialView: View = initialHandbook === 'm1' ? 'm1-handbook' : initialHandbook === 'm2' ? 'm2-handbook' : initialHandbook === 'm4' || initialPractice === 'm4' ? 'm4-survival' : initialPractice === 'm3' ? 'survival' : 'dashboard'
  const initialSubject: SubjectCode = initialHandbook === 'm1' ? '21MAT11' : initialHandbook === 'm2' ? '21MAT21' : initialHandbook === 'm4' || initialPractice === 'm4' ? '21MATCS41' : '21MAT31'
  const [view, setView] = useState<View>(initialView)
  const [subject, setSubject] = useState<SubjectCode>(initialSubject)
  const [menuOpen, setMenuOpen] = useState(false)
  const current = subjects.find((item) => item.code === subject) ?? subjects[2]

  const navigate = (next: string) => {
    const nextView = next as View
    if (nextView === 'm1-handbook') setSubject('21MAT11')
    if (nextView === 'm2-handbook') setSubject('21MAT21')
    if (nextView === 'survival') setSubject('21MAT31')
    if (nextView === 'm4-survival') setSubject('21MATCS41')
    setView(nextView)
    const url = new URL(window.location.href)
    const handbook = handbookQuery[nextView]
    if (handbook) url.searchParams.set('handbook', handbook)
    else url.searchParams.delete('handbook')
    if (nextView === 'survival') url.searchParams.set('view', 'm3')
    else if (nextView === 'm4-survival') url.searchParams.set('view', 'm4')
    else url.searchParams.delete('view')
    window.history.pushState({}, '', url)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const changeSubject = (nextSubject: SubjectCode) => {
    setSubject(nextSubject)
    if (Object.values(subjectViews).includes(view)) navigate(subjectViews[nextSubject])
  }

  return (
    <MathJaxContext config={{ tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] } }}>
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
            <label className="subject-select"><span>Active paper</span><select value={subject} onChange={(event) => changeSubject(event.target.value as SubjectCode)}>{subjects.map((item) => <option value={item.code} key={item.code}>{item.code}</option>)}</select></label>
          </header>
          <div className="content">
            {view === 'dashboard' && <MainDashboard subject={subject} onSubjectChange={setSubject} onNavigate={navigate} />}
            {view === 'm1-handbook' && <MarkdownHandbook kind="m1" />}
            {view === 'm2-handbook' && <MarkdownHandbook kind="m2" />}
            {view === 'survival' && <SurvivalPackage />}
            {view === 'm4-survival' && <M4SurvivalPackage />}
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
