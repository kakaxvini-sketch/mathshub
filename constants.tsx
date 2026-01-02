import { ClassData } from './types';

export const CLASSES_DATA: ClassData[] = [
  {
    grade: 7,
    label: "Class 7",
    topics: [
      {
        name: "Integers: Properties of Addition",
        formulas: [
          { id: "7-1-1", title: "Closure Property", expression: "a + b = Integer", description: "Sum of integers.", explanation: "The sum of any two integers is always an integer.", category: "Arithmetic" },
          { id: "7-1-2", title: "Commutative Property", expression: "a + b = b + a", description: "Order doesn't matter.", explanation: "Changing the order of addends doesn't change the sum.", category: "Arithmetic" },
          { id: "7-1-3", title: "Associative Property", expression: "(a+b)+c = a+(b+c)", description: "Grouping rule.", explanation: "The sum remains the same regardless of grouping.", category: "Arithmetic" },
          { id: "7-1-4", title: "Additive Identity", expression: "a + 0 = a", description: "Zero property.", explanation: "Adding zero to any number results in that number.", category: "Arithmetic" },
          { id: "7-1-5", title: "Additive Inverse", expression: "a + (-a) = 0", description: "Opposite number.", explanation: "The sum of a number and its negative is always zero.", category: "Arithmetic" }
        ]
      },
      {
        name: "Integers: Properties of Multiplication",
        formulas: [
          { id: "7-2-1", title: "Closure (Mult)", expression: "a × b = Integer", description: "Product type.", explanation: "Multiplying two integers always results in an integer.", category: "Arithmetic" },
          { id: "7-2-2", title: "Commutative (Mult)", expression: "a × b = b × a", description: "Order in mult.", explanation: "Order of factors doesn't change the product.", category: "Arithmetic" },
          { id: "7-2-3", title: "Associative (Mult)", expression: "(a×b)×c = a×(b×c)", description: "Mult grouping.", explanation: "Grouping doesn't change the final product.", category: "Arithmetic" },
          { id: "7-2-4", title: "Multiplicative Identity", expression: "a × 1 = a", description: "Unit property.", explanation: "Any number multiplied by 1 is itself.", category: "Arithmetic" },
          { id: "7-2-5", title: "Zero Product", expression: "a × 0 = 0", description: "Null property.", explanation: "Any number multiplied by zero is zero.", category: "Arithmetic" },
          { id: "7-2-6", title: "Distributive Property", expression: "a(b+c) = ab + ac", description: "Spread multiplication.", explanation: "Multiplying a sum by a number is multiplying each addend.", category: "Arithmetic" },
          { id: "7-2-7", title: "Sign Rule: (+) × (+)", expression: "+ve", description: "Positive results.", explanation: "Same signs result in positive.", category: "Arithmetic" },
          { id: "7-2-8", title: "Sign Rule: (+) × (-)", expression: "-ve", description: "Negative results.", explanation: "Different signs result in negative.", category: "Arithmetic" },
          { id: "7-2-9", title: "Sign Rule: (-) × (-)", expression: "+ve", description: "Double negative.", explanation: "Two negatives make a positive.", category: "Arithmetic" }
        ]
      },
      {
        name: "Fractions & Decimals",
        formulas: [
          { id: "7-3-1", title: "Product of Fractions", expression: "(N1×N2) / (D1×D2)", description: "Numerator/Denominator.", explanation: "Multiply numerators and denominators separately.", category: "Fractions" },
          { id: "7-3-2", title: "Division of Fractions", expression: "(a/b) ÷ (c/d) = (a/b) × (d/c)", description: "Reciprocal mult.", explanation: "Keep, Change, Flip.", category: "Fractions" },
          { id: "7-3-3", title: "Decimal to %", expression: "x × 100", description: "Shift decimal.", explanation: "Move decimal point two places to the right.", category: "Arithmetic" },
          { id: "7-3-4", title: "Reciprocal", expression: "a/b → b/a", description: "Inverse.", explanation: "The product of a fraction and its reciprocal is 1.", category: "Fractions" }
        ]
      },
      {
        name: "Comparing Quantities",
        formulas: [
          { id: "7-4-1", title: "Ratio Calculation", expression: "a : b = a/b", description: "Comparison.", explanation: "Relation between two quantities of same units.", category: "Commercial" },
          { id: "7-4-2", title: "Percentage of Value", expression: "(% / 100) × Value", description: "Find portion.", explanation: "Calculating a specific percent of a total.", category: "Commercial" },
          { id: "7-4-3", title: "Simple Interest (SI)", expression: "(P×R×T)/100", description: "Interest finder.", explanation: "P=Principal, R=Rate, T=Time.", category: "Commercial" },
          { id: "7-4-4", title: "Profit", expression: "SP - CP", description: "Gain amount.", explanation: "Selling Price minus Cost Price.", category: "Commercial" },
          { id: "7-4-5", title: "Loss", expression: "CP - SP", description: "Loss amount.", explanation: "Cost Price minus Selling Price.", category: "Commercial" },
          { id: "7-4-6", title: "Profit %", expression: "(Profit/CP) × 100", description: "Gain ratio.", explanation: "Always calculated on Cost Price.", category: "Commercial" },
          { id: "7-4-7", title: "Loss %", expression: "(Loss/CP) × 100", description: "Loss ratio.", explanation: "Always calculated on Cost Price.", category: "Commercial" },
          { id: "7-4-8", title: "Total Amount", expression: "A = P + SI", description: "Maturity.", explanation: "Sum of principal and interest.", category: "Commercial" }
        ]
      },
      {
        name: "Geometry & Perimeter",
        formulas: [
          { id: "7-5-1", title: "Rectangle Perimeter", expression: "2(L + B)", description: "Boundary.", explanation: "Total length of all four sides.", category: "Geometry" },
          { id: "7-5-2", title: "Square Perimeter", expression: "4 × s", description: "Boundary.", explanation: "Total length of four equal sides.", category: "Geometry" },
          { id: "7-5-3", title: "Circle Perimeter", expression: "2πr", description: "Circumference.", explanation: "Distance around the circle.", category: "Geometry" },
          { id: "7-5-4", title: "Rectangle Area", expression: "L × B", description: "Surface cover.", explanation: "Length multiplied by breadth.", category: "Geometry" },
          { id: "7-5-5", title: "Square Area", expression: "s²", description: "Surface cover.", explanation: "Side length multiplied by itself.", category: "Geometry" },
          { id: "7-5-6", title: "Circle Area", expression: "πr²", description: "Surface cover.", explanation: "Area occupied by a circular region.", category: "Geometry" },
          { id: "7-5-7", title: "Triangle Area", expression: "1/2 × b × h", description: "Surface cover.", explanation: "Half of base times altitude.", category: "Geometry" },
          { id: "7-5-8", title: "Parallelogram Area", expression: "b × h", description: "Surface cover.", explanation: "Base times perpendicular height.", category: "Geometry" }
        ]
      },
      {
        name: "Lines, Angles & Triangles",
        formulas: [
          { id: "7-6-1", title: "Complementary Angles", expression: "∠1 + ∠2 = 90°", description: "Right angle sum.", explanation: "Two angles that add up to 90 degrees.", category: "Geometry" },
          { id: "7-6-2", title: "Supplementary Angles", expression: "∠1 + ∠2 = 180°", description: "Straight sum.", explanation: "Two angles that add up to 180 degrees.", category: "Geometry" },
          { id: "7-6-3", title: "Linear Pair", expression: "∠1 + ∠2 = 180°", description: "Adjacent sum.", explanation: "Adjacent angles on a straight line.", category: "Geometry" },
          { id: "7-6-4", title: "Triangle Sum Prop", expression: "Σ∠s = 180°", description: "Internal angles.", explanation: "The sum of all internal angles in a triangle.", category: "Geometry" },
          { id: "7-6-5", title: "Exterior Angle", expression: "Ext ∠ = Sum of Opp Int ∠s", description: "Exterior prop.", explanation: "The exterior angle is the sum of two remote interior angles.", category: "Geometry" },
          { id: "7-6-6", title: "Triangle Inequality", expression: "a + b > c", description: "Side rule.", explanation: "Sum of two sides must be greater than the third.", category: "Geometry" },
          { id: "7-6-7", title: "Pythagoras Theorem", expression: "H² = P² + B²", description: "Right triangle.", explanation: "Relation between sides of a right-angled triangle.", category: "Geometry" }
        ]
      },
      {
        name: "Exponents & Data",
        formulas: [
          { id: "7-7-1", title: "Mean", expression: "Σx / n", description: "Average.", explanation: "Sum of observations divided by count.", category: "Statistics" },
          { id: "7-7-2", title: "Range", expression: "Max - Min", description: "Spread.", explanation: "Difference between largest and smallest values.", category: "Statistics" },
          { id: "7-7-3", title: "Exponent: a^m × a^n", expression: "a^(m+n)", description: "Mult powers.", explanation: "Add exponents for same bases.", category: "Algebra" },
          { id: "7-7-4", title: "Exponent: a^m / a^n", expression: "a^(m-n)", description: "Div powers.", explanation: "Subtract exponents for same bases.", category: "Algebra" },
          { id: "7-7-5", title: "Exponent: (a^m)^n", expression: "a^(m×n)", description: "Power power.", explanation: "Multiply exponents.", category: "Algebra" },
          { id: "7-7-6", title: "Zero Power", expression: "a⁰ = 1", description: "Zero index.", explanation: "Any non-zero number to power 0 is 1.", category: "Algebra" }
        ]
      }
    ]
  },
  {
    grade: 8,
    label: "Class 8",
    topics: [
      {
        name: "Rational Numbers & Algebra",
        formulas: [
          { id: "8-1-1", title: "Rational Form", expression: "p / q", description: "Definition.", explanation: "p, q are integers and q ≠ 0.", category: "Arithmetic" },
          { id: "8-1-2", title: "Identity I", expression: "(a+b)² = a²+2ab+b²", description: "Binomial sum.", explanation: "Square of sum of two terms.", category: "Algebra" },
          { id: "8-1-3", title: "Identity II", expression: "(a-b)² = a²-2ab+b²", description: "Binomial diff.", explanation: "Square of difference of two terms.", category: "Algebra" },
          { id: "8-1-4", title: "Identity III", expression: "a²-b² = (a+b)(a-b)", description: "Diff squares.", explanation: "Essential for factorization.", category: "Algebra" },
          { id: "8-1-5", title: "Identity IV", expression: "(x+a)(x+b) = x²+(a+b)x+ab", description: "Linear prod.", explanation: "Expansion of two binomials with common term.", category: "Algebra" }
        ]
      },
      {
        name: "Squares, Cubes & Roots",
        formulas: [
          { id: "8-2-1", title: "Square of n", expression: "n × n", description: "Square.", explanation: "Number multiplied by itself.", category: "Algebra" },
          { id: "8-2-2", title: "Cube of n", expression: "n × n × n", description: "Cube.", explanation: "Number multiplied thrice.", category: "Algebra" },
          { id: "8-2-3", title: "Pythagorean Triple", expression: "(2m)²+(m²-1)²=(m²+1)²", description: "Triple rule.", explanation: "Generating sets of three integers for right triangles.", category: "Algebra", isAdvanced: true },
          { id: "8-2-4", title: "Odd Sum Square", expression: "Σ(2i-1) = n²", description: "Sum prop.", explanation: "The sum of first n odd numbers is n².", category: "Algebra" }
        ]
      },
      {
        name: "Commercial Math (Advanced)",
        formulas: [
          { id: "8-3-1", title: "Compound Interest (CI)", expression: "P(1 + R/100)ⁿ - P", description: "Interest on interest.", explanation: "Interest calculated on updated principal.", category: "Commercial" },
          { id: "8-3-2", title: "Amount (CI)", expression: "P(1 + R/100)ⁿ", description: "Final value.", explanation: "Total money at end of period n.", category: "Commercial" },
          { id: "8-3-3", title: "Half-Yearly Amount", expression: "P(1 + R/200)²ⁿ", description: "Compounding.", explanation: "Interest calculated twice a year.", category: "Commercial" },
          { id: "8-3-4", title: "Depreciation", expression: "P(1 - R/100)ⁿ", description: "Value drop.", explanation: "Reducing value of an asset over time.", category: "Commercial" }
        ]
      },
      {
        name: "Mensuration (Solid Geometry)",
        formulas: [
          { id: "8-4-1", title: "TSA Cube", expression: "6a²", description: "Total area.", explanation: "Surface area of all 6 square faces.", category: "Geometry" },
          { id: "8-4-2", title: "Volume Cube", expression: "a³", description: "Capacity.", explanation: "Total space inside the cube.", category: "Geometry" },
          { id: "8-4-3", title: "TSA Cuboid", expression: "2(lb + bh + hl)", description: "Total area.", explanation: "Sum of areas of all rectangular faces.", category: "Geometry" },
          { id: "8-4-4", title: "Volume Cuboid", expression: "l × b × h", description: "Capacity.", explanation: "Area of base times height.", category: "Geometry" },
          { id: "8-4-5", title: "CSA Cylinder", expression: "2πrh", description: "Side area.", explanation: "Curved surface area of cylinder.", category: "Geometry" },
          { id: "8-4-6", title: "TSA Cylinder", expression: "2πr(r+h)", description: "Total area.", explanation: "CSA plus areas of two circular ends.", category: "Geometry" },
          { id: "8-4-7", title: "Volume Cylinder", expression: "πr²h", description: "Capacity.", explanation: "Space inside the cylinder.", category: "Geometry" },
          { id: "8-4-8", title: "Euler's Formula", expression: "F + V - E = 2", description: "Polyhedrons.", explanation: "Faces + Vertices - Edges = 2.", category: "Geometry", isAdvanced: true }
        ]
      },
      {
        name: "Direct & Inverse Proportions",
        formulas: [
          { id: "8-5-1", title: "Direct Variation", expression: "x / y = k", description: "Linear link.", explanation: "Both increase/decrease in same ratio.", category: "Arithmetic" },
          { id: "8-5-2", title: "Inverse Variation", expression: "x × y = k", description: "Inverse link.", explanation: "One increases as the other decreases.", category: "Arithmetic" }
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
          { id: "9-1-1", title: "Trinomial Square", expression: "(a+b+c)² = a²+b²+c²+2ab+2bc+2ca", description: "3-term expansion.", explanation: "Expanding square of sum of three terms.", category: "Algebra" },
          { id: "9-1-2", title: "Cube of Sum", expression: "(a+b)³ = a³+b³+3ab(a+b)", description: "Binomial cube.", explanation: "Expansion for power of 3.", category: "Algebra" },
          { id: "9-1-3", title: "Cube of Difference", expression: "(a-b)³ = a³-b³-3ab(a-b)", description: "Binomial cube.", explanation: "Expansion for subtraction power of 3.", category: "Algebra" },
          { id: "9-1-4", title: "Sum of Cubes", expression: "a³+b³ = (a+b)(a²-ab+b²)", description: "Factorization.", explanation: "Factoring sum of two cubes.", category: "Algebra" },
          { id: "9-1-5", title: "Difference of Cubes", expression: "a³-b³ = (a-b)(a²+ab+b²)", description: "Factorization.", explanation: "Factoring difference of two cubes.", category: "Algebra" },
          { id: "9-1-6", title: "Advanced Identity", expression: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)", description: "Special identity.", explanation: "Essential for advanced factoring.", category: "Algebra", isAdvanced: true }
        ]
      },
      {
        name: "Lines, Angles & Congruence",
        formulas: [
          { id: "9-2-1", title: "Linear Pair", expression: "∠1 + ∠2 = 180°", description: "Adjacent sum.", explanation: "Sum of angles on a straight line.", category: "Geometry" },
          { id: "9-2-2", title: "Transversal Prop", expression: "Corr ∠s are Equal", description: "Parallel rule.", explanation: "Corresponding angles are equal for parallel lines.", category: "Geometry" },
          { id: "9-2-3", title: "SAS Congruence", expression: "Side-Angle-Side", description: "Equality.", explanation: "Triangles are congruent if 2 sides and included angle match.", category: "Geometry" },
          { id: "9-2-4", title: "ASA Congruence", expression: "Angle-Side-Angle", description: "Equality.", explanation: "Triangles are congruent if 2 angles and included side match.", category: "Geometry" },
          { id: "9-2-5", title: "SSS Congruence", expression: "Side-Side-Side", description: "Equality.", explanation: "Triangles are congruent if all 3 sides match.", category: "Geometry" }
        ]
      },
      {
        name: "Circles & Heron's",
        formulas: [
          { id: "9-3-1", title: "Angle at Center", expression: "∠Center = 2 × ∠Circum", description: "Subtended angle.", explanation: "Angle at center is double angle at circumference.", category: "Geometry" },
          { id: "9-3-2", title: "Semi-circle Angle", expression: "∠ = 90°", description: "Inscribed angle.", explanation: "Angle in a semi-circle is always 90 degrees.", category: "Geometry" },
          { id: "9-3-3", title: "Heron's Formula", expression: "√[s(s-a)(s-b)(s-c)]", description: "Triangle area.", explanation: "Area when only 3 side lengths are known.", category: "Geometry" },
          { id: "9-3-4", title: "Semi-perimeter (s)", expression: "(a+b+c) / 2", description: "Heron's part.", explanation: "Half the total boundary of triangle.", category: "Geometry" }
        ]
      },
      {
        name: "Surface Area & Volume (High Level)",
        formulas: [
          { id: "9-4-1", title: "Volume of Cone", expression: "1/3 πr²h", description: "Capacity.", explanation: "One third of volume of cylinder.", category: "Mensuration" },
          { id: "9-4-2", title: "CSA of Cone", expression: "πrl", description: "Curved area.", explanation: "l = √(r²+h²) is slant height.", category: "Mensuration" },
          { id: "9-4-3", title: "Volume of Sphere", expression: "4/3 πr³", description: "Capacity.", explanation: "Space inside a solid ball.", category: "Mensuration" },
          { id: "9-4-4", title: "Surface Area Sphere", expression: "4πr²", description: "Outer cover.", explanation: "Total external area of sphere.", category: "Mensuration" },
          { id: "9-4-5", title: "Volume Hemisphere", expression: "2/3 πr³", description: "Half capacity.", explanation: "Half of sphere volume.", category: "Mensuration" },
          { id: "9-4-6", title: "TSA Hemisphere", expression: "3πr²", description: "Total area.", explanation: "CSA (2πr²) + Base (πr²).", category: "Mensuration" }
        ]
      }
    ]
  },
  {
    grade: 10,
    label: "Class 10",
    topics: [
      {
        name: "Arithmetic Progressions (AP)",
        formulas: [
          { id: "10-1-1", title: "nth term (aₙ)", expression: "a + (n-1)d", description: "Term position.", explanation: "a=first term, d=common difference.", category: "Algebra" },
          { id: "10-1-2", title: "Sum of n terms (Sₙ)", expression: "n/2 [2a + (n-1)d]", description: "Total sum.", explanation: "Cumulative total of first n terms.", category: "Algebra" },
          { id: "10-1-3", title: "Sum (Last Term)", expression: "n/2 (a + l)", description: "Simple sum.", explanation: "Used when first and last term (l) are known.", category: "Algebra" },
          { id: "10-1-4", title: "d (Common Diff)", expression: "aₙ - aₙ₋₁", description: "Gap finder.", explanation: "Difference between consecutive terms.", category: "Algebra" }
        ]
      },
      {
        name: "Quadratic Equations",
        formulas: [
          { id: "10-2-1", title: "Standard Form", expression: "ax² + bx + c = 0", description: "Degree 2 eq.", explanation: "Base form for quadratic equations.", category: "Algebra" },
          { id: "10-2-2", title: "Quadratic Formula", expression: "x = [-b ± √(b²-4ac)] / 2a", description: "Root finder.", explanation: "Solve for x using coefficients.", category: "Algebra" },
          { id: "10-2-3", title: "Discriminant (D)", expression: "b² - 4ac", description: "Nature of roots.", explanation: "D>0: 2 real; D=0: equal; D<0: imaginary.", category: "Algebra" }
        ]
      },
      {
        name: "Trigonometry",
        formulas: [
          { id: "10-3-1", title: "sin θ", expression: "Opp / Hyp", description: "Sine ratio.", explanation: "Opposite side over hypotenuse.", category: "Trigonometry" },
          { id: "10-3-2", title: "cos θ", expression: "Adj / Hyp", description: "Cosine ratio.", explanation: "Adjacent side over hypotenuse.", category: "Trigonometry" },
          { id: "10-3-3", title: "tan θ", expression: "Opp / Adj", description: "Tangent ratio.", explanation: "Opposite side over adjacent side.", category: "Trigonometry" },
          { id: "10-3-4", title: "Pythagorean Identity", expression: "sin²θ + cos²θ = 1", description: "Core identity.", explanation: "Fundamental for all trig relations.", category: "Trigonometry" },
          { id: "10-3-5", title: "Identity II", expression: "1 + tan²θ = sec²θ", description: "Secant ident.", explanation: "Relates tangent and secant.", category: "Trigonometry" },
          { id: "10-3-6", title: "Identity III", expression: "1 + cot²θ = cosec²θ", description: "Cosecant ident.", explanation: "Relates cotangent and cosecant.", category: "Trigonometry" },
          { id: "10-3-7", title: "Complementary Angles", expression: "sin(90-θ) = cosθ", description: "Shift prop.", explanation: "Sines and cosines of complements match.", category: "Trigonometry" }
        ]
      },
      {
        name: "Geometry & Mensuration (Final)",
        formulas: [
          { id: "10-4-1", title: "Distance Formula", expression: "√[(x₂-x₁)² + (y₂-y₁)²]", description: "Point gap.", explanation: "Distance between two coordinate points.", category: "Geometry" },
          { id: "10-4-2", title: "Section Formula", expression: "[(mx₂+nx₁)/(m+n), ...]", description: "Internal point.", explanation: "Point dividing line in ratio m:n.", category: "Geometry" },
          { id: "10-4-3", title: "Area of Sector", expression: "(θ/360) × πr²", description: "Circle slice.", explanation: "Area for central angle θ.", category: "Geometry" },
          { id: "10-4-4", title: "Length of Arc", expression: "(θ/360) × 2πr", description: "Edge of slice.", explanation: "Boundary length of circle slice.", category: "Geometry" },
          { id: "10-4-5", title: "Frustum Volume", expression: "1/3 πh(R²+r²+Rr)", description: "Bucket capacity.", explanation: "Volume of a sliced cone.", category: "Mensuration", isAdvanced: true }
        ]
      }
    ]
  },
  {
    grade: 11,
    label: "Class 11",
    topics: [
      {
        name: "Trigonometric Functions (Deep)",
        formulas: [
          { id: "11-1-1", title: "sin(A+B)", expression: "sinAcosB + cosAsinB", description: "Sum of angles.", explanation: "Expanding sine of two combined angles.", category: "Trigonometry" },
          { id: "11-1-2", title: "cos(A+B)", expression: "cosAcosB - sinAsinB", description: "Sum of angles.", explanation: "Expanding cosine of two combined angles.", category: "Trigonometry" },
          { id: "11-1-3", title: "sin2A", expression: "2sinAcosA", description: "Double angle.", explanation: "Useful for calculus simplification.", category: "Trigonometry" },
          { id: "11-1-4", title: "cos2A", expression: "cos²A - sin²A", description: "Double angle.", explanation: "Also: 2cos²A-1 or 1-2sin²A.", category: "Trigonometry" },
          { id: "11-1-5", title: "tan(A+B)", expression: "(tanA+tanB) / (1-tanAtanB)", description: "Sum of angles.", explanation: "Tangent expansion.", category: "Trigonometry" },
          { id: "11-1-6", title: "sinC+sinD", expression: "2sin[(C+D)/2]cos[(C-D)/2]", description: "Product form.", explanation: "Sum to product transformation.", category: "Trigonometry", isAdvanced: true }
        ]
      },
      {
        name: "Conic Sections & Algebra",
        formulas: [
          { id: "11-2-1", title: "Circle Equation", expression: "(x-h)² + (y-k)² = r²", description: "Center/Radius.", explanation: "Circle with center (h,k) and radius r.", category: "Geometry" },
          { id: "11-2-2", title: "Parabola (Standard)", expression: "y² = 4ax", description: "Conic form.", explanation: "Opening to the right.", category: "Geometry" },
          { id: "11-2-3", title: "Ellipse Equation", expression: "x²/a² + y²/b² = 1", description: "Conic form.", explanation: "Centered at origin.", category: "Geometry" },
          { id: "11-2-4", title: "nPr (Permutation)", expression: "n! / (n-r)!", description: "Arrangements.", explanation: "Selecting where order matters.", category: "Algebra" },
          { id: "11-2-5", title: "nCr (Combination)", expression: "n! / [r!(n-r)!]", description: "Selections.", explanation: "Selecting where order doesn't matter.", category: "Algebra" },
          { id: "11-2-6", title: "Binomial Expansion", expression: "Σ nCr aⁿ⁻ʳ bʳ", description: "Newton's formula.", explanation: "Expansion of (a+b)ⁿ.", category: "Algebra", isAdvanced: true }
        ]
      },
      {
        name: "Calculus (Limits & Diffs)",
        formulas: [
          { id: "11-3-1", title: "Standard Limit", expression: "lim(x→0) sinx/x = 1", description: "Trig limit.", explanation: "Core limit for differentiation.", category: "Calculus" },
          { id: "11-3-2", title: "Derivative xⁿ", expression: "nxⁿ⁻¹", description: "Power rule.", explanation: "Fundamental rule of calculus.", category: "Calculus" },
          { id: "11-3-3", title: "Derivative sinx", expression: "cosx", description: "Trig diff.", explanation: "Rate of change of sine.", category: "Calculus" },
          { id: "11-3-4", title: "Derivative cosx", expression: "-sinx", description: "Trig diff.", explanation: "Rate of change of cosine.", category: "Calculus" }
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
          { id: "12-1-1", title: "Inverse (A⁻¹)", expression: "1/|A| × adj(A)", description: "Matrix division.", explanation: "Defined only if determinant |A| ≠ 0.", category: "Algebra" },
          { id: "12-1-2", title: "Adjoint property", expression: "A(adj A) = |A|I", description: "Identity link.", explanation: "Relates matrix to its adjoint and identity.", category: "Algebra" },
          { id: "12-1-3", title: "|AB| Property", expression: "|A| × |B|", description: "Mult determinant.", explanation: "Determinant of product is product of determinants.", category: "Algebra" }
        ]
      },
      {
        name: "Calculus: Differentiation (Full)",
        formulas: [
          { id: "12-2-1", title: "Chain Rule", expression: "dy/dx = (dy/du) × (du/dx)", description: "Composition.", explanation: "Differentiating nested functions.", category: "Calculus" },
          { id: "12-2-2", title: "Product Rule", expression: "(uv)' = u'v + uv'", description: "Multiplication.", explanation: "Differentiating two functions being multiplied.", category: "Calculus" },
          { id: "12-2-3", title: "Quotient Rule", expression: "(u/v)' = (u'v - uv')/v²", description: "Division.", explanation: "Differentiating two functions being divided.", category: "Calculus" },
          { id: "12-2-4", title: "d/dx(eˣ)", expression: "eˣ", description: "Exponential.", explanation: "Function that is its own derivative.", category: "Calculus" },
          { id: "12-2-5", title: "d/dx(log x)", expression: "1/x", description: "Natural log.", explanation: "Derivative of ln(x).", category: "Calculus" },
          { id: "12-2-6", title: "d/dx(tan⁻¹x)", expression: "1/(1+x²)", description: "Inverse trig.", explanation: "Rate of change of inverse tangent.", category: "Calculus" }
        ]
      },
      {
        name: "Calculus: Integrals",
        formulas: [
          { id: "12-3-1", title: "Integration by Parts", expression: "∫uv = u∫v - ∫(u'∫v)", description: "Product integral.", explanation: "Uses ILATE rule for u-selection.", category: "Calculus" },
          { id: "12-3-2", title: "Standard ∫ 1/x", expression: "ln|x| + C", description: "Log result.", explanation: "Anti-derivative of 1/x.", category: "Calculus" },
          { id: "12-3-3", title: "King's Property", expression: "∫₀ᵃ f(x) = ∫₀ᵃ f(a-x)", description: "Definite prop.", explanation: "Symmetry trick for definite integrals.", category: "Calculus", isAdvanced: true },
          { id: "12-3-4", title: "Integrating Factor", expression: "e^(∫P dx)", description: "Diff Eq tool.", explanation: "Used to solve linear differential equations.", category: "Calculus" }
        ]
      },
      {
        name: "Vectors & 3D Geometry",
        formulas: [
          { id: "12-4-1", title: "Dot Product (a·b)", expression: "|a||b|cosθ", description: "Scalar prod.", explanation: "Projection and angle measurement.", category: "Vectors" },
          { id: "12-4-2", title: "Cross Product (a×b)", expression: "|a||b|sinθ n̂", description: "Vector prod.", explanation: "Result is perpendicular to both a and b.", category: "Vectors" },
          { id: "12-4-3", title: "Shortest Distance", expression: "|(a₂-a₁)·(b₁×b₂)| / |b₁×b₂|", description: "Skew lines.", explanation: "Distance between non-intersecting lines in 3D.", category: "Geometry", isAdvanced: true }
        ]
      },
      {
        name: "Probability (Advanced)",
        formulas: [
          { id: "12-5-1", title: "Conditional Prob", expression: "P(A|B) = P(A∩B) / P(B)", description: "Event link.", explanation: "Probability of A given that B happened.", category: "Statistics" },
          { id: "12-5-2", title: "Bayes' Theorem", expression: "[P(Eᵢ)P(A|Eᵢ)] / Σ[P(Eⱼ)P(A|Eⱼ)]", description: "Inverse prob.", explanation: "Updating probability based on evidence.", category: "Statistics", isAdvanced: true },
          { id: "12-5-3", title: "Bernoulli Trial", expression: "nCr pʳ qⁿ⁻ʳ", description: "Binomial dist.", explanation: "Success/Failure probability for n trials.", category: "Statistics" }
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