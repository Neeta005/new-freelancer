import type { Performer, Violator } from "@/types"

export const topPerformers: Performer[] = [
  { id: "1", name: "John Doe", subject: "Network Security", rate: "90%" },
  { id: "2", name: "Jane Smith", subject: "Data Structures", rate: "85%" },
  { id: "3", name: "Alex Johnson", subject: "Algorithms", rate: "78%" },
]

export const topViolators: Violator[] = [
  { id: "1", name: "John Doe", subject: "Network Security", violations: 15 },
  { id: "2", name: "Jane Smith", subject: "Data Structures", violations: 12 },
  { id: "3", name: "Alex Johnson", subject: "Algorithms", violations: 8 },
]
