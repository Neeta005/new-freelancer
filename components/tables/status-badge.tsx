"use client"

export type StatusType =
  | "completed"
  | "in-progress"
  | "draft"
  | "published"
  | "design"
  | "development"
  | "security"
  | string

interface StatusBadgeProps {
  status: string
  type?: "exam" | "question" | "category" | "custom"
  className?: string
}

export function StatusBadge({ status, type = "custom", className = "" }: StatusBadgeProps) {
  const getStatusStyles = () => {
    const normalizedStatus = status.toLowerCase()

    // Exam status styles
    if (type === "exam") {
      switch (normalizedStatus) {
        case "completed":
          return "bg-green-500/20 text-green-400"
        case "in progress":
        case "in-progress":
          return "bg-blue-500/20 text-blue-400"
        default:
          return "bg-gray-500/20 text-gray-400"
      }
    }

    // Question status styles
    if (type === "question") {
      switch (normalizedStatus) {
        case "draft":
          return "bg-purple-500/20 text-purple-400"
        case "published":
          return "bg-green-500/20 text-green-400"
        default:
          return "bg-gray-500/20 text-gray-400"
      }
    }

    // Category styles
    if (type === "category") {
      switch (normalizedStatus) {
        case "design":
          return "bg-green-900/40 text-green-400"
        case "development":
          return "bg-blue-900/40 text-blue-400"
        case "security":
          return "bg-orange-900/40 text-orange-400"
        default:
          return "bg-gray-700 text-gray-300"
      }
    }

    // Default/custom styles
    return "bg-muted text-muted-foreground"
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles()} ${className}`}
    >
      {status}
    </span>
  )
}
