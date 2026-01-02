
import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Number System & Integers",
        formulas: [
          { id: "7-1-1", title: "Closure Property", expression: "a + b = Integer", description: "Addition/Subtraction of integers.", explanation: "Sum of two integers is always an integer.", category: "Algebra" },
          { id: "7-1-2", title: "Commutative Property", expression: "a + b = b + a", description: "Order in addition.", explanation: "Changing order doesn't change sum.", category: "Algebra" },
          { id: "7-1-3", title: "Distributive Property", expression: "a(b+c) = ab + ac", description: "Multiplication over addition.", explanation: "Useful for mental math and simplification.", category: "Algebra" },
          { id: "7-1-4", title: "Additive Identity", expression: "a + 0 = a", description: "Zero property.", explanation: "Zero added to any integer is the integer itself.", category: "Algebra" }
        ]
      },
      {
        name: "Fractions & Decimals",
        formulas: [
          { id: "7-2-1", title: "Product of Fractions", expression: "N₁×N₂ / D₁×D₂", description: "Direct multiplication.", explanation: "Multiply numerators together and denominators together.", category: "Arithmetic" },
          { id: "7-2-2", title: "Reciprocal", expression: "a/b → b/a", description: "Flipping a fraction.", explanation: "The product of a fraction and its reciprocal is 1.", category: "Arithmetic" },
          { id: "7-2-3", title: "Division of Fractions", expression: "a/b ÷ c/d = a/b × d/c", description: "KFC: Keep, Flip, Change.", explanation: "Change division to multiplication by the reciprocal.", category: "Arithmetic" }
        ]
      },
      {
        name: "Simple Equations",
        formulas: [
          { id: "7-3-x", title: "Balancing Equations", expression: "LHS = RHS", description: "Equivalence rule.", explanation: "Whatever you do to one side, you must do to the other.", category: "Algebra" }
        ]
      },
      {
        name: "Comparing Quantities",
        formulas: [
          { id: "7-3-1", title: "Percentage Change", expression: "(Change / Original) × 100", description: "Growth/Decay.", explanation: "Measure increase or decrease relative to starting point.", category: "Arithmetic" },
          { id: "7-3-2", title: "Simple Interest (SI)", expression: "(P × R × T) / 100", description: "Basic interest.", explanation: "P=Principal, R=Rate, T=Time.", category: "Arithmetic" },
          { id: "7-3-3", title: "Profit/Loss Percentage", expression: "(Profit or Loss / CP) × 100", description: "Financial metrics.", explanation: "Calculated based on the Cost Price (CP).", category: "Arithmetic" }
        ]
      },
      {
        name: "Geometry & Mensuration",
        formulas: [
          { id: "7-4-1", title: "Angle Sum Property", expression: "∠A + ∠B + ∠C = 180°", description: "Internal triangle sum.", explanation: "Total internal angles of any triangle is 180.", category: "Geometry" },
          { id: "7-4-2", title: "Exterior Angle Property", expression: "Ext ∠ = Sum of Opp Int ∠s", description: "External relation.", explanation: "An exterior angle equals the sum of interior opposite angles.", category: "Geometry" },
          { id: "7-4-3", title: "Area of Circle", expression: "πr²", description: "Circular surface area.", explanation: "π (approx 3.14) times radius squared.", category: "Geometry" }
        ]
      }
    ]
  },
  {
    grade: 8,
    label: "Class 8",
    topics: [
      {
        name: "Rational Numbers",
        formulas: [
          { id: "8-0-1", title: "Standard Form", expression: "p/q (q ≠ 0)", description: "Fraction representation.", explanation: "Where p and q are integers with no common factors.", category: "Arithmetic" }
        ]
      },
      {
        name: "Algebraic Identities",
        formulas: [
          { id: "8-1-1", title: "Identity I", expression: "(a+b)² = a² + 2ab + b²", description: "Square of sum.", explanation: "Expansion of binomial addition.", category: "Algebra" },
          { id: "8-1-2", title: "Identity II", expression: "(a-b)² = a² - 2ab + b²", description: "Square of difference.", explanation: "Expansion of binomial subtraction.", category: "Algebra" },
          { id: "8-1-3", title: "Identity III", expression: "a² - b² = (a+b)(a-b)", description: "Difference of squares.", explanation: "Key for factoring quadratic terms.", category: "Algebra" },
          { id: "8-1-4", title: "Identity IV", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Product expansion.", explanation: "Generic product of two linear binomials.", category: "Algebra" }
        ]
      },
      {
        name: "Exponents & Powers",
        formulas: [
          { id: "8-exp-1", title: "Multiplication Law", expression: "aᵐ × aⁿ = aᵐ⁺ⁿ", description: "Powers addition.", explanation: "When bases are same, add the powers.", category: "Algebra" },
          { id: "8-exp-2", title: "Division Law", expression: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", description: "Powers subtraction.", explanation: "When bases are same, subtract the powers.", category: "Algebra" }
        ]
      },
      {
        name: "Comparing Quantities",
        formulas: [
          { id: "8-2-1", title: "Compound Interest (A)", expression: "P(1 + r/100)ⁿ", description: "Total amount accrued.", explanation: "Interest calculated on interest.", category: "Arithmetic" },
          { id: "8-2-2", title: "Sales Tax / VAT", expression: "Tax = Rate% of Bill", description: "Tax calculation.", explanation: "Additional amount added to the net price.", category: "Arithmetic" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "8-3-1", title: "Area of Trapezium", expression: "1/2 × (a+b) × h", description: "Parallel side area.", explanation: "Half the sum of parallel sides times distance.", category: "Geometry" },
          { id: "8-3-2", title: "Surface Area (Cylinder)", expression: "2πr(r + h)", description: "Total surface area.", explanation: "Sum of curved surface and two circular bases.", category: "Geometry" },
          { id: "8-3-3", title: "Volume of Cuboid", expression: "L × B × H", description: "Rectangular capacity.", explanation: "Length times Breadth times Height.", category: "Geometry" }
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
          { id: "9-1-1", title: "Cube of Sum", expression: "(a+b)³ = a³+b³+3ab(a+b)", description: "Cubic identity.", explanation: "Binomial expansion to the power 3.", category: "Algebra" },
          { id: "9-1-2", title: "Cube of Difference", expression: "(a-b)³ = a³-b³-3ab(a-b)", description: "Negative cubic.", explanation: "Subtraction expansion to power 3.", category: "Algebra" },
          { id: "9-1-3", title: "Special Identity", expression: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)", description: "Trinomial cube.", explanation: "Important for competitive math and advanced algebra.", category: "Algebra" }
        ]
      },
      {
        name: "Coordinate Geometry",
        formulas: [
          { id: "9-2-1", title: "Distance from Origin", expression: "d = √(x² + y²)", description: "Hypotenuse method.", explanation: "Distance of point (x,y) from (0,0).", category: "Geometry" }
        ]
      },
      {
        name: "Circles",
        formulas: [
          { id: "9-3-1", title: "Angle at Center", expression: "∠Center = 2 × ∠Circum", description: "Circle theorem.", explanation: "Angle subtended at center is double the angle at circumference.", category: "Geometry" },
          { id: "9-3-x", title: "Semi-Circle Angle", expression: "∠ = 90°", description: "Thales theorem.", explanation: "Angle in a semi-circle is always a right angle.", category: "Geometry" }
        ]
      },
      {
        name: "Surface Areas & Volumes",
        formulas: [
          { id: "9-4-1", title: "SA (Hemisphere)", expression: "3πr²", description: "Total area.", explanation: "Includes the flat top circular area.", category: "Geometry" },
          { id: "9-4-2", title: "Volume of Sphere", expression: "4/3 πr³", description: "Spherical volume.", explanation: "Total volume of a ball.", category: "Geometry" },
          { id: "9-4-3", title: "Heron's Formula", expression: "√[s(s-a)(s-b)(s-c)]", description: "Triangle area.", explanation: "s = (a+b+c)/2 (Semi-perimeter).", category: "Geometry" }
        ]
      },
      {
        name: "Statistics & Prob",
        formulas: [
          { id: "9-5-1", title: "Probability P(E)", expression: "n(E) / n(S)", description: "Basic likelihood.", explanation: "Favorable events divided by total possible events.", category: "Probability" }
        ]
      }
    ]
  },
  {
    grade: 10,
    label: "Class 10",
    topics: [
      {
        name: "Arithmetic Progressions",
        formulas: [
          { id: "10-1-1", title: "nth term (aₙ)", expression: "a + (n-1)d", description: "Sequence value.", explanation: "a=first term, d=common difference.", category: "Algebra" },
          { id: "10-1-2", title: "Sum of n terms (Sₙ)", expression: "n/2 [2a + (n-1)d]", description: "Cumulative sum.", explanation: "Sum of first n terms of an AP.", category: "Algebra" }
        ]
      },
      {
        name: "Coordinate Geometry",
        formulas: [
          { id: "10-2-1", title: "Section Formula", expression: "[(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]", description: "Internal division.", explanation: "Point dividing a segment in ratio m:n.", category: "Geometry" },
          { id: "10-2-2", title: "Mid-point Formula", expression: "[(x₁+x₂)/2, (y₁+y₂)/2]", description: "Central point.", explanation: "Special case of section formula (m=n).", category: "Geometry" },
          { id: "10-2-3", title: "Centroid", expression: "[(x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3]", description: "Median intersection.", explanation: "The geometric center of a triangle.", category: "Geometry" }
        ]
      },
      {
        name: "Trigonometry",
        formulas: [
          { id: "10-3-1", title: "Pythagorean Identity", expression: "sin²θ + cos²θ = 1", description: "Basic identity.", explanation: "Standard identity for all angles.", category: "Trigonometry" },
          { id: "10-3-2", title: "Secant-Tangent", expression: "1 + tan²θ = sec²θ", description: "Derived identity.", explanation: "Relates tangent squared to secant squared.", category: "Trigonometry" },
          { id: "10-3-3", title: "Height & Distance", expression: "tanθ = Height / Dist", description: "Application rule.", explanation: "Fundamental for elevation/depression problems.", category: "Trigonometry" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "10-4-1", title: "Area of Sector", expression: "(θ/360) × πr²", description: "Circle slice.", explanation: "θ is central angle in degrees.", category: "Geometry" },
          { id: "10-4-2", title: "Area of Segment", expression: "Area Sector - Area Tri", description: "Chord region area.", explanation: "Calculating the space between a chord and its arc.", category: "Geometry" },
          { id: "10-4-3", title: "Frustum Volume", expression: "1/3 πh(R²+r²+Rr)", description: "Bucket volume.", explanation: "Volume of a sliced cone.", category: "Geometry" }
        ]
      },
      {
        name: "Statistics",
        formulas: [
          { id: "10-5-1", title: "Mean (Direct)", expression: "Σfᵢxᵢ / Σfᵢ", description: "Weighted average.", explanation: "Sum of products over sum of frequencies.", category: "Statistics" },
          { id: "10-5-2", title: "Mode (Grouped)", expression: "l + [(f₁-f₀)/(2f₁-f₀-f₂)]h", description: "Most frequent.", explanation: "Finding mode in a frequency table.", category: "Statistics" }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Sets, Relations & Functions",
        formulas: [
          { id: "11-1-1", title: "Union n(A∪B)", expression: "n(A)+n(B)-n(A∩B)", description: "Set size.", explanation: "Inclusion-Exclusion principle.", category: "Algebra" },
          { id: "11-1-2", title: "Power Set n(P(A))", expression: "2ⁿ", description: "Total subsets.", explanation: "Number of subsets of a set with n elements.", category: "Algebra" }
        ]
      },
      {
        name: "Trig Functions",
        formulas: [
          { id: "11-2-1", title: "cos(A+B)", expression: "cosAcosB - sinAsinB", description: "Cosine sum.", explanation: "Expand cosine of angle addition.", category: "Trigonometry" },
          { id: "11-2-2", title: "Double Angle sin2θ", expression: "2sinθcosθ", description: "Sine reduction.", explanation: "Expressing 2θ in terms of single θ.", category: "Trigonometry" },
          { id: "11-2-3", title: "Sine Rule", expression: "a/sinA = b/sinB = c/sinC", description: "Side/Angle ratio.", explanation: "Relation between sides and angles of a triangle.", category: "Trigonometry" }
        ]
      },
      {
        name: "Algebra: P&C",
        formulas: [
          { id: "11-3-1", title: "nPr", expression: "n! / (n-r)!", description: "Arrangements.", explanation: "Ordering r objects out of n.", category: "Algebra" },
          { id: "11-3-2", title: "nCr", expression: "n! / [r!(n-r)!]", description: "Selections.", explanation: "Choosing r objects without order.", category: "Algebra" }
        ]
      },
      {
        name: "Conic Sections",
        formulas: [
          { id: "11-4-1", title: "Circle", expression: "(x-h)² + (y-k)² = r²", description: "General circle.", explanation: "Center at (h,k), radius r.", category: "Geometry" },
          { id: "11-4-2", title: "Hyperbola", expression: "x²/a² - y²/b² = 1", description: "General form.", explanation: "Standard horizontal hyperbola.", category: "Geometry" }
        ]
      },
      {
        name: "Calculus",
        formulas: [
          { id: "11-5-1", title: "Quotient Rule", expression: "[v u' - u v'] / v²", description: "Fraction diff.", explanation: "Differentiating ratio of functions.", category: "Calculus" },
          { id: "11-5-2", title: "Product Rule", expression: "u v' + v u'", description: "Multiplication diff.", explanation: "Differentiating product of functions.", category: "Calculus" }
        ]
      }
    ]
  },
  {
    grade: 12,
    label: "Class 12",
    topics: [
      {
        name: "Relations & Inverse Trig",
        formulas: [
          { id: "12-1-1", title: "tan⁻¹x + tan⁻¹y", expression: "tan⁻¹[(x+y)/(1-xy)]", description: "Inverse sum.", explanation: "Adding two arctan functions.", category: "Trigonometry" },
          { id: "12-1-x", title: "Equivalence Relation", expression: "R + S + T", description: "Prop criteria.", explanation: "Must be Reflexive, Symmetric, and Transitive.", category: "Relations" }
        ]
      },
      {
        name: "Matrices & Det",
        formulas: [
          { id: "12-mat-1", title: "Inverse A⁻¹", expression: "1/|A| × adj(A)", description: "Matrix inversion.", explanation: "Valid for non-singular matrices (|A|≠0).", category: "Algebra" },
          { id: "12-mat-2", title: "Area via Det", expression: "1/2 |Det(Points)|", description: "Geometric app.", explanation: "Triangle area using coordinates in a determinant.", category: "Algebra" }
        ]
      },
      {
        name: "Calculus: Integration",
        formulas: [
          { id: "12-2-1", title: "Partial Fractions", expression: "A/(x-a) + B/(x-b)", description: "Splitting fraction.", explanation: "Used to simplify rational integrals.", category: "Calculus" },
          { id: "12-2-2", title: "Definite Integral (Prop)", expression: "∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx", description: "King's property.", explanation: "Extremely useful for symmetry-based integration.", category: "Calculus" },
          { id: "12-2-3", title: "Diff Eq (Linear)", expression: "IF = e^(∫P dx)", description: "Integrating factor.", explanation: "Solving dy/dx + Py = Q.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & 3D",
        formulas: [
          { id: "12-3-1", title: "Projection", expression: "(a·b) / |b|", description: "Vector shadow.", explanation: "Projection of vector a onto vector b.", category: "Geometry" },
          { id: "12-3-2", title: "Line in 3D", expression: "r = a + λb", description: "Vector line eq.", explanation: "Line passing through point a with direction b.", category: "Geometry" },
          { id: "12-3-3", title: "Shortest Distance", expression: "|(a₂-a₁)·(b₁×b₂)| / |b₁×b₂|", description: "Skew lines.", explanation: "Distance between non-parallel, non-intersecting lines.", category: "Geometry" }
        ]
      },
      {
        name: "Probability",
        formulas: [
          { id: "12-4-1", title: "Bayes' Theorem", expression: "P(A|B) = [P(B|A)P(A)] / P(B)", description: "Inverse probability.", explanation: "Updating prob based on new information.", category: "Probability" },
          { id: "12-4-2", title: "Bernoulli Trials", expression: "nCx pˣ qⁿ⁻ˣ", description: "Binomial prob.", explanation: "Probability of exactly x successes in n trials.", category: "Probability" }
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
