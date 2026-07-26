import type { ModuleChoice } from './m3MockPaper'

export const m4Modules: ModuleChoice[] = [
  {
    module: 1,
    title: 'Fundamentals of Logic',
    frequency: '3/3 scanned papers: tautology, inference, equivalence and quantifiers',
    optionA: { number: 1, parts: [
      { label: 'a', marks: 6, topic: 'Tautology', recurrence: '3/3 papers', prompt: 'Define tautology. Show by truth table that [(p→q)∧(q→r)]→(p→r) is a tautology.', simpleIdea: 'A tautology is a statement that never becomes false. Check all eight truth-value rows; the final column must contain only T.', steps: [
        { label: 'Define tautology', marks: 1, text: 'A compound proposition true for every assignment of truth values.' },
        { label: 'List eight combinations', marks: 1, math: '(p,q,r)=TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF' },
        { label: 'Compute p→q and q→r', marks: 1, text: 'An implication is false only when its first part is true and second part is false.' },
        { label: 'Compute conjunction and p→r', marks: 1, text: 'Form the two columns needed by the outer implication.' },
        { label: 'Compute final implication', marks: 1, text: 'The final column is T in all eight rows.' },
        { label: 'Conclude', marks: 1, math: '\\boxed{[(p\\to q)\\land(q\\to r)]\\to(p\\to r)\\text{ is a tautology}}' },
      ], finalAnswer: '\\text{Tautology}' },
      { label: 'b', marks: 7, topic: 'Rules of inference', recurrence: '3/3 papers', prompt: 'Test: If a program compiles, it executes. If it executes, its output can be tested. Its output cannot be tested. Therefore it does not compile.', simpleIdea: 'Give each sentence a letter. Chain the first two arrows, then use the negative ending to move backward.', steps: [
        { label: 'Assign propositions', marks: 1, math: 'p=\\text{compiles},\\ q=\\text{executes},\\ r=\\text{testable}' },
        { label: 'Translate premises', marks: 2, math: 'p\\to q,\\quad q\\to r,\\quad\\neg r' },
        { label: 'Chain implications', marks: 1, math: 'p\\to r\\quad\\text{(hypothetical syllogism)}' },
        { label: 'Apply modus tollens', marks: 2, math: 'p\\to r,\\neg r\\therefore\\neg p' },
        { label: 'Conclusion', marks: 1, math: '\\boxed{\\text{The argument is valid}}' },
      ], finalAnswer: '\\text{Valid; }\\neg p' },
      { label: 'c', marks: 7, topic: 'Direct proof', recurrence: '2/3 papers + model paper', prompt: 'Prove directly: if n is odd, then n² is odd and n²+1 is even.', simpleIdea: 'Odd numbers always look like 2k+1. Square that form and rearrange it into “two times an integer plus one.”', steps: [
        { label: 'Write odd form', marks: 1, math: 'n=2k+1,\\ k\\in\\mathbb Z' },
        { label: 'Square it', marks: 2, math: 'n^2=4k^2+4k+1=2(2k^2+2k)+1' },
        { label: 'Conclude n² odd', marks: 1, text: 'It has the form 2m+1.' },
        { label: 'Add one', marks: 2, math: 'n^2+1=2(2k^2+2k+1)' },
        { label: 'Conclude', marks: 1, math: '\\boxed{n^2\\text{ odd and }n^2+1\\text{ even}}' },
      ], finalAnswer: 'n^2\\text{ odd},\\ n^2+1\\text{ even}' },
    ]},
    optionB: { number: 2, parts: [
      { label: 'a', marks: 6, topic: 'Tautology by truth table', recurrence: '3/3 papers', prompt: 'Show by truth table that [(p→q)∧p]→q is a tautology.', simpleIdea: 'This is modus ponens written as one formula. Check all four p,q rows; the final column must never become false.', steps: [
        { label: 'Write four combinations', marks: 1, math: '(p,q)=TT,TF,FT,FF' },
        { label: 'Compute p→q', marks: 1, text: 'It is false only for p=T and q=F.' },
        { label: 'Compute the conjunction', marks: 1, text: 'Find (p→q)∧p for each row.' },
        { label: 'Compute final implication', marks: 2, text: 'The final values are T,T,T,T.' },
        { label: 'Conclude', marks: 1, math: '\\boxed{[(p\\to q)\\land p]\\to q\\text{ is a tautology}}' },
      ], finalAnswer: '\\text{Tautology}' },
      { label: 'b', marks: 7, topic: 'Quantifiers', recurrence: '3/3 papers', prompt: 'Over integers, find truth values: (i) ∀x,x²≥0 (ii) ∃x,x²=2 (iii) ∀x, even(x)→even(x²) (iv) ∃x,x<0 and x²=9.', simpleIdea: '“For all” needs every integer to work. “There exists” needs only one example. A single counterexample defeats “for all.”', steps: [
        { label: 'Statement (i)', marks: 1, text: 'True: every integer square is nonnegative.' },
        { label: 'Statement (ii)', marks: 2, text: 'False: no integer has square 2.' },
        { label: 'Statement (iii)', marks: 2, math: 'x=2k\\Rightarrow x^2=2(2k^2)\\Rightarrow\\text{ true}' },
        { label: 'Statement (iv)', marks: 1, math: 'x=-3\\text{ is a witness, so true}' },
        { label: 'Final list', marks: 1, math: '\\boxed{T,F,T,T}' },
      ], finalAnswer: 'T,F,T,T' },
      { label: 'c', marks: 7, topic: 'Symbolic form and negation', recurrence: '3/3 papers', prompt: 'Write symbolically and negate: “Every integer divisible by 4 is even.” State whether it is true.', simpleIdea: 'Negating “every” changes it to “there is at least one,” and the arrow becomes “first condition true but second false.”', steps: [
        { label: 'Declare universe', marks: 1, math: 'n\\in\\mathbb Z' },
        { label: 'Symbolic statement', marks: 2, math: '\\forall n,\\ 4\\mid n\\to2\\mid n' },
        { label: 'Negation', marks: 2, math: '\\exists n,\\ 4\\mid n\\land2\\nmid n' },
        { label: 'Verify', marks: 1, math: 'n=4k=2(2k)\\Rightarrow2\\mid n' },
        { label: 'Conclusion', marks: 1, math: '\\boxed{\\text{Original statement is true}}' },
      ], finalAnswer: '\\forall n,4\\mid n\\to2\\mid n\\text{ is true}' },
    ]},
  },
  {
    module: 2, title: 'Relations, Functions and Graph Theory', frequency: 'Every option combines a function, relation/poset and graph problem',
    optionA: { number: 3, parts: [
      { label: 'a', marks: 6, topic: 'Counting functions', recurrence: '6/6 option sides', prompt: 'If |A|=4 and |B|=6, find all, one-one and onto functions A→B and B→A.', simpleIdea: 'For each input choose an output. One-one means no output repeats. Onto means every output is hit at least once.', steps: [
        { label: 'All A→B functions', marks: 1, math: '6^4=1296' }, { label: 'One-one A→B', marks: 1, math: '{}^6P_4=360' }, { label: 'Onto A→B', marks: 1, math: '0\\quad(4<6)' },
        { label: 'All B→A functions', marks: 1, math: '4^6=4096' }, { label: 'One-one B→A', marks: 1, math: '0\\quad(6>4)' },
        { label: 'Onto B→A by inclusion-exclusion', marks: 1, math: '4^6-\\binom413^6+\\binom422^6-\\binom431^6=1560' },
      ], finalAnswer: 'A\\to B:(1296,360,0);\\ B\\to A:(4096,0,1560)' },
      { label: 'b', marks: 7, topic: 'Poset and Hasse diagram', recurrence: '2/3 papers + models', prompt: 'On A={1,2,3,6}, define xRy iff x divides y. Prove it is a poset and draw the Hasse diagram.', simpleIdea: 'Divisibility creates levels: 1 is below everything, 6 is above 2 and 3. Remove loop and shortcut arrows to get the Hasse diagram.', steps: [
        { label: 'Write relation', marks: 2, math: 'R=\\{(1,1),(1,2),(1,3),(1,6),(2,2),(2,6),(3,3),(3,6),(6,6)\\}' },
        { label: 'Reflexive', marks: 1, math: 'x\\mid x' }, { label: 'Antisymmetric', marks: 1, text: 'For positive integers, x|y and y|x imply x=y.' },
        { label: 'Transitive', marks: 1, text: 'x|y and y|z imply x|z.' }, { label: 'Cover relations', marks: 1, math: '1\\prec2,1\\prec3,2\\prec6,3\\prec6' },
        { label: 'Hasse levels', marks: 1, math: '\\boxed{1\\text{ below }2,3\\text{ below }6}' },
      ], finalAnswer: '1\\prec2,1\\prec3,2\\prec6,3\\prec6' },
      { label: 'c', marks: 7, topic: 'Degree theorem', recurrence: 'Graph theory in 6/6 option sides', prompt: 'Prove that the number of odd-degree vertices in a finite undirected graph is even.', simpleIdea: 'Every edge gives two degree-counts, so the total degree is even. Odd numbers can add to an even number only when there are an even number of them.', steps: [
        { label: 'Handshaking lemma', marks: 2, math: '\\sum_{v\\in V}\\deg(v)=2|E|\\text{ is even}' },
        { label: 'Separate parity groups', marks: 1, math: '\\sum_V\\deg v=\\sum_{V_e}\\deg v+\\sum_{V_o}\\deg v' },
        { label: 'Even-degree sum', marks: 1, text: 'The first sum is even.' }, { label: 'Odd-degree sum', marks: 2, text: 'The second sum must be even; a sum of odd integers is even only when their count is even.' },
        { label: 'Conclusion', marks: 1, math: '\\boxed{|V_o|\\text{ is even}}' },
      ], finalAnswer: '|V_o|\\text{ is even}' },
    ]},
    optionB: { number: 4, parts: [
      { label: 'a', marks: 6, topic: 'Inverse function', recurrence: 'Exact family repeated', prompt: 'For f(x)=3x−4, find f⁻¹ and verify both compositions.', simpleIdea: 'Call the output y, solve backward for x, then swap the letter. Composition checks that going forward then backward returns the start.', steps: [
        { label: 'Set y=f(x)', marks: 1, math: 'y=3x-4' }, { label: 'Solve for x', marks: 1, math: 'x=(y+4)/3' },
        { label: 'State inverse', marks: 1, math: 'f^{-1}(x)=(x+4)/3' }, { label: 'Verify f∘f⁻¹', marks: 1.5, math: 'f((x+4)/3)=x' },
        { label: 'Verify f⁻¹∘f', marks: 1.5, math: 'f^{-1}(3x-4)=x' },
      ], finalAnswer: 'f^{-1}(x)=\\frac{x+4}{3}' },
      { label: 'b', marks: 7, topic: 'Equivalence relation', recurrence: '2/3 papers', prompt: 'On A={1,2,3}, let aRb when a and b have the same parity. Write R and its matrix, prove equivalence and give the partition.', simpleIdea: 'Numbers are friends when both are odd or both are even. Friend groups become equivalence classes.', steps: [
        { label: 'Ordered pairs', marks: 2, math: 'R=\\{(1,1),(1,3),(2,2),(3,1),(3,3)\\}' },
        { label: 'Matrix', marks: 1, math: 'M_R=\\begin{bmatrix}1&0&1\\\\0&1&0\\\\1&0&1\\end{bmatrix}' },
        { label: 'Reflexive', marks: 1, text: 'Every number has its own parity.' }, { label: 'Symmetric', marks: 1, text: 'Same parity works in both directions.' },
        { label: 'Transitive', marks: 1, text: 'If a matches b and b matches c, a matches c.' }, { label: 'Partition', marks: 1, math: '\\boxed{\\{\\{1,3\\},\\{2\\}\\}}' },
      ], finalAnswer: '\\{\\{1,3\\},\\{2\\}\\}' },
      { label: 'c', marks: 7, topic: 'Euler trail', recurrence: 'Graph problem in 6/6 option sides', prompt: 'For V={a,b,c,d}, E={ab,bc,cd,da,ac}, find degrees and determine whether an Euler trail/circuit exists.', simpleIdea: 'Count edges touching each vertex. Exactly two odd vertices means an Euler trail starts at one and ends at the other.', steps: [
        { label: 'Find degrees', marks: 2, math: '\\deg a=3,\\deg b=2,\\deg c=3,\\deg d=2' },
        { label: 'Odd vertices', marks: 1, math: 'a,c' }, { label: 'Apply criterion', marks: 2, text: 'Exactly two odd vertices gives an Euler trail but no Euler circuit.' },
        { label: 'Give trail', marks: 1, math: 'a-b-c-d-a-c' }, { label: 'Conclusion', marks: 1, math: '\\boxed{\\text{Euler trail exists; circuit does not}}' },
      ], finalAnswer: 'a-b-c-d-a-c\\text{ is an Euler trail}' },
    ]},
  },
  {
    module: 3, title: 'Statistical Methods', frequency: '3/3: rank/correlation, regression and least-squares curve fitting',
    optionA: { number: 5, parts: [
      { label: 'a', marks: 6, topic: 'Spearman rank correlation', recurrence: '3/3 papers', prompt: 'Two judges rank five contestants as (1,2,3,4,5) and (2,1,3,5,4). Find Spearman’s rank correlation.', simpleIdea: 'Subtract the two ranks for each person, square the differences, add them, then use one formula.', steps: [
        { label: 'Differences', marks: 1, math: 'd=(-1,1,0,-1,1)' }, { label: 'Squares', marks: 1, math: 'd^2=(1,1,0,1,1)' },
        { label: 'Total', marks: 1, math: '\\sum d^2=4,\\ n=5' }, { label: 'Formula', marks: 1, math: '\\rho=1-\\frac{6\\sum d^2}{n(n^2-1)}' },
        { label: 'Substitute', marks: 1, math: '\\rho=1-24/120' }, { label: 'Answer', marks: 1, math: '\\boxed{\\rho=0.8}' },
      ], finalAnswer: '\\rho=0.8' },
      { label: 'b', marks: 7, topic: 'Parabola fitting', recurrence: '3/3 papers', prompt: 'Fit y=a+bx+cx² to x=−2,−1,0,1,2 and y=9,4,1,0,1. Estimate y at x=3.', simpleIdea: 'Build the three normal equations from column totals. Symmetric x-values make many odd-power totals zero.', steps: [
        { label: 'Compute totals', marks: 2, math: '\\sum x=\\sum x^3=0,\\sum x^2=10,\\sum x^4=34,\\sum y=15,\\sum xy=-20,\\sum x^2y=44' },
        { label: 'Normal equations', marks: 2, math: '15=5a+10c,\\quad-20=10b,\\quad44=10a+34c' },
        { label: 'Solve coefficients', marks: 2, math: 'a=1,\\ b=-2,\\ c=1' }, { label: 'Estimate', marks: 1, math: '\\boxed{y=(x-1)^2;\\ y(3)=4}' },
      ], finalAnswer: 'y=1-2x+x^2,\\quad y(3)=4' },
      { label: 'c', marks: 7, topic: 'Regression equations', recurrence: '3/3 papers', prompt: 'Regression equations are x=0.5y+1 and y=0.8x+2. Find x̄, ȳ and r.', simpleIdea: 'Both regression lines cross at the two means. Solve them together, then multiply the two regression coefficients and take the square root.', steps: [
        { label: 'Intersection principle', marks: 1, text: 'Regression lines meet at (x̄,ȳ).' }, { label: 'Solve x̄', marks: 2, math: 'x=0.5(0.8x+2)+1\\Rightarrow\\bar x=10/3' },
        { label: 'Find ȳ', marks: 1, math: '\\bar y=0.8(10/3)+2=14/3' }, { label: 'Coefficients', marks: 1, math: 'b_{xy}=0.5,\\ b_{yx}=0.8' },
        { label: 'Correlation', marks: 2, math: '\\boxed{r=+\\sqrt{0.4}=0.6325}' },
      ], finalAnswer: '\\bar x=10/3,\\bar y=14/3,r=0.6325' },
    ]},
    optionB: { number: 6, parts: [
      { label: 'a', marks: 6, topic: 'Karl Pearson correlation', recurrence: '3/3 papers', prompt: 'Find Karl Pearson’s r for x=(1,2,3,4,5), y=(2,4,5,4,5).', simpleIdea: 'Measure how x and y move away from their averages together. Same-direction movement makes the product positive.', steps: [
        { label: 'Means', marks: 1, math: '\\bar x=3,\\bar y=4' }, { label: 'Deviation totals', marks: 2, math: '\\sum dx\\,dy=6,\\sum dx^2=10,\\sum dy^2=6' },
        { label: 'Formula', marks: 1, math: 'r=\\frac{\\sum dxdy}{\\sqrt{\\sum dx^2\\sum dy^2}}' }, { label: 'Substitute', marks: 1, math: 'r=6/\\sqrt{60}' },
        { label: 'Answer', marks: 1, math: '\\boxed{r=0.7746}' },
      ], finalAnswer: 'r=0.7746' },
      { label: 'b', marks: 7, topic: 'Straight-line fitting', recurrence: '3/3 papers', prompt: 'Fit y=a+bx to x=(0,1,2,3), y=(1,3,5,7) and estimate y at x=5.', simpleIdea: 'Least squares chooses the line with the smallest total squared misses. Here the points already lie exactly on one line.', steps: [
        { label: 'Normal equations', marks: 2, math: '\\sum y=na+b\\sum x,\\quad\\sum xy=a\\sum x+b\\sum x^2' },
        { label: 'Totals', marks: 1, math: 'n=4,\\sum x=6,\\sum y=16,\\sum x^2=14,\\sum xy=34' },
        { label: 'Substitute', marks: 1, math: '4a+6b=16,\\quad6a+14b=34' }, { label: 'Solve', marks: 2, math: 'a=1,b=2' },
        { label: 'Estimate', marks: 1, math: '\\boxed{y=1+2x;\\ y(5)=11}' },
      ], finalAnswer: 'y=1+2x,\\quad y(5)=11' },
      { label: 'c', marks: 7, topic: 'Power curve', recurrence: '2/3 papers + model', prompt: 'Fit y=axᵇ to x=(1,2,4,8), y=(3,12,48,192).', simpleIdea: 'Take logarithms so powers become multiplication. Here doubling x multiplies y by four, so the power must be two.', steps: [
        { label: 'Linearize', marks: 2, math: '\\log y=\\log a+b\\log x' }, { label: 'Compare ratios', marks: 2, math: 'x\\times2\\Rightarrow y\\times4\\Rightarrow2^b=4' },
        { label: 'Find b', marks: 1, math: 'b=2' }, { label: 'Find a', marks: 1, math: '3=a(1)^2\\Rightarrow a=3' },
        { label: 'Result', marks: 1, math: '\\boxed{y=3x^2}' },
      ], finalAnswer: 'y=3x^2' },
    ]},
  },
  {
    module: 4, title: 'Probability Distributions', frequency: 'Every option: PMF/PDF plus Binomial, Poisson or Normal',
    optionA: { number: 7, parts: [
      { label: 'a', marks: 6, topic: 'Discrete PMF', recurrence: '3/3 papers', prompt: 'For x=0,1,2,3 with P(X=x)=k,2k,3k,4k, find k, mean, variance and SD.', simpleIdea: 'Probabilities must add to one. Then make xP(x) and x²P(x) columns to get the mean and spread.', steps: [
        { label: 'Normalize', marks: 1, math: '10k=1\\Rightarrow k=0.1' }, { label: 'Mean', marks: 2, math: 'E(X)=0+0.2+0.6+1.2=2' },
        { label: 'Second moment', marks: 1, math: 'E(X^2)=0+0.2+1.2+3.6=5' }, { label: 'Variance', marks: 1, math: '\\operatorname{Var}X=5-2^2=1' },
        { label: 'SD', marks: 1, math: '\\boxed{k=0.1,\\mu=2,\\sigma=1}' },
      ], finalAnswer: 'k=0.1,\\mu=2,\\sigma^2=1,\\sigma=1' },
      { label: 'b', marks: 7, topic: 'Poisson distribution', recurrence: '3/3 papers', prompt: 'Server requests per minute follow Poisson mean 2. Find P(0), P(2), and P(X≥3).', simpleIdea: 'Poisson counts events in a fixed interval. For “at least 3,” subtract the easy cases 0, 1 and 2 from one.', steps: [
        { label: 'Formula', marks: 1, math: 'P(X=x)=e^{-2}2^x/x!' }, { label: 'No request', marks: 2, math: 'P(0)=e^{-2}=0.1353' },
        { label: 'Exactly two', marks: 2, math: 'P(2)=2e^{-2}=0.2707' }, { label: 'At least three', marks: 2, math: '\\boxed{1-e^{-2}(1+2+2)=0.3233}' },
      ], finalAnswer: 'P(0)=0.1353,P(2)=0.2707,P(X\\ge3)=0.3233' },
      { label: 'c', marks: 7, topic: 'Normal distribution', recurrence: '3/3 papers', prompt: 'Scores of 1000 students are N(100,10²). Estimate counts above 120, below 90, and between 90 and 110.', simpleIdea: 'Convert every score to a z-score—how many standard deviations it is from the mean—then read the normal table and multiply by 1000.', steps: [
        { label: 'Standardize', marks: 1, math: 'z=(x-100)/10' }, { label: 'Above 120', marks: 2, math: '1000[1-\\Phi(2)]=22.8\\approx23' },
        { label: 'Below 90', marks: 2, math: '1000\\Phi(-1)=158.7\\approx159' }, { label: 'Between 90 and 110', marks: 2, math: '\\boxed{1000[2\\Phi(1)-1]=682.6\\approx683}' },
      ], finalAnswer: '23,159,683\\text{ students}' },
    ]},
    optionB: { number: 8, parts: [
      { label: 'a', marks: 6, topic: 'Continuous PDF', recurrence: '3/3 papers', prompt: 'Let f(x)=kx for 0<x<2 and 0 otherwise. Find k, E(X), and P(0.5<X<1.5).', simpleIdea: 'The total area under a density must be one. Probabilities are areas between the requested limits.', steps: [
        { label: 'Normalize', marks: 2, math: '\\int_0^2kx\\,dx=1\\Rightarrow k=1/2' }, { label: 'Mean setup', marks: 1, math: 'E(X)=\\int_0^2x(x/2)dx' },
        { label: 'Mean', marks: 1, math: 'E(X)=4/3' }, { label: 'Probability setup', marks: 1, math: '\\int_{0.5}^{1.5}x/2\\,dx' },
        { label: 'Answer', marks: 1, math: '\\boxed{k=1/2,E(X)=4/3,P=1/2}' },
      ], finalAnswer: 'k=1/2,E(X)=4/3,P=1/2' },
      { label: 'b', marks: 7, topic: 'Binomial distribution', recurrence: '3/3 papers', prompt: 'If X~B(5,0.2), find P(X=0), P(X=2), and P(X≥1).', simpleIdea: 'Binomial is for a fixed number of independent yes/no trials. “At least one” is easiest as one minus none.', steps: [
        { label: 'Identify values', marks: 1, math: 'n=5,p=0.2,q=0.8' }, { label: 'None', marks: 2, math: 'P(0)=q^5=0.32768' },
        { label: 'Exactly two', marks: 2, math: 'P(2)=\\binom52p^2q^3=0.2048' }, { label: 'At least one', marks: 2, math: '\\boxed{P(X\\ge1)=1-q^5=0.67232}' },
      ], finalAnswer: '0.32768,0.2048,0.67232' },
      { label: 'c', marks: 7, topic: 'Rare-event Poisson approximation', recurrence: 'Exact pattern in 2/3 + model', prompt: 'A bad reaction has probability 0.001. For 2000 people, find P(more than 2 reactions).', simpleIdea: 'Many trials with a tiny probability behave like Poisson. The mean is np=2. Subtract cases 0,1,2 from one.', steps: [
        { label: 'Choose approximation', marks: 1, math: '\\lambda=np=2000(0.001)=2' }, { label: 'Poisson formula', marks: 1, math: 'P(X=x)=e^{-2}2^x/x!' },
        { label: 'Complement', marks: 2, math: 'P(X>2)=1-[P(0)+P(1)+P(2)]' }, { label: 'Substitute', marks: 2, math: '=1-e^{-2}(1+2+2)' },
        { label: 'Answer', marks: 1, math: '\\boxed{P(X>2)\\approx0.3233}' },
      ], finalAnswer: 'P(X>2)\\approx0.3233' },
    ]},
  },
  {
    module: 5, title: 'Joint Distributions and Hypothesis Testing', frequency: '3/3: joint PMF, z/t tests, Type errors and chi-square',
    optionA: { number: 9, parts: [
      { label: 'a', marks: 6, topic: 'Joint distribution', recurrence: '3/3 papers', prompt: 'Joint probabilities for X=0,1 and Y=1,2 are [[0.2,0.3],[0.2,0.3]]. Find E(X), E(Y), E(XY), covariance and correlation.', simpleIdea: 'Add rows and columns for marginal probabilities. Covariance checks whether X and Y move together beyond what their separate means predict.', steps: [
        { label: 'Marginals', marks: 1, math: 'P_X=(0.5,0.5),\\quad P_Y=(0.4,0.6)' }, { label: 'Means', marks: 2, math: 'E(X)=0.5,\\quad E(Y)=1.6' },
        { label: 'Product mean', marks: 1, math: 'E(XY)=0.8' }, { label: 'Covariance', marks: 1, math: '0.8-(0.5)(1.6)=0' },
        { label: 'Correlation', marks: 1, math: '\\boxed{\\rho=0}' },
      ], finalAnswer: 'E(X)=0.5,E(Y)=1.6,E(XY)=0.8,\\operatorname{Cov}=0,\\rho=0' },
      { label: 'b', marks: 7, topic: 'Large-sample z-test', recurrence: '3/3 papers', prompt: 'n=100, x̄=52, known σ=10. Test H₀:μ=50 against μ≠50 at 5%.', simpleIdea: 'See how many standard errors the sample mean is away from the claimed mean. Compare that z-distance with 1.96.', steps: [
        { label: 'Hypotheses', marks: 1, math: 'H_0:\\mu=50,\\ H_1:\\mu\\ne50' }, { label: 'Critical rule', marks: 1, math: '|z|>1.96\\Rightarrow\\text{reject}' },
        { label: 'Standard error', marks: 1, math: 'SE=10/\\sqrt{100}=1' }, { label: 'Statistic', marks: 2, math: 'z=(52-50)/1=2' },
        { label: 'Decision', marks: 1, math: '2>1.96\\Rightarrow\\text{reject }H_0' }, { label: 'Conclusion', marks: 1, text: 'The mean differs significantly from 50 at 5%.' },
      ], finalAnswer: 'z=2;\\text{ reject }H_0' },
      { label: 'c', marks: 7, topic: 'Chi-square goodness of fit', recurrence: '3/3 papers', prompt: 'A die thrown 60 times gives frequencies 8,12,10,9,11,10. Test fairness at 5%; χ²₀.₀₅,₅=11.07.', simpleIdea: 'A fair die expects 10 of each face. Measure each observed-versus-expected gap, square it, divide by expected, and add.', steps: [
        { label: 'Hypothesis and expected counts', marks: 2, math: 'H_0:\\text{fair},\\quad E=60/6=10' },
        { label: 'Formula', marks: 1, math: '\\chi^2=\\sum(O-E)^2/E' }, { label: 'Contributions', marks: 2, math: '0.4+0.4+0+0.1+0.1+0=1.0' },
        { label: 'Compare', marks: 1, math: 'df=5,\\quad1.0<11.07' }, { label: 'Conclusion', marks: 1, text: 'There is insufficient evidence at 5% to conclude that the die is biased.' },
      ], finalAnswer: '\\chi^2=1.0;\\text{ do not reject }H_0' },
    ]},
    optionB: { number: 10, parts: [
      { label: 'a', marks: 6, topic: 'Testing terminology', recurrence: '3/3 papers; TIE highlights M5', prompt: 'Explain sample, null hypothesis, Type I error and Type II error.', simpleIdea: 'A sample is the small group we inspect. H₀ is the claim on trial. Type I is a false alarm; Type II is missing a real effect.', steps: [
        { label: 'Sample', marks: 1, text: 'A finite collection selected from a population for analysis.' }, { label: 'Null hypothesis', marks: 1, text: 'The default claim about a population parameter being tested.' },
        { label: 'Type I error', marks: 1.5, text: 'Rejecting a true H₀; probability α.' }, { label: 'Type II error', marks: 1.5, text: 'Not rejecting a false H₀; probability β.' },
        { label: 'Decision interpretation', marks: 1, math: '\\boxed{\\text{Type I=false alarm; Type II=miss}}' },
      ], finalAnswer: '\\text{Type I: reject true }H_0;\\quad\\text{Type II: retain false }H_0' },
      { label: 'b', marks: 7, topic: 'Student t-test', recurrence: '3/3 papers', prompt: 'Sample 8,9,10,11,12. Test μ=9 at 5%; t₀.₀₂₅,₄=2.776.', simpleIdea: 'The sample is small and population spread is unknown, so use t. Compare the mean gap with the estimated standard error.', steps: [
        { label: 'Hypotheses', marks: 1, math: 'H_0:\\mu=9,\\ H_1:\\mu\\ne9' }, { label: 'Mean', marks: 1, math: '\\bar x=10' },
        { label: 'Sample spread', marks: 2, math: '\\sum(x-10)^2=10,\\ s^2=2.5,\\ s=1.5811' }, { label: 'Statistic', marks: 1, math: 't=(10-9)/(1.5811/\\sqrt5)=1.414' },
        { label: 'Compare', marks: 1, math: '1.414<2.776' }, { label: 'Conclusion', marks: 1, math: '\\boxed{\\text{Do not reject }H_0}' },
      ], finalAnswer: 't=1.414;\\text{ do not reject }H_0' },
      { label: 'c', marks: 7, topic: 'Difference of means z-test', recurrence: 'Tests for means are in the official syllabus and scanned papers', prompt: 'Samples have n₁=100, x̄₁=50, s₁=8 and n₂=64, x̄₂=47, s₂=6. Test at 5% whether the population means are equal.', simpleIdea: 'Compare the gap between the two sample means with their combined standard error. A z-distance above 1.96 is significant.', steps: [
        { label: 'Hypotheses', marks: 1, math: 'H_0:\\mu_1=\\mu_2,\\quad H_1:\\mu_1\\ne\\mu_2' },
        { label: 'Combined standard error', marks: 2, math: 'SE=\\sqrt{\\frac{8^2}{100}+\\frac{6^2}{64}}=1.0966' },
        { label: 'Test statistic', marks: 2, math: 'z=\\frac{50-47}{1.0966}=2.735' },
        { label: 'Compare', marks: 1, math: '2.735>1.96\\Rightarrow\\text{reject }H_0' },
        { label: 'Conclusion', marks: 1, text: 'The population means differ significantly at the 5% level.' },
      ], finalAnswer: 'z=2.735;\\text{ reject }H_0' },
    ]},
  },
]

export const m4PaperTotal = m4Modules.reduce((sum, module) => sum + module.optionA.parts.reduce((partSum, part) => partSum + part.marks, 0), 0)
export const m4PartCount = m4Modules.reduce((sum, module) => sum + module.optionA.parts.length + module.optionB.parts.length, 0)
