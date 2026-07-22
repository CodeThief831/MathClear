import { useState } from 'react'
import { MathJax } from 'better-react-mathjax'
import { Check, ChevronLeft, ChevronRight, Lightbulb, Play, RotateCcw } from 'lucide-react'

const problems = [
  {
    code: '21MAT31',
    marks: '7 marks',
    topic: 'Laplace Transform ODE',
    question: 'Solve y″ + 3y′ + 2y = 0, y(0) = 1, y′(0) = 0 using Laplace transforms.',
    steps: [
      { title: 'Name the unknown transform', math: 'Y(s)=\\mathcal L\\{y(t)\\}', why: 'This lets us turn the differential equation into algebra.' },
      { title: 'Transform every term', math: '\\mathcal L\\{y\u2033\\}+3\\mathcal L\\{y\u2032\\}+2\\mathcal L\\{y\\}=0', why: 'Linearity allows each term to be transformed separately.' },
      { title: 'Expand derivative transforms', math: '[s^2Y-sy(0)-y\u2032(0)]+3[sY-y(0)]+2Y=0', why: 'Initial values appear automatically in derivative formulas.' },
      { title: 'Substitute initial conditions', math: 's^2Y-s+3sY-3+2Y=0', why: 'Use y(0)=1 and y′(0)=0 before simplifying.' },
      { title: 'Collect all Y terms', math: 'Y(s)(s^2+3s+2)=s+3', why: 'Factor Y(s) exactly like an ordinary algebra variable.' },
      { title: 'Factor and split fractions', math: 'Y(s)=\\frac{s+3}{(s+1)(s+2)}=\\frac{2}{s+1}-\\frac{1}{s+2}', why: 'Partial fractions match standard inverse transforms.' },
      { title: 'Take inverse Laplace', math: '\\boxed{y(t)=2e^{-t}-e^{-2t}}', why: 'Use L⁻¹{1/(s+a)} = e⁻ᵃᵗ.' },
    ],
  },
  {
    code: '21MATCS41',
    marks: '7 marks',
    topic: 'Poisson Distribution',
    question: 'A server receives 3 requests per minute. Find the probability of exactly 2 requests in one minute.',
    steps: [
      { title: 'Identify the distribution', math: 'X\\sim\\operatorname{Poisson}(\\lambda)', why: 'We count independent events in a fixed time interval.' },
      { title: 'Read the mean rate', math: '\\lambda=3\\text{ requests/minute}', why: 'The interval is one minute, so no unit conversion is needed.' },
      { title: 'Write the probability formula', math: 'P(X=x)=e^{-\\lambda}\\frac{\\lambda^x}{x!}', why: 'Writing the standard formula earns method marks.' },
      { title: 'Substitute x = 2 and λ = 3', math: 'P(X=2)=e^{-3}\\frac{3^2}{2!}', why: 'Exactly two means x equals 2.' },
      { title: 'Show basic arithmetic', math: 'P(X=2)=e^{-3}\\frac{9}{2}=4.5e^{-3}', why: 'Do not skip factorial simplification in a VTU answer.' },
      { title: 'Evaluate and box', math: '\\boxed{P(X=2)\\approx0.2240}', why: 'Report four decimal places unless the question specifies otherwise.' },
    ],
  },
]

export function StepByStepSolver() {
  const [problemIndex, setProblemIndex] = useState(0)
  const [step, setStep] = useState(0)
  const problem = problems[problemIndex]
  const completed = step === problem.steps.length - 1

  const switchProblem = (index: number) => {
    setProblemIndex(index)
    setStep(0)
  }

  return (
    <section className="panel solver-panel" aria-labelledby="solver-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><Play size={14} /> Step-by-step solver</span>
          <h2 id="solver-title">No algebra steps skipped</h2>
          <p>Reveal one exam-writing step at a time.</p>
        </div>
        <button className="icon-button" onClick={() => setStep(0)} aria-label="Restart solution"><RotateCcw size={18} /></button>
      </div>
      <div className="problem-tabs">
        {problems.map((item, index) => <button key={item.topic} className={problemIndex === index ? 'active' : ''} onClick={() => switchProblem(index)}>{item.code}<span>{item.topic}</span></button>)}
      </div>
      <article className="question-card">
        <div><span className="course-pill">{problem.code}</span><span className="marks-pill">{problem.marks}</span></div>
        <h3>{problem.question}</h3>
        <p>Reference pattern: VTU 2021 Scheme model-paper style</p>
      </article>
      <div className="progress-row"><span>Solution progress</span><strong>{step + 1} / {problem.steps.length}</strong></div>
      <div className="step-progress">{problem.steps.map((_, index) => <span key={index} className={index <= step ? 'filled' : ''} />)}</div>
      <div className="steps-list">
        {problem.steps.slice(0, step + 1).map((item, index) => (
          <article className={`solution-step ${index === step ? 'current' : ''}`} key={item.title}>
            <div className="step-number">{index < step ? <Check size={16} /> : index + 1}</div>
            <div>
              <h4>{item.title}</h4>
              <MathJax dynamic className="math-line">{`\\(${item.math}\\)`}</MathJax>
              {index === step && <p><Lightbulb size={15} /> {item.why}</p>}
            </div>
          </article>
        ))}
      </div>
      <div className="solver-actions">
        <button className="secondary-button" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}><ChevronLeft size={17} /> Previous</button>
        <button className="primary-button" disabled={completed} onClick={() => setStep((current) => Math.min(problem.steps.length - 1, current + 1))}>{completed ? 'Solution complete' : 'Reveal next micro-step'} {!completed && <ChevronRight size={17} />}</button>
      </div>
    </section>
  )
}
