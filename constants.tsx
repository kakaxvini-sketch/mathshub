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
          { id: "7-1-3", title: "Distributive Property", expression: "a(b+c) = ab + ac", description: "Multiplication over addition.", explanation: "Useful for mental math and simplification.", category: "Algebra" }
        ]
      },
      {
        name: "Fractions & Decimals",
        formulas: [
          { id: "7-2-1", title: "Product of Fractions", expression: "N₁×N₂ / D₁×D₂", description: "Direct multiplication.", explanation: "Multiply numerators together and denominators together.", category: "Arithmetic" },
          { id: "7-2-2", title: "Reciprocal", expression: "a/b → b/a", description: "Flipping a fraction.", explanation: "The product of a fraction and its reciprocal is 1.", category: "Arithmetic" }
        ]
      },
      {
        name: "Comparing Quantities",
        formulas: [
          { id: "7-3-1", title: "Percentage Change", expression: "(Change / Original) × 100", description: "Growth/Decay.", explanation: "Measure increase or decrease relative to starting point.", category: "Arithmetic" },
          { id: "7-3-2", title: "Simple Interest (SI)", expression: "(P × R × T) / 100", description: "Basic interest.", explanation: "P=Principal, R=Rate, T=Time.", category: "Arithmetic" }
        ]
      },
      {
        name: "Geometry Basics",
        formulas: [
          { id: "7-4-1", title: "Angle Sum Property", expression: "∠A + ∠B + ∠C = 180°", description: "Internal triangle sum.", explanation: "Total internal angles of any triangle is 180.", category: "Geometry" },
          { id: "7-4-2", title: "Exterior Angle Property", expression: "Ext ∠ = Sum of Opp Int ∠s", description: "External relation.", explanation: "An exterior angle equals the sum of interior opposite angles.", category: "Geometry" }
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
          { id: "8-1-1", title: "Identity I", expression: "(a+b)² = a² + 2ab + b²", description: "Square of sum.", explanation: "Expansion of binomial addition.", category: "Algebra" },
          { id: "8-1-2", title: "Identity II", expression: "(a-b)² = a² - 2ab + b²", description: "Square of difference.", explanation: "Expansion of binomial subtraction.", category: "Algebra" },
          { id: "8-1-3", title: "Identity III", expression: "a² - b² = (a+b)(a-b)", description: "Difference of squares.", explanation: "Key for factoring quadratic terms.", category: "Algebra" },
          { id: "8-1-4", title: "Standard Identity", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Product expansion.", explanation: "Generic product of two linear binomials.", category: "Algebra" }
        ]
      },
      {
        name: "Comparing Quantities",
        formulas: [
          { id: "8-2-1", title: "Compound Interest (A)", expression: "P(1 + r/100)ⁿ", description: "Total amount accrued.", explanation: "Interest calculated on interest.", category: "Arithmetic" },
          { id: "8-2-2", title: "Profit %", expression: "(Profit/CP) × 100", description: "Gains measurement.", explanation: "CP=Cost Price, Profit = SP - CP.", category: "Arithmetic" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "8-3-1", title: "Area of Rhombus", expression: "1/2 × d₁ × d₂", description: "Diagonal area.", explanation: "d₁ and d₂ are lengths of diagonals.", category: "Geometry" },
          { id: "8-3-2", title: "Surface Area (Cylinder)", expression: "2πr(r + h)", description: "Total surface area.", explanation: "Sum of curved surface and two circular bases.", category: "Geometry" },
          { id: "8-3-3", title: "Euler's Formula", expression: "V - E + F = 2", description: "Polyhedron relation.", explanation: "Vertices, Edges, and Faces relationship.", category: "Geometry" }
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
          { id: "9-1-2", title: "Sum of Cubes", expression: "a³+b³ = (a+b)(a²-ab+b²)", description: "Cubic factoring.", explanation: "Factoring the sum of two cubes.", category: "Algebra" },
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
        name: "Circles & Geometry",
        formulas: [
          { id: "9-3-1", title: "Angle at Center", expression: "∠Center = 2 × ∠Circum", description: "Circle theorem.", explanation: "Angle subtended at center is double the angle at circumference.", category: "Geometry" },
          { id: "9-3-2", title: "Heron's Formula", expression: "√[s(s-a)(s-b)(s-c)]", description: "Triangle area.", explanation: "s = (a+b+c)/2 is semi-perimeter.", category: "Geometry" }
        ]
      },
      {
        name: "Statistics",
        formulas: [
          { id: "9-4-1", title: "Mean", expression: "Σx / n", description: "Average.", explanation: "Sum of observations divided by total count.", category: "Statistics" }
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
          { id: "10-2-1", title: "Section Formula", expression: "[(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]", description: "Internal division.", explanation: "Coordinates of a point dividing a segment in ratio m:n.", category: "Geometry" },
          { id: "10-2-2", title: "Mid-point Formula", expression: "[(x₁+x₂)/2, (y₁+y₂)/2]", description: "Central point.", explanation: "Special case of section formula (m=n).", category: "Geometry" },
          { id: "10-2-3", title: "Centroid of Triangle", expression: "[(x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3]", description: "Center of mass.", explanation: "Intersection point of the three medians.", category: "Geometry" }
        ]
      },
      {
        name: "Trigonometry",
        formulas: [
          { id: "10-3-1", title: "Pythagorean Identity", expression: "sin²θ + cos²θ = 1", description: "Fundamental rule.", explanation: "Standard identity for all angles.", category: "Trigonometry" },
          { id: "10-3-2", title: "Secant-Tangent", expression: "1 + tan²θ = sec²θ", description: "Derived identity.", explanation: "Relates tangent and secant ratios.", category: "Trigonometry" }
        ]
      },
      {
        name: "Mensuration",
        formulas: [
          { id: "10-4-1", title: "Area of Sector", expression: "(θ/360) × πr²", description: "Circle slice area.", explanation: "θ is the central angle in degrees.", category: "Geometry" },
          { id: "10-4-2", title: "Volume of Sphere", expression: "4/3 πr³", description: "Spherical capacity.", explanation: "Total space inside a ball of radius r.", category: "Geometry" },
          { id: "10-4-3", title: "Frustum Volume", expression: "1/3 πh(R²+r²+Rr)", description: "Bucket volume.", explanation: "R and r are radii of the two circular faces.", category: "Geometry" }
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
          { id: "11-1-1", title: "Union n(A∪B)", expression: "n(A)+n(B)-n(A∩B)", description: "Cardinality.", explanation: "Inclusion-Exclusion principle for two sets.", category: "Algebra" },
          { id: "11-1-2", title: "Number of Subsets", expression: "2ⁿ", description: "Power set size.", explanation: "Total subsets possible for a set with n elements.", category: "Algebra" }
        ]
      },
      {
        name: "Trigonometry Functions",
        formulas: [
          { id: "11-2-1", title: "Addition Formula", expression: "sin(A+B) = sinAcosB + cosAsinB", description: "Sine sum.", explanation: "Expand sine of sum of angles.", category: "Trigonometry" },
          { id: "11-2-2", title: "Cosine Double Angle", expression: "cos2θ = cos²θ-sin²θ = 2cos²θ-1", description: "Double angle.", explanation: "Critical for integration and simplification.", category: "Trigonometry" },
          { id: "11-2-3", title: "General Solution (tan)", expression: "θ = nπ + α", description: "Periodic solution.", explanation: "Set of all angles satisfying tanθ = tanα.", category: "Trigonometry" }
        ]
      },
      {
        name: "Algebra: P&C and Binomial",
        formulas: [
          { id: "11-3-1", title: "Permutation (nPr)", expression: "n! / (n-r)!", description: "Ordered selection.", explanation: "Ways to arrange r objects out of n.", category: "Algebra" },
          { id: "11-3-2", title: "Combination (nCr)", expression: "n! / [r!(n-r)!]", description: "Unordered selection.", explanation: "Ways to select r objects out of n.", category: "Algebra" },
          { id: "11-3-3", title: "Binomial Expansion", expression: "Σ [nCr aⁿ⁻ʳ bʳ]", description: "Power of sum.", explanation: "General term Tᵣ₊₁ = nCr aⁿ⁻ʳ bʳ.", category: "Algebra" }
        ]
      },
      {
        name: "Coordinate: Conic Sections",
        formulas: [
          { id: "11-4-1", title: "Parabola (Standard)", expression: "y² = 4ax", description: "Rightward opening.", explanation: "Focus at (a,0), Directrix x = -a.", category: "Geometry" },
          { id: "11-4-2", title: "Ellipse (Standard)", expression: "x²/a² + y²/b² = 1", description: "Oval shape.", explanation: "Focus at (±ae, 0), Eccentricity e = √[1 - b²/a²].", category: "Geometry" }
        ]
      },
      {
        name: "Calculus & Statistics",
        formulas: [
          { id: "11-5-1", title: "Derivative Power Rule", expression: "d/dx(xⁿ) = nxⁿ⁻¹", description: "Basic diff.", explanation: "The most fundamental rule of differentiation.", category: "Calculus" },
          { id: "11-5-2", title: "Limit (sinx/x)", expression: "lim(x→0) = 1", description: "Trig limit.", explanation: "Core limit for deriving trig derivatives.", category: "Calculus" },
          { id: "11-5-3", title: "Variance (σ²)", expression: "Σ(xᵢ-x̄)² / n", description: "Data spread.", explanation: "Average of squared deviations from mean.", category: "Statistics" }
        ]
      }
    ]
  },
  {
    grade: 12,
    label: "Class 12",
    topics: [
      {
        name: "Matrices & Determinants",
        formulas: [
          { id: "12-1-1", title: "Inverse Matrix (A⁻¹)", expression: "1/|A| × adj(A)", description: "Inversion formula.", explanation: "|A| must be non-zero.", category: "Algebra" },
          { id: "12-1-2", title: "Product Determinant", expression: "|AB| = |A| × |B|", description: "Det property.", explanation: "Determinant of product is product of determinants.", category: "Algebra" }
        ]
      },
      {
        name: "Calculus: Integration",
        formulas: [
          { id: "12-2-1", title: "Integration by Parts", expression: "∫uv = u∫v - ∫(u'∫v)", description: "Product integral.", explanation: "Follows the ILATE rule.", category: "Calculus" },
          { id: "12-2-2", title: "Special Integral (I)", expression: "∫ dx/(x²+a²) = 1/a tan⁻¹(x/a)", description: "Arctan integral.", explanation: "Common form in partial fractions.", category: "Calculus" },
          { id: "12-2-3", title: "Special Integral (II)", expression: "∫ dx/√(a²-x²) = sin⁻¹(x/a)", explanation: "Arcsin integral form.", description: "Used in trigonometric substitutions.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & 3D Geometry",
        formulas: [
          { id: "12-3-1", title: "Dot Product (a·b)", expression: "|a||b|cosθ", description: "Scalar result.", explanation: "Used to find angle and projections.", category: "Geometry" },
          { id: "12-3-2", title: "Cross Product (a×b)", expression: "|a||b|sinθ n̂", description: "Vector result.", explanation: "Perpendicular vector to both a and b.", category: "Geometry" },
          { id: "12-3-3", title: "Shortest Distance", expression: "|(a₂-a₁)·(b₁×b₂)| / |b₁×b₂|", description: "Skew lines dist.", explanation: "Distance between two non-intersecting lines in space.", category: "Geometry" }
        ]
      },
      {
        name: "Probability",
        formulas: [
          { id: "12-4-1", title: "Conditional P(A|B)", expression: "P(A∩B) / P(B)", description: "Dependent prob.", explanation: "Probability of A given B has occurred.", category: "Probability" },
          { id: "12-4-2", title: "Bayes' Theorem", expression: "P(Eᵢ|A) = [P(Eᵢ)P(A|Eᵢ)] / ΣP(Eⱼ)P(A|Eⱼ)", description: "Cause/Effect prob.", explanation: "Updating probability with new evidence.", category: "Probability" }
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