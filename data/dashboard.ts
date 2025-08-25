import type { DashboardStat } from "@/types"
import { GraduationCap, FileText, AlertTriangle, Activity } from "lucide-react"

export const dashboardStats: DashboardStat[] = [
  {
    title: "Total Students",
    value: "125",
    icon: GraduationCap,
    iconColor: "text-purple-primary",
    iconBg: "bg-purple-primary/20",
  },
  {
    title: "Exams Conducted",
    value: "12",
    icon: FileText,
    iconColor: "text-orange-primary",
    iconBg: "bg-orange-primary/20",
  },
  {
    title: "Violations Detected",
    value: "58",
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
