// ---------- Types ----------
export interface Option {
  id: string
  text: string
  isCorrect: boolean
}

export interface QuestionData {
  question: string
  topic: "UI Design" | "UX Design" | "Interactive Design"
  type: "MCQS" | "True/False" | "Descriptive"
  difficulty: "Easy" | "Medium" | "Hard"
  status: "Draft" | "Published"
  marks: string
  options: Option[]
}

// ---------- Sample Question ----------
export const sampleQuestion: QuestionData = {
  question: 'Which of the following best describes "Visual Hierarchy" in UI design?',
  topic: "UI Design",
  type: "MCQS",
  difficulty: "Easy",
  status: "Draft",
  marks: "05",
  options: [
    { id: "1", text: "Using random colors to make UI attractive", isCorrect: false },
    { id: "2", text: "Organizing elements to guide the user's attention", isCorrect: true },
    { id: "3", text: "Adding animations to every UI element", isCorrect: false },
    { id: "4", text: "Using only black and white colors", isCorrect: false },
  ],
}
