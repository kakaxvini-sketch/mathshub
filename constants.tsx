import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Number System & Arithmetic",
        formulas: [
          { id: "7-1", title: "Commutative Property", expression: "a + b = b + a", description: "Order doesn't matter in addition.", explanation: "Applies to multiplication too (a × b = b × a).", category: "Integers" },
          { id: "7-2", title: "Associative Property", expression: "(a + b) + c = a + (b + c)", description: "Grouping doesn't change sum.", explanation: "Works for multiplication as well.", category: "Integers" },
          { id: "7-3", title: "Distributive Property", expression: "a(b + c) = ab + ac", description: "Multiplication over addition.", explanation: "Key for simplifying algebraic expressions.", category: "Algebra" },
          { id: "7-4", title: "Additive Identity", expression: "a + 0 = a", description: "Zero property.", explanation: "Adding zero to any number yields the same number.", category: "Integers" },
          { id: "7-5", title: "Multiplicative Identity", expression: "a × 1 = a", description: "One property.", explanation: "Multiplying by 1 doesn't change value.", category: "Integers" },
          { id: "7-6", title: "Product of Fractions", expression: "(a/b) × (c/d) = (ac)/(bd)", description: "Top × top, bottom × bottom.", explanation: "Multiply numerators and denominators directly.", category: "Fractions" },
          { id: "7-7", title: "Division of Fractions", expression: "(a/b) ÷ (c/d) = (ad)/(bc)", description: "Keep, Change, Flip.", explanation: "Multiply the first fraction by the reciprocal of the second.", category: "Fractions" },
          { id: "7-8", title: "Simple Interest", expression: "I = (P × R × T) / 100", description: "Basic interest formula.", explanation: "P=Principal, R=Rate, T=Time.", category: "Finance" },
          { id: "7-9", title: "Total Amount", expression: "A = P + I", description: "Principal plus interest.", explanation: "Total money accumulated after time T.", category: "Finance" }
        ]
      },
      {
        name: "Geometry & Measurement",
        formulas: [
          { id: "7-10", title: "Area of Triangle", expression: "A = 1/2 × b × h", description: "Half base times height.", explanation: "Standard area for any triangle.", category: "Geometry" },
          { id: "7-11", title: "Area of Parallelogram", expression: "A = b × h", description: "Base times vertical height.", explanation: "Height must be perpendicular to base.", category: "Geometry" },
          { id: "7-12", title: "Circumference of Circle", expression: "C = 2πr", description: "Perimeter of circle.", explanation: "π is approx 3.14 or 22/7.", category: "Geometry" },
          { id: "7-13", title: "Area of Circle", expression: "A = πr²", description: "Surface inside circle.", explanation: "Radius squared multiplied by Pi.", category: "Geometry" },
          { id: "7-14", title: "Complementary Angles", expression: "∠A + ∠B = 90°", description: "Sum is a right angle.", explanation: "Angles that add up to 90 degrees.", category: "Geometry" },
          { id: "7-15", title: "Supplementary Angles", expression: "∠A + ∠B = 180°", description: "Sum is a straight line.", explanation: "Angles that add up to 180 degrees.", category: "Geometry" },
          { id: "7-16", title: "Triangle Angle Sum", expression: "Σ∠ = 180°", description: "Interior angles sum.", explanation: "The 3 angles of any triangle always add to 180.", category: "Geometry" },
          { id: "7-17", title: "Mean", expression: "x̄ = Σx / n", description: "Average value.", explanation: "Sum of observations divided by total count.", category: "Statistics" }
        ]
      }
    ]
  },
  {
    grade: 8,
    label: "Class 8",
    topics: [
      {
        name: "Algebraic Expressions",
        formulas: [
          { id: "8-1", title: "Square of Sum", expression: "(a+b)² = a² + 2ab + b²", description: "Binomial expansion I.", explanation: "Standard algebraic identity.", category: "Algebra" },
          { id: "8-2", title: "Square of Difference", expression: "(a-b)² = a² - 2ab + b²", description: "Binomial expansion II.", explanation: "Middle term is negative.", category: "Algebra" },
          { id: "8-3", title: "Difference of Squares", expression: "a² - b² = (a+b)(a-b)", description: "Factoring squares.", explanation: "Essential for simplifying expressions.", category: "Algebra" },
          { id: "8-4", title: "General Linear Product", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Standard identity IV.", explanation: "Commonly used in factoring.", category: "Algebra" },
          { id: "8-5", title: "Product of Powers", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Same base addition.", explanation: "Keep base, add exponents.", category: "Exponents" },
          { id: "8-6", title: "Quotient of Powers", expression: "aᵐ / aⁿ = aᵐ⁻ⁿ", description: "Same base subtraction.", explanation: "Keep base, subtract exponents.", category: "Exponents" },
          { id: "8-7", title: "Power of a Power", expression: "(aᵐ)ⁿ = aᵐⁿ", description: "Multiplying exponents.", explanation: "Power raised to another power.", category: "Exponents" },
          { id: "8-8", title: "Zero Exponent", expression: "a⁰ = 1", description: "Anything to zero.", explanation: "Base must be non-zero.", category: "Exponents" }
        ]
      },
      {
        name: "Mensuration & Geometry",
        formulas: [
          { id: "8-10", title: "Area of Trapezium", expression: "A = 1/2(a+b)h", description: "Parallel sides formula.", explanation: "a, b are lengths of parallel sides.", category: "Geometry" },
          { id: "8-11", title: "Area of Rhombus", expression: "A = 1/2(d₁ × d₂)", description: "Diagonals product.", explanation: "d1, d2 are the diagonals.", category: "Geometry" },
          { id: "8-12", title: "TSA of Cuboid", expression: "TSA = 2(lb + bh + hl)", description: "Total Surface Area.", explanation: "Length, breadth, height.", category: "Mensuration" },
          { id: "8-13", title: "Volume of Cuboid", expression: "V = l × b × h", description: "Capacity formula.", explanation: "Product of three dimensions.", category: "Mensuration" },
          { id: "8-14", title: "Volume of Cube", expression: "V = a³", description: "Side cubed.", explanation: "a is length of each edge.", category: "Mensuration" },
          { id: "8-15", title: "CSA of Cylinder", expression: "CSA = 2πrh", description: "Curved Surface Area.", explanation: "Surface of the side pipe.", category: "Mensuration" },
          { id: "8-16", title: "Volume of Cylinder", expression: "V = πr²h", description: "Cylinder capacity.", explanation: "Base area times height.", category: "Mensuration" },
          { id: "8-17", title: "Compound Interest", expression: "A = P(1 + r/100)ⁿ", description: "Interest on interest.", explanation: "A is the total amount.", category: "Finance" }
        ]
      }
    ]
  },
  {
    grade: 9,
    label: "Class 9",
    topics: [
      {
        name: "Polynomials & Geometry",
        formulas: [
          { id: "9-1", title: "Square of Trinomial", expression: "(a+b+c)² = a²+b²+c²+2ab+2bc+2ca", description: "3-term expansion.", explanation: "Extended binomial square.", category: "Algebra" },
          { id: "9-2", title: "Cubic Sum", expression: "(a+b)³ = a³+b³+3ab(a+b)", description: "Sum cubed.", explanation: "Alternative: a³+3a²b+3ab²+b³.", category: "Algebra" },
          { id: "9-3", title: "Cubic Difference", expression: "(a-b)³ = a³-b³-3ab(a-b)", description: "Diff cubed.", explanation: "Alternative: a³-3a²b+3ab²-b³.", category: "Algebra" },
          { id: "9-4", title: "Factor of Cubic Sum", expression: "a³+b³ = (a+b)(a²-ab+b²)", description: "Factoring cubes I.", explanation: "Useful for simplification.", category: "Algebra" },
          { id: "9-5", title: "Factor of Cubic Diff", expression: "a³-b³ = (a-b)(a²+ab+b²)", description: "Factoring cubes II.", explanation: "Note the positive sign in trinomial.", category: "Algebra" },
          { id: "9-6", title: "Euclidean Distance", expression: "d = √[(x₂-x₁)²+(y₂-y₁)²]", description: "Point to point.", explanation: "Distance formula in 2D.", category: "Coordinate" },
          { id: "9-7", title: "Midpoint Formula", expression: "M = [(x₁+x₂)/2, (y₁+y₂)/2]", description: "Middle of segment.", explanation: "Average of coordinates.", category: "Coordinate" }
        ]
      },
      {
        name: "Theorems & Surface Areas",
        formulas: [
          { id: "9-10", title: "Heron's Formula", expression: "Area = √[s(s-a)(s-b)(s-c)]", description: "Area from 3 sides.", explanation: "s = (a+b+c)/2 (semi-perimeter).", category: "Geometry" },
          { id: "9-11", title: "Area of Quadrilateral", expression: "A = 1/2 × d(h₁ + h₂)", description: "Using diagonal.", explanation: "d is diagonal, h are offsets.", category: "Geometry" },
          { id: "9-12", title: "Volume of Cone", expression: "V = 1/3 πr²h", description: "1/3 of Cylinder.", explanation: "h is vertical height.", category: "Mensuration" },
          { id: "9-13", title: "CSA of Cone", expression: "CSA = πrl", description: "Curved surface cone.", explanation: "l is slant height: √(r²+h²).", category: "Mensuration" },
          { id: "9-14", title: "Volume of Sphere", expression: "V = 4/3 πr³", description: "Ball volume.", explanation: "Depends only on radius.", category: "Mensuration" },
          { id: "9-15", title: "TSA of Hemisphere", expression: "TSA = 3πr²", description: "Flat base + curved top.", explanation: "For a solid hemisphere.", category: "Mensuration" },
          { id: "9-16", title: "Median (Odd n)", expression: "M = [(n+1)/2]th term", description: "Middle data point.", explanation: "Data must be sorted.", category: "Statistics" },
          { id: "9-17", title: "Empirical Prob", expression: "P(E) = n(E) / n(S)", description: "Event probability.", explanation: "Occurrences / Total trials.", category: "Probability" }
        ]
      }
    ]
  },
  {
    grade: 10,
    label: "Class 10",
    topics: [
      {
        name: "Trigonometry & Algebra",
        formulas: [
          { id: "10-1", title: "Pythagorean Identity I", expression: "sin²θ + cos²θ = 1", description: "Core Trig Identity.", explanation: "Fundamental for all trig.", category: "Trig" },
          { id: "10-2", title: "Pythagorean Identity II", expression: "1 + tan²θ = sec²θ", description: "Secant relation.", explanation: "Connects tan and sec functions.", category: "Trig" },
          { id: "10-3", title: "Pythagorean Identity III", expression: "1 + cot²θ = cosec²θ", description: "Cosecant relation.", explanation: "Connects cot and cosec functions.", category: "Trig" },
          { id: "10-4", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "Standard solution.", explanation: "Solves ax² + bx + c = 0.", category: "Algebra" },
          { id: "10-5", title: "Discriminant", expression: "D = b² - 4ac", description: "Root nature.", explanation: "D>0: Real/Diff, D=0: Real/Equal, D<0: Imag.", category: "Algebra" },
          { id: "10-6", title: "Sum of Roots", expression: "α + β = -b/a", description: "Roots-Coeff relationship.", explanation: "Applies to quadratics.", category: "Algebra" },
          { id: "10-7", title: "Product of Roots", expression: "αβ = c/a", description: "Roots-Coeff relationship.", explanation: "Constant term / leading coeff.", category: "Algebra" },
          { id: "10-8", title: "nth Term of AP", expression: "aₙ = a + (n-1)d", description: "Arithmetic sequence.", explanation: "a=start, d=diff.", category: "Algebra" },
          { id: "10-9", title: "Sum of n Terms AP", expression: "Sₙ = n/2 [2a + (n-1)d]", description: "Total AP sum.", explanation: "Also Sₙ = n/2(a + l).", category: "Algebra" }
        ]
      },
      {
        name: "Coordinate & Circles",
        formulas: [
          { id: "10-10", title: "Section Formula", expression: "P = [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]", description: "Internal division.", explanation: "Point P divides AB in ratio m:n.", category: "Coordinate" },
          { id: "10-11", title: "Area of Triangle", expression: "A = 1/2 |x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|", description: "From coordinates.", explanation: "Area using vertex points.", category: "Coordinate" },
          { id: "10-12", title: "Area of Sector", expression: "A = (θ/360) × πr²", description: "Circle slice area.", explanation: "θ is central angle.", category: "Geometry" },
          { id: "10-13", title: "Length of Arc", expression: "L = (θ/360) × 2πr", description: "Segment perimeter.", explanation: "θ is central angle.", category: "Geometry" },
          { id: "10-14", title: "Volume of Frustum", expression: "V = 1/3 πh (r₁²+r₂²+r₁r₂)", description: "Cut cone volume.", explanation: "h is vertical height.", category: "Mensuration" },
          { id: "10-15", title: "Arithmetic Mean", expression: "x̄ = Σfᵢxᵢ / Σfᵢ", description: "Grouped data mean.", explanation: "Weighted average.", category: "Statistics" },
          { id: "10-16", title: "Mode Formula", expression: "Mo = l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h", description: "Most frequent value.", explanation: "l is lower limit of modal class.", category: "Statistics" },
          { id: "10-17", title: "Empirical Relation", expression: "3 Median = Mode + 2 Mean", description: "Stats connection.", explanation: "Relates all 3 central tendencies.", category: "Statistics" }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Functions & Trig",
        formulas: [
          { id: "11-1", title: "Compound Sin", expression: "sin(A±B) = sinAcosB ± cosAsinB", description: "Sum/Diff identity.", explanation: "Used to find angles like 75°.", category: "Trig" },
          { id: "11-2", title: "Compound Cos", expression: "cos(A±B) = cosAcosB ∓ sinAsinB", description: "Sum/Diff identity.", explanation: "Note the inverted sign.", category: "Trig" },
          { id: "11-3", title: "Double Angle Sin", expression: "sin2A = 2sinAcosA", description: "Sin expansion.", explanation: "Reduces angle by half.", category: "Trig" },
          { id: "11-4", title: "Double Angle Cos", expression: "cos2A = cos²A - sin²A", description: "Cos expansion.", explanation: "Also 2cos²A-1 or 1-2sin²A.", category: "Trig" },
          { id: "11-5", title: "Sine Rule", expression: "a/sinA = b/sinB = c/sinC", description: "Triangle sides/angles.", explanation: "Valid for any triangle.", category: "Trig" },
          { id: "11-6", title: "Cosine Rule", expression: "a² = b² + c² - 2bccosA", description: "Generalized Pythagoras.", explanation: "Find side if angle is known.", category: "Trig" },
          { id: "11-7", title: "Modulus of z", expression: "|z| = √(a² + b²)", description: "Complex magnitude.", explanation: "Distance from origin.", category: "Complex" },
          { id: "11-8", title: "Polar Form", expression: "z = r(cosθ + isinθ)", description: "Angle/Radius form.", explanation: "Represent complex numbers graphically.", category: "Complex" }
        ]
      },
      {
        name: "Series & Calculus",
        formulas: [
          { id: "11-10", title: "Permutation nPr", expression: "n! / (n-r)!", description: "Order matters.", explanation: "Ways to arrange items.", category: "Algebra" },
          { id: "11-11", title: "Combination nCr", expression: "n! / [r!(n-r)!]", description: "Order doesn't matter.", explanation: "Ways to select items.", category: "Algebra" },
          { id: "11-12", title: "nth Term GP", expression: "aₙ = arⁿ⁻¹", description: "Geometric sequence.", explanation: "r is common ratio.", category: "Algebra" },
          { id: "11-13", title: "Sum to Infinity GP", expression: "S∞ = a / (1-r)", description: "Infinite series sum.", explanation: "Valid only if |r| < 1.", category: "Algebra" },
          { id: "11-14", title: "Slope of Line", expression: "m = (y₂-y₁)/(x₂-x₁)", description: "Rise over run.", explanation: "Gradient of straight line.", category: "Coordinate" },
          { id: "11-15", title: "Distance: Pt to Line", expression: "d = |Ax₁+By₁+C|/√(A²+B²)", description: "Shortest distance.", explanation: "Perpendicular distance formula.", category: "Coordinate" },
          { id: "11-16", title: "Derivative Power Rule", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Basic Calculus.", explanation: "Foundational differentiation rule.", category: "Calculus" },
          { id: "11-17", title: "Standard Limit", expression: "lim(x→0) sinx/x = 1", description: "Trig limit identity.", explanation: "Key for trigonometric derivatives.", category: "Calculus" }
        ]
      }
    ]
  },
  {
    grade: 12,
    label: "Class 12",
    topics: [
      {
        name: "Calculus & Matrices",
        formulas: [
          { id: "12-1", title: "Product Rule", expression: "(uv)' = u'v + uv'", description: "Differentiation product.", explanation: "For multiplying two functions.", category: "Calculus" },
          { id: "12-2", title: "Quotient Rule", expression: "(u/v)' = (u'v-uv')/v²", description: "Differentiation division.", explanation: "Specific order of subtraction.", category: "Calculus" },
          { id: "12-3", title: "Chain Rule", expression: "dy/dx = (dy/du)·(du/dx)", description: "Nested functions.", explanation: "Derivative of composite function.", category: "Calculus" },
          { id: "12-4", title: "Power Rule Integral", expression: "∫xⁿ dx = [xⁿ⁺¹/(n+1)] + C", description: "Basic anti-derivative.", explanation: "n must not equal -1.", category: "Calculus" },
          { id: "12-5", title: "Integral 1/x", expression: "∫(1/x) dx = ln|x| + C", description: "Logarithmic integral.", explanation: "Anti-derivative of reciprocal.", category: "Calculus" },
          { id: "12-6", title: "Integration by Parts", expression: "∫u dv = uv - ∫v du", description: "Product integral.", explanation: "Reverse of product rule.", category: "Calculus" },
          { id: "12-7", title: "Fundamental Theorem", expression: "∫ₐᵇ f(x)dx = F(b)-F(a)", description: "Definite integral.", explanation: "Calculates area under curve.", category: "Calculus" },
          { id: "12-8", title: "Matrix Determinant", expression: "|A| = ad - bc", description: "For 2x2 matrix.", explanation: "Used in inversions.", category: "Algebra" },
          { id: "12-9", title: "Matrix Inverse", expression: "A⁻¹ = (1/|A|) adj(A)", description: "Reciprocal matrix.", explanation: "A·A⁻¹ = I.", category: "Algebra" }
        ]
      },
      {
        name: "Vectors & Probability",
        formulas: [
          { id: "12-10", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar multiplication.", explanation: "Results in a number.", category: "Vectors" },
          { id: "12-11", title: "Cross Product", expression: "a×b = |a||b|sinθ n̂", description: "Vector multiplication.", explanation: "Results in perpendicular vector.", category: "Vectors" },
          { id: "12-12", title: "Projection of a on b", expression: "(a·b) / |b|", description: "Length component.", explanation: "Shadow of a in b's direction.", category: "Vectors" },
          { id: "12-13", title: "Vector Direction Cosines", expression: "l²+m²+n² = 1", description: "Unit direction property.", explanation: "Angles with axes x,y,z.", category: "Vectors" },
          { id: "12-14", title: "Conditional Prob", expression: "P(A|B) = P(A∩B) / P(B)", description: "Probability given B.", explanation: "Event A given B occurred.", category: "Probability" },
          { id: "12-15", title: "Bayes' Theorem", expression: "P(A|B) = P(B|A)P(A)/P(B)", description: "Probability revision.", explanation: "Evidence-based statistics.", category: "Probability" },
          { id: "12-16", title: "Total Prob Theorem", expression: "P(A) = Σ P(A|Eᵢ)P(Eᵢ)", description: "Summing probabilities.", explanation: "E's form a partition.", category: "Probability" },
          { id: "12-17", title: "Bernoulli Trial", expression: "P(X=k) = ⁿCₖ pᵏ qⁿ⁻ᵏ", description: "Binomial probability.", explanation: "Probability of k successes.", category: "Probability" }
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