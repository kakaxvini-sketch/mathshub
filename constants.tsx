import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Number System & Integers",
        formulas: [
          { id: "7-1", title: "Commutative Property (Addition)", expression: "a + b = b + a", description: "Order of addition doesn't change result.", explanation: "Example: 4 + 5 = 5 + 4 = 9.", category: "Arithmetic" },
          { id: "7-2", title: "Commutative Property (Multiplication)", expression: "a × b = b × a", description: "Order of multiplication doesn't change result.", explanation: "Example: 3 × 2 = 2 × 3 = 6.", category: "Arithmetic" },
          { id: "7-3", title: "Associative Property", expression: "(a + b) + c = a + (b + c)", description: "Grouping doesn't change sum.", explanation: "Useful for adding long strings of numbers.", category: "Arithmetic" },
          { id: "7-4", title: "Distributive Property", expression: "a(b + c) = ab + ac", description: "Multiply across terms in brackets.", explanation: "Key for simplifying algebraic expressions.", category: "Algebra" },
          { id: "7-5", title: "Additive Identity", expression: "a + 0 = a", description: "Zero doesn't change the value.", explanation: "0 is the identity element for addition.", category: "Arithmetic" },
          { id: "7-6", title: "Multiplicative Identity", expression: "a × 1 = a", description: "One doesn't change the value.", explanation: "1 is the identity element for multiplication.", category: "Arithmetic" },
          { id: "7-7", title: "Additive Inverse", expression: "a + (-a) = 0", description: "Sum of a number and its opposite.", explanation: "The negative of a number is its additive inverse.", category: "Arithmetic" }
        ]
      },
      {
        name: "Fractions, Decimals & Ratios",
        formulas: [
          { id: "7-8", title: "Product of Fractions", expression: "(a/b) × (c/d) = (ac)/(bd)", description: "Direct numerator and denominator product.", explanation: "Multiply top with top, bottom with bottom.", category: "Fractions" },
          { id: "7-9", title: "Division of Fractions", expression: "(a/b) ÷ (c/d) = (ad)/(bc)", description: "Keep, Change, Flip rule.", explanation: "Multiply the first by the reciprocal of the second.", category: "Fractions" },
          { id: "7-10", title: "Percentage to Fraction", expression: "x% = x / 100", description: "Converting percent to decimal/fraction.", explanation: "Divide by 100 to remove the percent sign.", category: "Arithmetic" },
          { id: "7-11", title: "Simple Interest", expression: "SI = (P × R × T) / 100", description: "Interest on original amount.", explanation: "P=Principal, R=Rate, T=Time.", category: "Finance" },
          { id: "7-12", title: "Total Amount", expression: "A = P + SI", description: "Total money to pay back.", explanation: "Amount includes the principal and the interest.", category: "Finance" },
          { id: "7-13", title: "Profit Percentage", expression: "P% = (Profit / CP) × 100", description: "Profit relative to cost price.", explanation: "Profit = Selling Price - Cost Price.", category: "Finance" },
          { id: "7-14", title: "Loss Percentage", expression: "L% = (Loss / CP) × 100", description: "Loss relative to cost price.", explanation: "Loss = Cost Price - Selling Price.", category: "Finance" }
        ]
      },
      {
        name: "Geometry & Mensuration",
        formulas: [
          { id: "7-15", title: "Area of Triangle", expression: "A = 1/2 × b × h", description: "Half base times vertical height.", explanation: "Standard area formula for any triangle.", category: "Geometry" },
          { id: "7-16", title: "Area of Parallelogram", expression: "A = b × h", description: "Base times perpendicular height.", explanation: "Similar to rectangle area calculation.", category: "Geometry" },
          { id: "7-17", title: "Circumference of Circle", expression: "C = 2πr", description: "Perimeter of a circle.", explanation: "π (Pi) is approx 3.14 or 22/7.", category: "Geometry" },
          { id: "7-18", title: "Area of Circle", expression: "A = πr²", description: "Surface area inside a circle.", explanation: "Square the radius and multiply by Pi.", category: "Geometry" },
          { id: "7-19", title: "Triangle Angle Sum", expression: "∠A + ∠B + ∠C = 180°", description: "Interior angles sum property.", explanation: "Interior angles of any triangle add to 180.", category: "Geometry" },
          { id: "7-20", title: "Arithmetic Mean", expression: "Mean = Σx / n", description: "Average of data points.", explanation: "Sum of all values divided by total count.", category: "Statistics" },
          { id: "7-21", title: "Range of Data", expression: "Range = Max - Min", description: "Difference between extreme values.", explanation: "Shows the spread of the data set.", category: "Statistics" }
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
          { id: "8-1", title: "Square of Sum", expression: "(a+b)² = a² + 2ab + b²", description: "Identity I.", explanation: "Expansion of a binomial sum squared.", category: "Algebra" },
          { id: "8-2", title: "Square of Difference", expression: "(a-b)² = a² - 2ab + b²", description: "Identity II.", explanation: "Expansion of a binomial difference squared.", category: "Algebra" },
          { id: "8-3", title: "Difference of Squares", expression: "a² - b² = (a+b)(a-b)", description: "Identity III.", explanation: "Essential for factoring binomials.", category: "Algebra" },
          { id: "8-4", title: "Linear Product", expression: "(x+a)(x+b) = x² + (a+b)x + ab", description: "Identity IV.", explanation: "Common term product expansion.", category: "Algebra" },
          { id: "8-5", title: "Euler's Formula (Faces)", expression: "F + V - E = 2", description: "For any convex polyhedron.", explanation: "F=Faces, V=Vertices, E=Edges.", category: "Geometry" }
        ]
      },
      {
        name: "Exponents & Powers",
        formulas: [
          { id: "8-6", title: "Product Law", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Same base multiplication.", explanation: "Keep base, add exponents.", category: "Exponents" },
          { id: "8-7", title: "Quotient Law", expression: "aᵐ / aⁿ = aᵐ⁻ⁿ", description: "Same base division.", explanation: "Keep base, subtract exponents.", category: "Exponents" },
          { id: "8-8", title: "Power Law", expression: "(aᵐ)ⁿ = aᵐⁿ", description: "Power of a power.", explanation: "Multiply the exponents.", category: "Exponents" },
          { id: "8-9", title: "Negative Exponent", expression: "a⁻ⁿ = 1/aⁿ", description: "Reciprocal property.", explanation: "A negative power means the denominator.", category: "Exponents" },
          { id: "8-10", title: "Power of Zero", expression: "a⁰ = 1", description: "Unit property.", explanation: "Any non-zero base to zero is 1.", category: "Exponents" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "8-11", title: "Area of Trapezium", expression: "A = 1/2(a+b)h", description: "Parallel sides average.", explanation: "a, b are the parallel side lengths.", category: "Geometry" },
          { id: "8-12", title: "Area of Rhombus", expression: "A = 1/2(d₁ × d₂)", description: "Diagonal product formula.", explanation: "d1 and d2 are the two diagonals.", category: "Geometry" },
          { id: "8-13", title: "TSA of Cuboid", expression: "TSA = 2(lb + bh + hl)", description: "Total surface area.", explanation: "Length, breadth, height.", category: "Mensuration" },
          { id: "8-14", title: "Volume of Cuboid", expression: "V = l × b × h", description: "Capacity of cuboid.", explanation: "Product of 3 dimensions.", category: "Mensuration" },
          { id: "8-15", title: "Volume of Cube", expression: "V = a³", description: "Solid cube capacity.", explanation: "a is the side length.", category: "Mensuration" },
          { id: "8-16", title: "LSA of Cylinder", expression: "LSA = 2πrh", description: "Lateral surface area.", explanation: "Surface area excluding the circular bases.", category: "Mensuration" },
          { id: "8-17", title: "TSA of Cylinder", expression: "TSA = 2πr(r + h)", description: "Full surface area.", explanation: "Includes bases and lateral surface.", category: "Mensuration" },
          { id: "8-18", title: "Volume of Cylinder", expression: "V = πr²h", description: "Cylinder capacity.", explanation: "Base area times vertical height.", category: "Mensuration" }
        ]
      },
      {
        name: "Commercial Math",
        formulas: [
          { id: "8-19", title: "Compound Interest (Amount)", expression: "A = P(1 + r/100)ⁿ", description: "Total accrued amount.", explanation: "Interest calculated on principal + prior interest.", category: "Finance" },
          { id: "8-20", title: "Direct Proportion", expression: "x/y = k", description: "Linear dependency.", explanation: "Ratio of x to y remains constant.", category: "Arithmetic" },
          { id: "8-21", title: "Inverse Proportion", expression: "xy = k", description: "Inverse dependency.", explanation: "Product of x and y remains constant.", category: "Arithmetic" }
        ]
      }
    ]
  },
  {
    grade: 9,
    label: "Class 9",
    topics: [
      {
        name: "Polynomials & Expansion",
        formulas: [
          { id: "9-1", title: "Square of Trinomial", expression: "(a+b+c)² = a²+b²+c²+2ab+2bc+2ca", description: "Expansion for 3 terms.", explanation: "Sum of individual squares and dual products.", category: "Algebra" },
          { id: "9-2", title: "Cubic Sum expansion", expression: "(a+b)³ = a³ + b³ + 3ab(a+b)", description: "Expansion for binomial sum.", explanation: "Also written as a³ + 3a²b + 3ab² + b³.", category: "Algebra" },
          { id: "9-3", title: "Cubic Difference expansion", expression: "(a-b)³ = a³ - b³ - 3ab(a-b)", description: "Expansion for binomial diff.", explanation: "Note the minus signs in the expansion.", category: "Algebra" },
          { id: "9-4", title: "Sum of Cubes factor", expression: "a³ + b³ = (a+b)(a² - ab + b²)", description: "Factoring cubes I.", explanation: "Used to simplify cubic expressions.", category: "Algebra" },
          { id: "9-5", title: "Difference of Cubes factor", expression: "a³ - b³ = (a-b)(a² + ab + b²)", description: "Factoring cubes II.", explanation: "Used to simplify cubic expressions.", category: "Algebra" },
          { id: "9-6", title: "Special Identity", expression: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)", description: "The long cubic identity.", explanation: "If a+b+c=0, then a³+b³+c³ = 3abc.", category: "Algebra" }
        ]
      },
      {
        name: "Geometry & Coordinate",
        formulas: [
          { id: "9-7", title: "Heron's Formula", expression: "Area = √[s(s-a)(s-b)(s-c)]", description: "Triangle area from sides.", explanation: "s = (a+b+c)/2 (semi-perimeter).", category: "Geometry" },
          { id: "9-8", title: "Distance Formula", expression: "d = √[(x₂-x₁)² + (y₂-y₁)²]", description: "Length between two coordinates.", explanation: "Pythagorean theorem applied to points.", category: "Coordinate" },
          { id: "9-9", title: "Midpoint Formula", expression: "M = [(x₁+x₂)/2 , (y₁+y₂)/2]", description: "Center of a line segment.", explanation: "Average of endpoints' coordinates.", category: "Coordinate" },
          { id: "9-10", title: "Angle in Semicircle", expression: "∠ = 90°", description: "Thales's theorem.", explanation: "Angle subtended by diameter is always 90.", category: "Geometry" },
          { id: "9-11", title: "Cyclic Quad Sum", expression: "∠A + ∠C = 180°", description: "Opposite angles property.", explanation: "Opposite angles of cyclic quad are supplementary.", category: "Geometry" }
        ]
      },
      {
        name: "Surface Area & Volumes",
        formulas: [
          { id: "9-12", title: "TSA of Cylinder", expression: "TSA = 2πr(r+h)", description: "Full cylinder area.", explanation: "Two bases plus side area.", category: "Mensuration" },
          { id: "9-13", title: "CSA of Cone", expression: "CSA = πrl", description: "Curved surface of cone.", explanation: "l is slant height: √(r²+h²).", category: "Mensuration" },
          { id: "9-14", title: "Volume of Cone", expression: "V = 1/3 πr²h", description: "1/3 of a cylinder's capacity.", explanation: "Vertical height h is used here.", category: "Mensuration" },
          { id: "9-15", title: "Surface Area of Sphere", expression: "SA = 4πr²", description: "Area of a ball.", explanation: "Based only on the radius r.", category: "Mensuration" },
          { id: "9-16", title: "Volume of Sphere", expression: "V = 4/3 πr³", description: "Capacity of a ball.", explanation: "Standard sphere volume formula.", category: "Mensuration" },
          { id: "9-17", title: "CSA of Hemisphere", expression: "CSA = 2πr²", description: "Half sphere side area.", explanation: "Excludes the flat base.", category: "Mensuration" },
          { id: "9-18", title: "TSA of Hemisphere", expression: "TSA = 3πr²", description: "Half sphere full area.", explanation: "Includes the flat circular base.", category: "Mensuration" },
          { id: "9-19", title: "Volume of Hemisphere", expression: "V = 2/3 πr³", description: "Half sphere capacity.", explanation: "Exactly half of a full sphere.", category: "Mensuration" }
        ]
      },
      {
        name: "Statistics & Probability",
        formulas: [
          { id: "9-20", title: "Median (Odd n)", expression: "M = [(n+1)/2]th term", description: "Middle point in sorted data.", explanation: "n is the total count of observations.", category: "Statistics" },
          { id: "9-21", title: "Empirical Probability", expression: "P(E) = n(E) / n(S)", description: "Occurrences over total trials.", explanation: "Ratio of successful outcomes to total outcomes.", category: "Probability" }
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
          { id: "10-1", title: "Trig Identity I", expression: "sin²θ + cos²θ = 1", description: "Basic Pythagorean identity.", explanation: "Valid for any angle θ.", category: "Trig" },
          { id: "10-2", title: "Trig Identity II", expression: "1 + tan²θ = sec²θ", description: "Relation between tan and sec.", explanation: "Useful for calculus and geometry.", category: "Trig" },
          { id: "10-3", title: "Trig Identity III", expression: "1 + cot²θ = cosec²θ", description: "Relation between cot and cosec.", explanation: "Useful for simplifying trig equations.", category: "Trig" },
          { id: "10-4", title: "Complementary sin", expression: "sin(90-θ) = cosθ", description: "Cofunction property.", explanation: "Sine of angle equals cosine of its complement.", category: "Trig" },
          { id: "10-5", title: "Reciprocal tan", expression: "tanθ = 1/cotθ", description: "Inverse relationship.", explanation: "Also tanθ = sinθ/cosθ.", category: "Trig" }
        ]
      },
      {
        name: "Quadratic Equations",
        formulas: [
          { id: "10-6", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "The general solution.", explanation: "Used to solve any equation of form ax²+bx+c=0.", category: "Algebra" },
          { id: "10-7", title: "Discriminant", expression: "D = b² - 4ac", description: "Determines nature of roots.", explanation: "D>0 (2 real), D=0 (1 real), D<0 (imaginary).", category: "Algebra" },
          { id: "10-8", title: "Sum of Roots", expression: "α + β = -b/a", description: "Relationship between coeff and roots.", explanation: "Applies to quadratic equations.", category: "Algebra" },
          { id: "10-9", title: "Product of Roots", expression: "αβ = c/a", description: "Relationship between coeff and roots.", explanation: "Ratio of constant term to leading coefficient.", category: "Algebra" }
        ]
      },
      {
        name: "Arithmetic Progression",
        formulas: [
          { id: "10-10", title: "nth Term of AP", expression: "aₙ = a + (n-1)d", description: "Finding specific term.", explanation: "a=first term, d=common difference.", category: "Algebra" },
          { id: "10-11", title: "Sum of n terms AP", expression: "Sₙ = n/2 [2a + (n-1)d]", description: "Total sequence sum.", explanation: "Also Sₙ = n/2 (a + l) where l is last term.", category: "Algebra" }
        ]
      },
      {
        name: "Geometry & Mensuration",
        formulas: [
          { id: "10-12", title: "Section Formula", expression: "P = [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]", description: "Internal point division.", explanation: "Divides line segment in ratio m:n.", category: "Coordinate" },
          { id: "10-13", title: "Area of Sector", expression: "A = (θ/360) × πr²", description: "Portion of circle area.", explanation: "θ is the angle subtended at center.", category: "Geometry" },
          { id: "10-14", title: "Length of Arc", expression: "L = (θ/360) × 2πr", description: "Segment boundary length.", explanation: "Curved boundary of a sector.", category: "Geometry" },
          { id: "10-15", title: "Volume of Frustum", expression: "V = 1/3 πh(r₁² + r₂² + r₁r₂)", description: "Cut cone volume.", explanation: "Cone with top removed parallel to base.", category: "Mensuration" },
          { id: "10-16", title: "TSA of Frustum", expression: "TSA = πl(r₁+r₂) + πr₁² + πr₂²", description: "Full surface area.", explanation: "Two bases plus curved side.", category: "Mensuration" }
        ]
      },
      {
        name: "Statistics & Prob",
        formulas: [
          { id: "10-17", title: "Grouped Mean (Direct)", expression: "x̄ = Σfᵢxᵢ / Σfᵢ", description: "Weighted average.", explanation: "Sum of products over total frequency.", category: "Statistics" },
          { id: "10-18", title: "Mode Formula", expression: "Mode = l + [(f₁-f₀)/(2f₁-f₀-f₂)]h", description: "Finding mode from grouped data.", explanation: "l is lower limit of modal class.", category: "Statistics" },
          { id: "10-19", title: "Empirical Relation", expression: "3 Median = Mode + 2 Mean", description: "Linking the tendencies.", explanation: "Useful shortcut for statistical problems.", category: "Statistics" },
          { id: "10-20", title: "Probability P(E)", expression: "n(E) / n(S)", description: "Mathematical definition.", explanation: "Favorable outcomes / Total sample space.", category: "Probability" }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Trigonometric Functions",
        formulas: [
          { id: "11-1", title: "sin(A±B)", expression: "sinAcosB ± cosAsinB", description: "Sum/Diff identity.", explanation: "Used to calculate sine of angle sums.", category: "Trig" },
          { id: "11-2", title: "cos(A±B)", expression: "cosAcosB ∓ sinAsinB", description: "Sum/Diff identity.", explanation: "Note sign change for cosine sum.", category: "Trig" },
          { id: "11-3", title: "tan(A±B)", expression: "(tanA±tanB)/(1∓tanAtanB)", description: "Sum/Diff identity.", explanation: "Ratio based trigonometric sum.", category: "Trig" },
          { id: "11-4", title: "sin 2θ", expression: "2sinθcosθ", description: "Double angle sine.", explanation: "Reduces double angle to single.", category: "Trig" },
          { id: "11-5", title: "cos 2θ", expression: "cos²θ - sin²θ", description: "Double angle cosine.", explanation: "Also 2cos²θ-1 or 1-2sin²θ.", category: "Trig" },
          { id: "11-6", title: "Sine Rule", expression: "a/sinA = b/sinB = c/sinC", description: "Relating sides to angles.", explanation: "Valid for any triangle.", category: "Trig" },
          { id: "11-7", title: "Cosine Rule", expression: "a² = b² + c² - 2bccosA", description: "Generalized Pythagoras.", explanation: "Useful for solving oblique triangles.", category: "Trig" }
        ]
      },
      {
        name: "Series & GP",
        formulas: [
          { id: "11-8", title: "nth Term GP", expression: "aₙ = arⁿ⁻¹", description: "Geometric Progression.", explanation: "r is the common ratio.", category: "Algebra" },
          { id: "11-9", title: "Sum to n terms GP", expression: "Sₙ = a(rⁿ-1)/(r-1)", description: "Finite GP sum.", explanation: "Used when r is not equal to 1.", category: "Algebra" },
          { id: "11-10", title: "Sum to Infinity GP", expression: "S∞ = a/(1-r)", description: "Infinite series sum.", explanation: "Converges only if |r| < 1.", category: "Algebra" },
          { id: "11-11", title: "Arithmetic Mean AM", expression: "(a+b)/2", description: "Simple average of two.", explanation: "Average between two numbers.", category: "Algebra" },
          { id: "11-12", title: "Geometric Mean GM", expression: "√(ab)", description: "Central term of GP.", explanation: "Root of the product of two numbers.", category: "Algebra" }
        ]
      },
      {
        name: "Combinatorics & Complex",
        formulas: [
          { id: "11-13", title: "Permutation nPr", expression: "n! / (n-r)!", description: "Selection where order matters.", explanation: "n total, r to choose.", category: "Combinatorics" },
          { id: "11-14", title: "Combination nCr", expression: "n! / [r!(n-r)!]", description: "Selection where order doesn't matter.", explanation: "Used in probability and binomial theorem.", category: "Combinatorics" },
          { id: "11-15", title: "Modulus of Complex", expression: "|z| = √(a² + b²)", description: "Distance from origin.", explanation: "For z = a + bi.", category: "Complex" },
          { id: "11-16", title: "De Moivre's Theorem", expression: "(cosθ + isinθ)ⁿ = cosnθ + isinnθ", description: "Powers of complex numbers.", explanation: "Foundation for complex trigonometry.", category: "Complex" }
        ]
      },
      {
        name: "Limits & Calculus",
        formulas: [
          { id: "11-17", title: "Power Rule Diff", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Basic differentiation.", explanation: "Foundational rule for derivatives.", category: "Calculus" },
          { id: "11-18", title: "Derivative of sin x", expression: "cos x", description: "Trig differentiation.", explanation: "Rate of change of sine.", category: "Calculus" },
          { id: "11-19", title: "Derivative of cos x", expression: "-sin x", description: "Trig differentiation.", explanation: "Rate of change of cosine.", category: "Calculus" },
          { id: "11-20", title: "Limit: sinx/x", expression: "lim(x→0) = 1", description: "Special limit property.", explanation: "Crucial for trigonometric calculus.", category: "Calculus" },
          { id: "11-21", title: "Distance: Pt to Line", expression: "d = |Ax₁+By₁+C|/√(A²+B²)", description: "Shortest distance formula.", explanation: "Distance from (x1, y1) to Ax+By+C=0.", category: "Coordinate" }
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
          { id: "12-1", title: "Product Rule", expression: "d/dx(uv) = u'v + uv'", description: "Differentiating a product.", explanation: "Essential for combined functions.", category: "Calculus" },
          { id: "12-2", title: "Quotient Rule", expression: "d/dx(u/v) = (u'v-uv')/v²", description: "Differentiating a fraction.", explanation: "Specific order of differentiation.", category: "Calculus" },
          { id: "12-3", title: "Chain Rule", expression: "dy/dx = (dy/du)·(du/dx)", description: "Composite function diff.", explanation: "Functions within functions.", category: "Calculus" },
          { id: "12-4", title: "Derivative eˣ", expression: "eˣ", description: "Exponential property.", explanation: "Derivative remains unchanged.", category: "Calculus" },
          { id: "12-5", title: "Derivative ln x", expression: "1/x", description: "Logarithmic property.", explanation: "Inverse of log slope.", category: "Calculus" },
          { id: "12-6", title: "Derivative sin⁻¹x", expression: "1/√(1-x²)", description: "Inverse trig diff.", explanation: "Valid for domain (-1, 1).", category: "Calculus" },
          { id: "12-7", title: "Derivative tan⁻¹x", expression: "1/(1+x²)", description: "Inverse trig diff.", explanation: "Valid for all real x.", category: "Calculus" }
        ]
      },
      {
        name: "Integral Calculus",
        formulas: [
          { id: "12-8", title: "Integral xⁿ", expression: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C", description: "Basic anti-derivative.", explanation: "Valid for n not equal to -1.", category: "Calculus" },
          { id: "12-9", title: "Integral 1/x", expression: "∫1/x dx = ln|x| + C", description: "Reciprocal integration.", explanation: "Anti-derivative of power -1.", category: "Calculus" },
          { id: "12-10", title: "Integral eˣ", expression: "∫eˣ dx = eˣ + C", description: "Exponential integral.", explanation: "The function integrates to itself.", category: "Calculus" },
          { id: "12-11", title: "Integration by Parts", expression: "∫u dv = uv - ∫v du", description: "Inverse of product rule.", explanation: "Used for product of functions.", category: "Calculus" },
          { id: "12-12", title: "Fundamental Theorem", expression: "∫ₐᵇ f(x)dx = F(b) - F(a)", description: "Definite integral calculation.", explanation: "Calculates total area under a curve.", category: "Calculus" },
          { id: "12-13", title: "Integral of tan x", expression: "ln|sec x| + C", description: "Derived trig integral.", explanation: "Obtained via substitution.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & Matrices",
        formulas: [
          { id: "12-14", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar multiplication.", explanation: "Results in a numeric scalar.", category: "Vectors" },
          { id: "12-15", title: "Cross Product", expression: "a×b = |a||b|sinθ n̂", description: "Vector multiplication.", explanation: "Results in perpendicular vector.", category: "Vectors" },
          { id: "12-16", title: "Projection of a on b", expression: "(a·b) / |b|", description: "Magnitude component.", explanation: "Scalar projection length.", category: "Vectors" },
          { id: "12-17", title: "Determinant 2x2", expression: "ad - bc", description: "Matrix scalar attribute.", explanation: "Critical for matrix inversion.", category: "Algebra" },
          { id: "12-18", title: "Matrix Inverse", expression: "A⁻¹ = (1/|A|) adj(A)", description: "Matrix reciprocal.", explanation: "A multiplied by its inverse is identity I.", category: "Algebra" }
        ]
      },
      {
        name: "Probability",
        formulas: [
          { id: "12-19", title: "Conditional Prob", expression: "P(A|B) = P(A∩B) / P(B)", description: "Prob relative to event B.", explanation: "A given that B has occurred.", category: "Probability" },
          { id: "12-20", title: "Bayes' Theorem", expression: "P(A|B) = P(B|A)P(A)/P(B)", description: "Updating likelihood.", explanation: "Relates conditional probabilities.", category: "Probability" },
          { id: "12-21", title: "Bernoulli Trial", expression: "P(X=k) = ⁿCₖ pᵏ qⁿ⁻ᵏ", description: "Binomial distribution.", explanation: "k successes in n independent trials.", category: "Probability" }
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