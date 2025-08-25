export interface Question {
  id: string
  sr: number
  question: string
  type: string
  difficulty: "Easy" | "Medium" | "Hard"
  marks: number
  status: "Draft" | "Published"
}

export const mockQuestions: Question[] = [
  {
    id: "1",
    sr: 1,
    question: "Which of the following best describes 'Visual Hierarchy' in UI design?",
    type: "MCQs",
    difficulty: "Easy",
    marks: 5,
    status: "Draft",
  },
  {
    id: "2",
    sr: 2,
    question: "What is the main purpose of wireframing?",
    type: "MCQs",
    difficulty: "Medium",
    marks: 5,
    status: "Published",
  },
  {
    id: "3",
    sr: 3,
    question: "Which principle focuses on keeping the design minimal and clutter-free?",
    type: "MCQs",
    difficulty: "Easy",
    marks: 5,
    status: "Published",
  },
  {
    id: "4",
    sr: 4,
    question: "Consistency in UI design improves user learning and reduces cognitive load....",
    type: "True / False",
    difficulty: "Hard",
    marks: 5,
    status: "Published",
  },
  {
    id: "5",
    sr: 5,
    question: "Explain the difference between UI and UX in one or two sentences.",
    type: "Descriptive",
    difficulty: "Easy",
    marks: 5,
    status: "Draft",
  },
  {
    id: "6",
    sr: 6,
    question: "Name three common grid systems used in UI design and why they are important.",
    type: "Descriptive",
    difficulty: "Hard",
    marks: 5,
    status: "Draft",
  },
  {
    id: "7",
    sr: 7,
    question: "In UI design, micro-interactions are small animations that enhance user feedback.",
    type: "True / False",
    difficulty: "Easy",
    marks: 5,
    status: "Published",
  },
  {
    id: "8",
    sr: 8,
    question: "Which of the following is NOT a UI design deliverable?",
    type: "MCQs",
    difficulty: "Medium",
    marks: 5,
    status: "Published",
  },
  {
    id: "9",
    sr: 9,
    question: "List two advantages of using component-based design in UI development.",
    type: "Descriptive",
    difficulty: "Hard",
    marks: 5,
    status: "Published",
  },
  {
    id: "10",
    sr: 10,
    question: "In UI color theory, complementary colors are...",
    type: "MCQs",
    difficulty: "Medium",
    marks: 5,
    status: "Published",
  },
]
