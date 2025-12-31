
import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Number System & Integers",
        formulas: [
          { id: "7-1", title: "Commutative Property (Add)", expression: "a + b = b + a", description: "Order doesn't matter in addition.", explanation: "Sum remains same regardless of order. Ex: 2+3 = 3+2.", category: "Arithmetic" },
          { id: "7-2", title: "Associative Property (Add)", expression: "(a + b) + c = a + (b + c)", description: "Grouping doesn't change sum.", explanation: "Helps in simplifying long additions.", category: "Arithmetic" },
          { id: "7-3", title: "Distributive Property", expression: "a(b + c) = ab + ac", description: "Multiplication over addition.", explanation: "Essential for algebraic expansion.", category: "Algebra" },
          { id: "7-4", title: "Additive Identity", expression: "a + 0 = a", description: "Adding zero changes nothing.", explanation: "Zero is the identity element.", category: "Arithmetic" },
          { id: "7-5", title: "Multiplicative Identity", expression: "a × 1 = a", description: "Multiplying by 1 changes nothing.", explanation: "One is the multiplicative identity.", category: "Arithmetic" },
          { id: "7-6", title: "Additive Inverse", expression: "a + (-a) = 0", description: "Number plus its opposite is zero.", explanation: "Every integer has a unique inverse.", category: "Arithmetic" },
          { id: "7-7", title: "Product of Fractions", expression: "(a/b) × (c/d) = (ac)/(bd)", description: "Multiply tops and bottoms.", explanation: "Standard fraction multiplication.", category: "Fractions" },
          { id: "7-8", title: "Fraction Division", expression: "(a/b) ÷ (c/d) = (a/b) × (d/c)", description: "Keep, Change, Flip.", explanation: "Multiply by the reciprocal of the second fraction.", category: "Fractions" }
        ]
      },
      {
        name: "Geometry & Measurement",
        formulas: [
          { id: "7-9", title: "Area of Triangle", expression: "A = 1/2 × b × h", description: "Half of base times height.", explanation: "Base and height must be perpendicular.", category: "Geometry" },
          { id: "7-10", title: "Area of Parallelogram", expression: "A = b × h", description: "Base times vertical height.", explanation: "Same area as a rectangle of equal base/height.", category: "Geometry" },
          { id: "7-11", title: "Circumference of Circle", expression: "C = 2πr", description: "Perimeter of the circle.", explanation: "π is approx 3.14 or 22/7.", category: "Geometry" },
          { id: "7-12", title: "Area of Circle", expression: "A = πr²", description: "Space inside a circle.", explanation: "Square the radius and multiply by Pi.", category: "Geometry" },
          { id: "7-13", title: "Triangle Angle Sum", expression: "∠A + ∠B + ∠C = 180°", description: "Sum of interior angles.", explanation: "Total internal angles always add to 180.", category: "Geometry" },
          { id: "7-14", title: "Exterior Angle Property", expression: "Ext ∠ = Sum of Int Opp ∠s", description: "Relationship of angles.", explanation: "Ext angle of triangle is equal to sum of interior opposites.", category: "Geometry" },
          { id: "7-15", title: "Pythagoras Property", expression: "a² + b² = c²", description: "Right triangle relation.", explanation: "Sum of squares of legs equals square of hypotenuse.", category: "Geometry" }
        ]
      },
      {
        name: "Commercial Math & Stats",
        formulas: [
          { id: "7-16", title: "Simple Interest", expression: "SI = (P × R × T) / 100", description: "Interest on principal.", explanation: "P=Principal, R=Rate, T=Time.", category: "Finance" },
          { id: "7-17", title: "Total Amount", expression: "A = P + SI", description: "Final value after interest.", explanation: "Sum of original money and interest earned.", category: "Finance" },
          { id: "7-18", title: "Profit Percentage", expression: "P% = (Profit / CP) × 100", description: "Gain relative to cost.", explanation: "Profit = Selling Price - Cost Price.", category: "Finance" },
          { id: "7-19", title: "Arithmetic Mean", expression: "Mean = Σx / n", description: "Average of a data set.", explanation: "Sum of all values divided by count.", category: "Statistics" },
          { id: "7-20", title: "Speed", expression: "Speed = Distance / Time", description: "Rate of travel.", explanation: "Distance covered in unit time.", category: "Physics/Math" }
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
          { id: "8-1", title: "Square of Sum", expression: "(a+b)² = a² + 2ab + b²", description: "Standard identity 1.", explanation: "Expansion of binomial sum squared.", category: "Algebra" },
          { id: "8-2", title: "Square of Difference", expression: "(a-b)² = a² - 2ab + b²", description: "Standard identity 2.", explanation: "Note negative sign on middle term.", category: "Algebra" },
          { id: "8-3", title: "Difference of Squares", expression: "a² - b² = (a+b)(a-b)", description: "Standard identity 3.", explanation: "Crucial for factoring.", category: "Algebra" },
          { id: "8-4", title: "Product (Common x)", expression: "(x+a)(x+b) = x² + (a+b)x + ab", description: "General expansion.", explanation: "Useful for mental multiplication.", category: "Algebra" },
          { id: "8-5", title: "Cube of Sum", expression: "(a+b)³ = a³+3a²b+3ab²+b³", description: "Expanding binomial cube.", explanation: "Sum of terms for cubic power.", category: "Algebra" },
          { id: "8-6", title: "Euler's Formula", expression: "F + V - E = 2", description: "Faces, Vertices, Edges.", explanation: "Valid for convex polyhedrons.", category: "Geometry" }
        ]
      },
      {
        name: "Mensuration (3D)",
        formulas: [
          { id: "8-7", title: "Area of Trapezium", expression: "A = 1/2(a+b)h", description: "Parallel sides formula.", explanation: "a, b are parallel side lengths.", category: "Geometry" },
          { id: "8-8", title: "Area of Rhombus", expression: "A = 1/2(d₁ × d₂)", description: "Diagonal product formula.", explanation: "d1 and d2 are lengths of diagonals.", category: "Geometry" },
          { id: "8-9", title: "TSA of Cuboid", expression: "TSA = 2(lb + bh + hl)", description: "Total Surface Area.", explanation: "Sum of areas of all 6 faces.", category: "Mensuration" },
          { id: "8-10", title: "Volume of Cuboid", expression: "V = l × b × h", description: "Capacity of cuboid.", explanation: "Product of length, breadth, height.", category: "Mensuration" },
          { id: "8-11", title: "Volume of Cube", expression: "V = a³", description: "Capacity of cube.", explanation: "a is length of one side.", category: "Mensuration" },
          { id: "8-12", title: "Volume of Cylinder", expression: "V = πr²h", description: "Capacity of cylinder.", explanation: "Base area times vertical height.", category: "Mensuration" },
          { id: "8-13", title: "CSA of Cylinder", expression: "CSA = 2πrh", description: "Curved surface area.", explanation: "Area excluding top and bottom bases.", category: "Mensuration" },
          { id: "8-14", title: "TSA of Cylinder", expression: "TSA = 2πr(r + h)", description: "Full surface area.", explanation: "Includes both bases and curved side.", category: "Mensuration" }
        ]
      },
      {
        name: "Commercial Math & Exponents",
        formulas: [
          { id: "8-15", title: "Compound Interest (Amt)", expression: "A = P(1 + r/100)ⁿ", description: "Accrued amount.", explanation: "Interest calculated on updated principal.", category: "Finance" },
          { id: "8-16", title: "Product Law (Exp)", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Same base, add powers.", explanation: "Multiplying exponential terms.", category: "Exponents" },
          { id: "8-17", title: "Quotient Law (Exp)", expression: "aᵐ / aⁿ = aᵐ⁻ⁿ", description: "Same base, sub powers.", explanation: "Dividing exponential terms.", category: "Exponents" },
          { id: "8-18", title: "Power of Power", expression: "(aᵐ)ⁿ = aᵐⁿ", description: "Multiply exponents.", explanation: "Raising power to another power.", category: "Exponents" },
          { id: "8-19", title: "Negative Power", expression: "a⁻ⁿ = 1/aⁿ", description: "Reciprocal property.", explanation: "Negative power denotes denominator.", category: "Exponents" },
          { id: "8-20", title: "Direct Variation", expression: "x/y = k", description: "Linear dependency.", explanation: "Ratio remains constant.", category: "Arithmetic" }
        ]
      }
    ]
  },
  {
    grade: 9,
    label: "Class 9",
    topics: [
      {
        name: "Polynomials & Algebra",
        formulas: [
          { id: "9-1", title: "Square of Trinomial", expression: "(a+b+c)² = a²+b²+c²+2ab+2bc+2ca", description: "3-term expansion.", explanation: "Sum of squares and all pairwise products.", category: "Algebra" },
          { id: "9-2", title: "Cubic Sum expansion", expression: "(a+b)³ = a³ + b³ + 3ab(a+b)", description: "Expansion of cube sum.", explanation: "Alternatively a³ + 3a²b + 3ab² + b³.", category: "Algebra" },
          { id: "9-3", title: "Sum of Cubes Factor", expression: "a³ + b³ = (a+b)(a² - ab + b²)", description: "Factoring cubes.", explanation: "Useful for simplifying cubic expressions.", category: "Algebra" },
          { id: "9-4", title: "Difference of Cubes Factor", expression: "a³ - b³ = (a-b)(a² + ab + b²)", description: "Factoring cubes.", explanation: "Note sign changes compared to sum.", category: "Algebra" },
          { id: "9-5", title: "Special cubic identity", expression: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)", description: "Complex identity.", explanation: "If a+b+c=0, then a³+b³+c³ = 3abc.", category: "Algebra" },
          { id: "9-6", title: "Remainder Theorem", expression: "p(a) = r", description: "Finding remainders.", explanation: "Remainder of p(x)/(x-a) is p(a).", category: "Algebra" }
        ]
      },
      {
        name: "Geometry & Heron's",
        formulas: [
          { id: "9-7", title: "Heron's Formula", expression: "Area = √[s(s-a)(s-b)(s-c)]", description: "Triangle area from sides.", explanation: "s = (a+b+c)/2 is semi-perimeter.", category: "Geometry" },
          { id: "9-8", title: "Distance Formula", expression: "d = √[(x₂-x₁)² + (y₂-y₁)²]", description: "Point-to-point length.", explanation: "Standard 2D distance calculation.", category: "Coordinate" },
          { id: "9-9", title: "Midpoint Formula", expression: "M = [(x₁+x₂)/2 , (y₁+y₂)/2]", description: "Center of a segment.", explanation: "Average of endpoints.", category: "Coordinate" },
          { id: "9-10", title: "Sum of Int Angles (n-gon)", expression: "Σ∠ = (n-2) × 180°", description: "Polygon interior sum.", explanation: "n is number of sides.", category: "Geometry" },
          { id: "9-11", title: "Sum of Ext Angles", expression: "Σ∠ext = 360°", description: "Polygon exterior sum.", explanation: "Always 360 regardless of side count.", category: "Geometry" }
        ]
      },
      {
        name: "Surface Area & Volume",
        formulas: [
          { id: "9-12", title: "CSA of Cone", expression: "CSA = πrl", description: "Curved side area.", explanation: "l is slant height: √(r²+h²).", category: "Mensuration" },
          { id: "9-13", title: "TSA of Cone", expression: "TSA = πr(l + r)", description: "Full surface area.", explanation: "Includes side and circular base.", category: "Mensuration" },
          { id: "9-14", title: "Volume of Cone", expression: "V = 1/3 πr²h", description: "Cone capacity.", explanation: "Exactly 1/3 volume of cylinder.", category: "Mensuration" },
          { id: "9-15", title: "SA of Sphere", expression: "SA = 4πr²", description: "Area of ball surface.", explanation: "Only depends on radius.", category: "Mensuration" },
          { id: "9-16", title: "Volume of Sphere", expression: "V = 4/3 πr³", description: "Sphere capacity.", explanation: "Standard ball volume.", category: "Mensuration" },
          { id: "9-17", title: "TSA of Hemisphere", expression: "TSA = 3πr²", description: "Solid half-sphere area.", explanation: "2πr² (side) + πr² (flat base).", category: "Mensuration" },
          { id: "9-18", title: "Volume of Hemisphere", expression: "V = 2/3 πr³", description: "Half-sphere capacity.", explanation: "Half of full sphere volume.", category: "Mensuration" },
          { id: "9-19", title: "Median (Sorted Data)", expression: "M = Mid-point", description: "Central tendency.", explanation: "Sort data first; pick middle value.", category: "Statistics" },
          { id: "9-20", title: "Probability P(E)", expression: "n(E) / n(S)", description: "Likelihood.", explanation: "Favorable outcomes / Total sample space.", category: "Probability" }
        ]
      }
    ]
  },
  {
    grade: 10,
    label: "Class 10",
    topics: [
      {
        name: "Algebra & Trigonometry",
        formulas: [
          { id: "10-1", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "Solving ax²+bx+c=0.", explanation: "Standard roots calculation.", category: "Algebra" },
          { id: "10-2", title: "Discriminant", expression: "D = b² - 4ac", description: "Root nature check.", explanation: "D>0 (Real), D=0 (Equal), D<0 (Imag).", category: "Algebra" },
          { id: "10-3", title: "nth term of AP", expression: "aₙ = a + (n-1)d", description: "Arithmetic sequence term.", explanation: "a=start, d=diff.", category: "Algebra" },
          { id: "10-4", title: "Sum of n terms AP", expression: "Sₙ = n/2 [2a + (n-1)d]", description: "AP total sum.", explanation: "Calculates total of sequence.", category: "Algebra" },
          { id: "10-5", title: "Trig Identity 1", expression: "sin²θ + cos²θ = 1", description: "Core identity.", explanation: "Pythagorean base for trig.", category: "Trig" },
          { id: "10-6", title: "Trig Identity 2", expression: "1 + tan²θ = sec²θ", description: "Secant-Tangent relation.", explanation: "Fundamental for simplifying.", category: "Trig" },
          { id: "10-7", title: "Trig Identity 3", expression: "1 + cot²θ = cosec²θ", description: "Cosecant-Cotangent relation.", explanation: "Used in advanced calculus/trig.", category: "Trig" }
        ]
      },
      {
        name: "Geometry & Coordinate",
        formulas: [
          { id: "10-8", title: "Section Formula", expression: "P = [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]", description: "Internal point division.", explanation: "Coordinates dividing segment in m:n ratio.", category: "Coordinate" },
          { id: "10-9", title: "Area of Triangle (Coord)", expression: "A = 1/2 |Σ xᵢ(yⱼ-yₖ)|", description: "Triangle from vertices.", explanation: "Using (x1,y1), (x2,y2), (x3,y3).", category: "Coordinate" },
          { id: "10-10", title: "Centroid Formula", expression: "C = [Σx/3, Σy/3]", description: "Center of triangle.", explanation: "Average of vertex coordinates.", category: "Coordinate" },
          { id: "10-11", title: "Area of Sector", expression: "A = (θ/360) × πr²", description: "Circle slice area.", explanation: "θ is central angle in degrees.", category: "Geometry" },
          { id: "10-12", title: "Arc Length", expression: "L = (θ/360) × 2πr", description: "Curve boundary length.", explanation: "Length of sector boundary.", category: "Geometry" },
          { id: "10-13", title: "Area of Segment", expression: "A_sect - A_tri", description: "Circle part area.", explanation: "Sector area minus triangle area.", category: "Geometry" }
        ]
      },
      {
        name: "Mensuration & Stats",
        formulas: [
          { id: "10-14", title: "Volume of Frustum", expression: "V = 1/3 πh(r₁² + r₂² + r₁r₂)", description: "Bucket-shape capacity.", explanation: "r1, r2 are top/bottom radii.", category: "Mensuration" },
          { id: "10-15", title: "CSA of Frustum", expression: "CSA = πl(r₁ + r₂)", description: "Side area of frustum.", explanation: "l is slant height.", category: "Mensuration" },
          { id: "10-16", title: "Arithmetic Mean (Direct)", expression: "x̄ = Σfᵢxᵢ / Σfᵢ", description: "Weighted average.", explanation: "Sum of products over total freq.", category: "Statistics" },
          { id: "10-17", title: "Mode Formula", expression: "l + [(f₁-f₀)/(2f₁-f₀-f₂)]h", description: "Mode from grouped data.", explanation: "Complex stat calculation.", category: "Statistics" },
          { id: "10-18", title: "Median Formula", expression: "l + [(n/2 - cf)/f]h", description: "Median from grouped data.", explanation: "Used in distribution analysis.", category: "Statistics" },
          { id: "10-19", title: "Empirical Relation", expression: "3 Median = Mode + 2 Mean", description: "Tendency link.", explanation: "Quick shortcut for central values.", category: "Statistics" },
          { id: "10-20", title: "Distance between parallel lines", expression: "|c₁-c₂|/√(a²+b²)", description: "Geometry shortcut.", explanation: "For lines ax+by+c1=0 and ax+by+c2=0.", category: "Geometry" }
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
          { id: "11-1", title: "sin(A±B)", expression: "sinAcosB ± cosAsinB", description: "Sum/Diff sin.", explanation: "Core compound angle formula.", category: "Trig" },
          { id: "11-2", title: "cos(A±B)", expression: "cosAcosB ∓ sinAsinB", description: "Sum/Diff cos.", explanation: "Note sign reversal for sum.", category: "Trig" },
          { id: "11-3", title: "tan(A±B)", expression: "(tanA±tanB)/(1∓tanAtanB)", description: "Sum/Diff tan.", explanation: "Relating tangents of sums.", category: "Trig" },
          { id: "11-4", title: "sin 2θ", expression: "2sinθcosθ", description: "Double angle sin.", explanation: "Reduces angle by half.", category: "Trig" },
          { id: "11-5", title: "cos 2θ", expression: "cos²θ - sin²θ", description: "Double angle cos.", explanation: "Also 2cos²θ-1 or 1-2sin²θ.", category: "Trig" },
          { id: "11-6", title: "tan 2θ", expression: "2tanθ / (1 - tan²θ)", description: "Double angle tan.", explanation: "Relating tan of double/single angles.", category: "Trig" },
          { id: "11-7", title: "Sine Rule", expression: "a/sinA = b/sinB = c/sinC", description: "Sides to angles.", explanation: "Valid for all triangles.", category: "Trig" },
          { id: "11-8", title: "Cosine Rule", expression: "a² = b²+c²-2bccosA", description: "Generalized Pythagoras.", explanation: "Finding sides from angles.", category: "Trig" }
        ]
      },
      {
        name: "Algebra & Series",
        formulas: [
          { id: "11-9", title: "nth term GP", expression: "aₙ = arⁿ⁻¹", description: "Geometric term.", explanation: "a=first, r=ratio.", category: "Algebra" },
          { id: "11-10", title: "Sum of n terms GP", expression: "Sₙ = a(rⁿ-1)/(r-1)", description: "Finite GP sum.", explanation: "Used for geometric sequences.", category: "Algebra" },
          { id: "11-11", title: "Sum to Infinity GP", expression: "S∞ = a / (1-r)", description: "Infinite series sum.", explanation: "Valid only if |r| < 1.", category: "Algebra" },
          { id: "11-12", title: "nPr Permutations", expression: "n! / (n-r)!", description: "Order matters selection.", explanation: "Arrangements of r items from n.", category: "Algebra" },
          { id: "11-13", title: "nCr Combinations", expression: "n! / [r!(n-r)!]", description: "Order doesn't matter.", explanation: "Selections of r items from n.", category: "Algebra" },
          { id: "11-14", title: "Binomial Expansion", expression: "Σ ⁿCᵣ xⁿ⁻ʳ aʳ", description: "Expanding (x+a)ⁿ.", explanation: "General term: Tᵣ₊₁ = ⁿCᵣ xⁿ⁻ʳ aʳ.", category: "Algebra" }
        ]
      },
      {
        name: "Calculus & Limits",
        formulas: [
          { id: "11-15", title: "Derivative (Power)", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Basic Calculus rule.", explanation: "Differentiation of powers.", category: "Calculus" },
          { id: "11-16", title: "Derivative (sin)", expression: "d/dx(sin x) = cos x", description: "Trig differentiation.", explanation: "Rate of change of sine.", category: "Calculus" },
          { id: "11-17", title: "Standard Limit", expression: "lim(x→0) sinx/x = 1", description: "Trig limit base.", explanation: "Essential for derivative proofs.", category: "Calculus" },
          { id: "11-18", title: "Complex Modulus", expression: "|z| = √(a²+b²)", description: "Magnitude of z=a+bi.", explanation: "Distance from origin in complex plane.", category: "Complex" },
          { id: "11-19", title: "Slope of a Line", expression: "m = (y₂-y₁)/(x₂-x₁)", description: "Gradient formula.", explanation: "Standard linear slope.", category: "Coordinate" },
          { id: "11-20", title: "Dist: Point to Line", expression: "|Ax₁+By₁+C|/√(A²+B²)", description: "Perpendicular length.", explanation: "Shortest distance to a line.", category: "Coordinate" }
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
          { id: "12-1", title: "Product Rule", expression: "(uv)' = u'v + uv'", description: "Differentiation product.", explanation: "For two functions multiplied.", category: "Calculus" },
          { id: "12-2", title: "Quotient Rule", expression: "(u/v)' = (u'v-uv')/v²", description: "Differentiation division.", explanation: "Order of terms in numerator is fixed.", category: "Calculus" },
          { id: "12-3", title: "Chain Rule", expression: "dy/dx = (dy/du)·(du/dx)", description: "Composite functions.", explanation: "Derivative of nested functions.", category: "Calculus" },
          { id: "12-4", title: "Derivative (ln)", expression: "d/dx(ln x) = 1/x", description: "Log differentiation.", explanation: "Natural log rate of change.", category: "Calculus" },
          { id: "12-5", title: "Derivative (eˣ)", expression: "d/dx(eˣ) = eˣ", description: "Exponential property.", explanation: "Function is its own derivative.", category: "Calculus" },
          { id: "12-6", title: "Derivative (sin⁻¹)", expression: "1 / √(1 - x²)", description: "Inv trig differentiation.", explanation: "Domain restricted to (-1, 1).", category: "Calculus" },
          { id: "12-7", title: "Derivative (tan⁻¹)", expression: "1 / (1 + x²)", description: "Inv trig differentiation.", explanation: "Defined for all real x.", category: "Calculus" }
        ]
      },
      {
        name: "Integral Calculus",
        formulas: [
          { id: "12-8", title: "Integral (Power)", expression: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C", description: "Anti-derivative power.", explanation: "n must not equal -1.", category: "Calculus" },
          { id: "12-9", title: "Integral (1/x)", expression: "∫1/x dx = ln|x| + C", description: "Log integration.", explanation: "Case where power rule fails.", category: "Calculus" },
          { id: "12-10", title: "Integral (eˣ)", expression: "∫eˣ dx = eˣ + C", description: "Exponential integral.", explanation: "Function remains identical.", category: "Calculus" },
          { id: "12-11", title: "Integration by Parts", expression: "∫u dv = uv - ∫v du", description: "Reverse product rule.", explanation: "For integrating products.", category: "Calculus" },
          { id: "12-12", title: "Fundamental Theorem", expression: "∫ₐᵇ f(x)dx = F(b)-F(a)", description: "Definite integral.", explanation: "Calculating exact area under curve.", category: "Calculus" },
          { id: "12-13", title: "Integral of tan x", expression: "ln|sec x| + C", description: "Trig integration.", explanation: "Obtained via substitution.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & Probability",
        formulas: [
          { id: "12-14", title: "Dot Product", expression: "a·b = |a||b|cosθ", description: "Scalar multiplication.", explanation: "Results in a numeric value.", category: "Vectors" },
          { id: "12-15", title: "Cross Product", expression: "a×b = |a||b|sinθ n̂", description: "Vector multiplication.", explanation: "Results in perpendicular vector.", category: "Vectors" },
          { id: "12-16", title: "Matrix Determinant", expression: "|A| = ad - bc", description: "2x2 matrix value.", explanation: "Essential for inversion.", category: "Algebra" },
          { id: "12-17", title: "Matrix Inverse", expression: "A⁻¹ = (1/|A|) adj(A)", description: "Reciprocal matrix.", explanation: "A·A⁻¹ = I.", category: "Algebra" },
          { id: "12-18", title: "Conditional Prob", expression: "P(A|B) = P(A∩B) / P(B)", description: "Prob given B occurred.", explanation: "Probability relative to event B.", category: "Probability" },
          { id: "12-19", title: "Bayes' Theorem", expression: "P(A|B) = P(B|A)P(A)/P(B)", description: "Likelihood updating.", explanation: "Relates conditional probabilities.", category: "Probability" },
          { id: "12-20", title: "Bernoulli Trial", expression: "ⁿCₖ pᵏ qⁿ⁻ᵏ", description: "Binomial probability.", explanation: "k successes in n trials.", category: "Probability" }
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
