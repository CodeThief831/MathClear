import { useState } from 'react'
import { MathJax } from 'better-react-mathjax'
import { AlertTriangle, CheckCircle2, ChevronDown, Clock3, Flame, ShieldCheck, Target } from 'lucide-react'

const modules = [
  {
    id: 1,
    title: 'Laplace Transforms',
    priority: 'Must do',
    questions: [
      {
        marks: 7,
        question: 'Find the inverse Laplace transform of (s + 2)/(s² − 4s + 13).',
        idea: 'Make the denominator look like s² + a² by completing the square.',
        steps: [
          ['Complete the square', 's^2-4s+13=(s-2)^2+9'],
          ['Split the numerator', 's+2=(s-2)+4'],
          ['Rewrite as two familiar pieces', 'F(s)=\\frac{s-2}{(s-2)^2+3^2}+\\frac{4}{(s-2)^2+3^2}'],
          ['Use the shifting formulas', '\\mathcal L^{-1}\\!\\left\\{\\frac{s-a}{(s-a)^2+b^2}\\right\\}=e^{at}\\cos bt'],
          ['Final answer', '\\boxed{f(t)=e^{2t}\\cos 3t+\\frac43e^{2t}\\sin 3t}'],
        ],
        memory: 'Denominator has (s − 2), so the final answer wears e²ᵗ like a jacket.',
      },
      {
        marks: 7,
        question: 'Solve y″ + 3y′ + 2y = 0, y(0) = 1, y′(0) = 0 using Laplace transforms.',
        idea: 'Laplace changes derivatives into ordinary algebra containing Y(s).',
        steps: [
          ['Apply Laplace to every term', '[s^2Y-sy(0)-y\u2032(0)]+3[sY-y(0)]+2Y=0'],
          ['Insert the initial values', 's^2Y-s+3sY-3+2Y=0'],
          ['Collect Y', 'Y(s)(s^2+3s+2)=s+3'],
          ['Factor and use partial fractions', 'Y(s)=\\frac{s+3}{(s+1)(s+2)}=\\frac2{s+1}-\\frac1{s+2}'],
          ['Take inverse Laplace', '\\boxed{y(t)=2e^{-t}-e^{-2t}}'],
        ],
        memory: 'Transform → initial values → collect Y → partial fractions → inverse.',
      },
    ],
  },
  {
    id: 2,
    title: 'Fourier Series',
    priority: 'Must do',
    questions: [
      {
        marks: 7,
        question: 'Expand f(x) = x² as a Fourier series in −π < x < π.',
        idea: 'x² is even. An even function needs cosine terms only, so every sine coefficient is zero.',
        steps: [
          ['Use symmetry', 'b_n=0'],
          ['Find the constant coefficient', 'a_0=\\frac2\\pi\\int_0^\\pi x^2dx=\\frac{2\\pi^2}{3}'],
          ['Write the cosine coefficient', 'a_n=\\frac2\\pi\\int_0^\\pi x^2\\cos(nx)dx'],
          ['Integrate twice by parts', 'a_n=\\frac{4(-1)^n}{n^2}'],
          ['Put coefficients into the series', '\\boxed{x^2=\\frac{\\pi^2}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2}\\cos(nx)}'],
        ],
        memory: 'Even means cosine. Odd means sine. Check symmetry before integrating.',
      },
      {
        marks: 7,
        question: 'Find the half-range sine series of f(x) = x in 0 < x < π.',
        idea: 'A sine series has only bₙ. Think of extending the line as an odd function.',
        steps: [
          ['Write the half-range coefficient', 'b_n=\\frac2\\pi\\int_0^\\pi x\\sin(nx)dx'],
          ['Integrate by parts', '\\int x\\sin(nx)dx=-\\frac{x\\cos(nx)}n+\\frac{\\sin(nx)}{n^2}'],
          ['Apply 0 and π', 'b_n=\\frac{2(-1)^{n+1}}n'],
          ['Write the answer', '\\boxed{x=2\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}n\\sin(nx)}'],
        ],
        memory: 'Half-range sine question: write bₙ first. That earns the method start.',
      },
    ],
  },
  {
    id: 3,
    title: 'Fourier & Z Transforms',
    priority: 'Secure choice',
    questions: [
      {
        marks: 7,
        question: 'Find Z{n²}.',
        idea: 'Start from a tiny known transform and differentiate it twice.',
        steps: [
          ['Start with the basic pair', 'Z\\{1\\}=\\frac{z}{z-1}'],
          ['Use the multiplication rule', 'Z\\{nf(n)\\}=-z\\frac d{dz}F(z)'],
          ['Obtain Z{n}', 'Z\\{n\\}=\\frac{z}{(z-1)^2}'],
          ['Apply the rule one more time', 'Z\\{n^2\\}=-z\\frac d{dz}\\left[\\frac{z}{(z-1)^2}\\right]'],
          ['Simplify', '\\boxed{Z\\{n^2\\}=\\frac{z(z+1)}{(z-1)^3}}'],
        ],
        memory: 'Multiplying a sequence by n means −z times differentiation in Z-space.',
      },
      {
        marks: 7,
        question: 'Find the inverse Z-transform of z/[(z − 1)(z − 2)].',
        idea: 'Break one difficult fraction into two standard fractions.',
        steps: [
          ['Assume partial fractions', '\\frac{z}{(z-1)(z-2)}=A\\frac{z}{z-1}+B\\frac{z}{z-2}'],
          ['Compare coefficients', 'A=-1,\\qquad B=1'],
          ['Use the standard pair', 'Z^{-1}\\left\\{\\frac{z}{z-a}\\right\\}=a^n'],
          ['Take the inverse term by term', 'x_n=-1^n+2^n'],
          ['Final answer', '\\boxed{x_n=2^n-1}'],
        ],
        memory: 'z/(z − a) turns directly into aⁿ.',
      },
      {
        marks: 6,
        question: 'Solve yₙ₊₂ − 3yₙ₊₁ + 2yₙ = 0, y₀ = 1, y₁ = 2.',
        idea: 'A difference equation behaves like a differential equation made from numbered boxes.',
        steps: [
          ['Try yₙ = rⁿ', 'r^{n+2}-3r^{n+1}+2r^n=0'],
          ['Remove the common rⁿ', 'r^2-3r+2=0'],
          ['Find the two roots', '(r-1)(r-2)=0\\Rightarrow r=1,2'],
          ['Write the general sequence', 'y_n=A(1)^n+B(2)^n'],
          ['Use y₀ = 1 and y₁ = 2', 'A+B=1,\\quad A+2B=2\\Rightarrow A=0,B=1'],
          ['Final answer', '\\boxed{y_n=2^n}'],
        ],
        memory: 'Difference equation → characteristic equation → roots → initial values.',
      },
    ],
  },
  {
    id: 4,
    title: 'Numerical ODEs',
    priority: 'Highest return',
    questions: [
      {
        marks: 7,
        question: 'Using RK4, find y(0.1) for y′ = x + y, y(0) = 1 and h = 0.1.',
        idea: 'RK4 asks four little slope scouts to look at the path, then takes their weighted average.',
        steps: [
          ['Write the given data', 'x_0=0,\\ y_0=1,\\ h=0.1,\\ f(x,y)=x+y'],
          ['First slope', 'k_1=0.1f(0,1)=0.1'],
          ['Second slope', 'k_2=0.1f(0.05,1.05)=0.11'],
          ['Third slope', 'k_3=0.1f(0.05,1.055)=0.1105'],
          ['Fourth slope', 'k_4=0.1f(0.1,1.1105)=0.12105'],
          ['Use the RK4 weighted average', 'y_1=1+\\frac16(0.1+2(0.11)+2(0.1105)+0.12105)'],
          ['Final answer', '\\boxed{y(0.1)\\approx1.11034}'],
        ],
        memory: 'The weights are 1, 2, 2, 1. Never forget the final division by 6.',
      },
      {
        marks: 7,
        question: 'Using Taylor series, find y(0.1) up to fourth-order terms for y′ = x + y, y(0) = 1.',
        idea: 'Taylor predicts the next value using the value, slope, bend and higher bends at the starting point.',
        steps: [
          ['Differentiate the equation', 'y\u2032=x+y'],
          ['Differentiate again', 'y\u2033=1+y\u2032=1+x+y'],
          ['Continue', 'y\u2034=1+y\u2032=1+x+y,\\qquad y^{(4)}=1+x+y'],
          ['Evaluate at x = 0, y = 1', 'y_0=1,\\ y_0\u2032=1,\\ y_0\u2033=y_0\u2034=y_0^{(4)}=2'],
          ['Substitute h = 0.1', 'y(0.1)=1+0.1+\\frac{2(0.1)^2}{2!}+\\frac{2(0.1)^3}{3!}+\\frac{2(0.1)^4}{4!}'],
          ['Final answer', '\\boxed{y(0.1)\\approx1.11034}'],
        ],
        memory: 'Write every derivative separately. Those lines carry marks even if arithmetic slips.',
      },
    ],
  },
  {
    id: 5,
    title: 'Calculus of Variations',
    priority: 'Formula marks',
    questions: [
      {
        marks: 7,
        question: 'Find the extremal of ∫(y′² − y²) dx.',
        idea: 'An extremal is the best curve. Euler’s equation is the machine that finds it.',
        steps: [
          ['Name the integrand', 'f(y,y\u2032)=y\u2032^2-y^2'],
          ['Write Euler’s equation', '\\frac{\\partial f}{\\partial y}-\\frac d{dx}\\left(\\frac{\\partial f}{\\partial y\u2032}\\right)=0'],
          ['Find the two derivatives', '\\frac{\\partial f}{\\partial y}=-2y,\\qquad \\frac{\\partial f}{\\partial y\u2032}=2y\u2032'],
          ['Substitute', '-2y-2y\u2033=0\\Rightarrow y\u2033+y=0'],
          ['Solve the ordinary equation', '\\boxed{y=C_1\\cos x+C_2\\sin x}'],
        ],
        memory: 'First write f. Then fᵧ. Then fᵧ′. Then Euler. Four visible mark-winning lines.',
      },
      {
        marks: 7,
        question: 'Show that the shortest distance between two points in a plane is a straight line.',
        idea: 'A path has length. We ask Euler’s equation which path makes that length smallest.',
        steps: [
          ['Write the length functional', 'I=\\int\\sqrt{1+y\u2032^2}\\,dx'],
          ['Identify f', 'f=\\sqrt{1+y\u2032^2}'],
          ['Notice f does not contain y', '\\frac{\\partial f}{\\partial y}=0'],
          ['Apply Euler’s equation', '\\frac d{dx}\\left(\\frac{y\u2032}{\\sqrt{1+y\u2032^2}}\\right)=0'],
          ['Integrate', '\\frac{y\u2032}{\\sqrt{1+y\u2032^2}}=C\\Rightarrow y\u2032=m'],
          ['Integrate once more', '\\boxed{y=mx+c}'],
          ['Interpret the answer', '\\text{The equation }y=mx+c\\text{ is a straight line.}'],
        ],
        memory: 'No y inside f means the y′ expression becomes a constant.',
      },
    ],
  },
]

export function SurvivalPackage() {
  const [open, setOpen] = useState('4-0')
  const [completed, setCompleted] = useState<string[]>([])
  const total = modules.reduce((sum, module) => sum + module.questions.length, 0)

  const toggleComplete = (id: string) => setCompleted((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id])

  return (
    <div className="survival-stack">
      <section className="survival-hero">
        <div><span className="urgent-badge"><Flame size={15} /> One-day survival package</span><h1>21MAT31 Mathematics III<br /><em>Pass-focused revision</em></h1><p>Eleven high-return practice problems covering all five modules. Learn the method, write every visible step and collect partial marks even when the last number goes wrong.</p></div>
        <div className="survival-score"><strong>{completed.length}/{total}</strong><span>problems practised</span><div><i style={{ width: `${completed.length / total * 100}%` }} /></div></div>
      </section>

      <section className="reality-card"><AlertTriangle size={22} /><div><strong>Honest promise</strong><p>This is a focused revision package, not a leaked paper and not a guaranteed pass. A 60% target is possible only if the methods are understood, written independently and matched with the actual exam. Do not merely memorize final answers.</p></div></section>

      <section className="panel day-plan">
        <div className="section-heading"><div><span className="eyebrow"><Clock3 size={14} /> Last 24 hours</span><h2>Study in this order</h2><p>Protect energy. Numerical methods first; difficult transform proofs last.</p></div></div>
        <div className="survival-timeline">
          <article><b>2.5 h</b><strong>Module 4</strong><span>RK4 + Taylor. Write each k value.</span></article>
          <article><b>2 h</b><strong>Module 5</strong><span>Euler equation + standard applications.</span></article>
          <article><b>2 h</b><strong>Module 1</strong><span>ODE + inverse Laplace patterns.</span></article>
          <article><b>1.5 h</b><strong>Module 2</strong><span>Even/odd test + one half-range series.</span></article>
          <article><b>1.5 h</b><strong>Module 3</strong><span>Z pairs + inverse + difference equation.</span></article>
          <article><b>1 h</b><strong>Closed-book test</strong><span>Rewrite formulas and one problem per module.</span></article>
        </div>
      </section>

      <section className="package-summary">
        <article><Target /><strong>Target</strong><span>Attempt one complete choice from every module.</span></article>
        <article><ShieldCheck /><strong>Safety rule</strong><span>Formula + substitution + steps + boxed answer.</span></article>
        <article><CheckCircle2 /><strong>Minimum drill</strong><span>Write each problem once without looking.</span></article>
      </section>

      {modules.map((module) => <section className="panel survival-module" key={module.id}>
        <div className="module-heading"><span>M{module.id}</span><div><h2>{module.title}</h2><p>{module.questions.length} solved high-return problems</p></div><b>{module.priority}</b></div>
        <div className="survival-questions">
          {module.questions.map((problem, index) => {
            const id = `${module.id}-${index}`
            const isOpen = open === id
            const isDone = completed.includes(id)
            return <article className={`survival-question ${isOpen ? 'open' : ''}`} key={problem.question}>
              <button className="question-toggle" onClick={() => setOpen(isOpen ? '' : id)} aria-expanded={isOpen}>
                <span className={isDone ? 'done' : ''}>{isDone ? <CheckCircle2 size={18} /> : `Q${index + 1}`}</span>
                <div><strong>{problem.question}</strong><small>{problem.marks} marks · Predicted practice pattern</small></div>
                <ChevronDown size={20} />
              </button>
              {isOpen && <div className="survival-answer">
                <div className="tiny-idea"><span>Explain it simply</span><p>{problem.idea}</p></div>
                <div className="worked-steps">{problem.steps.map(([title, math], stepIndex) => <div key={title}><b>{stepIndex + 1}</b><div><strong>{title}</strong><MathJax dynamic>{`\\(${math}\\)`}</MathJax></div></div>)}</div>
                <div className="memory-trick"><Flame size={16} /><p><strong>Remember:</strong> {problem.memory}</p></div>
                <button className={isDone ? 'complete-button completed' : 'complete-button'} onClick={() => toggleComplete(id)}>{isDone ? <><CheckCircle2 size={17} /> Practised</> : 'Mark as practised'}</button>
              </div>}
            </article>
          })}
        </div>
      </section>)}

      <section className="panel exam-hall-card"><h2>Exam-hall survival rules</h2><ol><li>Attempt the easiest complete module choice first.</li><li>Write the formula before touching the calculator.</li><li>Never hide substitutions; substitutions earn method marks.</li><li>Keep four decimal places in numerical methods.</li><li>If stuck for three minutes, leave space and move forward.</li><li>Box every final answer and verify the question number.</li></ol></section>
    </div>
  )
}
