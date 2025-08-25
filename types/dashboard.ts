import type { LucideIcon } from "lucide-react"

export interface StatCard {
  title: string
  value: string
  icon: LucideIcon
  iconColor: string
  iconBg: string
}

export interface Performer {
  name: string
  subject: string
  rate: string
}

export interface Violator {
  name: string
  subject: string
  violations: string
  percentage: string
}

export interface ExamData {
  title: string
  status: string
  info: string
  badgeClass: string
}
