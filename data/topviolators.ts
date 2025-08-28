// data/topviolators.ts

export interface Violator {
  rank: string
  name: string
  subject: string
  rate: string
  violations: string
}

export const topViolators: Violator[] = [
  { rank: "01", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
  { rank: "02", name: "Jane Smith", subject: "Database Systems", rate: "22%", violations: "15 Violations" },
  { rank: "03", name: "Michael Lee", subject: "Operating Systems", rate: "20%", violations: "13 Violations" },
  { rank: "04", name: "Emily Davis", subject: "Artificial Intelligence", rate: "18%", violations: "11 Violations" },
  { rank: "05", name: "Daniel Brown", subject: "Software Engineering", rate: "16%", violations: "9 Violations" },
  { rank: "06", name: "Sophia Wilson", subject: "Computer Graphics", rate: "14%", violations: "7 Violations" },
  { rank: "07", name: "James Taylor", subject: "Data Structures", rate: "12%", violations: "5 Violations" },
]
