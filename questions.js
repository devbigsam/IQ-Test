// Question Bank - Hundreds of questions organized by category and difficulty
// Developed by Big Sam

const questionBank = {
  art: {
    easy: [
      { 
        q: "What emotion does this abstract art convey?", 
        options: ["Calm and Peace", "Chaos and Energy", "Sadness", "Fear"], 
        correct: 0,
        visual: {
          type: "abstract",
          shapes: [
            { type: "circle", x: 50, y: 50, r: 30, color: "#60a5fa", opacity: 0.6 },
            { type: "circle", x: 70, y: 60, r: 20, color: "#93c5fd", opacity: 0.5 },
            { type: "wave", color: "#3b82f6", amplitude: 10, frequency: 2 }
          ]
        }
      },
      { 
        q: "What does this pattern symbolize?", 
        options: ["Growth", "Decay", "Stability", "Conflict"], 
        correct: 0,
        visual: {
          type: "pattern",
          design: "spiral",
          colors: ["#10b981", "#34d399", "#6ee7b7"]
        }
      },
      { 
        q: "This geometric art represents:", 
        options: ["Balance", "Imbalance", "Movement", "Stillness"], 
        correct: 0,
        visual: {
          type: "geometric",
          shapes: [
            { type: "rect", x: 30, y: 40, w: 40, h: 40, color: "#8b5cf6", rotation: 0 },
            { type: "rect", x: 70, y: 40, w: 40, h: 40, color: "#a78bfa", rotation: 0 }
          ]
        }
      },
      { 
        q: "What feeling does this color gradient evoke?", 
        options: ["Warmth", "Cold", "Neutral", "Harsh"], 
        correct: 0,
        visual: {
          type: "gradient",
          from: "#f59e0b",
          to: "#ef4444",
          direction: "radial"
        }
      },
      { 
        q: "This mandala-like pattern suggests:", 
        options: ["Harmony", "Discord", "Speed", "Violence"], 
        correct: 0,
        visual: {
          type: "mandala",
          petals: 8,
          colors: ["#ec4899", "#f472b6", "#fbcfe8"]
        }
      },
    ],
    medium: [
      { 
        q: "The asymmetry in this composition creates a sense of:", 
        options: ["Tension", "Peace", "Boredom", "Joy"], 
        correct: 0,
        visual: {
          type: "abstract",
          shapes: [
            { type: "triangle", x1: 20, y1: 80, x2: 50, y2: 20, x3: 40, y3: 80, color: "#ef4444" },
            { type: "circle", x: 80, y: 30, r: 15, color: "#3b82f6" },
            { type: "rect", x: 70, y: 60, w: 20, h: 30, color: "#10b981", rotation: 25 }
          ]
        }
      },
      { 
        q: "This overlapping pattern creates an illusion of:", 
        options: ["Depth", "Flatness", "Transparency", "Opacity"], 
        correct: 0,
        visual: {
          type: "overlap",
          shapes: [
            { type: "circle", x: 40, y: 50, r: 30, color: "#8b5cf6", opacity: 0.5 },
            { type: "circle", x: 60, y: 50, r: 30, color: "#ec4899", opacity: 0.5 },
            { type: "circle", x: 50, y: 65, r: 30, color: "#f59e0b", opacity: 0.5 }
          ]
        }
      },
      { 
        q: "The directional flow of this art moves:", 
        options: ["Upward", "Downward", "Circular", "Static"], 
        correct: 0,
        visual: {
          type: "flow",
          arrows: [
            { x: 50, y: 80, direction: "up", color: "#00ff88" },
            { x: 40, y: 60, direction: "up", color: "#00d4ff" },
            { x: 60, y: 60, direction: "up", color: "#8b5cf6" }
          ]
        }
      },
      { 
        q: "This pattern follows which artistic principle?", 
        options: ["Golden Ratio", "Rule of Thirds", "Symmetry", "Chaos"], 
        correct: 2,
        visual: {
          type: "symmetry",
          axis: "vertical",
          colors: ["#6366f1", "#8b5cf6", "#a78bfa"]
        }
      },
      { 
        q: "The contrast in this piece emphasizes:", 
        options: ["Duality", "Unity", "Simplicity", "Complexity"], 
        correct: 0,
        visual: {
          type: "contrast",
          left: "#000000",
          right: "#ffffff",
          blend: "#808080"
        }
      },
    ],
    hard: [
      { 
        q: "This cubist-inspired composition deconstructs:", 
        options: ["Perspective", "Color", "Texture", "Sound"], 
        correct: 0,
        visual: {
          type: "cubist",
          fragments: 12,
          colors: ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"]
        }
      },
      { 
        q: "The negative space in this artwork represents:", 
        options: ["The unseen", "Emptiness", "Fullness", "Nothing"], 
        correct: 0,
        visual: {
          type: "negative",
          subject: "vase-faces",
          colors: ["#1e293b", "#ffffff"]
        }
      },
      { 
        q: "This recursive pattern demonstrates:", 
        options: ["Self-similarity", "Randomness", "Linear growth", "Decay"], 
        correct: 0,
        visual: {
          type: "fractal",
          iterations: 4,
          colors: ["#00ff88", "#00d4ff", "#8b5cf6"]
        }
      },
      { 
        q: "The Gestalt principle shown here is:", 
        options: ["Closure", "Proximity", "Similarity", "Continuity"], 
        correct: 0,
        visual: {
          type: "gestalt",
          principle: "closure",
          incomplete: true
        }
      },
      { 
        q: "This minimalist composition conveys meaning through:", 
        options: ["Absence", "Presence", "Color", "Texture"], 
        correct: 0,
        visual: {
          type: "minimal",
          elements: 2,
          colors: ["#1e293b", "#00ff88"]
        }
      },
    ]
  },
  logic: {
    easy: [
      { q: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?", options: ["True", "False", "Cannot be determined", "Sometimes"], correct: 0, hint: "Think about transitive property: if A→B and B→C, then A→C" },
      { q: "What comes next in the sequence: 2, 4, 6, 8, __?", options: ["9", "10", "11", "12"], correct: 1, hint: "Look at the pattern: each number increases by 2" },
      { q: "If it takes 5 machines 5 minutes to make 5 widgets, how many minutes would it take 100 machines to make 100 widgets?", options: ["100", "5", "20", "500"], correct: 1, hint: "Each machine makes 1 widget in 5 minutes, regardless of quantity" },
      { q: "A farmer has 17 sheep. All but 9 die. How many sheep does the farmer have left?", options: ["8", "9", "17", "0"], correct: 1, hint: "'All but 9' means 9 survived" },
      { q: "Which word does NOT belong: Apple, Orange, Banana, Carrot?", options: ["Apple", "Orange", "Banana", "Carrot"], correct: 3, hint: "Three are fruits, one is a vegetable" },
      { q: "If you rearrange 'CIFAIPC', you get the name of a(n):", options: ["City", "Animal", "Ocean", "Country"], correct: 2, hint: "Try rearranging the letters: P-A-C-I-F-I-C" },
      { q: "Monday's child is fair of face. If today is Monday, what was yesterday?", options: ["Tuesday", "Sunday", "Saturday", "Friday"], correct: 1, hint: "Sunday comes before Monday" },
      { q: "How many months have 28 days?", options: ["1", "6", "12", "All of them"], correct: 3, hint: "Every month has at least 28 days" },
      { q: "A clerk at a butcher shop is 5'10\" tall. What does he weigh?", options: ["Meat", "180 lbs", "150 lbs", "Impossible to tell"], correct: 0, hint: "What does a clerk at a butcher shop weigh for customers?" },
      { q: "If there are 3 apples and you take away 2, how many do you have?", options: ["1", "2", "3", "0"], correct: 1, hint: "You TOOK 2, so you have 2" },
    ],
    medium: [
      { q: "If some Glinks are Blinks, and all Blinks are Dinks, then some Glinks are definitely Dinks?", options: ["True", "False", "Cannot be determined", "Only on Tuesdays"], correct: 0 },
      { q: "What is the next number: 1, 1, 2, 3, 5, 8, __?", options: ["11", "12", "13", "14"], correct: 2 },
      { q: "Mary's father has 5 daughters: Nana, Nene, Nini, Nono. What's the 5th daughter's name?", options: ["Nunu", "Mary", "Nana", "None"], correct: 1 },
      { q: "A bat and ball cost $1.10 total. The bat costs $1 more than the ball. How much does the ball cost?", options: ["$0.10", "$0.05", "$0.15", "$0.01"], correct: 1 },
      { q: "What is unusual about this sentence: 'The quick brown fox jumps over the lazy dog'?", options: ["It's grammatically incorrect", "Contains all 26 letters", "It's a question", "Nothing unusual"], correct: 1 },
      { q: "If you have a cube painted red on all sides and cut it into 27 smaller cubes, how many small cubes have exactly 2 red faces?", options: ["6", "8", "12", "18"], correct: 2 },
      { q: "Complete: Elbow is to arm as knee is to ___", options: ["Foot", "Leg", "Ankle", "Thigh"], correct: 1 },
      { q: "If ROSE is coded as 6821, CHAIR is coded as 73456, what is the code for SEARCH?", options: ["214673", "214763", "216473", "216743"], correct: 0 },
      { q: "What number should replace the question mark: 3, 6, 11, 18, 27, ?", options: ["36", "38", "40", "42"], correct: 1 },
      { q: "If two typists can type two pages in two minutes, how many typists will it take to type 18 pages in six minutes?", options: ["3", "6", "12", "18"], correct: 1 },
    ],
    hard: [
      { q: "In a race, you overtake the person in 2nd place. What position are you in now?", options: ["1st", "2nd", "3rd", "Last"], correct: 1 },
      { q: "What is 3/7 chicken, 2/3 cat, and 2/4 goat?", options: ["Chicago", "A farm", "Nothing", "Farm animal"], correct: 0 },
      { q: "If all A are B, no B are C, and some C are D, which is TRUE?", options: ["All A are D", "No A are C", "Some D are A", "All D are B"], correct: 1 },
      { q: "A sundial is the timepiece with the fewest moving parts. What has the most?", options: ["Digital clock", "Atomic clock", "Hourglass", "Grandfather clock"], correct: 2 },
      { q: "What 5-letter word becomes shorter when you add 2 letters?", options: ["Small", "Short", "Terse", "Brief"], correct: 1 },
      { q: "How many times can you subtract 5 from 25?", options: ["5", "1", "25", "Infinite"], correct: 1 },
      { q: "What gets wetter the more it dries?", options: ["Sponge", "Towel", "Paper", "Sand"], correct: 1 },
      { q: "I have cities but no houses, forests but no trees, water but no fish. What am I?", options: ["A dream", "A map", "A painting", "A story"], correct: 1 },
      { q: "If you have it, you don't share it. If you share it, you don't have it. What is it?", options: ["Love", "Money", "A secret", "Time"], correct: 2 },
      { q: "The more you take, the more you leave behind. What am I?", options: ["Memories", "Footsteps", "Photos", "Time"], correct: 1 },
    ]
  },
  math: {
    easy: [
      { q: "What is 15% of 200?", options: ["15", "20", "30", "35"], correct: 2 },
      { q: "If x + 5 = 12, what is x?", options: ["5", "6", "7", "8"], correct: 2 },
      { q: "What is the square root of 144?", options: ["11", "12", "13", "14"], correct: 1 },
      { q: "What is 3² + 4²?", options: ["12", "25", "7", "49"], correct: 1 },
      { q: "If a triangle has angles of 45° and 90°, what is the third angle?", options: ["45°", "55°", "35°", "65°"], correct: 0 },
      { q: "What is 0.75 as a fraction?", options: ["1/4", "2/3", "3/4", "4/5"], correct: 2 },
      { q: "What is the next prime number after 7?", options: ["8", "9", "10", "11"], correct: 3 },
      { q: "If 2x = 10, what is x?", options: ["2", "4", "5", "8"], correct: 2 },
      { q: "What is the perimeter of a square with side 5?", options: ["10", "15", "20", "25"], correct: 2 },
      { q: "What is 8 ÷ 0.5?", options: ["4", "8", "16", "0.0625"], correct: 2 },
    ],
    medium: [
      { q: "What is 2³ × 3²?", options: ["36", "48", "72", "96"], correct: 2 },
      { q: "If the ratio of boys to girls is 3:5 and there are 24 boys, how many girls are there?", options: ["30", "35", "40", "45"], correct: 2 },
      { q: "What is the area of a circle with radius 7? (π ≈ 22/7)", options: ["44", "154", "308", "616"], correct: 1 },
      { q: "Solve: 2x + 3 = 15", options: ["4", "5", "6", "7"], correct: 2 },
      { q: "What is log₁₀(1000)?", options: ["2", "3", "4", "10"], correct: 1 },
      { q: "If a car travels 60 km/h, how far does it travel in 2.5 hours?", options: ["120 km", "140 km", "150 km", "160 km"], correct: 2 },
      { q: "What is the value of 5! (5 factorial)?", options: ["25", "60", "120", "720"], correct: 2 },
      { q: "A jacket costs $80 after 20% off. What was the original price?", options: ["$96", "$100", "$104", "$110"], correct: 1 },
      { q: "What is the sum of angles in a hexagon?", options: ["540°", "720°", "900°", "1080°"], correct: 1 },
      { q: "If √x = 9, what is x?", options: ["3", "18", "27", "81"], correct: 3 },
    ],
    hard: [
      { q: "What is the derivative of x³ + 2x²?", options: ["3x² + 4x", "3x² + 2x", "x² + 4x", "3x + 4x"], correct: 0 },
      { q: "In a GP: 2, 6, 18, ..., what is the 6th term?", options: ["162", "324", "486", "972"], correct: 2 },
      { q: "What is ∫2x dx?", options: ["x²", "x² + C", "2x²", "2x² + C"], correct: 1 },
      { q: "What is the probability of rolling a sum of 7 with two dice?", options: ["1/6", "1/9", "5/36", "1/12"], correct: 0 },
      { q: "If sin θ = 0.5, what is θ in degrees?", options: ["15°", "30°", "45°", "60°"], correct: 1 },
      { q: "What is the value of i² where i is the imaginary unit?", options: ["1", "-1", "i", "-i"], correct: 1 },
      { q: "How many ways can 5 people sit in a row?", options: ["25", "60", "120", "720"], correct: 2 },
      { q: "What is the limit of (1 + 1/n)ⁿ as n → ∞?", options: ["1", "2", "e", "∞"], correct: 2 },
      { q: "The sum of first n(n+1)/ natural numbers is n2. What is n if sum = 55?", options: ["9", "10", "11", "12"], correct: 1 },
      { q: "What is 2⁸ mod 7?", options: ["1", "2", "4", "6"], correct: 2 },
    ]
  },
  spatial: {
    easy: [
      { q: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correct: 1, visual: "cube" },
      { q: "If you fold a piece of paper in half 3 times, how many rectangles result when unfolded?", options: ["4", "6", "8", "16"], correct: 2 },
      { q: "Which shape has the most sides: triangle, square, pentagon, hexagon?", options: ["Triangle", "Square", "Pentagon", "Hexagon"], correct: 3 },
      { q: "How many edges does a cube have?", options: ["6", "8", "10", "12"], correct: 3 },
      { q: "What 3D shape has 1 curved surface and 2 flat surfaces?", options: ["Cone", "Cylinder", "Sphere", "Pyramid"], correct: 1 },
      { q: "If you look at a cube from directly above, what shape do you see?", options: ["Circle", "Triangle", "Square", "Rectangle"], correct: 2 },
      { q: "How many right angles are in a rectangle?", options: ["2", "3", "4", "6"], correct: 2 },
      { q: "A triangle with all equal sides is called?", options: ["Isosceles", "Scalene", "Equilateral", "Right"], correct: 2 },
      { q: "What shape is a stop sign?", options: ["Hexagon", "Pentagon", "Octagon", "Decagon"], correct: 2 },
      { q: "How many vertices does a triangle have?", options: ["2", "3", "4", "5"], correct: 1 },
    ],
    medium: [
      { q: "How many small cubes make up a 3×3×3 cube?", options: ["9", "18", "27", "36"], correct: 2 },
      { q: "If you rotate the letter 'N' 180°, what letter do you get?", options: ["Z", "N", "U", "M"], correct: 1 },
      { q: "A dodecahedron has how many faces?", options: ["8", "10", "12", "20"], correct: 2 },
      { q: "What is the minimum number of colors needed to color a map so no adjacent regions share a color?", options: ["3", "4", "5", "6"], correct: 1 },
      { q: "How many lines of symmetry does a regular hexagon have?", options: ["4", "5", "6", "12"], correct: 2 },
      { q: "If you cut a cone parallel to its base, what shape is the cross-section?", options: ["Circle", "Oval", "Triangle", "Parabola"], correct: 0 },
      { q: "A Möbius strip has how many sides?", options: ["0", "1", "2", "3"], correct: 1 },
      { q: "What shape is formed by rotating a rectangle around its longer side?", options: ["Sphere", "Cylinder", "Cone", "Torus"], correct: 1 },
      { q: "How many diagonals does a hexagon have?", options: ["6", "9", "12", "15"], correct: 1 },
      { q: "A soccer ball is an example of which geometric solid?", options: ["Icosahedron", "Dodecahedron", "Truncated icosahedron", "Cuboctahedron"], correct: 2 },
    ],
    hard: [
      { q: "How many faces does an icosahedron have?", options: ["12", "16", "20", "24"], correct: 2 },
      { q: "In 4D space, what is the 4D analog of a cube called?", options: ["Hypercube", "Tesseract", "Both A and B", "Hypersphere"], correct: 2 },
      { q: "How many edges does a dodecahedron have?", options: ["20", "24", "30", "36"], correct: 2 },
      { q: "The Euler characteristic (V-E+F) for a simple polyhedron is?", options: ["0", "1", "2", "3"], correct: 2 },
      { q: "A Klein bottle has how many sides?", options: ["0", "1", "2", "Infinite"], correct: 1 },
      { q: "How many platonic solids exist?", options: ["4", "5", "6", "Infinite"], correct: 1 },
      { q: "What shape do you get when you slice a torus through its center horizontally?", options: ["Circle", "Two circles", "Vesica piscis", "Oval"], correct: 1 },
      { q: "How many vertices does an octahedron have?", options: ["4", "6", "8", "12"], correct: 1 },
      { q: "A stellated dodecahedron has how many points?", options: ["12", "20", "30", "60"], correct: 0 },
      { q: "The dual of a cube is a(n)?", options: ["Cube", "Tetrahedron", "Octahedron", "Icosahedron"], correct: 2 },
    ]
  },
  pattern: {
    easy: [
      { q: "What comes next: A, C, E, G, __?", options: ["H", "I", "J", "K"], correct: 1 },
      { q: "Continue: 1, 4, 9, 16, __?", options: ["20", "25", "30", "36"], correct: 1 },
      { q: "What's next: ○, ○○, ○○○, ____?", options: ["○○○", "○○○○", "○○", "○"], correct: 1 },
      { q: "Complete: AB, BC, CD, __?", options: ["DE", "EF", "DC", "DD"], correct: 0 },
      { q: "What comes next: 2, 6, 12, 20, __?", options: ["28", "30", "32", "36"], correct: 1 },
      { q: "Continue: RED, ORANGE, YELLOW, __?", options: ["BLUE", "GREEN", "VIOLET", "INDIGO"], correct: 1 },
      { q: "What's missing: 5, 10, __, 20, 25?", options: ["12", "14", "15", "18"], correct: 2 },
      { q: "Complete the pattern: Z, Y, X, __?", options: ["V", "W", "A", "B"], correct: 1 },
      { q: "What comes next: 3, 7, 11, 15, __?", options: ["17", "18", "19", "21"], correct: 2 },
      { q: "Continue: Jan, Mar, May, __?", options: ["Jun", "Jul", "Aug", "Sep"], correct: 1 },
    ],
    medium: [
      { q: "What comes next: 1, 1, 2, 3, 5, 8, __?", options: ["11", "12", "13", "15"], correct: 2 },
      { q: "Complete: 2, 3, 5, 7, 11, __?", options: ["12", "13", "14", "15"], correct: 1 },
      { q: "What's next: 1, 8, 27, 64, __?", options: ["81", "100", "125", "216"], correct: 2 },
      { q: "Continue: AZ, BY, CX, __?", options: ["DW", "DU", "EW", "EV"], correct: 0 },
      { q: "What comes next: 2, 6, 14, 30, __?", options: ["46", "54", "62", "70"], correct: 2 },
      { q: "Complete: 1, 2, 4, 7, 11, __?", options: ["14", "15", "16", "17"], correct: 2 },
      { q: "What's next: O, T, T, F, F, S, S, __?", options: ["E", "N", "T", "S"], correct: 0 },
      { q: "Continue: 144, 121, 100, 81, __?", options: ["49", "64", "72", "56"], correct: 1 },
      { q: "What comes next: ACE, BDF, CEG, __?", options: ["DFH", "DEG", "CFH", "DEF"], correct: 0 },
      { q: "Complete: 2, 5, 10, 17, __?", options: ["24", "26", "28", "30"], correct: 1 },
    ],
    hard: [
      { q: "What comes next: 1, 11, 21, 1211, 111221, __?", options: ["312211", "11112211", "1211111", "22111"], correct: 0 },
      { q: "Complete: 0, 1, 1, 2, 3, 5, 8, 13, 21, __?", options: ["26", "29", "34", "40"], correct: 2 },
      { q: "What's next: 2, 12, 36, 80, __?", options: ["120", "150", "180", "210"], correct: 1 },
      { q: "Continue: 3, 3, 5, 4, 4, 3, 5, __?", options: ["3", "4", "5", "6"], correct: 2 },
      { q: "What comes next: 1, 3, 6, 10, 15, __?", options: ["18", "20", "21", "24"], correct: 2 },
      { q: "Complete the sequence: 1, 4, 13, 40, __?", options: ["80", "100", "121", "160"], correct: 2 },
      { q: "What's the pattern: 8, 5, 4, 9, 1, 7, 6, __?", options: ["2", "3", "10", "11"], correct: 1 },
      { q: "Continue: F, S, T, F, F, S, S, E, __?", options: ["N", "T", "E", "S"], correct: 0 },
      { q: "What comes next: 6, 28, 496, __?", options: ["2016", "8128", "8256", "9124"], correct: 1 },
      { q: "Complete: 31, 28, 31, 30, 31, 30, __?", options: ["28", "29", "30", "31"], correct: 3 },
    ]
  },
  verbal: {
    easy: [
      { q: "Which word is the opposite of 'ABUNDANT'?", options: ["Plentiful", "Scarce", "Ample", "Copious"], correct: 1 },
      { q: "BOOK is to READING as FORK is to?", options: ["Drawing", "Eating", "Writing", "Cooking"], correct: 1 },
      { q: "Find the odd one out: Run, Walk, Sit, Jog", options: ["Run", "Walk", "Sit", "Jog"], correct: 2 },
      { q: "Which word means the same as 'HAPPY'?", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
      { q: "BIRD is to NEST as BEE is to?", options: ["Honey", "Hive", "Flower", "Sting"], correct: 1 },
      { q: "Which word doesn't belong: Dog, Cat, Apple, Horse?", options: ["Dog", "Cat", "Apple", "Horse"], correct: 2 },
      { q: "Complete: HOT is to COLD as WET is to?", options: ["Water", "Rain", "Dry", "Humid"], correct: 2 },
      { q: "Find the synonym of 'BIG':", options: ["Small", "Large", "Tiny", "Mini"], correct: 1 },
      { q: "DOCTOR is to PATIENT as TEACHER is to?", options: ["School", "Student", "Book", "Class"], correct: 1 },
      { q: "Which word means the opposite of 'FAST'?", options: ["Quick", "Slow", "Rapid", "Swift"], correct: 1 },
    ],
    medium: [
      { q: "VERBOSE is the opposite of?", options: ["Wordy", "Concise", "Lengthy", "Talkative"], correct: 1 },
      { q: "Complete: BUTTERFLY is to INSECT as SALMON is to?", options: ["Water", "Fish", "Ocean", "Swimming"], correct: 1 },
      { q: "Find the odd one: Crimson, Scarlet, Azure, Vermilion", options: ["Crimson", "Scarlet", "Azure", "Vermilion"], correct: 2 },
      { q: "EPHEMERAL means?", options: ["Eternal", "Short-lived", "Beautiful", "Dangerous"], correct: 1 },
      { q: "CHAPTER is to BOOK as VERSE is to?", options: ["Rhyme", "Poetry", "Poem", "Song"], correct: 2 },
      { q: "Which word is MOST similar to 'UBIQUITOUS'?", options: ["Rare", "Omnipresent", "Unique", "Sporadic"], correct: 1 },
      { q: "Find the antonym of 'BENEVOLENT':", options: ["Kind", "Generous", "Malevolent", "Charitable"], correct: 2 },
      { q: "WATER is to THIRST as FOOD is to?", options: ["Eat", "Hunger", "Cook", "Meal"], correct: 1 },
      { q: "Which word doesn't fit: Jubilant, Ecstatic, Morose, Elated?", options: ["Jubilant", "Ecstatic", "Morose", "Elated"], correct: 2 },
      { q: "ENIGMA is closest in meaning to?", options: ["Answer", "Mystery", "Solution", "Clarity"], correct: 1 },
    ],
    hard: [
      { q: "PUSILLANIMOUS means?", options: ["Brave", "Cowardly", "Generous", "Angry"], correct: 1 },
      { q: "ICONOCLAST is to TRADITION as REVOLUTIONARY is to?", options: ["Change", "Status quo", "Progress", "Innovation"], correct: 1 },
      { q: "Find the odd word: Obsequious, Sycophantic, Supercilious, Servile", options: ["Obsequious", "Sycophantic", "Supercilious", "Servile"], correct: 2 },
      { q: "PERSPICACIOUS means having?", options: ["Sweat", "Keen insight", "Bad luck", "Clear skin"], correct: 1 },
      { q: "ENERVATE is to INVIGORATE as MITIGATE is to?", options: ["Soothe", "Calm", "Exacerbate", "Alleviate"], correct: 2 },
      { q: "SOLECISM refers to?", options: ["Sun worship", "Grammatical error", "Solar energy", "Social grace"], correct: 1 },
      { q: "Which is NOT a synonym of 'CAPRICIOUS'?", options: ["Fickle", "Whimsical", "Steadfast", "Mercurial"], correct: 2 },
      { q: "PARSIMONIOUS is closest to?", options: ["Generous", "Stingy", "Religious", "Partial"], correct: 1 },
      { q: "VITUPERATIVE means?", options: ["Full of life", "Abusive", "Victorious", "Virtuous"], correct: 1 },
      { q: "SESQUIPEDALIAN relates to?", options: ["Long words", "Six-legged creatures", "Ancient history", "Sequential events"], correct: 0 },
    ]
  },
  memory: {
    easy: [
      { q: "Remember this sequence: 3, 7, 2. What was the second number?", options: ["3", "7", "2", "5"], correct: 1 },
      { q: "Memorize: APPLE, HOUSE, RIVER. Which word was in the middle?", options: ["APPLE", "HOUSE", "RIVER", "TREE"], correct: 1 },
      { q: "Remember: 🔴🟢🔵. What color was first?", options: ["Green", "Blue", "Red", "Yellow"], correct: 2 },
      { q: "Recall: CAT, DOG, BIRD, FISH. How many animals were listed?", options: ["3", "4", "5", "6"], correct: 1 },
      { q: "Remember: 5 + 3 = 8. What was the first number?", options: ["3", "5", "8", "2"], correct: 1 },
      { q: "Memorize: MONDAY, FRIDAY, SUNDAY. Which day was NOT mentioned?", options: ["Monday", "Tuesday", "Friday", "Sunday"], correct: 1 },
      { q: "Recall: 9, 4, 7, 1. What was the largest number?", options: ["4", "7", "9", "1"], correct: 2 },
      { q: "Remember: TREE, LEAF, ROOT, BRANCH. What was the first word?", options: ["LEAF", "ROOT", "TREE", "BRANCH"], correct: 2 },
      { q: "Memorize: ★☆★☆. How many filled stars were there?", options: ["1", "2", "3", "4"], correct: 1 },
      { q: "Recall: 2 × 4 = 8. What operation was used?", options: ["Addition", "Subtraction", "Multiplication", "Division"], correct: 2 },
    ],
    medium: [
      { q: "Remember: 4, 8, 3, 9, 2. What was the third number?", options: ["4", "8", "3", "9"], correct: 2 },
      { q: "Memorize: ELEPHANT, GIRAFFE, ZEBRA, LION, TIGER. Which animal was 4th?", options: ["ZEBRA", "LION", "TIGER", "ELEPHANT"], correct: 1 },
      { q: "Recall: 🟡🔴🟢🔵🟣. What color was between green and purple?", options: ["Red", "Yellow", "Blue", "Green"], correct: 2 },
      { q: "Remember: BREAD, MILK, EGGS, CHEESE, BUTTER. What came after MILK?", options: ["BREAD", "EGGS", "CHEESE", "BUTTER"], correct: 1 },
      { q: "Memorize: 17, 34, 51, 68, 85. What was the middle number?", options: ["34", "51", "68", "17"], correct: 1 },
      { q: "Recall: PARIS, LONDON, TOKYO, SYDNEY, CAIRO. Which city was 3rd?", options: ["LONDON", "TOKYO", "SYDNEY", "PARIS"], correct: 1 },
      { q: "Remember: A1, B2, C3, D4, E5. What letter was paired with 4?", options: ["C", "D", "E", "B"], correct: 1 },
      { q: "Memorize: ♠♥♦♣♠. How many spades appeared?", options: ["1", "2", "3", "4"], correct: 1 },
      { q: "Recall: SUN, MOON, STAR, PLANET, COMET. What was before STAR?", options: ["SUN", "MOON", "PLANET", "COMET"], correct: 1 },
      { q: "Remember: 6, 12, 18, 24, 30. What would come next?", options: ["32", "34", "36", "38"], correct: 2 },
    ],
    hard: [
      { q: "Memorize: 7, 3, 9, 1, 5, 8, 2, 6. What was the 5th number?", options: ["1", "5", "8", "2"], correct: 1 },
      { q: "Remember: QUANTUM, NEBULA, COSMOS, PHOTON, QUASAR, PULSAR. Which word had 6 letters?", options: ["NEBULA", "COSMOS", "PHOTON", "QUASAR"], correct: 2 },
      { q: "Recall: 🟦🟨🟥🟩🟧🟪🟫. What color was 4th from the right?", options: ["Orange", "Green", "Red", "Yellow"], correct: 1 },
      { q: "Memorize: 13, 27, 41, 58, 79, 86, 92. What was the sum of the first and last?", options: ["100", "105", "110", "92"], correct: 1 },
      { q: "Remember: ALPHA, BETA, GAMMA, DELTA, EPSILON, ZETA. What comes 2 places after GAMMA?", options: ["DELTA", "EPSILON", "ZETA", "BETA"], correct: 1 },
      { q: "Recall: ★☆★★☆★☆☆. How many unfilled stars were there?", options: ["3", "4", "5", "6"], correct: 1 },
      { q: "Memorize: FIBONACCI: 1,1,2,3,5,8,13. What was the 6th term?", options: ["5", "8", "13", "21"], correct: 1 },
      { q: "Remember: K9M2T7P4. What letter was paired with 7?", options: ["K", "M", "T", "P"], correct: 2 },
      { q: "Recall the pattern: AABCCCDDDDE. How many D's were there?", options: ["3", "4", "5", "6"], correct: 1 },
      { q: "Memorize: 256, 128, 64, 32, 16, 8. What number was missing if 4 came after 8?", options: ["2", "1", "Nothing was missing", "0"], correct: 2 },
    ]
  }
};

// IQ Categories and their icons
// Developed by Big Sam
const categories = {
  art: { name: "Art Interpretation", icon: "🎨", color: "pink" },
  logic: { name: "Logic", icon: "🧩", color: "emerald" },
  math: { name: "Mathematics", icon: "🔢", color: "cyan" },
  spatial: { name: "Spatial", icon: "📐", color: "violet" },
  pattern: { name: "Patterns", icon: "🔄", color: "amber" },
  verbal: { name: "Verbal", icon: "📝", color: "rose" },
  memory: { name: "Memory", icon: "🧠", color: "indigo" }
};

// Difficulty weights
// Developed by Big Sam
const difficultyWeights = { easy: 1, medium: 1.5, hard: 2 };
const difficultyColors = { easy: "emerald", medium: "amber", hard: "rose" };
