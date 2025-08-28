import { Users, AlertTriangle, Clock, Eye, LucideIcon } from "lucide-react"

// Type for each stat card
export interface StatData {
  icon: LucideIcon
  bgColor: string
  iconColor: string
  label: string
  value: string
}

export const statsData: StatData[] = [
  {
    icon: Users,
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    label: "Total Students Attempted",
    value: "43",
  },
  {
    icon: AlertTriangle,
    bgColor: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    label: "Total Violations",
    value: "5",
  },
  {
    icon: Clock,
    bgColor: "bg-green-500/20",
    iconColor: "text-green-400",
    label: "Average Duration",
    value: "1hr 55 min",
  },
  {
    icon: Eye,
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    label: "Common Violation",
    value: "1hr 55 min",
  },
]

// Date range options with literal types
export const dateRangeOptions = [
  "Today",
  "This Week",
  "Last 14 Days",
  "This Month",
  "Custom Range",
] as const

// Union type: "Today" | "This Week" | "Last 14 Days" | ...
export type DateRangeOption = typeof dateRangeOptions[number]
