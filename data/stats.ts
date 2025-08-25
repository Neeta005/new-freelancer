import { GraduationCap, FileText, AlertTriangle, Activity } from "lucide-react"
import type { StatCard } from "@/types/dashboard"

export const statsData: StatCard[] = [
  {
    title: "Total Students",
    value: "1,234",
    icon: GraduationCap,
    iconColor: "text-blue-primary",
    iconBg: "bg-blue-primary/20",
  },
  {
    title: "Question Papers",
    value: "56",
    icon: FileText,
    iconColor: "text-green-primary",
    iconBg: "bg-green-primary/20",
  },
  {
    title: "Violations Detected",
    value: "23",
    icon: AlertTriangle,
    iconColor: "text-green-primary",
    iconBg: "bg-green-primary/20",
  },
  {
    title: "Active Exams",
    value: "04",
    icon: Activity,
    iconColor: "text-blue-primary",
    iconBg: "bg-blue-primary/20",
  },
]
