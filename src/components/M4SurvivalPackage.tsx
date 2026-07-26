import { useState } from 'react'
import { AlertTriangle, BookOpenCheck, CheckCircle2, ChevronDown, Clock3, ExternalLink, Eye, EyeOff, Flame, Printer, ShieldCheck, Target } from 'lucide-react'
import { m4Modules, m4PaperTotal, m4PartCount } from '../data/m4MockPaper'
import type { FullQuestion, PaperPart } from '../data/m3MockPaper'
import { ReadableMath } from './ReadableMath'
import { explainStep } from '../utils/explainStep'

type Mode = 'paper' | 'scheme'

const questionMarks = (question: FullQuestion) => question.parts.reduce((sum, part) => sum + part.marks, 0)
const stepMarks = (part: PaperPart) => part.steps.reduce((sum, step) => sum + step.marks, 0)

export function M4SurvivalPackage() {
  const [mode, setMode] = useState<Mode>('paper')
  const [selected, setSelected] = useState<Record<number, 'A' | 'B'>>({ 1: 'A', 2: 'B', 3: 'A', 4: 'A', 5: 'B' })
  const [openPart, setOpenPart] = useState('')
  const [completed, setCompleted] = useState<string[]>([])
  const selectedMarks = m4Modules.reduce((sum, module) => selected[module.module] ? sum + 20 : sum, 0)
  const choose = (module: number, option: 'A' | 'B') => setSelected((current) => ({ ...current, [module]: option }))
  const toggleComplete = (id: string) => setCompleted((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return <div className="survival-stack m4-survival">
    <section className="survival-hero mock-hero m4-hero">
      <div><span className="urgent-badge"><Flame size={15} /> Tomorrow: fourth-semester mathematics</span><h1>21MATCS41 Mathematics IV<br /><em>Evidence-backed survival mock</em></h1><p>Built from OCR analysis of 11 scanned pages across three university papers, the official VTU syllabus and model papers, plus TIE’s 21MATCS41 SIMP and MQP resources.</p></div>
      <div className="survival-score"><strong>{selectedMarks}/{m4PaperTotal}</strong><span>attempt plan selected</span><div><i style={{ width: `${selectedMarks}%` }} /></div></div>
    </section>

    <section className="reality-card"><AlertTriangle size={22} /><div><strong>Use this as a probability-weighted practice set—not a promise</strong><p>No honest resource can guarantee tomorrow’s questions or a pass. This package prioritizes patterns repeated across supplied papers, official model papers and TIE resources. Write the selected five questions closed-book; reading answers alone is not preparation.</p></div></section>

    <section className="analysis-strip"><article><strong>3</strong><span>university papers</span></article><article><strong>11</strong><span>pages OCR processed</span></article><article><strong>10</strong><span>full questions</span></article><article><strong>30</strong><span>solved parts</span></article></section>

    <section className="panel mock-controls no-print"><div><span className="eyebrow"><Eye size={14} /> Display mode</span><h2>{mode === 'paper' ? 'Question-paper mode' : 'Simple solution + evaluation mode'}</h2><p>{mode === 'paper' ? 'Set a 3-hour timer. Choose one complete question per module.' : 'Open a part to see plain-English intent followed by marks-based formal working.'}</p></div><div className="mock-action-row"><button className={mode === 'paper' ? 'active' : ''} onClick={() => setMode('paper')}><EyeOff size={17} /> Mock test</button><button className={mode === 'scheme' ? 'active' : ''} onClick={() => setMode('scheme')}><BookOpenCheck size={17} /> Solutions</button><button onClick={() => window.print()}><Printer size={17} /> Print</button></div></section>

    <section className="paper-sheet">
      <header className="paper-header"><div><strong>21MATCS41</strong><span>Model Survival Paper · 2021 Scheme</span></div><h2>Mathematical Foundations for Computing, Probability and Statistics</h2><div className="paper-meta"><span>Time: 3 Hours</span><span>Max. Marks: 100</span></div><p><b>Note:</b> Answer any FIVE full questions, choosing ONE full question from each module. Use statistical tables where necessary.</p></header>
      {m4Modules.map((module) => {
        const options: { key: 'A' | 'B'; question: FullQuestion }[] = [{ key: 'A', question: module.optionA }, { key: 'B', question: module.optionB }]
        return <section className="paper-module" key={module.module}>
          <div className="paper-module-title"><span>Module – {module.module}</span><small>{module.title}</small><em>{module.frequency}</em></div>
          {options.map(({ key, question }, optionIndex) => <div key={question.number}>
            {optionIndex === 1 && <div className="or-divider"><span>OR</span></div>}
            <article className={`full-question ${selected[module.module] === key ? 'chosen' : ''}`}>
              <div className="full-question-head"><h3>Q{question.number}</h3><span>{questionMarks(question)} Marks</span><button className="no-print" onClick={() => choose(module.module, key)}>{selected[module.module] === key ? <><CheckCircle2 size={16} /> Selected</> : 'Choose this question'}</button></div>
              {question.parts.map((part) => {
                const id = `m4-${question.number}${part.label}`
                const expanded = openPart === id
                const validScheme = stepMarks(part) === part.marks
                return <div className="paper-part" key={id}>
                  <button className="paper-part-prompt" onClick={() => mode === 'scheme' && setOpenPart(expanded ? '' : id)} disabled={mode === 'paper'}><b>{question.number}({part.label})</b><div><span>{part.prompt}</span><small>{part.topic} · {part.recurrence}</small></div><em>[{String(part.marks).padStart(2, '0')} Marks]</em>{mode === 'scheme' && <ChevronDown size={18} />}</button>
                  {mode === 'scheme' && expanded && <div className="evaluation-scheme">
                    <div className="child-explanation"><span>First understand this in plain English</span><p>{part.simpleIdea}</p></div>
                    <div className="scheme-table"><div className="scheme-row heading"><span>What to write in the exam</span><b>Marks</b></div>{part.steps.map((step, index) => <div className="scheme-row" key={`${id}-${index}`}><span><strong><i>Step {index + 1}</i>{step.label}</strong><p className="step-why"><b>Why?</b> {explainStep(step)}</p>{step.text && <p className="step-working">{step.text}</p>}{step.math && <ReadableMath math={step.math} />}</span><b>{step.marks}</b></div>)}<div className="scheme-row total"><span>Total {validScheme ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}</span><b>{stepMarks(part)}/{part.marks}</b></div></div>
                    <div className="final-answer"><span>Final answer — write this clearly and box it</span><ReadableMath math={part.finalAnswer} className="final-math" /></div>
                    <button className={completed.includes(id) ? 'complete-button completed' : 'complete-button'} onClick={() => toggleComplete(id)}>{completed.includes(id) ? <><CheckCircle2 size={17} /> Written closed-book</> : 'Mark after writing closed-book'}</button>
                  </div>}
                </div>
              })}
            </article>
          </div>)}
        </section>
      })}
    </section>

    <section className="panel day-plan no-print"><div className="section-heading"><div><span className="eyebrow"><Clock3 size={14} /> Last-day order</span><h2>Write the safest complete choices first</h2><p>TIE highlights Modules 1, 2 and 5. OCR recurrence adds the safest computational routes for Modules 3 and 4.</p></div></div><div className="survival-timeline"><article><b>2 h</b><strong>M5 Q10 templates</strong><span>Definitions, t-test and difference-of-means test.</span></article><article><b>2 h</b><strong>M2 Q4 patterns</strong><span>Inverse, equivalence relation and Euler trail.</span></article><article><b>1.5 h</b><strong>M1 Q1 logic</strong><span>Truth table, inference and odd/even proof.</span></article><article><b>2 h</b><strong>M4 Q7 calculations</strong><span>PMF, Poisson and normal standardization.</span></article><article><b>2 h</b><strong>M3 Q5 table work</strong><span>Ranks, normal equations and regression means.</span></article><article><b>3 h</b><strong>Full paper simulation</strong><span>Paper mode. No solutions until time ends.</span></article></div></section>

    <section className="package-summary no-print"><article><Target /><strong>Recommended attempt</strong><span>Q1, Q4, Q5, Q7 and Q10—change only if the actual data are easier.</span></article><article><ShieldCheck /><strong>Partial-mark rule</strong><span>Formula → table/setup → substitution → result → sentence conclusion.</span></article><article><CheckCircle2 /><strong>Closed-book progress</strong><span>{completed.length} of {m4PartCount} parts written independently.</span></article></section>

    <section className="panel source-audit no-print"><h2>Evidence used</h2><p>Question families were selected from <code>M4_All.pdf</code>, the official 21MATCS41 syllabus and model set, local module notes, and public TIE resources. Clean values are independently authored where OCR tables were damaged.</p><div><a href="https://vtu.ac.in/b-e-scheme-syllabus/" target="_blank" rel="noreferrer">Official VTU syllabus <ExternalLink size={14} /></a><a href="https://takeiteasyengineers.com/m4/21matcs41-simp-for-csis-simp/" target="_blank" rel="noreferrer">TIE SIMP M1, M2, M5 <ExternalLink size={14} /></a><a href="https://takeiteasyengineers.com/m4/21matcs41-mqp-solutionfor-cse-and-allied-branches/" target="_blank" rel="noreferrer">TIE MQP solutions <ExternalLink size={14} /></a></div></section>
  </div>
}
