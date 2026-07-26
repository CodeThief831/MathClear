import type { EvaluationStep } from '../data/m3MockPaper'

const explanations: Array<[RegExp, string]> = [
  [/define|definition|terminology/i, 'First say what the word means. This gives the examiner the rule you will use next.'],
  [/base pair|inverse pair|identify inverse/i, 'Start from a transform pair you already know. We will change this familiar pair instead of solving the whole problem from zero.'],
  [/shift/i, 'An exponential in time moves the s-expression left or right. Replace s carefully using the shifting rule.'],
  [/partial fraction|find constants|resolve/i, 'Break one difficult fraction into several easy fractions. Each easy piece has a standard inverse transform.'],
  [/convolution/i, 'A product of two transforms becomes a special time-domain integral. Match each factor first, then join them with convolution.'],
  [/periodic|split at the corner|repeat factor/i, 'The wave repeats, so calculate only one complete period. Split the integral wherever the formula for the wave changes.'],
  [/symmetry|even|odd function/i, 'Check whether the graph mirrors itself. Even symmetry removes sine terms; odd symmetry removes cosine terms and saves work.'],
  [/coefficient|a₀|a_n|b_n|sine-series|cosine-series/i, 'This coefficient measures how much of one sine or cosine wave is hidden inside the function. Substitute the function and integrate over the stated interval.'],
  [/integration by parts|integrate twice/i, 'The integrand is a product, so integration by parts separates it. Repeat only when a product still remains.'],
  [/deduce|put x|set x/i, 'Choose a special x-value that turns the trigonometric terms into simple numbers. The Fourier series then becomes the required numerical sum.'],
  [/partial order|reflexive|antisymmetric|transitive/i, 'A partial order needs three checks: every item relates to itself, two-way related items must be equal, and relation chains must continue.'],
  [/hasse|cover relation/i, 'Remove loops, arrowheads, and shortcut edges. Keep only immediate neighbours, then place larger elements above smaller ones.'],
  [/matrix/i, 'Use 1 when the relation exists and 0 when it does not. Read rows as starting elements and columns as ending elements.'],
  [/marginal/i, 'Add across rows or down columns to remove the other variable and get one-variable probabilities.'],
  [/linearize|logarithm/i, 'Taking logarithms turns a power curve into a straight-line equation, which is much easier to fit.'],
  [/intersection principle/i, 'Both regression lines pass through the point made by the two means. Solve the lines together to find that point.'],
  [/reduce order/i, 'Call y-prime a new variable. This turns one second-order equation into two first-order equations that RK4 can handle.'],
  [/first pair|second pair|third pair|fourth pair|slope/i, 'This is one of RK4’s trial slopes. It samples the curve at a carefully chosen point before the four slopes are averaged.'],
  [/predict/i, 'Use the last known values to make a first estimate of the next value. The correction step will improve it.'],
  [/correct/i, 'Put the predicted value back into the formula and average again. This removes much of the prediction error.'],
  [/classification|discriminant/i, 'Read A, B, and C from the second-order terms, then use B²−AC to name the PDE type.'],
  [/mesh|time row|five-point|neighbour/i, 'A mesh replaces the continuous surface with grid points. Each new point is calculated from nearby known points.'],
  [/Euler equation|identify F|partial derivative/i, 'Treat the expression inside the integral as F. Differentiate F with respect to y and y-prime, then place those pieces into Euler’s equation.'],
  [/hypotheses/i, 'Write the claim being tested as H₀ and the competing claim as H₁ before doing any calculation.'],
  [/truth|combination/i, 'List every possible True/False case so no case is accidentally missed.'],
  [/translate|assign proposition/i, 'Replace each long sentence with a short letter. This makes the logic easier to follow.'],
  [/formula|theorem|rule|criterion|pair/i, 'Write the standard rule first. It tells the examiner exactly which method you are using.'],
  [/normalize/i, 'All probabilities together must equal 1, so add or integrate them and solve for the missing constant.'],
  [/mean|expectation/i, 'Multiply each value by its probability and add. This finds the balance point of the distribution.'],
  [/variance|standard deviation|spread/i, 'Measure how far values spread from the mean. Variance is the squared spread; standard deviation is its square root.'],
  [/covariance|correlation/i, 'Compare how the two variables move together. Positive means they usually rise together; negative means one falls as the other rises.'],
  [/rank|differences|squares/i, 'Compare the two rankings item by item. Squaring removes minus signs and makes larger disagreements count more.'],
  [/normal equation|totals/i, 'Build the small table totals needed by the least-squares equations, then solve those equations for the curve constants.'],
  [/standard error/i, 'This is the usual amount a sample mean moves by chance. A smaller standard error means a more precise sample.'],
  [/statistic|calculate z|calculate t/i, 'Turn the observed difference into standard-error units so it can be compared with the table value.'],
  [/critical|compare/i, 'Compare the calculated test value with the allowed boundary. Crossing the boundary means the difference is statistically significant.'],
  [/decision|conclusion/i, 'State the decision in words and connect it back to what the question actually asked.'],
  [/substitute|insert|apply limits/i, 'Put the known numbers or conditions into the formula carefully before simplifying.'],
  [/solve|simplify|calculate|evaluate|integrate|differentiate/i, 'Now do the arithmetic or algebra one small operation at a time, keeping the previous line visible.'],
  [/final|answer|result|present|box/i, 'Write the cleaned-up result clearly and box it so the examiner can find it immediately.'],
  [/verify|check/i, 'Put the answer back into the original rule to make sure it really works.'],
  [/odd|even|parity/i, 'Rewrite the number using 2k for even or 2k+1 for odd, then rearrange it into the required form.'],
  [/degree|edge|trail|circuit/i, 'Count the edges touching each vertex, then use the odd-degree rule to decide the path type.'],
]

export function explainStep(step: EvaluationStep) {
  const source = `${step.label} ${step.text ?? ''}`
  return explanations.find(([pattern]) => pattern.test(source))?.[1]
    ?? 'This line moves the solution one step closer to the answer. Copy the setup first, then simplify only one part at a time.'
}
