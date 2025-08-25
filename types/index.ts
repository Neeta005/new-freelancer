export interface Subtopic {
  id: string
  name: string
  questions: number
}

export interface Subject {
  id: string
  name: string
  targetAudience: string
  topicCount: number
  questionCount: number
  subtopics: Subtopic[]
}

export interface QuestionBankSection {
  id: string
  subject: Subject
  isExpanded: boolean
}

export interface ImportModalState {
  isImportModalOpen: boolean
  isMappedModalOpen: boolean
  selectedFileType: "xls" | "csv" | "google-sheet" | null
}

export interface QuestionSectionState {
  showQuestionSection: boolean
  selectedTopic: string
}

export type FileType = "xls" | "csv" | "google-sheet"

// Pagination types
export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  itemsPerPage?: number
  totalItems?: number
}

// Badge types
export interface BadgeProps {
  value: string | number
  variant?: "primary" | "secondary" | "danger" | "warning" | "success"
}

export interface TargetBadgeProps {
  text: string
  variant?: "default" | "primary" | "secondary"
}

export interface Exam {
  id: string
  title: string
  date: string
  time: string
  status: "Active" | "Upcoming" | "Completed"
  badgeClass: string
  info: string
}

export interface Performer {
  id: string
  name: string
  subject: string
  rate: string
  avatar?: string
}

export interface Violator {
  id: string
  name: string
  subject: string
  violations: number
  avatar?: string
}

export interface DashboardStat {
  title: string
  value: string
  icon: any
  iconColor: string
  iconBg: string
}

export interface StudentExamLog {
  id: string
  name: string
  status: "completed" | "in-progress"
  duration: string
  violations: number
  focusScore: number
  seatedTime: number
}

export interface MenuItem {
  id: string
  name: string
  icon: string
  href: string
  isActive?: boolean
}

export interface QuestionPaper {
  id: string
  title: string
  tags: Array<{
    name: string
    variant: "design" | "security" | "development"
  }>
  questionCount: number
  marks: number
  targetAudience: string
  isPublished: boolean
}

export interface SyllabusItem {
  id: string
  subject: string
  category: "Design" | "Development" | "Security"
  targetAudience: string
}

export interface CalendarDay {
  day: string
  isSpecial?: boolean
  isGrayedOut?: boolean
}

export interface Question {
  id: string
  sr: number
  question: string
  type: string
  difficulty: "Easy" | "Medium" | "Hard"
  marks: number
  status: "Draft" | "Published"
}
