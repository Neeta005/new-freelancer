// data/topperformers.ts

export interface Performer {
  rank: string
  name: string
  subject: string
  rate: string
}

export const topPerformers: Performer[] = [
  { rank: "01", name: "John Doe", subject: "Network Security", rate: "90%" },
  { rank: "02", name: "Jane Smith", subject: "Database Systems", rate: "88%" },
  { rank: "03", name: "Michael Lee", subject: "Operating Systems", rate: "85%" },
  { rank: "04", name: "Emily Davis", subject: "Artificial Intelligence", rate: "83%" },
  { rank: "05", name: "Daniel Brown", subject: "Software Engineering", rate: "80%" },
  { rank: "06", name: "Sophia Wilson", subject: "Computer Graphics", rate: "78%" },
  { rank: "07", name: "James Taylor", subject: "Data Structures", rate: "75%" },
]
