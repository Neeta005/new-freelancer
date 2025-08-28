// data/questionMeta.ts
import type { QuestionData } from "./questionData"

// status options
export const questionStatus: QuestionData["status"][] = ["Draft", "Published"]

// difficulty levels
export const questionDifficulties: QuestionData["difficulty"][] = ["Easy", "Medium", "Hard"]

// types
export const questionTypes: QuestionData["type"][] = ["MCQS", "True/False", "Descriptive"]

// topics
export const questionTopics: QuestionData["topic"][] = ["UI Design", "UX Design", "Interactive Design"]
