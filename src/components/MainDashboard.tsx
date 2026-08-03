import { ArrowRight, BookMarked, CalendarDays, CheckCircle2, ExternalLink, Flame, ShieldCheck, Target } from 'lucide-react'
import { officialLinks, subjects, type SubjectCode } from '../data'
import { paperPartCount } from '../data/m3MockPaper'
import { m4PartCount } from '../data/m4MockPaper'

export function MainDashboard({ subject, onSubjectChange, onNavigate }: { subject: SubjectCode; onSubjectChange: (code: SubjectCode) => void; onNavigate: (view: string) => void }) {
  const current = subjects.find((item) => item.code === subject) ?? subjects[2]
  const focusModules = current.modules.filter((item) => item.priority === 'High')
  const focusViews: Record<SubjectCode, string> = { '21MAT11': 'm1-handbook', '21MAT21': 'm2-handbook', '21MAT31': 'survival', '21MATCS41': 'm4-survival' }
  const focusLabels: Record<SubjectCode, string> = { '21MAT11': 'Focus on M1', '21MAT21': 'Focus on M2', '21MAT31': 'Focus on M3', '21MATCS41': 'Focus on M4' }
  const focusCourse = (code: SubjectCode) => {
    onSubjectChange(code)
    onNavigate(focusViews[code])
  }

  return (
    <div className="dashboard-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="scheme-badge"><ShieldCheck size={15} /> VTU 2021 Scheme · CSE</span>
          <h1>Clear the backlog.<br /><em>Understand the math.</em></h1>
          <p>A calmer visual study path for 21MAT11, 21MAT21, 21MAT31 and 21MATCS41. One concept and one scoring step at a time.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => onNavigate('visualizer')}>Start visual learning <ArrowRight size={18} /></button>
            <button className="secondary-button" onClick={() => onNavigate('solver')}>Practice exam steps</button>
          </div>
        </div>
        <div className="confidence-card">
          <div className="orbit"><span>{current.confidence}%</span><small>ready</small></div>
          <h3>{current.code}</h3>
          <p>{current.title}</p>
          <div className="gentle-note"><Flame size={16} /> Progress, not perfection.</div>
        </div>
      </section>

      <section className="survival-banner m1-banner">
        <div><span><Flame size={16} /> TOMORROW EXAM · VTU 2021</span><h2>21MAT11 M1 complete preparation handbook</h2><p>Five modules, both OR choices, full stepwise solutions, formula glossary and plain-English explanations.</p></div>
        <div className="banner-actions"><button className="primary-button" onClick={() => onNavigate('m1-handbook')}>Open M1 handbook <ArrowRight size={18} /></button><a className="secondary-button" href={`${import.meta.env.BASE_URL}MathClear_21MAT11_Complete_Revision_Handbook.pdf`} download>Download PDF</a></div>
      </section>

      <section className="survival-banner m2-banner">
        <div><span><Flame size={16} /> NEXT EXAM · VTU 2021</span><h2>21MAT21 M2 complete preparation handbook</h2><p>Integral calculus, vector calculus, PDE, numerical methods and ODE methods with full solutions.</p></div>
        <div className="banner-actions"><button className="primary-button" onClick={() => onNavigate('m2-handbook')}>Open M2 handbook <ArrowRight size={18} /></button><a className="secondary-button" href={`${import.meta.env.BASE_URL}MathClear_21MAT21_Complete_Revision_Handbook.pdf`} download>Download PDF</a></div>
      </section>

      <section className="survival-banner">
        <div><span><Flame size={16} /> VTU 2021 SCHEME</span><h2>21MAT31 VTU-aligned practice paper</h2><p>A 100-mark paper following the official VTU module/OR structure, with {paperPartCount} solved parts in formula–substitution–working–answer order.</p></div>
        <button className="primary-button" onClick={() => onNavigate('survival')}>Open VTU practice <ArrowRight size={18} /></button>
      </section>

      <section className="survival-banner m4-banner">
        <div><span><Flame size={16} /> VTU 2021 SCHEME</span><h2>21MATCS41 VTU-aligned practice paper</h2><p>A 100-mark paper following official VTU syllabus topics, with {m4PartCount} solved parts covering logic, graph theory, statistics, distributions and hypothesis testing.</p></div>
        <div className="banner-actions"><button className="primary-button" onClick={() => onNavigate('m4-survival')}>Open VTU practice <ArrowRight size={18} /></button><a className="secondary-button" href={`${import.meta.env.BASE_URL}MathClear_21MATCS41_Complete_Revision_Handbook.pdf`} download>Download PDF</a></div>
      </section>

      <section>
        <div className="section-heading inline-heading"><div><span className="eyebrow">Your four papers</span><h2>Choose today’s focus</h2></div><span className="quiet-label">21 Scheme only</span></div>
        <div className="subject-grid">
          {subjects.map((item) => <button key={item.code} className={`subject-card focus-subject-card ${subject === item.code ? 'selected' : ''}`} style={{ '--subject-accent': item.accent } as React.CSSProperties} onClick={() => focusCourse(item.code)}>
            <span>{item.semester}</span><strong>{item.code}</strong><p>{item.title}</p><div><i style={{ width: `${item.confidence}%` }} /><small>{item.confidence}% confidence</small></div><b>{focusLabels[item.code]} <ArrowRight size={15} /></b>
          </button>)}
        </div>
      </section>

      <section className="exam-grid">
        <article className="panel focus-card">
          <div className="section-heading"><div><span className="eyebrow"><Target size={14} /> Exam focus</span><h2>High-return modules</h2><p>Start where a clean method can earn partial marks.</p></div></div>
          <div className="module-list">
            {focusModules.map((module, index) => <div key={module.title}><span>0{index + 1}</span><div><strong>{module.title}</strong><p>{module.topics}</p></div><b>HIGH</b></div>)}
          </div>
          <button className="text-button" onClick={() => onNavigate('cheatsheet')}>Open scoring formulas <ArrowRight size={16} /></button>
        </article>
        <article className="panel plan-card">
          <div className="section-heading"><div><span className="eyebrow"><CalendarDays size={14} /> Today’s calm plan</span><h2>Just 45 minutes</h2></div></div>
          <div className="timeline">
            <div><span>10</span><p><strong>Recall</strong>Read five formulas aloud.</p></div>
            <div><span>15</span><p><strong>Understand</strong>Move a visualizer slider.</p></div>
            <div><span>20</span><p><strong>Score</strong>Write one solution fully.</p></div>
          </div>
          <p className="reassurance"><CheckCircle2 size={17} /> One honest session counts as a win.</p>
        </article>
      </section>

      <section className="panel sources-panel">
        <div className="section-heading"><div><span className="eyebrow"><BookMarked size={14} /> Official verification</span><h2>Strictly aligned to VTU 2021 Scheme</h2><p>Course coverage and paper structure are verified against official VTU syllabus and model-question-paper sources.</p></div></div>
        <div className="source-links">
          <a href={officialLinks.syllabus} target="_blank" rel="noreferrer"><span>Official</span><strong>VTU 2021 Scheme syllabus</strong><ExternalLink size={16} /></a>
          <a href={officialLinks.modelPapers} target="_blank" rel="noreferrer"><span>Official</span><strong>VTU model question papers</strong><ExternalLink size={16} /></a>
          <a href="https://vtu.ac.in/pdf/QP/21MAT31set1.pdf" target="_blank" rel="noreferrer"><span>Official</span><strong>VTU 21MAT31 model set</strong><ExternalLink size={16} /></a>
          <a href="https://vtu.ac.in/pdf/QP/21MATCS41set1.pdf" target="_blank" rel="noreferrer"><span>Official</span><strong>VTU 21MATCS41 model set</strong><ExternalLink size={16} /></a>
        </div>
      </section>
    </div>
  )
}
