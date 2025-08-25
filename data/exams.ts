import type { Exam } from "@/types"

export const activeExams: Exam[] = [
  {
    id: "1",
    title: "Mid - Term: Network Security",
    date: "05 Aug, 2025",
    time: "Ends In 00:56",
    status: "Active",
    badgeClass: "bg-green-100 text-green-800",
    info: "10 Violations",
  },
  {
    id: "2",
    title: "Mid - Term: Network Security",
    date: "05 Aug, 2025",
    time: "Starts In 00:56",
    status: "Upcoming",
    badgeClass: "bg-blue-100 text-blue-800",
    info: "20 Enrolled",
  },
]

export const calendarDays: string[][] = [
  ["28", "29", "30", "31", "01", "02", "03"],
  ["04", "05", "06", "07", "08", "09", "10"],
  ["11", "12", "13", "14", "15", "16", "17"],
  ["18", "19", "20", "21", "22", "23", "24"],
  ["25", "26", "27", "28", "29", "30", "01"],
]

export const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]
