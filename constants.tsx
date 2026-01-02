import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Number System & Integers",
        formulas: [
          { id: "7-1", title: "Commutative Property (Add)", expression: "a + b = b + a", description: "Order doesn't matter in addition.", explanation: "The sum remains the same regardless of the order of integers.", category: "Integers" },
          { id: "7-2", title: "Commutative Property (Mul)", expression: "a × b = b × a", description: "Order doesn't matter in multiplication.", explanation: "Multiplying numbers in any order gives the same product.", category: "Integers" },
          { id: "7-3", title: "Associative Property", expression: "(a+b)+c = a+(b+c)", description: "Grouping doesn't change sum.", explanation: "Grouping of numbers does not affect their sum.", category: "Integers" },
          { id: "7-4", title: "Distributive Property", expression: "a(b+c) = ab + ac", description: "Multiplication over addition.", explanation: "Multiply a sum by a number by multiplying each addend separately.", category: "Algebra" },
          { id: "7-5", title: "Additive Identity", expression: "a + 0 = a", description: "Zero identity.", explanation: "Zero is the additive identity for integers.", category: "Integers" },
          { id: "7-6", title: "Multiplicative Identity", expression: "a × 1 = a", description: "One identity.", explanation: "One is the multiplicative identity for integers.", category: "Integers" },
          { id: "7-7", title: "Additive Inverse", expression: "a + (-a) = 0", description: "Inverse property.", explanation: "Every integer has an opposite that sums to zero.", category: "Integers" },
          { id: "7-8", title: "Product of Fractions", expression: "(a/b) × (c/d) = (ac)/(bd)", description: "Direct multiplication.", explanation: "Multiply numerators and denominators separately.", category: "Fractions" },
          { id: "7-9", title: "Fraction Division", expression: "(a/b) ÷ (c/d) = (ad)/(bc)", description: "Reciprocal multiplication.", explanation: "Multiply by the reciprocal of the divisor.", category: "Fractions" },
          { id: "7-10", title: "Simple Interest", expression: "I = (P×R×T)/100", description: "Interest on principal.", explanation: "P=Principal, R=Rate, T=Time.", category: "Finance" }
        ]
      },
      {
        name: "Geometry & Measurement",
        formulas: [
          { id: "7-11", title: "Area of Triangle", expression: "A = 1/2 × b × h", description: "Standard area.", explanation: "Half of base times perpendicular height.", category: "Geometry" },
          { id: "7-12", title: "Area of Parallelogram", expression: "A = b × h", description: "Base times height.", explanation: "The vertical height is used.", category: "Geometry" },
          { id: "7-13", title: "Circumference of Circle", expression: "C = 2πr", description: "Circle perimeter.", explanation: "π is approx 3.14.", category: "Geometry" },
          { id: "7-14", title: "Area of Circle", expression: "A = πr²", description: "Circle surface.", explanation: "Radius squared multiplied by Pi.", category: "Geometry" },
          { id: "7-15", title: "Triangle Angle Sum", expression: "Σ∠ = 180°", description: "Interior sum.", explanation: "All interior angles of a triangle add to 180°.", category: "Geometry" },
          { id: "7-16", title: "Pythagoras Property", expression: "a² + b² = c²", description: "Right triangle rule.", explanation: "Valid only for right-angled triangles.", category: "Geometry" }
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
          { id: "8-1", title: "Identity I", expression: "(a+b)² = a² + 2ab + b²", description: "Square of sum.", explanation: "Fundamental binomial expansion.", category: "Algebra" },
          { id: "8-2", title: "Identity II", expression: "(a-b)² = a² - 2ab + b²", description: "Square of difference.", explanation: "Middle term is negative.", category: "Algebra" },
          { id: "8-3", title: "Identity III", expression: "a² - b² = (a+b)(a-b)", description: "Difference of squares.", explanation: "Crucial for factorization.", category: "Algebra" },
          { id: "8-4", title: "Identity IV", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Common term product.", explanation: "Expansion of binomials with common x.", category: "Algebra" }
        ]
      },
      {
        name: "Exponents & Powers",
        formulas: [
          { id: "8-5", title: "Product Law", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Same base add.", explanation: "Multiplying terms with same base.", category: "Exponents" },
          { id: "8-6", title: "Quotient Law", expression: "aᵐ / aⁿ = aᵐ⁻ⁿ", description: "Same base sub.", explanation: "Dividing terms with same base.", category: "Exponents" },
          { id: "8-7", title: "Power of Power", expression: "(aᵐ)ⁿ = aᵐⁿ", description: "Exponent multiplication.", explanation: "Raising power to another power.", category: "Exponents" },
          { id: "8-8", title: "Negative Exponent", expression: "a⁻ⁿ = 1/aⁿ", description: "Reciprocal rule.", explanation: "Denotes denominator value.", category: "Exponents" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "8-9", title: "TSA of Cuboid", expression: "TSA = 2(lb + bh + hl)", description: "Total Area.", explanation: "Sum of all 6 faces.", category: "Mensuration" },
          { id: "8-10", title: "Volume of Cuboid", expression: "V = l × b × h", description: "Capacity.", explanation: "Product of dimensions.", category: "Mensuration" },
          { id: "8-11", title: "Volume of Cylinder", expression: "V = πr²h", description: "Cylinder capacity.", explanation: "Base area times height.", category: "Mensuration" },
          { id: "8-12", title: "CSA of Cylinder", expression: "2πrh", description: "Curved side.", explanation: "Area without top/bottom bases.", category: "Mensuration" }
        ]
      }
    ]
  },
  {
    grade: 9,
    label: "Class 9",
    topics: [
      {
        name: "Polynomials (Master Collection)",
        formulas: [
          { id: "9-1", title: "Standard Form", expression: "p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₀", description: "General definition.", explanation: "A polynomial is an expression with non-negative integer powers.", category: "Polynomials" },
          { id: "9-2", title: "Remainder Theorem", expression: "p(a) = R", description: "Remainder of p(x)/(x-a).", explanation: "When p(x) is divided by (x-a), the remainder is p(a).", category: "Polynomials" },
          { id: "9-3", title: "Factor Theorem", expression: "p(a) = 0 ⇒ (x-a) is factor", description: "Testing for factors.", explanation: "If substituting a into p(x) gives 0, then (x-a) is a factor.", category: "Polynomials" },
          { id: "9-4", title: "Identity I: (x+y)²", expression: "x² + 2xy + y²", description: "Square of sum.", explanation: "Expanding square of two terms.", category: "Identities" },
          { id: "9-5", title: "Identity II: (x-y)²", expression: "x² - 2xy + y²", description: "Square of difference.", explanation: "Note the negative middle term.", category: "Identities" },
          { id: "9-6", title: "Identity III: x²-y²", expression: "(x+y)(x-y)", description: "Difference of squares.", explanation: "Crucial for simplifying expressions.", category: "Identities" },
          { id: "9-7", title: "Identity IV: (x+a)(x+b)", expression: "x² + (a+b)x + ab", description: "Product of binomials.", explanation: "General expansion for linear terms.", category: "Identities" },
          { id: "9-8", title: "Identity V: (x+y+z)²", expression: "x²+y²+z²+2xy+2yz+2zx", description: "Square of trinomial.", explanation: "Expanding square of three terms.", category: "Identities" },
          { id: "9-9", title: "Identity VI: (x+y)³", expression: "x³ + y³ + 3xy(x+y)", description: "Cube of sum.", explanation: "Also written as x³+3x²y+3xy²+y³.", category: "Identities" },
          { id: "9-10", title: "Identity VII: (x-y)³", expression: "x³ - y³ - 3xy(x-y)", description: "Cube of difference.", explanation: "Also written as x³-3x²y+3xy²-y³.", category: "Identities" },
          { id: "9-11", title: "Identity VIII: x³+y³+z³-3xyz", expression: "(x+y+z)(x²+y²+z²-xy-yz-zx)", description: "Long cubic identity.", explanation: "A specialized identity for advanced factorization.", category: "Identities" },
          { id: "9-12", title: "Conditional Identity", expression: "If x+y+z=0, x³+y³+z³=3xyz", description: "Special cubic case.", explanation: "Derived from Identity VIII when x+y+z is zero.", category: "Identities" },
          { id: "9-13", title: "Sum of Cubes", expression: "x³+y³ = (x+y)(x²-xy+y²)", description: "Factoring sum of cubes.", explanation: "Useful for cubic factoring.", category: "Identities" },
          { id: "9-14", title: "Difference of Cubes", expression: "x³-y³ = (x-y)(x²+xy+y²)", description: "Factoring difference of cubes.", explanation: "Useful for cubic factoring.", category: "Identities" },
          { id: "9-15", title: "Degree of Polynomial", expression: "Max(Exponent)", description: "Highest power.", explanation: "The degree is the highest exponent of the variable in p(x).", category: "Polynomials" }
        ]
      },
      {
        name: "Geometry & Coordinate",
        formulas: [
          { id: "9-16", title: "Heron's Formula", expression: "√[s(s-a)(s-b)(s-c)]", description: "Area of triangle.", explanation: "s is semi-perimeter (a+b+c)/2.", category: "Geometry" },
          { id: "9-17", title: "CSA of Cone", expression: "πrl", description: "Curved surface area.", explanation: "l is slant height √(r²+h²).", category: "Mensuration" },
          { id: "9-18", title: "Volume of Sphere", expression: "4/3 πr³", description: "Full sphere volume.", explanation: "The capacity of a spherical object.", category: "Mensuration" },
          { id: "9-19", title: "Distance Formula", expression: "√[(x₂-x₁)² + (y₂-y₁)²]", description: "Length between points.", explanation: "Pythagorean theorem applied to coordinates.", category: "Coordinate" }
        ]
      }
    ]
  },
  {
    grade: 10,
    label: "Class 10",
    topics: [
      {
        name: "Algebra & AP",
        formulas: [
          { id: "10-1", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "Roots of ax²+bx+c=0.", explanation: "Finding root values of quadratic.", category: "Algebra" },
          { id: "10-2", title: "Discriminant", expression: "D = b² - 4ac", description: "Nature of roots.", explanation: "D>0 (Real), D=0 (Equal), D<0 (Imag).", category: "Algebra" },
          { id: "10-3", title: "nth term of AP", expression: "aₙ = a + (n-1)d", description: "Specific sequence term.", explanation: "a=start, d=diff.", category: "AP" },
          { id: "10-4", title: "Sum of n terms AP", expression: "Sₙ = n/2 [2a + (n-1)d]", description: "AP total sum.", explanation: "Calculating total of a series.", category: "AP" }
        ]
      },
      {
        name: "Trigonometry",
        formulas: [
          { id: "10-5", title: "Identity I", expression: "sin²θ + cos²θ = 1", description: "Fundamental rule.", explanation: "Universal relation.", category: "Trig" },
          { id: "10-6", title: "Identity II", expression: "1 + tan²θ = sec²θ", description: "Tangent relation.", explanation: "Derived from Identity I.", category: "Trig" },
          { id: "10-7", title: "Identity III", expression: "1 + cot²θ = cosec²θ", description: "Cot relation.", explanation: "Derived from Identity I.", category: "Trig" }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Compound Trigonometry",
        formulas: [
          { id: "11-1", title: "sin(A±B)", expression: "sinAcosB ± cosAsinB", description: "Sum/Diff sin.", explanation: "Compound angles.", category: "Trig" },
          { id: "11-2", title: "cos(A±B)", expression: "cosAcosB ∓ sinAsinB", description: "Sum/Diff cos.", explanation: "Compound angles.", category: "Trig" },
          { id: "11-3", title: "sin 2θ", expression: "2sinθcosθ", description: "Double angle.", explanation: "Reduces angle by half.", category: "Trig" }
        ]
      },
      {
        name: "Calculus",
        formulas: [
          { id: "11-4", title: "Power Rule", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Differentiation.", explanation: "Foundational calculus rule.", category: "Calculus" },
          { id: "11-5", title: "Trig Limit", expression: "lim(x→0) sinx/x = 1", description: "Standard limit.", explanation: "Essential for trig derivatives.", category: "Calculus" }
        ]
      }
    ]
  },
  {
    grade: 12,
    label: "Class 12",
    topics: [
      {
        name: "Advanced Calculus",
        formulas: [
          { id: "12-1", title: "Product Rule", expression: "(uv)' = u'v + uv'", description: "Differentiation.", explanation: "For two functions multiplied.", category: "Calculus" },
          { id: "12-2", title: "Chain Rule", expression: "dy/dx = (dy/du)·(du/dx)", description: "Composite diff.", explanation: "Functions within functions.", category: "Calculus" },
          { id: "12-3", title: "Integration by Parts", expression: "∫u dv = uv - ∫v du", description: "Integral rule.", explanation: "Reverse of product rule.", category: "Calculus" },
          { id: "12-4", title: "Fundamental Theorem", expression: "∫ₐᵇ f(x)dx = F(b)-F(a)", description: "Definite integral.", explanation: "Finding area under curve.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & Prob",
        formulas: [
          { id: "12-5", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar multiplication.", explanation: "Result is a scalar.", category: "Vectors" },
          { id: "12-6", title: "Bayes' Theorem", expression: "P(A|B) = P(B|A)P(A)/P(B)", description: "Probability.", explanation: "Conditional prob relation.", category: "Probability" }
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