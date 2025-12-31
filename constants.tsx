
import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Integers & Arithmetic",
        formulas: [
          { id: "7-1", title: "Commutative Property (Add)", expression: "a + b = b + a", description: "Order doesn't matter in addition.", explanation: "Sum remains same regardless of order.", category: "Arithmetic" },
          { id: "7-2", title: "Associative Property (Add)", expression: "(a + b) + c = a + (b + c)", description: "Grouping doesn't change sum.", explanation: "Helps in simplifying long additions.", category: "Arithmetic" },
          { id: "7-3", title: "Distributive Property", expression: "a(b + c) = ab + ac", description: "Multiplication over addition.", explanation: "Essential for algebraic expansion.", category: "Algebra" },
          { id: "7-4", title: "Additive Identity", expression: "a + 0 = a", description: "Adding zero changes nothing.", explanation: "Zero is the identity element.", category: "Arithmetic" },
          { id: "7-5", title: "Multiplicative Identity", expression: "a × 1 = a", description: "Multiplying by 1 changes nothing.", explanation: "One is the multiplicative identity.", category: "Arithmetic" },
          { id: "7-6", title: "Additive Inverse", expression: "a + (-a) = 0", description: "Number plus its opposite is zero.", explanation: "Every integer has a unique inverse.", category: "Arithmetic" },
          { id: "7-7", title: "Product of Fractions", expression: "(a/b) × (c/d) = (ac)/(bd)", description: "Multiply tops and bottoms.", explanation: "Simplest fraction operation.", category: "Fractions" }
        ]
      },
      {
        name: "Geometry & Mensuration",
        formulas: [
          { id: "7-8", title: "Area of Triangle", expression: "A = 1/2 × b × h", description: "Half of base times height.", explanation: "Base and height must be perpendicular.", category: "Geometry" },
          { id: "7-9", title: "Area of Parallelogram", expression: "A = b × h", description: "Base times vertical height.", explanation: "Similar to rectangle calculation.", category: "Geometry" },
          { id: "7-10", title: "Circumference of Circle", expression: "C = 2πr", description: "Perimeter of the circle.", explanation: "π is approx 3.14 or 22/7.", category: "Geometry" },
          { id: "7-11", title: "Area of Circle", expression: "A = πr²", description: "Space inside a circle.", explanation: "Square the radius and multiply by Pi.", category: "Geometry" },
          { id: "7-12", title: "Triangle Angle Sum", expression: "∠A + ∠B + ∠C = 180°", description: "Sum of interior angles.", explanation: "Constant for all triangles.", category: "Geometry" },
          { id: "7-13", title: "Complementary Angles", expression: "∠1 + ∠2 = 90°", description: "Sum is a right angle.", explanation: "Angles that complete each other to 90.", category: "Geometry" },
          { id: "7-14", title: "Supplementary Angles", expression: "∠1 + ∠2 = 180°", description: "Sum is a straight line.", explanation: "Angles that add to 180.", category: "Geometry" }
        ]
      },
      {
        name: "Commercial Math & Stats",
        formulas: [
          { id: "7-15", title: "Simple Interest", expression: "SI = (P × R × T) / 100", description: "Interest on principal.", explanation: "P=Principal, R=Rate, T=Time.", category: "Finance" },
          { id: "7-16", title: "Total Amount", expression: "A = P + SI", description: "Final value after interest.", explanation: "Sum of original money and interest earned.", category: "Finance" },
          { id: "7-17", title: "Profit Percentage", expression: "P% = (Profit / CP) × 100", description: "Gain relative to cost.", explanation: "Profit = Selling Price - Cost Price.", category: "Finance" },
          { id: "7-18", title: "Arithmetic Mean", expression: "Mean = Σx / n", description: "Average of a data set.", explanation: "Sum of all values divided by count.", category: "Statistics" },
          { id: "7-19", title: "Range", expression: "R = Max - Min", description: "Spread of the data.", explanation: "Highest value minus lowest value.", category: "Statistics" }
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
          { id: "8-1", title: "Square of Sum", expression: "(a+b)² = a² + 2ab + b²", description: "Identity 1.", explanation: "Standard binomial expansion.", category: "Algebra" },
          { id: "8-2", title: "Square of Difference", expression: "(a-b)² = a² - 2ab + b²", description: "Identity 2.", explanation: "Expansion with negative middle term.", category: "Algebra" },
          { id: "8-3", title: "Difference of Squares", expression: "a² - b² = (a+b)(a-b)", description: "Identity 3.", explanation: "Vital for factoring polynomials.", category: "Algebra" },
          { id: "8-4", title: "Linear Product", expression: "(x+a)(x+b) = x² + (a+b)x + ab", description: "Identity 4.", explanation: "Expansion for common first term.", category: "Algebra" },
          { id: "8-5", title: "Euler's Polyhedron Formula", expression: "F + V - E = 2", description: "Relating faces, vertices, edges.", explanation: "Valid for any convex polyhedron.", category: "Geometry" }
        ]
      },
      {
        name: "Exponents & Powers",
        formulas: [
          { id: "8-6", title: "Product Law", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Add powers for same base.", explanation: "Multiplying exponential terms.", category: "Exponents" },
          { id: "8-7", title: "Quotient Law", expression: "aᵐ / aⁿ = aᵐ⁻ⁿ", description: "Subtract powers for same base.", explanation: "Dividing exponential terms.", category: "Exponents" },
          { id: "8-8", title: "Power of a Power", expression: "(aᵐ)ⁿ = aᵐⁿ", description: "Multiply the exponents.", explanation: "Raising a power to another power.", category: "Exponents" },
          { id: "8-9", title: "Negative Exponent", expression: "a⁻ⁿ = 1/aⁿ", description: "Inverse property.", explanation: "Negative power denotes reciprocal.", category: "Exponents" },
          { id: "8-10", title: "Zero Exponent", expression: "a⁰ = 1", description: "Unit identity.", explanation: "Any non-zero base to zero is 1.", category: "Exponents" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "8-11", title: "Area of Trapezium", expression: "A = 1/2(a+b)h", description: "Average bases times height.", explanation: "a and b are parallel side lengths.", category: "Geometry" },
          { id: "8-12", title: "Area of Rhombus", expression: "A = 1/2(d₁ × d₂)", description: "Half of diagonal product.", explanation: "d1 and d2 are lengths of diagonals.", category: "Geometry" },
          { id: "8-13", title: "TSA of Cuboid", expression: "TSA = 2(lb + bh + hl)", description: "Total Surface Area.", explanation: "Sum of areas of all 6 faces.", category: "Mensuration" },
          { id: "8-14", title: "Volume of Cuboid", expression: "V = l × b × h", description: "Capacity of the box.", explanation: "Standard 3D volume calculation.", category: "Mensuration" },
          { id: "8-15", title: "Volume of Cylinder", expression: "V = πr²h", description: "Base area times height.", explanation: "r is radius, h is vertical height.", category: "Mensuration" },
          { id: "8-16", title: "CSA of Cylinder", expression: "CSA = 2πrh", description: "Side surface area.", explanation: "Curved surface excluding circular ends.", category: "Mensuration" },
          { id: "8-17", title: "TSA of Cylinder", expression: "TSA = 2πr(r + h)", description: "Full surface area.", explanation: "Includes both bases and side.", category: "Mensuration" }
        ]
      },
      {
        name: "Commercial Math",
        formulas: [
          { id: "8-18", title: "Compound Interest (Amt)", expression: "A = P(1 + r/100)ⁿ", description: "Total amount accrued.", explanation: "Interest calculated on updated principal.", category: "Finance" },
          { id: "8-19", title: "Direct Proportion", expression: "x/y = k", description: "Ratio remains constant.", explanation: "x and y increase/decrease together.", category: "Arithmetic" },
          { id: "8-20", title: "Inverse Proportion", expression: "xy = k", description: "Product remains constant.", explanation: "One increases as the other decreases.", category: "Arithmetic" }
        ]
      }
    ]
  },
  {
    grade: 9,
    label: "Class 9",
    topics: [
      {
        name: "Polynomials & Identities",
        formulas: [
          { id: "9-1", title: "Square of Trinomial", expression: "(a+b+c)² = a²+b²+c²+2ab+2bc+2ca", description: "Expanding 3 terms.", explanation: "Sum of squares and pairwise products.", category: "Algebra" },
          { id: "9-2", title: "Sum Cubed", expression: "(a+b)³ = a³ + b³ + 3ab(a+b)", description: "Binomial cube sum.", explanation: "Also: a³ + 3a²b + 3ab² + b³.", category: "Algebra" },
          { id: "9-3", title: "Difference Cubed", expression: "(a-b)³ = a³ - b³ - 3ab(a-b)", description: "Binomial cube difference.", explanation: "Note sign alternation.", category: "Algebra" },
          { id: "9-4", title: "Sum of Cubes", expression: "a³ + b³ = (a+b)(a² - ab + b²)", description: "Factoring cubes.", explanation: "Trinomial part has negative middle term.", category: "Algebra" },
          { id: "9-5", title: "Difference of Cubes", expression: "a³ - b³ = (a-b)(a² + ab + b²)", description: "Factoring cubes.", explanation: "Trinomial part has positive middle term.", category: "Algebra" },
          { id: "9-6", title: "Special Identity", expression: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)", description: "The long identity.", explanation: "Crucial for advanced factoring.", category: "Algebra" }
        ]
      },
      {
        name: "Coordinate & Geometry",
        formulas: [
          { id: "9-7", title: "Heron's Formula", expression: "Area = √[s(s-a)(s-b)(s-c)]", description: "Area from 3 side lengths.", explanation: "s = (a+b+c)/2 (semi-perimeter).", category: "Geometry" },
          { id: "9-8", title: "Distance Formula", expression: "d = √[(x₂-x₁)² + (y₂-y₁)²]", description: "Length between two points.", explanation: "Coordinates (x1,y1) and (x2,y2).", category: "Coordinate" },
          { id: "9-9", title: "Midpoint Formula", expression: "M = [(x₁+x₂)/2 , (y₁+y₂)/2]", description: "Finding the center point.", explanation: "Average of endpoints' coordinates.", category: "Coordinate" },
          { id: "9-10", title: "Angle in Semicircle", expression: "∠ = 90°", description: "Thales's Theorem property.", explanation: "Any angle in a semicircle is a right angle.", category: "Geometry" },
          { id: "9-11", title: "Cyclic Quadrilateral", expression: "∠A + ∠C = 180°", description: "Opposite angles property.", explanation: "Sum of opposite angles is 180.", category: "Geometry" }
        ]
      },
      {
        name: "Surface Area & Volumes",
        formulas: [
          { id: "9-12", title: "CSA of Cone", expression: "CSA = πrl", description: "Side area of cone.", explanation: "l is slant height: √(r²+h²).", category: "Mensuration" },
          { id: "9-13", title: "Volume of Cone", expression: "V = 1/3 πr²h", description: "1/3 volume of cylinder.", explanation: "r is radius, h is vertical height.", category: "Mensuration" },
          { id: "9-14", title: "Surface Area of Sphere", expression: "SA = 4πr²", description: "Area of a ball.", explanation: "Depends only on radius.", category: "Mensuration" },
          { id: "9-15", title: "Volume of Sphere", expression: "V = 4/3 πr³", description: "Solid sphere capacity.", explanation: "Calculated based on radius.", category: "Mensuration" },
          { id: "9-16", title: "TSA of Hemisphere", expression: "TSA = 3πr²", description: "Area of solid half-sphere.", explanation: "2πr² (side) + πr² (base).", category: "Mensuration" },
          { id: "9-17", title: "Volume of Hemisphere", expression: "V = 2/3 πr³", description: "Half-sphere capacity.", explanation: "Exactly half of full sphere volume.", category: "Mensuration" }
        ]
      },
      {
        name: "Stats & Probability",
        formulas: [
          { id: "9-18", title: "Median (Odd)", expression: "[(n+1)/2]th term", description: "Middle of sorted data.", explanation: "Valid when sample count n is odd.", category: "Statistics" },
          { id: "9-19", title: "Probability P(E)", expression: "n(E) / n(S)", description: "Likelihood calculation.", explanation: "Favored outcomes / Total outcomes.", category: "Probability" }
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
          { id: "10-1", title: "Core Identity", expression: "sin²θ + cos²θ = 1", description: "Pythagorean base.", explanation: "Applies to all angles.", category: "Trig" },
          { id: "10-2", title: "Secant Identity", expression: "1 + tan²θ = sec²θ", description: "Relating tan and sec.", explanation: "Secondary identity.", category: "Trig" },
          { id: "10-3", title: "Cosecant Identity", expression: "1 + cot²θ = cosec²θ", description: "Relating cot and cosec.", explanation: "Tertiary identity.", category: "Trig" },
          { id: "10-4", title: "Complementary Angles", expression: "sin(90-θ) = cosθ", description: "Cofunction property.", explanation: "Also tan(90-θ) = cotθ.", category: "Trig" },
          { id: "10-5", title: "Reciprocal Ratio", expression: "tanθ = sinθ/cosθ", description: "Tangent definition.", explanation: "Also cotθ = cosθ/sinθ.", category: "Trig" }
        ]
      },
      {
        name: "Algebra & AP",
        formulas: [
          { id: "10-6", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "Finding the roots.", explanation: "Used to solve ax²+bx+c=0.", category: "Algebra" },
          { id: "10-7", title: "Discriminant", expression: "D = b² - 4ac", description: "Nature of roots.", explanation: "D>0 (2 real), D=0 (Equal), D<0 (Imag).", category: "Algebra" },
          { id: "10-8", title: "Sum of Roots", expression: "α + β = -b/a", description: "Roots-Coefficients linkage.", explanation: "Sum of roots of quadratic.", category: "Algebra" },
          { id: "10-9", title: "Product of Roots", expression: "αβ = c/a", description: "Roots-Coefficients linkage.", explanation: "Product of roots of quadratic.", category: "Algebra" },
          { id: "10-10", title: "nth Term of AP", expression: "aₙ = a + (n-1)d", description: "Specific term in sequence.", explanation: "a=first, d=common difference.", category: "Algebra" },
          { id: "10-11", title: "Sum of n Terms AP", expression: "Sₙ = n/2 [2a + (n-1)d]", description: "Total sequence sum.", explanation: "Also Sₙ = n/2(a + l).", category: "Algebra" }
        ]
      },
      {
        name: "Mensuration & Geometry",
        formulas: [
          { id: "10-12", title: "Section Formula", expression: "[(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]", description: "Internal point division.", explanation: "Point dividing segment in m:n ratio.", category: "Coordinate" },
          { id: "10-13", title: "Area of Sector", expression: "(θ/360) × πr²", description: "Slice of circle area.", explanation: "θ is the angle at the center.", category: "Geometry" },
          { id: "10-14", title: "Arc Length", expression: "(θ/360) × 2πr", description: "Boundary of sector.", explanation: "Length of the curve.", category: "Geometry" },
          { id: "10-15", title: "Volume of Frustum", expression: "1/3 πh(r₁² + r₂² + r₁r₂)", description: "Bucket-shaped volume.", explanation: "Cut-cone with two radii.", category: "Mensuration" },
          { id: "10-16", title: "TSA of Frustum", expression: "πl(r₁+r₂) + πr₁² + πr₂²", description: "Surface area of frustum.", explanation: "Includes bases and side.", category: "Mensuration" }
        ]
      },
      {
        name: "Statistics",
        formulas: [
          { id: "10-17", title: "Grouped Mean (Direct)", expression: "x̄ = Σfᵢxᵢ / Σfᵢ", description: "Weighted average.", explanation: "Product of freq and midpoint sum.", category: "Statistics" },
          { id: "10-18", title: "Mode Formula", expression: "l + [(f₁-f₀)/(2f₁-f₀-f₂)]h", description: "Calculating mode.", explanation: "Used for grouped data distributions.", category: "Statistics" },
          { id: "10-19", title: "Empirical Relation", expression: "3 Median = Mode + 2 Mean", description: "Relationship of tendencies.", explanation: "Handy for quick stats checks.", category: "Statistics" },
          { id: "10-20", title: "Standard Probability", expression: "n(E) / n(S)", description: "Favorable/Total.", explanation: "Standard definition for single events.", category: "Probability" }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Trigonometry",
        formulas: [
          { id: "11-1", title: "sin(A±B)", expression: "sinAcosB ± cosAsinB", description: "Sum/Diff identities.", explanation: "Essential for compound angles.", category: "Trig" },
          { id: "11-2", title: "cos(A±B)", expression: "cosAcosB ∓ sinAsinB", description: "Sum/Diff identities.", explanation: "Note sign reversal for sum.", category: "Trig" },
          { id: "11-3", title: "tan(A±B)", expression: "(tanA±tanB)/(1∓tanAtanB)", description: "Sum/Diff identities.", explanation: "Connecting tangents of sums.", category: "Trig" },
          { id: "11-4", title: "Double Angle sin", expression: "sin2A = 2sinAcosA", description: "Sin expansion.", explanation: "Reducing angle by half.", category: "Trig" },
          { id: "11-5", title: "Double Angle cos", expression: "cos2A = cos²A - sin²A", description: "Cos expansion.", explanation: "Also 2cos²A-1 or 1-2sin²A.", category: "Trig" },
          { id: "11-6", title: "Sine Rule", expression: "a/sinA = b/sinB = c/sinC", description: "Sides-Angles ratio.", explanation: "Valid for any triangle.", category: "Trig" },
          { id: "11-7", title: "Cosine Rule", expression: "a² = b² + c² - 2bccosA", description: "Side-Angle law.", explanation: "Solving oblique triangles.", category: "Trig" }
        ]
      },
      {
        name: "Sequences & Complex",
        formulas: [
          { id: "11-8", title: "nth Term of GP", expression: "aₙ = arⁿ⁻¹", description: "Geometric term.", explanation: "r is the common ratio.", category: "Algebra" },
          { id: "11-9", title: "Sum to n Terms GP", expression: "Sₙ = a(rⁿ-1)/(r-1)", description: "Total finite GP sum.", explanation: "Valid if r ≠ 1.", category: "Algebra" },
          { id: "11-10", title: "Sum to Infinity GP", expression: "S∞ = a/(1-r)", description: "Infinite series convergence.", explanation: "Only valid if |r| < 1.", category: "Algebra" },
          { id: "11-11", title: "nPr Permutations", expression: "n! / (n-r)!", description: "Arrangements counts.", explanation: "Where order matters.", category: "Algebra" },
          { id: "11-12", title: "nCr Combinations", expression: "n! / [r!(n-r)!]", description: "Selections counts.", explanation: "Where order doesn't matter.", category: "Algebra" },
          { id: "11-13", title: "Complex Modulus", expression: "|z| = √(a² + b²)", description: "Magnitude of z=a+bi.", explanation: "Distance from origin on Argand plane.", category: "Complex" },
          { id: "11-14", title: "Polar Form", expression: "z = r(cosθ + isinθ)", description: "Complex representation.", explanation: "Representing via radius and angle.", category: "Complex" }
        ]
      },
      {
        name: "Calculus & Coordinates",
        formulas: [
          { id: "11-15", title: "Derivative Power Rule", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Basic differentiation.", explanation: "Foundational rule of calculus.", category: "Calculus" },
          { id: "11-16", title: "sin x Derivative", expression: "d/dx(sin x) = cos x", description: "Trig differentiation.", explanation: "Rate of change of sine.", category: "Calculus" },
          { id: "11-17", title: "cos x Derivative", expression: "d/dx(cos x) = -sin x", description: "Trig differentiation.", explanation: "Note the negative sign.", category: "Calculus" },
          { id: "11-18", title: "Limit of sinx/x", expression: "lim(x→0) = 1", description: "Fundamental limit.", explanation: "Crucial for trig proofs.", category: "Calculus" },
          { id: "11-19", title: "Slope of a Line", expression: "m = (y₂-y₁)/(x₂-x₁)", description: "Gradient calculation.", explanation: "Rise over run between two points.", category: "Coordinate" },
          { id: "11-20", title: "Distance: Point-Line", expression: "d = |Ax₁+By₁+C|/√(A²+B²)", description: "Perpendicular distance.", explanation: "Shortest path to a line.", category: "Coordinate" }
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
          { id: "12-1", title: "Product Rule", expression: "(uv)' = u'v + uv'", description: "Differentiating products.", explanation: "Used for two multiplied functions.", category: "Calculus" },
          { id: "12-2", title: "Quotient Rule", expression: "(u/v)' = (u'v-uv')/v²", description: "Differentiating division.", explanation: "Order of subtraction in numerator is fixed.", category: "Calculus" },
          { id: "12-3", title: "Chain Rule", expression: "dy/dx = (dy/du)·(du/dx)", description: "Nested functions.", explanation: "For functions like sin(x²).", category: "Calculus" },
          { id: "12-4", title: "Derivative of eˣ", expression: "eˣ", description: "Exponential property.", explanation: "Function is its own derivative.", category: "Calculus" },
          { id: "12-5", title: "Derivative of ln x", expression: "1/x", description: "Logarithmic property.", explanation: "Natural log rate of change.", category: "Calculus" },
          { id: "12-6", title: "Derivative sin⁻¹x", expression: "1/√(1-x²)", description: "Inverse trig diff.", explanation: "Domain restricted to (-1, 1).", category: "Calculus" },
          { id: "12-7", title: "Derivative tan⁻¹x", expression: "1/(1+x²)", description: "Inverse trig diff.", explanation: "Valid for all real x.", category: "Calculus" }
        ]
      },
      {
        name: "Integral Calculus",
        formulas: [
          { id: "12-8", title: "Integral of xⁿ", expression: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C", description: "Standard anti-derivative.", explanation: "Valid if n ≠ -1.", category: "Calculus" },
          { id: "12-9", title: "Integral of 1/x", expression: "∫(1/x) dx = ln|x| + C", description: "Log integral.", explanation: "Specific case for n=-1.", category: "Calculus" },
          { id: "12-10", title: "Integration by Parts", expression: "∫u dv = uv - ∫v du", description: "Product integral.", explanation: "Reverse product rule.", category: "Calculus" },
          { id: "12-11", title: "Integral of tan x", expression: "ln|sec x| + C", description: "Trig integral.", explanation: "Derived via substitution.", category: "Calculus" },
          { id: "12-12", title: "Fundamental Theorem", expression: "∫ₐᵇ f(x)dx = F(b)-F(a)", description: "Definite integral.", explanation: "Calculating area under curve.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & Matrices",
        formulas: [
          { id: "12-13", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar multiplication.", explanation: "Results in a scalar value.", category: "Vectors" },
          { id: "12-14", title: "Cross Product", expression: "a×b = |a||b|sinθ n̂", description: "Vector multiplication.", explanation: "Results in a perpendicular vector.", category: "Vectors" },
          { id: "12-15", title: "Projection", expression: "(a·b) / |b|", description: "Length component.", explanation: "Shadow of a in b's direction.", category: "Vectors" },
          { id: "12-16", title: "Matrix Determinant", expression: "ad - bc", description: "2x2 matrix value.", explanation: "Used for matrix inversion.", category: "Algebra" },
          { id: "12-17", title: "Matrix Inverse", expression: "A⁻¹ = (1/|A|) adj(A)", description: "Reciprocal matrix.", explanation: "A·A⁻¹ = I (Identity).", category: "Algebra" }
        ]
      },
      {
        name: "Probability",
        formulas: [
          { id: "12-18", title: "Conditional Prob", expression: "P(A|B) = P(A∩B) / P(B)", description: "Prob given B occurred.", explanation: "Relative probability.", category: "Probability" },
          { id: "12-19", title: "Bayes' Theorem", expression: "P(A|B) = P(B|A)P(A)/P(B)", description: "Prob updating.", explanation: "Foundation of modern stats.", category: "Probability" },
          { id: "12-20", title: "Bernoulli Trials", expression: "ⁿCₖ pᵏ qⁿ⁻ᵏ", description: "Binomial probability.", explanation: "k successes in n trials.", category: "Probability" }
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
