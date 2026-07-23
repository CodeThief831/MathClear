export type EvaluationStep = {
  label: string
  marks: number
  math?: string
  text?: string
}

export type PaperPart = {
  label: 'a' | 'b' | 'c'
  marks: number
  topic: string
  prompt: string
  recurrence: string
  simpleIdea: string
  steps: EvaluationStep[]
  finalAnswer: string
}

export type FullQuestion = {
  number: number
  parts: PaperPart[]
}

export type ModuleChoice = {
  module: number
  title: string
  frequency: string
  optionA: FullQuestion
  optionB: FullQuestion
}

export const m3Modules: ModuleChoice[] = [
  {
    module: 1,
    title: 'Laplace Transforms',
    frequency: 'All 5 OCR papers: direct/periodic/convolution OR unit-step/inverse/ODE',
    optionA: {
      number: 1,
      parts: [
        {
          label: 'a', marks: 6, topic: 'Direct transform', recurrence: '5/5 papers',
          prompt: 'Find the Laplace transform of t e⁻²ᵗ sin 3t.',
          simpleIdea: 'First transform sin 3t. Multiplying by t means differentiate in s, and e⁻²ᵗ shifts s to s + 2.',
          steps: [
            { label: 'State the base pair', marks: 1, math: '\\mathcal L\\{\\sin 3t\\}=\\frac{3}{s^2+9}' },
            { label: 'Use multiplication by t', marks: 2, math: '\\mathcal L\\{t\\sin 3t\\}=-\\frac d{ds}\\left(\\frac3{s^2+9}\\right)=\\frac{6s}{(s^2+9)^2}' },
            { label: 'Apply first shifting', marks: 2, math: '\\mathcal L\\{e^{-2t}f(t)\\}=F(s+2)' },
            { label: 'Substitute and conclude', marks: 1, math: '\\boxed{\\mathcal L\\{te^{-2t}\\sin3t\\}=\\frac{6(s+2)}{[(s+2)^2+9]^2}}' },
          ],
          finalAnswer: '\\frac{6(s+2)}{[(s+2)^2+9]^2}',
        },
        {
          label: 'b', marks: 7, topic: 'Periodic wave', recurrence: '5/5 papers',
          prompt: 'A triangular wave of period 2a is f(t)=t for 0<t<a and f(t)=2a−t for a<t<2a. Find L{f(t)}.',
          simpleIdea: 'A periodic wave repeats the same little triangle forever. Integrate only one triangle, then divide by the repeat factor.',
          steps: [
            { label: 'Write periodic-function formula', marks: 1, math: '\\mathcal L\\{f\\}=\\frac{1}{1-e^{-2as}}\\int_0^{2a}e^{-st}f(t)dt' },
            { label: 'Split at the corner t=a', marks: 1, math: 'I=\\int_0^a te^{-st}dt+\\int_a^{2a}(2a-t)e^{-st}dt' },
            { label: 'Evaluate first integral', marks: 2, math: 'I_1=\\frac{1-e^{-as}(1+as)}{s^2}' },
            { label: 'Evaluate second integral', marks: 2, math: 'I_2=\\frac{e^{-as}(as-1)+e^{-2as}}{s^2}' },
            { label: 'Simplify using 1−e⁻²ᵃˢ', marks: 1, math: '\\boxed{\\mathcal L\\{f\\}=\\frac{1-e^{-as}}{s^2(1+e^{-as})}=\\frac1{s^2}\\tanh\\frac{as}{2}}' },
          ],
          finalAnswer: '\\frac1{s^2}\\tanh\\left(\\frac{as}{2}\\right)',
        },
        {
          label: 'c', marks: 7, topic: 'Convolution', recurrence: '5/5 papers',
          prompt: 'Using convolution theorem, find L⁻¹{1/[s(s²+a²)]}.',
          simpleIdea: 'Treat the fraction as two easy transforms multiplied together. Convolution tells us how their time functions combine.',
          steps: [
            { label: 'Factor into two transforms', marks: 1, math: '\\frac1{s(s^2+a^2)}=\\frac1s\\cdot\\frac1{s^2+a^2}' },
            { label: 'Identify inverse pairs', marks: 1, math: '\\mathcal L^{-1}\\{1/s\\}=1,\\quad \\mathcal L^{-1}\\{1/(s^2+a^2)\\}=\\frac1a\\sin at' },
            { label: 'State convolution theorem', marks: 2, math: '(f*g)(t)=\\int_0^t f(u)g(t-u)du' },
            { label: 'Substitute', marks: 2, math: '\\frac1a\\int_0^t\\sin[a(t-u)]du=\\frac1{a^2}[1-\\cos at]' },
            { label: 'Box the result', marks: 1, math: '\\boxed{\\mathcal L^{-1}\\left\\{\\frac1{s(s^2+a^2)}\\right\\}=\\frac{1-\\cos at}{a^2}}' },
          ],
          finalAnswer: '\\frac{1-\\cos at}{a^2}',
        },
      ],
    },
    optionB: {
      number: 2,
      parts: [
        {
          label: 'a', marks: 6, topic: 'Inverse transform', recurrence: '5/5 papers',
          prompt: 'Find L⁻¹{(2s²−6s+5)/(s³−6s²+11s−6)}.',
          simpleIdea: 'The cubic denominator is three small doors: (s−1), (s−2), (s−3). Partial fractions opens each door.',
          steps: [
            { label: 'Factor denominator', marks: 1, math: 's^3-6s^2+11s-6=(s-1)(s-2)(s-3)' },
            { label: 'Assume partial fractions', marks: 1, math: 'F(s)=\\frac A{s-1}+\\frac B{s-2}+\\frac C{s-3}' },
            { label: 'Find constants', marks: 2, math: 'A=\\frac12,\\quad B=-1,\\quad C=\\frac52' },
            { label: 'Take inverse transforms', marks: 1, math: 'f(t)=\\frac12e^t-e^{2t}+\\frac52e^{3t}' },
            { label: 'Final answer', marks: 1, math: '\\boxed{f(t)=\\frac12e^t-e^{2t}+\\frac52e^{3t}}' },
          ],
          finalAnswer: '\\frac12e^t-e^{2t}+\\frac52e^{3t}',
        },
        {
          label: 'b', marks: 7, topic: 'Unit-step function', recurrence: '5/5 papers',
          prompt: 'Express f(t)=1 for 0<t<1, f(t)=t for 1<t<2 and f(t)=0 for t>2 using unit-step functions and find its Laplace transform.',
          simpleIdea: 'A unit step is an ON switch. Start with 1, change the rule at t=1, then switch everything off at t=2.',
          steps: [
            { label: 'Build the switched function', marks: 2, math: 'f(t)=1+(t-1)u(t-1)-t\\,u(t-2)' },
            { label: 'Rewrite last shifted term', marks: 1, math: 't\\,u(t-2)=[(t-2)+2]u(t-2)' },
            { label: 'Transform each term', marks: 2, math: 'F(s)=\\frac1s+e^{-s}\\frac1{s^2}-e^{-2s}\\left(\\frac1{s^2}+\\frac2s\\right)' },
            { label: 'Present neatly', marks: 2, math: '\\boxed{F(s)=\\frac1s+\\frac{e^{-s}-e^{-2s}}{s^2}-\\frac{2e^{-2s}}s}' },
          ],
          finalAnswer: '\\frac1s+\\frac{e^{-s}-e^{-2s}}{s^2}-\\frac{2e^{-2s}}s',
        },
        {
          label: 'c', marks: 7, topic: 'ODE by Laplace transform', recurrence: '5/5 papers',
          prompt: 'Using Laplace transforms, solve y″+3y′+2y=0, y(0)=1, y′(0)=0.',
          simpleIdea: 'Laplace turns the derivative puzzle into an algebra puzzle in Y(s).',
          steps: [
            { label: 'Transform the equation', marks: 1, math: '[s^2Y-sy(0)-y\u2032(0)]+3[sY-y(0)]+2Y=0' },
            { label: 'Insert initial conditions', marks: 1, math: 's^2Y-s+3sY-3+2Y=0' },
            { label: 'Collect Y', marks: 1, math: 'Y(s)=\\frac{s+3}{(s+1)(s+2)}' },
            { label: 'Resolve partial fractions', marks: 2, math: 'Y(s)=\\frac2{s+1}-\\frac1{s+2}' },
            { label: 'Take inverse Laplace', marks: 1, math: 'y(t)=2e^{-t}-e^{-2t}' },
            { label: 'Box and verify y(0)=1', marks: 1, math: '\\boxed{y(t)=2e^{-t}-e^{-2t}}' },
          ],
          finalAnswer: '2e^{-t}-e^{-2t}',
        },
      ],
    },
  },
  {
    module: 2,
    title: 'Fourier Series & Harmonic Analysis',
    frequency: 'Every Q3/Q4 side: full series + half-range + tabular harmonics',
    optionA: {
      number: 3,
      parts: [
        {
          label: 'a', marks: 6, topic: 'Full Fourier series', recurrence: 'Repeated polynomial pattern',
          prompt: 'Obtain the Fourier series for f(x)=x² in −π<x<π. Hence deduce Σ(1/n²)=π²/6.',
          simpleIdea: 'x² looks the same in a mirror, so it is even. Even functions need cosine terms, not sine terms.',
          steps: [
            { label: 'Use even symmetry', marks: 1, math: 'b_n=0,\\quad a_0=\\frac2\\pi\\int_0^\\pi x^2dx=\\frac{2\\pi^2}{3}' },
            { label: 'Set up cosine coefficient', marks: 1, math: 'a_n=\\frac2\\pi\\int_0^\\pi x^2\\cos(nx)dx' },
            { label: 'Integrate twice by parts', marks: 2, math: 'a_n=\\frac{4(-1)^n}{n^2}' },
            { label: 'Write the series', marks: 1, math: 'x^2=\\frac{\\pi^2}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2}\\cos nx' },
            { label: 'Put x=π and deduce', marks: 1, math: '\\boxed{\\sum_{n=1}^{\\infty}\\frac1{n^2}=\\frac{\\pi^2}{6}}' },
          ],
          finalAnswer: 'x^2=\\frac{\\pi^2}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2}\\cos nx',
        },
        {
          label: 'b', marks: 7, topic: 'Half-range sine series', recurrence: '10/10 choice sides',
          prompt: 'Obtain the half-range sine series for f(x)=x in 0<x<π.',
          simpleIdea: 'The question says sine, so only bₙ is invited to the party.',
          steps: [
            { label: 'Write sine-series form', marks: 1, math: 'x=\\sum_{n=1}^{\\infty}b_n\\sin nx' },
            { label: 'Set up coefficient', marks: 1, math: 'b_n=\\frac2\\pi\\int_0^\\pi x\\sin nx\\,dx' },
            { label: 'Integrate by parts', marks: 2, math: '\\int x\\sin nx\\,dx=-\\frac{x\\cos nx}{n}+\\frac{\\sin nx}{n^2}' },
            { label: 'Apply limits', marks: 2, math: 'b_n=\\frac{2(-1)^{n+1}}n' },
            { label: 'Final series', marks: 1, math: '\\boxed{x=2\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}n\\sin nx}' },
          ],
          finalAnswer: '2\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}n\\sin nx',
        },
        {
          label: 'c', marks: 7, topic: 'Harmonic analysis', recurrence: 'Every Q3 and Q4',
          prompt: 'For x=0°,60°,120°,180°,240°,300° and y=4,6,8,6,4,2, obtain the constant term and first harmonic.',
          simpleIdea: 'Make three columns: y, y cos x and y sin x. Add each column, then multiply by 2/6.',
          steps: [
            { label: 'Use tabular formulas', marks: 1, math: 'a_0=\\frac2N\\sum y,\\quad a_1=\\frac2N\\sum y\\cos x,\\quad b_1=\\frac2N\\sum y\\sin x' },
            { label: 'Add y column', marks: 1, math: '\\sum y=30\\Rightarrow a_0=10' },
            { label: 'Add y cos x column', marks: 2, math: '\\sum y\\cos x=-6\\Rightarrow a_1=-2' },
            { label: 'Add y sin x column', marks: 2, math: '\\sum y\\sin x=4\\sqrt3\\Rightarrow b_1=\\frac{4\\sqrt3}{3}' },
            { label: 'Write first harmonic', marks: 1, math: '\\boxed{y=5-2\\cos x+\\frac{4\\sqrt3}{3}\\sin x}' },
          ],
          finalAnswer: '5-2\\cos x+\\frac{4\\sqrt3}{3}\\sin x',
        },
      ],
    },
    optionB: {
      number: 4,
      parts: [
        {
          label: 'a', marks: 6, topic: 'Full Fourier series', recurrence: 'Exact form appears in 2 papers',
          prompt: 'Obtain the Fourier series of f(x)=2x−x² in 0<x<2.',
          simpleIdea: 'The interval length is 2, so the waves are cos(nπx) and sin(nπx). Compute three coefficient families.',
          steps: [
            { label: 'Write series on (0,2)', marks: 1, math: 'f(x)=\\frac{a_0}{2}+\\sum_{n=1}^{\\infty}[a_n\\cos(n\\pi x)+b_n\\sin(n\\pi x)]' },
            { label: 'Constant coefficient', marks: 1, math: 'a_0=\\int_0^2(2x-x^2)dx=\\frac43' },
            { label: 'Cosine coefficient', marks: 2, math: 'a_n=\\int_0^2(2x-x^2)\\cos(n\\pi x)dx=-\\frac4{n^2\\pi^2}' },
            { label: 'Sine coefficient', marks: 1, math: 'b_n=0' },
            { label: 'Final series', marks: 1, math: '\\boxed{2x-x^2=\\frac23-\\frac4{\\pi^2}\\sum_{n=1}^{\\infty}\\frac{\\cos(n\\pi x)}{n^2}}' },
          ],
          finalAnswer: '\\frac23-\\frac4{\\pi^2}\\sum_{n=1}^{\\infty}\\frac{\\cos(n\\pi x)}{n^2}',
        },
        {
          label: 'b', marks: 7, topic: 'Half-range cosine series', recurrence: '10/10 choice sides',
          prompt: 'Obtain the half-range cosine series for f(x)=x² in 0<x<π.',
          simpleIdea: 'Cosine half-range is the even half of the full x² result.',
          steps: [
            { label: 'Write cosine form', marks: 1, math: 'x^2=\\frac{a_0}{2}+\\sum_{n=1}^{\\infty}a_n\\cos nx' },
            { label: 'Find a₀', marks: 2, math: 'a_0=\\frac2\\pi\\int_0^\\pi x^2dx=\\frac{2\\pi^2}{3}' },
            { label: 'Find aₙ', marks: 3, math: 'a_n=\\frac2\\pi\\int_0^\\pi x^2\\cos nx\\,dx=\\frac{4(-1)^n}{n^2}' },
            { label: 'Final series', marks: 1, math: '\\boxed{x^2=\\frac{\\pi^2}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2}\\cos nx}' },
          ],
          finalAnswer: '\\frac{\\pi^2}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2}\\cos nx',
        },
        {
          label: 'c', marks: 7, topic: 'Harmonic analysis', recurrence: 'Every Q3 and Q4',
          prompt: 'Using the same table in Q3(c), find the amplitude and phase of the first harmonic.',
          simpleIdea: 'The cosine and sine coefficients are the two legs of a right triangle. Its hypotenuse is amplitude.',
          steps: [
            { label: 'Use coefficients from the table', marks: 2, math: 'a_1=-2,\\qquad b_1=\\frac{4\\sqrt3}{3}' },
            { label: 'Find amplitude', marks: 2, math: 'R=\\sqrt{a_1^2+b_1^2}=\\sqrt{4+\\frac{16}{3}}=\\frac{2\\sqrt{21}}3' },
            { label: 'Find phase', marks: 2, math: '\\phi=\\operatorname{atan2}(b_1,a_1)=130.89^\\circ' },
            { label: 'Write harmonic form', marks: 1, math: '\\boxed{a_1\\cos x+b_1\\sin x=R\\cos(x-\\phi)}' },
          ],
          finalAnswer: 'R=\\frac{2\\sqrt{21}}3,\\quad \\phi=130.89^\\circ',
        },
      ],
    },
  },
  {
    module: 3,
    title: 'Fourier & Z Transforms',
    frequency: '5/5 papers: direct Z, inverse Z and recurrence; transform slot always present',
    optionA: {
      number: 5,
      parts: [
        {
          label: 'a', marks: 6, topic: 'Fourier transform', recurrence: 'Compact-support form repeated',
          prompt: 'Find the complex Fourier transform of f(x)=1 for |x|≤a and 0 for |x|>a.',
          simpleIdea: 'The function is a flat rectangle. Integrate e⁻ⁱˢˣ only across the rectangle from −a to a.',
          steps: [
            { label: 'State convention', marks: 1, math: 'F(s)=\\int_{-\\infty}^{\\infty}f(x)e^{-isx}dx' },
            { label: 'Use support of f', marks: 1, math: 'F(s)=\\int_{-a}^{a}e^{-isx}dx' },
            { label: 'Integrate', marks: 2, math: 'F(s)=\\left[\\frac{e^{-isx}}{-is}\\right]_{-a}^{a}' },
            { label: 'Use exponential sine identity', marks: 1, math: 'F(s)=\\frac{e^{ias}-e^{-ias}}{is}' },
            { label: 'Final result', marks: 1, math: '\\boxed{F(s)=\\frac{2\\sin(as)}s}' },
          ],
          finalAnswer: '\\frac{2\\sin(as)}s',
        },
        {
          label: 'b', marks: 7, topic: 'Sine and cosine transforms', recurrence: 'Appears repeatedly',
          prompt: 'Find the Fourier sine and cosine transforms of f(x)=e⁻ᵃˣ, a>0.',
          simpleIdea: 'One integral looks at the cosine shadow; the other looks at the sine shadow.',
          steps: [
            { label: 'Write definitions', marks: 1, math: 'F_c(s)=\\sqrt{\\frac2\\pi}\\int_0^\\infty f(x)\\cos sx\\,dx,\\quad F_s(s)=\\sqrt{\\frac2\\pi}\\int_0^\\infty f(x)\\sin sx\\,dx' },
            { label: 'Use standard cosine integral', marks: 2, math: '\\int_0^\\infty e^{-ax}\\cos sx\\,dx=\\frac a{a^2+s^2}' },
            { label: 'Cosine-transform result', marks: 1, math: 'F_c(s)=\\sqrt{\\frac2\\pi}\\frac a{a^2+s^2}' },
            { label: 'Use standard sine integral', marks: 2, math: '\\int_0^\\infty e^{-ax}\\sin sx\\,dx=\\frac s{a^2+s^2}' },
            { label: 'Sine-transform result', marks: 1, math: '\\boxed{F_s(s)=\\sqrt{\\frac2\\pi}\\frac s{a^2+s^2}}' },
          ],
          finalAnswer: 'F_c=\\sqrt{2/\\pi}\\,a/(a^2+s^2),\\quad F_s=\\sqrt{2/\\pi}\\,s/(a^2+s^2)',
        },
        {
          label: 'c', marks: 7, topic: 'Direct Z-transform', recurrence: '5/5 papers',
          prompt: 'Find Z{cos(nθ)} and Z{sin(nθ)}.',
          simpleIdea: 'Both sequences come from the geometric series with eⁱᶿ. The final denominator is the same.',
          steps: [
            { label: 'Use standard geometric result', marks: 1, math: 'Z\\{a^n\\}=\\frac z{z-a}' },
            { label: 'Write cosine through exponentials', marks: 2, math: '\\cos n\\theta=\\frac{e^{in\\theta}+e^{-in\\theta}}2' },
            { label: 'Simplify cosine transform', marks: 1, math: 'Z\\{\\cos n\\theta\\}=\\frac{z(z-\\cos\\theta)}{z^2-2z\\cos\\theta+1}' },
            { label: 'Write sine through exponentials', marks: 2, math: '\\sin n\\theta=\\frac{e^{in\\theta}-e^{-in\\theta}}{2i}' },
            { label: 'Simplify sine transform', marks: 1, math: '\\boxed{Z\\{\\sin n\\theta\\}=\\frac{z\\sin\\theta}{z^2-2z\\cos\\theta+1}}' },
          ],
          finalAnswer: 'Z\\{\\cos n\\theta\\}=\\frac{z(z-\\cos\\theta)}{z^2-2z\\cos\\theta+1},\\quad Z\\{\\sin n\\theta\\}=\\frac{z\\sin\\theta}{z^2-2z\\cos\\theta+1}',
        },
      ],
    },
    optionB: {
      number: 6,
      parts: [
        {
          label: 'a', marks: 6, topic: 'Fourier transform', recurrence: 'Triangular pulse repeated',
          prompt: 'Find the Fourier transform of f(x)=1−|x| for |x|≤1 and 0 otherwise.',
          simpleIdea: 'The triangle is even, so the sine part cancels. Double the cosine integral from 0 to 1.',
          steps: [
            { label: 'Use even symmetry', marks: 1, math: 'F(s)=2\\int_0^1(1-x)\\cos(sx)dx' },
            { label: 'Integrate the first term', marks: 1, math: '\\int_0^1\\cos(sx)dx=\\frac{\\sin s}{s}' },
            { label: 'Integrate x cos(sx)', marks: 2, math: '\\int_0^1x\\cos(sx)dx=\\frac{\\sin s}s+\\frac{\\cos s-1}{s^2}' },
            { label: 'Subtract and simplify', marks: 1, math: 'F(s)=\\frac{2(1-\\cos s)}{s^2}' },
            { label: 'Equivalent final form', marks: 1, math: '\\boxed{F(s)=\\frac{4\\sin^2(s/2)}{s^2}}' },
          ],
          finalAnswer: '\\frac{2(1-\\cos s)}{s^2}',
        },
        {
          label: 'b', marks: 7, topic: 'Inverse Z-transform', recurrence: '5/5 papers',
          prompt: 'Find Z⁻¹{(3z²−8z)/[(z−2)(z−3)]}.',
          simpleIdea: 'Make the numerator look like A·z/(z−2)+B·z/(z−3), then read the sequence directly.',
          steps: [
            { label: 'Assume standard partial fractions', marks: 1, math: 'X(z)=A\\frac z{z-2}+B\\frac z{z-3}' },
            { label: 'Combine numerators', marks: 1, math: '3z-8=A(z-3)+B(z-2)' },
            { label: 'Solve constants', marks: 2, math: 'A=2,\\qquad B=1' },
            { label: 'Use inverse pair', marks: 2, math: 'Z^{-1}\\left\\{\\frac z{z-a}\\right\\}=a^n' },
            { label: 'Final sequence', marks: 1, math: '\\boxed{x_n=2(2^n)+3^n}' },
          ],
          finalAnswer: '2^{n+1}+3^n',
        },
        {
          label: 'c', marks: 7, topic: 'Difference equation by Z-transform', recurrence: 'Operator (E+3)² in at least 4/5 papers',
          prompt: 'Using Z-transform, solve uₙ₊₂+6uₙ₊₁+9uₙ=2ⁿ, u₀=u₁=0.',
          simpleIdea: 'Transform every shifted sequence, solve for U(z), split into standard pieces, then transform back.',
          steps: [
            { label: 'Let U(z)=Z{uₙ} and transform', marks: 1, math: 'z^2U+6zU+9U=\\frac z{z-2}' },
            { label: 'Solve for U(z)', marks: 1, math: 'U(z)=\\frac z{(z-2)(z+3)^2}' },
            { label: 'Partial fractions in standard Z form', marks: 2, math: 'U(z)=\\frac1{25}\\frac z{z-2}-\\frac1{25}\\frac z{z+3}-\\frac15\\frac z{(z+3)^2}' },
            { label: 'Use inverse pairs', marks: 2, math: 'Z^{-1}\\left\\{\\frac z{z-a}\\right\\}=a^n,\\quad Z^{-1}\\left\\{\\frac z{(z-a)^2}\\right\\}=n a^{n-1}' },
            { label: 'Final answer', marks: 1, math: '\\boxed{u_n=\\frac{2^n-(-3)^n}{25}-\\frac n5(-3)^{n-1}}' },
          ],
          finalAnswer: '\\frac{2^n-(-3)^n}{25}-\\frac n5(-3)^{n-1}',
        },
      ],
    },
  },
  {
    module: 4,
    title: 'Numerical PDE',
    frequency: 'Every paper: classification, wave, parabolic and Laplace mesh — 10 marks each',
    optionA: {
      number: 7,
      parts: [
        {
          label: 'a', marks: 10, topic: 'PDE classification', recurrence: '5/5 papers',
          prompt: 'Classify: (i) uₓₓ+2uₓᵧ+uᵧᵧ=0, (ii) uₓₓ+4uᵧᵧ=0, (iii) uₓₓ−4uᵧᵧ=0, (iv) x²uₓₓ+2xyuₓᵧ+y²uᵧᵧ=0.',
          simpleIdea: 'For Auₓₓ+2Buₓᵧ+Cuᵧᵧ, calculate D=B²−AC. Negative is ellipse, zero is parabola, positive is hyperbola.',
          steps: [
            { label: 'State classification rule', marks: 2, math: 'D=B^2-AC;\\quad D<0\\Rightarrow elliptic,\\quad D=0\\Rightarrow parabolic,\\quad D>0\\Rightarrow hyperbolic' },
            { label: 'Equation (i)', marks: 2, math: 'A=1,B=1,C=1,\\ D=0\\Rightarrow\\boxed{parabolic}' },
            { label: 'Equation (ii)', marks: 2, math: 'A=1,B=0,C=4,\\ D=-4\\Rightarrow\\boxed{elliptic}' },
            { label: 'Equation (iii)', marks: 2, math: 'A=1,B=0,C=-4,\\ D=4\\Rightarrow\\boxed{hyperbolic}' },
            { label: 'Equation (iv)', marks: 2, math: 'A=x^2,B=xy,C=y^2,\\ D=x^2y^2-x^2y^2=0\\Rightarrow\\boxed{parabolic}' },
          ],
          finalAnswer: 'Parabolic, elliptic, hyperbolic, parabolic',
        },
        {
          label: 'b', marks: 10, topic: 'Wave-equation mesh', recurrence: '5/5 papers',
          prompt: 'Solve uₜₜ=uₓₓ with u(0,t)=u(4,t)=0, u(x,0)=x(4−x), uₜ(x,0)=0 using h=1, k=1 up to two time steps.',
          simpleIdea: 'Put the starting curve on grid points. Each new value is made from nearby old values, like neighbours sharing information.',
          steps: [
            { label: 'Compute mesh ratio and formula', marks: 2, math: 'r=k/h=1,\\quad u_{i,j+1}=u_{i-1,j}+u_{i+1,j}-u_{i,j-1}' },
            { label: 'Initial row', marks: 1, math: '[u_{0,0},u_{1,0},u_{2,0},u_{3,0},u_{4,0}]=[0,3,4,3,0]' },
            { label: 'First-row formula for zero velocity', marks: 2, math: 'u_{i,1}=u_{i,0}+\\frac{r^2}{2}(u_{i-1,0}-2u_{i,0}+u_{i+1,0})' },
            { label: 'First time row', marks: 2, math: '[u_{0,1},u_{1,1},u_{2,1},u_{3,1},u_{4,1}]=[0,2,3,2,0]' },
            { label: 'Second time row', marks: 2, math: 'u_{1,2}=0+3-3=0,\\ u_{2,2}=2+2-4=0,\\ u_{3,2}=3+0-3=0' },
            { label: 'Present table/result', marks: 1, math: '\\boxed{u(x,2)=[0,0,0,0,0]}' },
          ],
          finalAnswer: 'u(x,1)=[0,2,3,2,0],\\quad u(x,2)=[0,0,0,0,0]',
        },
      ],
    },
    optionB: {
      number: 8,
      parts: [
        {
          label: 'a', marks: 10, topic: 'Bender–Schmidt heat equation', recurrence: '5/5 papers',
          prompt: 'Solve uₜ=uₓₓ with u(0,t)=u(4,t)=0 and u(x,0)=x(4−x), h=1. Choose k so λ=k/h²=1/2 and find two time rows.',
          simpleIdea: 'When λ=1/2, the new middle value is simply the average of its left and right neighbours.',
          steps: [
            { label: 'Choose stable step', marks: 1, math: '\\lambda=\\frac{k}{h^2}=\\frac12\\Rightarrow k=0.5' },
            { label: 'Write Bender–Schmidt formula', marks: 2, math: 'u_{i,j+1}=\\frac12(u_{i-1,j}+u_{i+1,j})' },
            { label: 'Initial row', marks: 1, math: 'u(x,0)=[0,3,4,3,0]' },
            { label: 'First time row t=0.5', marks: 2, math: '[0,\\frac{0+4}{2},\\frac{3+3}{2},\\frac{4+0}{2},0]=[0,2,3,2,0]' },
            { label: 'Second time row t=1', marks: 2, math: '[0,\\frac{0+3}{2},\\frac{2+2}{2},\\frac{3+0}{2},0]=[0,1.5,2,1.5,0]' },
            { label: 'Tabulate and conclude', marks: 2, math: '\\boxed{u(1,1)=1.5,\\ u(2,1)=2,\\ u(3,1)=1.5}' },
          ],
          finalAnswer: 'u(x,0.5)=[0,2,3,2,0],\\quad u(x,1)=[0,1.5,2,1.5,0]',
        },
        {
          label: 'b', marks: 10, topic: 'Laplace square mesh', recurrence: '5/5 papers',
          prompt: 'For a 3×3 square grid, boundary values are top=100, bottom=0, left=0 and right=0. Find the single interior mesh value satisfying uₓₓ+uᵧᵧ=0.',
          simpleIdea: 'A Laplace mesh point wants peace: it becomes the average of its four neighbours.',
          steps: [
            { label: 'Write five-point formula', marks: 2, math: 'u_{i,j}=\\frac14(u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1})' },
            { label: 'Identify four neighbours', marks: 2, math: 'u_N=100,\\quad u_S=0,\\quad u_E=0,\\quad u_W=0' },
            { label: 'Substitute', marks: 2, math: 'u=\\frac14(100+0+0+0)' },
            { label: 'Calculate', marks: 2, math: 'u=25' },
            { label: 'Conclude with units/grid location', marks: 2, math: '\\boxed{u_{centre}=25}' },
          ],
          finalAnswer: 'u_{centre}=25',
        },
      ],
    },
  },
  {
    module: 5,
    title: 'RK4, Milne & Calculus of Variations',
    frequency: '5/5: RK4 in Q9, Milne in Q10, Euler derivation; straight-line result in 4/5',
    optionA: {
      number: 9,
      parts: [
        {
          label: 'a', marks: 6, topic: 'RK4 for second-order ODE', recurrence: '5/5 papers',
          prompt: 'Using RK4, solve y″+xy′+y=0 for x=0.2, given y(0)=1 and y′(0)=0.',
          simpleIdea: 'Rename y′ as z. Now one second-order equation becomes two friendly first-order equations.',
          steps: [
            { label: 'Reduce order', marks: 1, math: 'y\u2032=z,\\qquad z\u2032=-xz-y,\\qquad h=0.2' },
            { label: 'First pair', marks: 1, math: 'k_1=0,\\qquad l_1=-0.2' },
            { label: 'Second pair', marks: 1, math: 'k_2=-0.02,\\qquad l_2=-0.198' },
            { label: 'Third pair', marks: 1, math: 'k_3=-0.0198,\\qquad l_3=-0.19602' },
            { label: 'Fourth pair', marks: 1, math: 'k_4=-0.039204,\\qquad l_4=-0.1881992' },
            { label: 'Weighted RK4 update', marks: 1, math: '\\boxed{y(0.2)=0.9802,\\qquad y\u2032(0.2)=-0.1960}' },
          ],
          finalAnswer: 'y(0.2)=0.9802,\\quad y\u2032(0.2)=-0.1960',
        },
        {
          label: 'b', marks: 7, topic: 'Euler equation derivation', recurrence: '5/5 papers',
          prompt: 'Derive Euler’s equation for I=∫F(x,y,y′)dx.',
          simpleIdea: 'Wiggle the best curve by a tiny amount. If it is truly best, the first tiny change in I must be zero.',
          steps: [
            { label: 'Introduce variation', marks: 1, math: 'y_\\varepsilon=y+\\varepsilon\\eta,\\qquad \\eta(x_1)=\\eta(x_2)=0' },
            { label: 'Differentiate the functional', marks: 1, math: '\\left.\\frac{dI}{d\\varepsilon}\\right|_0=\\int_{x_1}^{x_2}\\left(F_y\\eta+F_{y\u2032}\\eta\u2032\\right)dx=0' },
            { label: 'Integrate second term by parts', marks: 2, math: '\\int F_{y\u2032}\\eta\u2032dx=[F_{y\u2032}\\eta]_{x_1}^{x_2}-\\int\\frac d{dx}(F_{y\u2032})\\eta dx' },
            { label: 'Use endpoint conditions', marks: 1, math: '\\int_{x_1}^{x_2}\\left[F_y-\\frac d{dx}(F_{y\u2032})\\right]\\eta dx=0' },
            { label: 'Apply fundamental lemma', marks: 1, math: 'F_y-\\frac d{dx}(F_{y\u2032})=0' },
            { label: 'State final Euler equation', marks: 1, math: '\\boxed{\\frac{\\partial F}{\\partial y}-\\frac d{dx}\\left(\\frac{\\partial F}{\\partial y\u2032}\\right)=0}' },
          ],
          finalAnswer: '\\frac{\\partial F}{\\partial y}-\\frac d{dx}(\\frac{\\partial F}{\\partial y\u2032})=0',
        },
        {
          label: 'c', marks: 7, topic: 'Shortest distance', recurrence: '4/5 papers',
          prompt: 'Prove that the shortest distance between two points in a plane is a straight line.',
          simpleIdea: 'The shortest path cannot waste distance by bending. Euler’s equation proves the slope must stay constant.',
          steps: [
            { label: 'Write length functional', marks: 1, math: 'I=\\int\\sqrt{1+y\u2032^2}dx,\\quad F=\\sqrt{1+y\u2032^2}' },
            { label: 'Use F independent of y', marks: 1, math: '\\frac{\\partial F}{\\partial y}=0' },
            { label: 'Apply Euler equation', marks: 2, math: '\\frac d{dx}\\left(\\frac{y\u2032}{\\sqrt{1+y\u2032^2}}\\right)=0' },
            { label: 'Integrate once', marks: 1, math: '\\frac{y\u2032}{\\sqrt{1+y\u2032^2}}=C\\Rightarrow y\u2032=m' },
            { label: 'Integrate again', marks: 1, math: 'y=mx+c' },
            { label: 'Interpret', marks: 1, math: '\\boxed{y=mx+c\\text{ is a straight line}}' },
          ],
          finalAnswer: 'y=mx+c',
        },
      ],
    },
    optionB: {
      number: 10,
      parts: [
        {
          label: 'a', marks: 6, topic: 'Milne predictor-corrector', recurrence: '5/5; near-identical data repeats',
          prompt: 'For y″+xy′+y=0, use Milne’s method to find y(0.4), given x=0,0.1,0.2,0.3; y=1,0.995,0.9802,0.956; y′=0,−0.0995,−0.196,−0.2867.',
          simpleIdea: 'Predict both y and z=y′ from four old points, then correct them using the new slope.',
          steps: [
            { label: 'Set z=y′ and compute z′', marks: 1, math: 'z\u2032=f(x,y,z)=-xz-y;\\quad f_0=-1,f_1=-0.98505,f_2=-0.941,f_3=-0.86999' },
            { label: 'Predict y₄', marks: 1, math: 'y_4^{(p)}=y_0+\\frac{4h}{3}(2z_1-z_2+2z_3)=0.9231467' },
            { label: 'Predict z₄', marks: 1, math: 'z_4^{(p)}=z_0+\\frac{4h}{3}(2f_1-f_2+2f_3)=-0.3692107' },
            { label: 'Compute predicted f₄', marks: 1, math: 'f_4^{(p)}=-0.4z_4^{(p)}-y_4^{(p)}=-0.7754624' },
            { label: 'Correct y₄ and z₄', marks: 1, math: 'y_4^{(c)}=y_2+\\frac h3(z_2+4z_3+z_4^{(p)})=0.9231330' },
            { label: 'Final values', marks: 1, math: '\\boxed{y(0.4)=0.9231,\\quad y\u2032(0.4)=-0.3692}' },
          ],
          finalAnswer: 'y(0.4)=0.9231,\\quad y\u2032(0.4)=-0.3692',
        },
        {
          label: 'b', marks: 7, topic: 'Extremal', recurrence: 'Every paper',
          prompt: 'Find the extremal of I=∫(y′²−y²+2xy)dx.',
          simpleIdea: 'Take one derivative with respect to y and one with respect to y′, then put both into Euler’s machine.',
          steps: [
            { label: 'Identify F', marks: 1, math: 'F=y\u2032^2-y^2+2xy' },
            { label: 'Calculate partial derivatives', marks: 2, math: 'F_y=-2y+2x,\\qquad F_{y\u2032}=2y\u2032' },
            { label: 'Apply Euler equation', marks: 1, math: '-2y+2x-2y\u2033=0' },
            { label: 'Form the ODE', marks: 1, math: 'y\u2033+y=x' },
            { label: 'Solve complementary and particular parts', marks: 1, math: 'y_c=C_1\\cos x+C_2\\sin x,\\quad y_p=x' },
            { label: 'Final extremal', marks: 1, math: '\\boxed{y=C_1\\cos x+C_2\\sin x+x}' },
          ],
          finalAnswer: 'C_1\\cos x+C_2\\sin x+x',
        },
        {
          label: 'c', marks: 7, topic: 'Extremal with forcing', recurrence: 'Every paper has a functional',
          prompt: 'Find the extremal of I=∫(y²+y′²+2yeˣ)dx.',
          simpleIdea: 'Euler gives a simple differential equation. Solve its natural part, then add one matching eˣ term carefully.',
          steps: [
            { label: 'Identify F', marks: 1, math: 'F=y^2+y\u2032^2+2ye^x' },
            { label: 'Find derivatives', marks: 2, math: 'F_y=2y+2e^x,\\qquad F_{y\u2032}=2y\u2032' },
            { label: 'Apply Euler equation', marks: 1, math: '2y+2e^x-2y\u2033=0\\Rightarrow y\u2033-y=e^x' },
            { label: 'Complementary solution', marks: 1, math: 'y_c=C_1e^x+C_2e^{-x}' },
            { label: 'Resonant particular solution', marks: 1, math: 'y_p=\\frac12xe^x' },
            { label: 'Final extremal', marks: 1, math: '\\boxed{y=C_1e^x+C_2e^{-x}+\\frac12xe^x}' },
          ],
          finalAnswer: 'C_1e^x+C_2e^{-x}+\\frac12xe^x',
        },
      ],
    },
  },
]

export const paperTotal = m3Modules.reduce((total, module) => total + module.optionA.parts.reduce((sum, part) => sum + part.marks, 0), 0)
