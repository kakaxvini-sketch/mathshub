import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Number System & Integers",
        formulas: [
          { id: "7-1", title: "Commutative Property (Add)", expression: "a + b = b + a", description: "Order doesn't matter in addition.", explanation: "The sum of two integers remains the same regardless of the order in which they are added.", category: "Integers" },
          { id: "7-2", title: "Commutative Property (Mul)", expression: "a × b = b × a", description: "Order doesn't matter in multiplication.", explanation: "Multiplying two numbers in any order gives the same product.", category: "Integers" },
          { id: "7-3", title: "Associative Property", expression: "(a+b)+c = a+(b+c)", description: "Grouping doesn't change sum.", explanation: "When adding three or more numbers, the way they are grouped does not affect the final sum.", category: "Integers" },
          { id: "7-4", title: "Distributive Property", expression: "a(b+c) = ab + ac", description: "Multiplication over addition.", explanation: "Multiplying a sum by a number is the same as multiplying each addend by the number and then adding the products.", category: "Algebra" },
          { id: "7-5", title: "Additive Identity", expression: "a + 0 = a", description: "Adding zero changes nothing.", explanation: "Zero is called the additive identity for integers.", category: "Integers" },
          { id: "7-6", title: "Multiplicative Identity", expression: "a × 1 = a", description: "Multiplying by 1 changes nothing.", explanation: "One is the multiplicative identity for integers.", category: "Integers" },
          { id: "7-7", title: "Product of Fractions", expression: "(a/b) × (c/d) = (ac)/(bd)", description: "Top x Top, Bottom x Bottom.", explanation: "To multiply two fractions, multiply their numerators and their denominators separately.", category: "Fractions" },
          { id: "7-8", title: "Fraction Division", expression: "(a/b) ÷ (c/d) = (ad)/(bc)", description: "Keep, Change, Flip.", explanation: "Multiply the first fraction by the reciprocal of the second fraction.", category: "Fractions" },
          { id: "7-9", title: "Percentage to Decimal", expression: "x% = x / 100", description: "Converting percent to fraction.", explanation: "Per-cent means 'per hundred'. Divide the value by 100.", category: "Arithmetic" }
        ]
      },
      {
        name: "Geometry & Mensuration",
        formulas: [
          { id: "7-10", title: "Area of Triangle", expression: "A = 1/2 × b × h", description: "Standard area formula.", explanation: "Where 'b' is the base and 'h' is the perpendicular height.", category: "Geometry" },
          { id: "7-11", title: "Area of Parallelogram", expression: "A = b × h", description: "Base times height.", explanation: "A parallelogram's area is the same as a rectangle with the same base and vertical height.", category: "Geometry" },
          { id: "7-12", title: "Circumference of Circle", expression: "C = 2πr", description: "Perimeter of circle.", explanation: "The distance around a circle. π is approximately 3.14159.", category: "Geometry" },
          { id: "7-13", title: "Area of Circle", expression: "A = πr²", description: "Surface inside circle.", explanation: "The space occupied by a circle. Radius 'r' must be squared.", category: "Geometry" },
          { id: "7-14", title: "Triangle Angle Sum", expression: "∠A + ∠B + ∠C = 180°", description: "Interior angles sum.", explanation: "The sum of all three interior angles of any triangle is exactly 180 degrees.", category: "Geometry" },
          { id: "7-15", title: "Pythagoras Property", expression: "a² + b² = c²", description: "Right triangle relation.", explanation: "In a right-angled triangle, the square of the hypotenuse (c) is equal to the sum of the squares of the other two sides.", category: "Geometry" },
          { id: "7-16", title: "Supplementary Angles", expression: "∠1 + ∠2 = 180°", description: "Sum is a straight line.", explanation: "Two angles are supplementary if their sum is 180 degrees.", category: "Geometry" }
        ]
      },
      {
        name: "Commercial Math & Stats",
        formulas: [
          { id: "7-17", title: "Simple Interest", expression: "I = (P×R×T)/100", description: "Interest on principal.", explanation: "P = Principal, R = Rate of Interest per annum, T = Time in years.", category: "Finance" },
          { id: "7-18", title: "Total Amount", expression: "A = P + I", description: "Principal plus interest.", explanation: "The total money to be paid back after the time period.", category: "Finance" },
          { id: "7-19", title: "Profit Percentage", expression: "P% = (Profit/CP) × 100", description: "Profit relative to cost.", explanation: "Profit = Selling Price - Cost Price. CP is Cost Price.", category: "Finance" },
          { id: "7-20", title: "Arithmetic Mean", expression: "Mean = Σx / n", description: "Average value.", explanation: "The sum of all observations divided by the total number of observations.", category: "Statistics" },
          { id: "7-21", title: "Speed", expression: "S = Distance / Time", description: "Rate of motion.", explanation: "How fast an object is moving. Distance per unit time.", category: "Arithmetic" }
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
          { id: "8-1", title: "Square of Sum", expression: "(a+b)² = a² + 2ab + b²", description: "Basic Identity I.", explanation: "Standard expansion for a binomial sum squared.", category: "Algebra" },
          { id: "8-2", title: "Square of Difference", expression: "(a-b)² = a² - 2ab + b²", description: "Basic Identity II.", explanation: "Note the minus sign on the middle product term.", category: "Algebra" },
          { id: "8-3", title: "Difference of Squares", expression: "a² - b² = (a+b)(a-b)", description: "Basic Identity III.", explanation: "Used extensively for factoring polynomials.", category: "Algebra" },
          { id: "8-4", title: "Linear Product", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Basic Identity IV.", explanation: "Expanding two binomials with a common first term.", category: "Algebra" },
          { id: "8-5", title: "Cube of Sum", expression: "(a+b)³ = a³+3a²b+3ab²+b³", description: "Expansion of (a+b)³.", explanation: "Also written as a³ + b³ + 3ab(a+b).", category: "Algebra" },
          { id: "8-6", title: "Euler's Formula", expression: "F + V - E = 2", description: "Faces, Vertices, Edges.", explanation: "For any convex polyhedron, the number of faces plus vertices minus edges is always 2.", category: "Geometry" }
        ]
      },
      {
        name: "Mensuration (3D)",
        formulas: [
          { id: "8-7", title: "Area of Trapezium", expression: "A = 1/2(a+b)h", description: "Parallel sides average.", explanation: "a, b are parallel side lengths, h is vertical height.", category: "Geometry" },
          { id: "8-8", title: "Area of Rhombus", expression: "A = 1/2(d₁ × d₂)", description: "Diagonal product rule.", explanation: "d1 and d2 are the lengths of the two diagonals.", category: "Geometry" },
          { id: "8-9", title: "TSA of Cuboid", expression: "TSA = 2(lb + bh + hl)", description: "Total Surface Area.", explanation: "Sum of areas of all six rectangular faces.", category: "Mensuration" },
          { id: "8-10", title: "Volume of Cuboid", expression: "V = l × b × h", description: "Storage capacity.", explanation: "Product of length, breadth, and height.", category: "Mensuration" },
          { id: "8-11", title: "Volume of Cube", expression: "V = a³", description: "Cube capacity.", explanation: "Where 'a' is the side length of the cube.", category: "Mensuration" },
          { id: "8-12", title: "Volume of Cylinder", expression: "V = πr²h", description: "Cylinder capacity.", explanation: "Base area (circle) multiplied by vertical height.", category: "Mensuration" },
          { id: "8-13", title: "CSA of Cylinder", expression: "CSA = 2πrh", description: "Curved surface area.", explanation: "Excludes the two circular bases.", category: "Mensuration" }
        ]
      },
      {
        name: "Commercial Math",
        formulas: [
          { id: "8-14", title: "Compound Interest (Amt)", expression: "A = P(1 + r/100)ⁿ", description: "Accrued Amount.", explanation: "Interest calculated on the principal plus prior accumulated interest.", category: "Finance" },
          { id: "8-15", title: "Compound Interest (CI)", expression: "CI = A - P", description: "Interest value.", explanation: "The difference between the final amount and initial principal.", category: "Finance" },
          { id: "8-16", title: "Direct Variation", expression: "x/y = k", description: "Linear proportion.", explanation: "As x increases, y increases at a constant ratio.", category: "Arithmetic" },
          { id: "8-17", title: "Inverse Variation", expression: "xy = k", description: "Inverse proportion.", explanation: "As x increases, y decreases so their product remains constant.", category: "Arithmetic" },
          { id: "8-18", title: "Product Law (Exponents)", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Add powers.", explanation: "Keep the base and add the exponents for multiplication.", category: "Exponents" },
          { id: "8-19", title: "Quotient Law (Exponents)", expression: "aᵐ / aⁿ = aᵐ⁻ⁿ", description: "Subtract powers.", explanation: "Keep the base and subtract exponents for division.", category: "Exponents" }
        ]
      }
    ]
  },
  {
    grade: 9,
    label: "Class 9",
    topics: [
      {
        name: "Algebra & Polynomials",
        formulas: [
          { id: "9-1", title: "Square of Trinomial", expression: "(a+b+c)² = a²+b²+c²+2ab+2bc+2ca", description: "Expansion of 3 terms.", explanation: "Standard identity for squaring a three-term sum.", category: "Algebra" },
          { id: "9-2", title: "Sum of Cubes", expression: "a³+b³ = (a+b)(a²-ab+b²)", description: "Factoring Identity I.", explanation: "Note the negative middle term in the second factor.", category: "Algebra" },
          { id: "9-3", title: "Difference of Cubes", expression: "a³-b³ = (a-b)(a²+ab+b²)", description: "Factoring Identity II.", explanation: "Note the positive middle term in the second factor.", category: "Algebra" },
          { id: "9-4", title: "Special Identity", expression: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)", description: "Complex Identity.", explanation: "If a+b+c=0, then a³+b³+c³ = 3abc.", category: "Algebra" },
          { id: "9-5", title: "Degree of zero polynomial", expression: "Not defined", description: "Special rule.", explanation: "The degree of a zero polynomial is not defined.", category: "Polynomials" }
        ]
      },
      {
        name: "Geometry & Coordinate",
        formulas: [
          { id: "9-6", title: "Heron's Formula", expression: "Area = √[s(s-a)(s-b)(s-c)]", description: "Area from 3 sides.", explanation: "s = (a+b+c)/2 is the semi-perimeter.", category: "Geometry" },
          { id: "9-7", title: "Distance Formula", expression: "d = √[(x₂-x₁)² + (y₂-y₁)²]", description: "Point-to-point length.", explanation: "Calculating distance in a Cartesian plane.", category: "Coordinate" },
          { id: "9-8", title: "Midpoint Formula", expression: "M = [(x₁+x₂)/2, (y₁+y₂)/2]", description: "Center of segment.", explanation: "Coordinates of the exact middle point of a line.", category: "Coordinate" },
          { id: "9-9", title: "Sum of Int Angles (n-gon)", expression: "Σ = (n-2) × 180°", description: "Polygon interior sum.", explanation: "n is the number of sides of the polygon.", category: "Geometry" },
          { id: "9-10", title: "Sum of Ext Angles", expression: "Σext = 360°", description: "Polygon exterior sum.", explanation: "The sum of exterior angles of any polygon is always 360 degrees.", category: "Geometry" }
        ]
      },
      {
        name: "Surface Area & Volumes",
        formulas: [
          { id: "9-11", title: "CSA of Cone", expression: "CSA = πrl", description: "Curved surface area.", explanation: "l is slant height: √(r² + h²).", category: "Mensuration" },
          { id: "9-12", title: "TSA of Cone", expression: "TSA = πr(l + r)", description: "Total area of cone.", explanation: "Includes the circular base.", category: "Mensuration" },
          { id: "9-13", title: "Volume of Cone", expression: "V = 1/3 πr²h", description: "1/3 of Cylinder.", explanation: "Standard volume for a right circular cone.", category: "Mensuration" },
          { id: "9-14", title: "Surface Area of Sphere", expression: "SA = 4πr²", description: "Full ball area.", explanation: "The surface area of a perfectly round sphere.", category: "Mensuration" },
          { id: "9-15", title: "Volume of Sphere", expression: "V = 4/3 πr³", description: "Ball capacity.", explanation: "Standard volume formula for a solid sphere.", category: "Mensuration" },
          { id: "9-16", title: "TSA of Hemisphere", expression: "TSA = 3πr²", description: "Solid half-sphere.", explanation: "2πr² (curved) + πr² (flat base).", category: "Mensuration" },
          { id: "9-17", title: "Volume of Hemisphere", expression: "V = 2/3 πr³", description: "Half-sphere capacity.", explanation: "Exactly half the volume of a sphere.", category: "Mensuration" }
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
          { id: "10-1", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "Standard roots.", explanation: "Used to solve any quadratic equation ax² + bx + c = 0.", category: "Algebra" },
          { id: "10-2", title: "Discriminant", expression: "D = b² - 4ac", description: "Root nature.", explanation: "D > 0: Real/Distinct; D = 0: Real/Equal; D < 0: Imaginary.", category: "Algebra" },
          { id: "10-3", title: "Sum of Roots", expression: "α + β = -b/a", description: "Root-Coeff relation.", explanation: "Relationship between roots and coefficients.", category: "Algebra" },
          { id: "10-4", title: "Product of Roots", expression: "αβ = c/a", description: "Root-Coeff relation.", explanation: "Constant term over leading coefficient.", category: "Algebra" },
          { id: "10-5", title: "nth term of AP", expression: "aₙ = a + (n-1)d", description: "Specific sequence term.", explanation: "a is the first term, d is common difference.", category: "Arithmetic Progression" },
          { id: "10-6", title: "Sum of n terms AP", expression: "Sₙ = n/2 [2a + (n-1)d]", description: "AP total sum.", explanation: "Sum of first 'n' terms of an arithmetic progression.", category: "Arithmetic Progression" }
        ]
      },
      {
        name: "Trigonometry",
        formulas: [
          { id: "10-7", title: "Trig Identity I", expression: "sin²θ + cos²θ = 1", description: "Pythagorean Identity.", explanation: "Universal identity for all angles θ.", category: "Trigonometry" },
          { id: "10-8", title: "Trig Identity II", expression: "1 + tan²θ = sec²θ", description: "Tangent/Secant Identity.", explanation: "Derived from Identity I.", category: "Trigonometry" },
          { id: "10-9", title: "Trig Identity III", expression: "1 + cot²θ = cosec²θ", description: "Cot/Cosec Identity.", explanation: "Derived from Identity I.", category: "Trigonometry" },
          { id: "10-10", title: "tan θ", expression: "sin θ / cos θ", description: "Tangent definition.", explanation: "The ratio of sine to cosine.", category: "Trigonometry" },
          { id: "10-11", title: "Complementary sin", expression: "sin(90-θ) = cosθ", description: "Cofunction property.", explanation: "The sine of an angle is the cosine of its complement.", category: "Trigonometry" }
        ]
      },
      {
        name: "Coordinate & Stats",
        formulas: [
          { id: "10-12", title: "Section Formula", expression: "P = [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]", description: "Internal point division.", explanation: "Coordinates of a point dividing a segment in ratio m:n.", category: "Coordinate" },
          { id: "10-13", title: "Area of Sector", expression: "A = (θ/360) × πr²", description: "Portion of circle.", explanation: "θ is the angle at the center.", category: "Geometry" },
          { id: "10-14", title: "Arc Length", expression: "L = (θ/360) × 2πr", description: "Sector boundary.", explanation: "Length of a curved sector segment.", category: "Geometry" },
          { id: "10-15", title: "Volume of Frustum", expression: "V = 1/3 πh(r₁² + r₂² + r₁r₂)", description: "Cut-cone volume.", explanation: "Bucket-shaped solid with two radii.", category: "Mensuration" },
          { id: "10-16", title: "Arithmetic Mean (Direct)", expression: "x̄ = Σfᵢxᵢ / Σfᵢ", description: "Weighted average.", explanation: "Sum of products of frequency and midpoint.", category: "Statistics" },
          { id: "10-17", title: "Empirical Relation", expression: "3 Median = Mode + 2 Mean", description: "Central Tendency link.", explanation: "Relationship between the three measures of central tendency.", category: "Statistics" }
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
          { id: "11-1", title: "sin(A±B)", expression: "sinAcosB ± cosAsinB", description: "Sum/Diff Identity.", explanation: "Calculating sine of compound angles.", category: "Trig" },
          { id: "11-2", title: "cos(A±B)", expression: "cosAcosB ∓ sinAsinB", description: "Sum/Diff Identity.", explanation: "Note the sign reversal for the sum case.", category: "Trig" },
          { id: "11-3", title: "tan(A±B)", expression: "(tanA±tanB) / (1∓tanAtanB)", description: "Tangent sum identity.", explanation: "Relating tangents of compound angles.", category: "Trig" },
          { id: "11-4", title: "sin 2θ", expression: "2sinθcosθ", description: "Double Angle sin.", explanation: "Also equals 2tanθ / (1+tan²θ).", category: "Trig" },
          { id: "11-5", title: "cos 2θ", expression: "cos²θ - sin²θ", description: "Double Angle cos.", explanation: "Also 2cos²θ-1 or 1-2sin²θ.", category: "Trig" },
          { id: "11-6", title: "Sine Rule", expression: "a/sinA = b/sinB = c/sinC", description: "Triangle sides-angles.", explanation: "Valid for any oblique triangle.", category: "Trig" },
          { id: "11-7", title: "Cosine Rule", expression: "a² = b²+c²-2bccosA", description: "Generalized Pythagoras.", explanation: "Finding sides or angles in oblique triangles.", category: "Trig" }
        ]
      },
      {
        name: "Algebra & Series",
        formulas: [
          { id: "11-8", title: "nth term GP", expression: "aₙ = arⁿ⁻¹", description: "Geometric term.", explanation: "a = first term, r = common ratio.", category: "Algebra" },
          { id: "11-9", title: "Sum of n terms GP", expression: "Sₙ = a(rⁿ-1)/(r-1)", description: "Finite GP sum.", explanation: "Sum of geometric sequence (r ≠ 1).", category: "Algebra" },
          { id: "11-10", title: "Sum to Infinity GP", expression: "S∞ = a / (1-r)", description: "Infinite series sum.", explanation: "Valid only if |r| < 1.", category: "Algebra" },
          { id: "11-11", title: "nPr Permutations", expression: "n! / (n-r)!", description: "Order matters selection.", explanation: "Ways to arrange 'r' items out of 'n'.", category: "Combinatorics" },
          { id: "11-12", title: "nCr Combinations", expression: "n! / [r!(n-r)!]", description: "Order doesn't matter.", explanation: "Ways to choose 'r' items out of 'n'.", category: "Combinatorics" },
          { id: "11-13", title: "Binomial Expansion", expression: "Σ ⁿCᵣ xⁿ⁻ʳ aʳ", description: "Expanding (x+a)ⁿ.", explanation: "The general binomial theorem.", category: "Algebra" }
        ]
      },
      {
        name: "Calculus & Coordinates",
        formulas: [
          { id: "11-14", title: "Derivative Power Rule", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Fundamental Calculus.", explanation: "Foundational rule for differentiation.", category: "Calculus" },
          { id: "11-15", title: "Derivative of sin x", expression: "cos x", description: "Trig diff.", explanation: "Rate of change of the sine function.", category: "Calculus" },
          { id: "11-16", title: "Standard Limit", expression: "lim(x→0) sinx/x = 1", description: "Core limit property.", explanation: "Fundamental for proving trig derivatives.", category: "Calculus" },
          { id: "11-17", title: "Distance: Pt to Line", expression: "d = |Ax₁+By₁+C|/√(A²+B²)", description: "Perpendicular distance.", explanation: "Shortest distance from point (x1, y1) to line Ax+By+C=0.", category: "Coordinate" },
          { id: "11-18", title: "Slope-intercept form", expression: "y = mx + c", description: "Straight line equation.", explanation: "m is slope, c is y-intercept.", category: "Coordinate" }
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
          { id: "12-1", title: "Product Rule", expression: "(uv)' = u'v + uv'", description: "Differentiating products.", explanation: "Used for two functions multiplied together.", category: "Calculus" },
          { id: "12-2", title: "Quotient Rule", expression: "(u/v)' = (u'v-uv')/v²", description: "Differentiating division.", explanation: "Note the specific order in the numerator.", category: "Calculus" },
          { id: "12-3", title: "Chain Rule", expression: "dy/dx = (dy/du)·(du/dx)", description: "Composite functions.", explanation: "Differentiating functions within functions.", category: "Calculus" },
          { id: "12-4", title: "Derivative of ln x", expression: "1 / x", description: "Log diff.", explanation: "Slope of the natural log function.", category: "Calculus" },
          { id: "12-5", title: "Derivative of eˣ", expression: "eˣ", description: "Exponential diff.", explanation: "The function that is its own derivative.", category: "Calculus" },
          { id: "12-6", title: "Derivative sin⁻¹x", expression: "1 / √(1-x²)", description: "Inverse Trig diff.", explanation: "Valid for the principal domain (-1, 1).", category: "Calculus" },
          { id: "12-7", title: "Derivative tan⁻¹x", expression: "1 / (1+x²)", description: "Inverse Trig diff.", explanation: "Defined for all real x.", category: "Calculus" }
        ]
      },
      {
        name: "Integral Calculus",
        formulas: [
          { id: "12-8", title: "Integral of xⁿ", expression: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C", description: "Anti-derivative power.", explanation: "Valid for n ≠ -1.", category: "Calculus" },
          { id: "12-9", title: "Integral of 1/x", expression: "∫(1/x) dx = ln|x| + C", description: "Reciprocal integral.", explanation: "Integration case where power rule fails.", category: "Calculus" },
          { id: "12-10", title: "Integration by Parts", expression: "∫u dv = uv - ∫v du", description: "Product integration.", explanation: "The inverse of the product rule for derivatives.", category: "Calculus" },
          { id: "12-11", title: "Definite Integral", expression: "∫ₐᵇ f(x)dx = F(b) - F(a)", description: "Fundamental Theorem.", explanation: "Area under the curve from 'a' to 'b'.", category: "Calculus" },
          { id: "12-12", title: "Integral of tan x", expression: "ln|sec x| + C", description: "Derived trig integral.", explanation: "Uses substitution method.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & Matrices",
        formulas: [
          { id: "12-13", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar multiplication.", explanation: "Results in a numeric scalar value.", category: "Vectors" },
          { id: "12-14", title: "Cross Product", expression: "a×b = |a||b|sinθ n̂", description: "Vector multiplication.", explanation: "Results in a perpendicular vector.", category: "Vectors" },
          { id: "12-15", title: "Matrix Determinant", expression: "|A| = ad - bc", description: "2x2 scalar value.", explanation: "Used for matrix inversion.", category: "Algebra" },
          { id: "12-16", title: "Matrix Inverse", expression: "A⁻¹ = (1/|A|) adj(A)", description: "Reciprocal matrix.", explanation: "A multiplied by its inverse yields identity I.", category: "Algebra" },
          { id: "12-17", title: "Conditional Prob", expression: "P(A|B) = P(A∩B)/P(B)", description: "Probability given B.", explanation: "Probability relative to event B.", category: "Probability" },
          { id: "12-18", title: "Bayes' Theorem", expression: "P(A|B) = P(B|A)P(A)/P(B)", description: "Evidence update.", explanation: "Core theorem for statistical updating.", category: "Probability" }
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