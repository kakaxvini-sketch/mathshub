import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Integers & Operations",
        formulas: [
          { id: "7-1-1", title: "Closure Property", expression: "a + b = Integer", description: "Addition of integers.", explanation: "The sum of any two integers is always an integer.", category: "Integers" },
          { id: "7-1-2", title: "Commutative Property", expression: "a + b = b + a", description: "Order rule.", explanation: "Changing the order of addends does not change the sum.", category: "Integers" },
          { id: "7-1-3", title: "Associative Property", expression: "(a+b)+c = a+(b+c)", description: "Grouping rule.", explanation: "The grouping of numbers doesn't change their sum.", category: "Integers" },
          { id: "7-1-4", title: "Distributive Property", expression: "a(b+c) = ab + ac", description: "Expansion rule.", explanation: "Multiplying a sum by a number is the same as multiplying each addend.", category: "Integers" }
        ]
      },
      {
        name: "Fractions & Decimals",
        formulas: [
          { id: "7-2-1", title: "Product of Fractions", expression: "Num₁×Num₂ / Den₁×Den₂", description: "Multiplication rule.", explanation: "Multiply numerators and denominators separately.", category: "Fractions" },
          { id: "7-2-2", title: "Reciprocal", expression: "a/b → b/a", description: "Inversion.", explanation: "The product of a fraction and its reciprocal is 1.", category: "Fractions" }
        ]
      },
      {
        name: "Perimeter & Area",
        formulas: [
          { id: "7-3-1", title: "Area of Square", expression: "side × side", description: "Surface space.", explanation: "Square of the length of its side.", category: "Geometry" },
          { id: "7-3-2", title: "Area of Triangle", expression: "1/2 × base × height", description: "Triangle surface.", explanation: "Half the product of base and perpendicular height.", category: "Geometry" },
          { id: "7-3-3", title: "Circumference", expression: "2πr", description: "Circle perimeter.", explanation: "The distance around a circle.", category: "Geometry" }
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
          { id: "8-1-1", title: "Identity I", expression: "(a+b)² = a² + 2ab + b²", description: "Square of sum.", explanation: "Standard expansion for binomial addition.", category: "Algebra" },
          { id: "8-1-2", title: "Identity II", expression: "(a-b)² = a² - 2ab + b²", description: "Square of diff.", explanation: "Standard expansion for binomial subtraction.", category: "Algebra" },
          { id: "8-1-3", title: "Identity III", expression: "a² - b² = (a+b)(a-b)", description: "Diff of squares.", explanation: "Factorization identity for quadratic terms.", category: "Algebra" },
          { id: "8-1-4", title: "Identity IV", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Product rule.", explanation: "Common expansion for linear binomials.", category: "Algebra" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "8-2-1", title: "Area of Trapezium", expression: "1/2(a+b)h", description: "Parallel side area.", explanation: "a and b are parallel sides, h is height.", category: "Geometry" },
          { id: "8-2-2", title: "Total Surface Area (Cuboid)", expression: "2(lb + bh + hl)", description: "Box surface.", explanation: "Sum of areas of all 6 faces.", category: "Geometry" },
          { id: "8-2-3", title: "Volume of Cylinder", expression: "πr²h", description: "Cylindrical capacity.", explanation: "Space occupied by a cylinder.", category: "Geometry" }
        ]
      },
      {
        name: "Exponents & Powers",
        formulas: [
          { id: "8-3-1", title: "Negative Exponent", expression: "a⁻ᵐ = 1/aᵐ", description: "Reciprocal power.", explanation: "Base moved to denominator.", category: "Algebra" },
          { id: "8-3-2", title: "Zero Exponent", expression: "a⁰ = 1", description: "Unit rule.", explanation: "Any non-zero number to power 0 is 1.", category: "Algebra" }
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
          { id: "9-1-1", title: "Trinomial Square", expression: "(a+b+c)² = a²+b²+c²+2ab+2bc+2ca", description: "3-term expansion.", explanation: "Square of a sum of three terms.", category: "Algebra" },
          { id: "9-1-2", title: "Cube of Sum", expression: "(a+b)³ = a³+b³+3ab(a+b)", description: "Binomial cube.", explanation: "Standard cubic expansion.", category: "Algebra" },
          { id: "9-1-3", title: "Sum of Cubes", expression: "a³+b³ = (a+b)(a²-ab+b²)", description: "Cubic factoring.", explanation: "Factoring sum of two cubes.", category: "Algebra" }
        ]
      },
      {
        name: "Heron's Formula",
        formulas: [
          { id: "9-2-1", title: "Semi-perimeter (s)", expression: "(a+b+c)/2", description: "Half perimeter.", explanation: "Required for Heron's calculation.", category: "Geometry" },
          { id: "9-2-2", title: "Heron's Formula", expression: "√[s(s-a)(s-b)(s-c)]", description: "Area of triangle.", explanation: "Area using only side lengths.", category: "Geometry" }
        ]
      },
      {
        name: "Surface Areas & Volumes",
        formulas: [
          { id: "9-3-1", title: "Surface Area (Sphere)", expression: "4πr²", description: "Sphere exterior.", explanation: "Total area of a spherical surface.", category: "Geometry" },
          { id: "9-3-2", title: "Volume of Cone", expression: "1/3 πr²h", description: "Cone capacity.", explanation: "One-third volume of a cylinder.", category: "Geometry" }
        ]
      }
    ]
  },
  {
    grade: 10,
    label: "Class 10",
    topics: [
      {
        name: "Real Numbers",
        formulas: [
          { id: "10-1-1", title: "Euclid's Lemma", expression: "a = bq + r", description: "Division algorithm.", explanation: "0 ≤ r < b.", category: "Number Systems" },
          { id: "10-1-2", title: "HCF & LCM Relation", expression: "HCF × LCM = a × b", description: "Product theorem.", explanation: "Applies to two positive integers.", category: "Number Systems" }
        ]
      },
      {
        name: "Quadratic Equations",
        formulas: [
          { id: "10-2-1", title: "Quadratic Formula", expression: "x = [-b ± √(b² - 4ac)] / 2a", description: "Root finder.", explanation: "Standard solution for ax²+bx+c=0.", category: "Algebra" },
          { id: "10-2-2", title: "Discriminant (D)", expression: "D = b² - 4ac", description: "Nature of roots.", explanation: "D>0: 2 real; D=0: 1 real; D<0: imaginary.", category: "Algebra" }
        ]
      },
      {
        name: "Arithmetic Progressions",
        formulas: [
          { id: "10-3-1", title: "nth term (aₙ)", expression: "a + (n-1)d", description: "Sequence value.", explanation: "a=first term, d=diff.", category: "Algebra" },
          { id: "10-3-2", title: "Sum of n terms (Sₙ)", expression: "n/2 [2a + (n-1)d]", description: "Total sum.", explanation: "Also Sₙ = n/2(a + l).", category: "Algebra" }
        ]
      },
      {
        name: "Trigonometry",
        formulas: [
          { id: "10-4-1", title: "Identity I", expression: "sin²θ + cos²θ = 1", description: "Fundamental rule.", explanation: "Universal trig identity.", category: "Trigonometry" },
          { id: "10-4-2", title: "Identity II", expression: "1 + tan²θ = sec²θ", description: "Sec-Tan rule.", explanation: "Related to squares of ratios.", category: "Trigonometry" },
          { id: "10-4-3", title: "Complementary Angles", expression: "sin(90-θ) = cosθ", description: "Co-function rule.", explanation: "Sine and Cosine are complementary.", category: "Trigonometry" }
        ]
      },
      {
        name: "Statistics & Probability",
        formulas: [
          { id: "10-5-1", title: "Empirical Formula", expression: "3 Median = Mode + 2 Mean", description: "Central tendency.", explanation: "Relates the three measures.", category: "Statistics" },
          { id: "10-5-2", title: "Probability P(E)", expression: "n(E) / n(S)", description: "Likelihood.", explanation: "Favorable outcomes / Total outcomes.", category: "Probability" }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Sets & Relations",
        formulas: [
          { id: "11-1-1", title: "Union n(A∪B)", expression: "n(A)+n(B)-n(A∩B)", description: "Combined size.", explanation: "Standard addition theorem.", category: "Algebra" },
          { id: "11-1-2", title: "De Morgan's Laws", expression: "(A∪B)' = A'∩B'", description: "Complements.", explanation: "Intersection/Union transformations.", category: "Algebra" }
        ]
      },
      {
        name: "Trigonometric Functions",
        formulas: [
          { id: "11-2-1", title: "sin(A+B)", expression: "sinAcosB + cosAsinB", description: "Addition formula.", explanation: "Sine of a sum.", category: "Trigonometry" },
          { id: "11-2-2", title: "cos 2θ", expression: "cos²θ - sin²θ", description: "Double angle.", explanation: "Also 2cos²θ-1 or 1-2sin²θ.", category: "Trigonometry" },
          { id: "11-2-3", title: "General Solution (sin)", expression: "θ = nπ + (-1)ⁿα", description: "Periodic solutions.", explanation: "General angles for sine.", category: "Trigonometry" }
        ]
      },
      {
        name: "Sequences & Series",
        formulas: [
          { id: "11-3-1", title: "GP nth term", expression: "arⁿ⁻¹", description: "Geometric term.", explanation: "a=first, r=ratio.", category: "Algebra" },
          { id: "11-3-2", title: "Infinite GP Sum", expression: "a / (1-r)", description: "Infinite sum.", explanation: "Valid for |r| < 1.", category: "Algebra" }
        ]
      },
      {
        name: "Straight Lines",
        formulas: [
          { id: "11-4-1", title: "Slope (m)", expression: "(y₂-y₁) / (x₂-x₁)", description: "Gradient.", explanation: "Rise over run.", category: "Geometry" },
          { id: "11-4-2", title: "Slope-Intercept", expression: "y = mx + c", description: "Standard form.", explanation: "m is slope, c is y-intercept.", category: "Geometry" }
        ]
      },
      {
        name: "Calculus",
        formulas: [
          { id: "11-5-1", title: "Limit sinx/x", expression: "lim(x→0) = 1", description: "Fundamental limit.", explanation: "Central limit theorem in trig.", category: "Calculus" },
          { id: "11-5-2", title: "Power Rule (Diff)", expression: "nxⁿ⁻¹", description: "Basic derivative.", explanation: "d/dx of x to the power n.", category: "Calculus" }
        ]
      }
    ]
  },
  {
    grade: 12,
    label: "Class 12",
    topics: [
      {
        name: "Matrices & Det",
        formulas: [
          { id: "12-1-1", title: "Inverse A⁻¹", expression: "1/|A| × adj(A)", description: "Matrix inversion.", explanation: "Needs non-singular matrix.", category: "Algebra" },
          { id: "12-1-2", title: "|AB| Property", expression: "|A| × |B|", description: "Det product.", explanation: "Det of product = Product of dets.", category: "Algebra" }
        ]
      },
      {
        name: "Calculus: Differentiation",
        formulas: [
          { id: "12-2-1", title: "Chain Rule", expression: "dy/dx = (dy/du)·(du/dx)", description: "Nested derivative.", explanation: "For composite functions.", category: "Calculus" },
          { id: "12-2-2", title: "Logarithmic Diff", expression: "y' = y[ln(y)]'", description: "Complex powers.", explanation: "Using logs to simplify power derivatives.", category: "Calculus" }
        ]
      },
      {
        name: "Calculus: Integration",
        formulas: [
          { id: "12-3-1", title: "By Parts", expression: "∫uv = u∫v - ∫(u'∫v)", description: "Product rule.", explanation: "Integration of two functions.", category: "Calculus" },
          { id: "12-3-2", title: "Substitution", expression: "∫f(g(x))g'(x) = ∫f(u)du", description: "Variable change.", explanation: "Simplify complex integrals.", category: "Calculus" },
          { id: "12-3-3", title: "Basic: 1/x", expression: "∫(1/x)dx = ln|x| + C", description: "Log integral.", explanation: "Fundamental integral form.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & 3D",
        formulas: [
          { id: "12-4-1", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar product.", explanation: "Used for projections and angles.", category: "Geometry" },
          { id: "12-4-2", title: "Cross Product", expression: "a×b = |a||b|sinθ n̂", description: "Vector product.", explanation: "Perpendicular result vector.", category: "Geometry" },
          { id: "12-4-3", title: "Shortest Distance", expression: "|(a₂-a₁)·(b₁×b₂)| / |b₁×b₂|", description: "Skew lines.", explanation: "Distance between two non-intersecting spatial lines.", category: "Geometry" }
        ]
      },
      {
        name: "Probability",
        formulas: [
          { id: "12-5-1", title: "Conditional P(A|B)", expression: "P(A∩B) / P(B)", description: "Dependency.", explanation: "Prob of A given B occurred.", category: "Probability" },
          { id: "12-5-2", title: "Bayes' Theorem", expression: "P(A|B) = [P(B|A)P(A)] / P(B)", description: "Inverse prob.", explanation: "Updating beliefs with evidence.", category: "Probability" }
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