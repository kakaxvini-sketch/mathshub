
import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Number System & Integers",
        formulas: [
          { id: "7-1", title: "Commutative Property", expression: "a + b = b + a", description: "Order doesn't matter in addition.", explanation: "Changing the order of addends does not change the sum. This also applies to multiplication: a * b = b * a.", category: "Integers" },
          { id: "7-2", title: "Associative Property", expression: "(a+b)+c = a+(b+c)", description: "Grouping doesn't matter.", explanation: "When adding three or more numbers, the result is the same regardless of how the numbers are grouped.", category: "Integers" },
          { id: "7-3", title: "Distributive Property", expression: "a(b + c) = ab + ac", description: "Multiplication over addition.", explanation: "Multiplying a sum by a number is the same as multiplying each addend by the number and then adding the products.", category: "Algebra" },
          { id: "7-4", title: "Additive Identity", expression: "a + 0 = a", description: "Zero property.", explanation: "Adding zero to any number doesn't change its value. Zero is the identity element for addition.", category: "Integers" },
          { id: "7-5", title: "Multiplicative Identity", expression: "a × 1 = a", description: "One property.", explanation: "Multiplying any number by 1 doesn't change its value. 1 is the identity element for multiplication.", category: "Integers" }
        ]
      },
      {
        name: "Fractions & Ratios",
        formulas: [
          { id: "7-10", title: "Fraction Multiplication", expression: "(a/b) × (c/d) = (ac)/(bd)", description: "Direct multiplication.", explanation: "Multiply the numerators together and the denominators together to find the product.", category: "Fractions" },
          { id: "7-11", title: "Reciprocal", expression: "a/b → b/a", description: "The multiplicative inverse.", explanation: "The reciprocal of a fraction is found by swapping its numerator and denominator.", category: "Fractions" },
          { id: "7-12", title: "Percentage Calculation", expression: "(Value/Total) × 100", description: "Find percent of a whole.", explanation: "Divide the part by the whole and multiply by 100 to express a ratio as a percentage.", category: "Arithmetic" }
        ]
      },
      {
        name: "Geometry Basics",
        formulas: [
          { id: "7-20", title: "Area of Parallelogram", expression: "A = b × h", description: "Base times height.", explanation: "The area is calculated by multiplying the base length by the vertical height (not the slant height).", category: "Geometry" },
          { id: "7-21", title: "Perimeter of Triangle", expression: "P = a + b + c", description: "Sum of all sides.", explanation: "To find the perimeter, simply add the lengths of all three sides together.", category: "Geometry" },
          { id: "7-22", title: "Circumference of Circle", expression: "C = 2πr", description: "Perimeter of a circle.", explanation: "The distance around a circle is twice the radius times Pi (approx 3.14).", category: "Geometry" }
        ]
      }
    ]
  },
  {
    grade: 8,
    label: "Class 8",
    topics: [
      {
        name: "Algebraic Identities",
        formulas: [
          { id: "8-1", title: "Square of Sum", expression: "(a+b)² = a² + 2ab + b²", description: "Standard identity I.", explanation: "Expanding a squared sum results in three terms: the square of the first, twice the product, and the square of the second.", category: "Algebra" },
          { id: "8-2", title: "Square of Difference", expression: "(a-b)² = a² - 2ab + b²", description: "Standard identity II.", explanation: "Similar to square of sum, but the middle term is subtracted.", category: "Algebra" },
          { id: "8-3", title: "Difference of Squares", expression: "a² - b² = (a+b)(a-b)", description: "Standard identity III.", explanation: "The difference between two squares can be factored into a sum and a difference.", category: "Algebra" },
          { id: "8-4", title: "Linear Product", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Standard identity IV.", explanation: "A quick way to multiply two binomials that share a common first term.", category: "Algebra" }
        ]
      },
      {
        name: "Exponents & Powers",
        formulas: [
          { id: "8-10", title: "Product Law", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Adding exponents.", explanation: "When multiplying terms with the same base, add their powers.", category: "Exponents" },
          { id: "8-11", title: "Quotient Law", expression: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", description: "Subtracting exponents.", explanation: "When dividing terms with the same base, subtract the power of the denominator from the numerator.", category: "Exponents" },
          { id: "8-12", title: "Negative Power", expression: "a⁻ⁿ = 1/aⁿ", description: "Reciprocal law.", explanation: "A negative exponent indicates that the base is on the denominator side of a fraction.", category: "Exponents" },
          { id: "8-13", title: "Zero Power", expression: "a⁰ = 1", description: "The unit property.", explanation: "Any non-zero number raised to the power of zero is always equal to 1.", category: "Exponents" }
        ]
      },
      {
        name: "Commercial Mathematics",
        formulas: [
          { id: "8-30", title: "Simple Interest", expression: "SI = (P×R×T)/100", description: "Basic interest.", explanation: "P is principal, R is rate per annum, and T is time in years.", category: "Finance" },
          { id: "8-31", title: "Compound Interest", expression: "A = P(1 + r/100)ⁿ", description: "Total amount with CI.", explanation: "Unlike simple interest, compound interest is calculated on the principal plus the interest from previous periods.", category: "Finance" },
          { id: "8-32", title: "Profit %", expression: "(Profit / CP) × 100", description: "Gain percentage.", explanation: "Shows how much you gained relative to the original cost price.", category: "Finance" }
        ]
      }
    ]
  },
  {
    grade: 9,
    label: "Class 9",
    topics: [
      {
        name: "Polynomials",
        formulas: [
          { id: "9-1", title: "Cubic Sum", expression: "(a+b)³ = a³+b³+3ab(a+b)", description: "Expanding sum cubed.", explanation: "The result of (a+b) * (a+b) * (a+b). It expands to a³ + 3a²b + 3ab² + b³.", category: "Algebra" },
          { id: "9-2", title: "Difference of Cubes", expression: "a³-b³ = (a-b)(a²+ab+b²)", description: "Factoring difference of cubes.", explanation: "Used to factorize expressions where two cubed terms are subtracted.", category: "Algebra" },
          { id: "9-3", title: "Sum of Cubes", expression: "a³+b³ = (a+b)(a²-ab+b²)", description: "Factoring sum of cubes.", explanation: "Used to factorize expressions where two cubed terms are added.", category: "Algebra" }
        ]
      },
      {
        name: "Geometry & Mensuration",
        formulas: [
          { id: "9-10", title: "Heron's Formula", expression: "Area = √[s(s-a)(s-b)(s-c)]", description: "Area from three sides.", explanation: "Used when lengths of all sides a, b, c are known. s is semi-perimeter (a+b+c)/2.", category: "Geometry" },
          { id: "9-11", title: "Surface Area of Sphere", expression: "SA = 4πr²", description: "Outer area of a ball.", explanation: "Total area of the surface of a sphere of radius r.", category: "Mensuration" },
          { id: "9-12", title: "Volume of Sphere", expression: "V = (4/3)πr³", description: "Capacity of a sphere.", explanation: "The total 3D space occupied by a solid sphere.", category: "Mensuration" },
          { id: "9-13", title: "Volume of Cone", expression: "V = (1/3)πr²h", description: "Capacity of a cone.", explanation: "The volume of a cone is exactly one-third of a cylinder with the same radius and height.", category: "Mensuration" }
        ]
      },
      {
        name: "Statistics & Probability",
        formulas: [
          { id: "9-20", title: "Mean", expression: "x̄ = Σxᵢ / n", description: "Average value.", explanation: "Sum all values and divide by the count of values.", category: "Statistics" },
          { id: "9-21", title: "Median (Odd)", expression: "((n+1)/2)th term", description: "Middle value.", explanation: "The middle term of an ordered data set when the count is odd.", category: "Statistics" },
          { id: "9-22", title: "Probability P(E)", expression: "n(E) / n(S)", description: "Likelihood of event.", explanation: "Favorable outcomes divided by total possible outcomes in the sample space.", category: "Probability" }
        ]
      }
    ]
  },
  {
    grade: 10,
    label: "Class 10",
    topics: [
      {
        name: "Trigonometry",
        formulas: [
          { id: "10-1", title: "Primary Identity", expression: "sin²θ + cos²θ = 1", description: "Fundamental identity.", explanation: "The square of sine plus square of cosine for any angle always equals 1.", category: "Trig" },
          { id: "10-2", title: "Tangent Identity", expression: "1 + tan²θ = sec²θ", description: "Secondary identity.", explanation: "Relates the tangent and secant functions based on the unit circle.", category: "Trig" },
          { id: "10-3", title: "Cotangent Identity", expression: "1 + cot²θ = cosec²θ", description: "Tertiary identity.", explanation: "Relates cotangent and cosecant functions.", category: "Trig" },
          { id: "10-4", title: "Reciprocal Ratios", expression: "cosecθ = 1/sinθ", description: "Inverse of sine.", explanation: "Cosecant is defined as the reciprocal of the sine ratio.", category: "Trig" }
        ]
      },
      {
        name: "Algebra & Equations",
        formulas: [
          { id: "10-10", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "Solve ax²+bx+c=0.", explanation: "The universal formula to find the roots of any quadratic equation.", category: "Algebra" },
          { id: "10-11", title: "Discriminant", expression: "D = b² - 4ac", description: "Nature of roots.", explanation: "D>0: 2 real roots, D=0: 1 real root, D<0: imaginary roots.", category: "Algebra" },
          { id: "10-12", title: "Sum of Roots", expression: "α + β = -b/a", description: "Quadratic property.", explanation: "The sum of the roots of a quadratic equation ax²+bx+c=0.", category: "Algebra" },
          { id: "10-13", title: "Product of Roots", expression: "αβ = c/a", description: "Quadratic property.", explanation: "The product of the roots of a quadratic equation ax²+bx+c=0.", category: "Algebra" }
        ]
      },
      {
        name: "Arithmetic Progression (AP)",
        formulas: [
          { id: "10-20", title: "nth Term of AP", expression: "aₙ = a + (n-1)d", description: "Find any term.", explanation: "a is the first term, d is the common difference, n is the term number.", category: "Algebra" },
          { id: "10-21", title: "Sum of n Terms", expression: "Sₙ = (n/2)[2a+(n-1)d]", description: "Total sum of sequence.", explanation: "Used to calculate the sum of the first n terms in an arithmetic progression.", category: "Algebra" }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Advanced Trigonometry",
        formulas: [
          { id: "11-1", title: "Sine Sum", expression: "sin(A+B)=sinAcosB+cosAsinB", description: "Compound angle.", explanation: "Formula to find the sine of a sum of two angles.", category: "Trig" },
          { id: "11-2", title: "Cosine Sum", expression: "cos(A+B)=cosAcosB-sinAsinB", description: "Compound angle.", explanation: "Formula to find the cosine of a sum of two angles. Note the negative sign.", category: "Trig" },
          { id: "11-3", title: "Sine Double Angle", expression: "sin2A = 2sinAcosA", description: "Double angle identity.", explanation: "Relates sine of double the angle to the sine and cosine of the angle.", category: "Trig" },
          { id: "11-4", title: "Cosine Double Angle", expression: "cos2A = cos²A - sin²A", description: "Double angle identity.", explanation: "Alternative forms: 2cos²A - 1 or 1 - 2sin²A.", category: "Trig" },
          { id: "11-5", title: "Sine Rule", expression: "a/sinA = b/sinB = c/sinC", description: "Triangle properties.", explanation: "Relates the sides of a triangle to the sines of its opposite angles.", category: "Trig" },
          { id: "11-6", title: "Cosine Rule", expression: "a² = b² + c² - 2bccosA", description: "Triangle properties.", explanation: "Generalization of the Pythagorean theorem for any triangle.", category: "Trig" }
        ]
      },
      {
        name: "Sequences & Series",
        formulas: [
          { id: "11-10", title: "nth Term of GP", expression: "aₙ = arⁿ⁻¹", description: "Geometric Progression.", explanation: "a is the first term, r is the common ratio.", category: "Algebra" },
          { id: "11-11", title: "Sum of GP", expression: "Sₙ = a(rⁿ-1)/(r-1)", description: "Finite GP sum.", explanation: "Calculates the sum of first n terms of a geometric sequence.", category: "Algebra" },
          { id: "11-12", title: "Infinite GP Sum", expression: "S∞ = a / (1-r)", description: "Sum to infinity.", explanation: "Only applicable if the absolute value of the common ratio |r| < 1.", category: "Algebra" }
        ]
      },
      {
        name: "Complex Numbers",
        formulas: [
          { id: "11-20", title: "Modulus of z", expression: "|z| = √(a² + b²)", description: "Magnitude of complex.", explanation: "Distance of the complex number a + bi from the origin in the complex plane.", category: "Algebra" },
          { id: "11-21", title: "Conjugate", expression: "ž = a - bi", description: "Mirror complex.", explanation: "Changing the sign of the imaginary part of a complex number.", category: "Algebra" }
        ]
      }
    ]
  },
  {
    grade: 12,
    label: "Class 12",
    topics: [
      {
        name: "Differential Calculus",
        formulas: [
          { id: "12-1", title: "Power Rule", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Basic derivative.", explanation: "Multiply by the power and then decrease the power by 1.", category: "Calculus" },
          { id: "12-2", title: "Product Rule", expression: "(uv)' = u'v + uv'", description: "Derivative of product.", explanation: "Used when two functions of x are multiplied together.", category: "Calculus" },
          { id: "12-3", title: "Quotient Rule", expression: "(u/v)' = (u'v-uv')/v²", description: "Derivative of division.", explanation: "Used when one function is divided by another.", category: "Calculus" },
          { id: "12-4", title: "Chain Rule", expression: "dy/dx = (dy/du) * (du/dx)", description: "Nested functions.", explanation: "Used for differentiating composite functions like f(g(x)).", category: "Calculus" },
          { id: "12-5", title: "Derivative of eˣ", expression: "d/dx(eˣ) = eˣ", description: "Exponential change.", explanation: "The exponential function is unique because it is its own derivative.", category: "Calculus" },
          { id: "12-6", title: "Derivative of ln x", expression: "d/dx(ln x) = 1/x", description: "Logarithmic change.", explanation: "Rate of change of the natural log function is reciprocal of x.", category: "Calculus" }
        ]
      },
      {
        name: "Integral Calculus",
        formulas: [
          { id: "12-10", title: "Integration Power Rule", expression: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C", description: "Reverse power rule.", explanation: "Increase power by 1 and divide by the new power. C is the constant of integration.", category: "Calculus" },
          { id: "12-11", title: "Integration by Parts", expression: "∫u dv = uv - ∫v du", description: "Integrating products.", explanation: "The integral version of the product rule for differentiation.", category: "Calculus" },
          { id: "12-12", title: "Integration of 1/x", expression: "∫(1/x)dx = ln|x| + C", description: "Logarithmic integral.", explanation: "The anti-derivative of the reciprocal function.", category: "Calculus" },
          { id: "12-13", title: "Definite Integral", expression: "∫ₐᵇ f(x)dx = F(b)-F(a)", description: "Fundamental Theorem.", explanation: "The area under the curve f(x) from x=a to x=b.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & Matrices",
        formulas: [
          { id: "12-20", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar multiplication.", explanation: "Results in a scalar value. Used to find the angle between vectors.", category: "Vectors" },
          { id: "12-21", title: "Cross Product", expression: "a×b = |a||b|sinθ n̂", description: "Vector multiplication.", explanation: "Results in a vector perpendicular to both original vectors.", category: "Vectors" },
          { id: "12-22", title: "Matrix Determinant", expression: "|A| = ad - bc", description: "For 2x2 matrix.", explanation: "A scalar value used in finding the inverse and solving systems of equations.", category: "Algebra" },
          { id: "12-23", title: "Matrix Inverse", expression: "A⁻¹ = (1/|A|) adj(A)", description: "Inverse formula.", explanation: "A matrix multiplied by its inverse yields the identity matrix.", category: "Algebra" }
        ]
      },
      {
        name: "Probability",
        formulas: [
          { id: "12-30", title: "Conditional Prob", expression: "P(A|B) = P(A∩B) / P(B)", description: "Prob of A given B.", explanation: "Probability of event A occurring knowing that B has already happened.", category: "Probability" },
          { id: "12-31", title: "Bayes' Theorem", expression: "P(A|B) = [P(B|A)P(A)]/P(B)", description: "Evidence revision.", explanation: "Used to update the probability of a hypothesis as more evidence becomes available.", category: "Probability" }
        ]
      }
    ]
  }
];

export const GRADE_COLORS: Record<number, string> = {
  7: "from-blue-400 to-blue-600",
  8: "from-teal-400 to-teal-600",
  9: "from-indigo-400 to-indigo-600",
  10: "from-purple-400 to-purple-600",
  11: "from-pink-400 to-pink-600",
  12: "from-rose-400 to-rose-600",
};
