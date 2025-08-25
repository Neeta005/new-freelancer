interface StatusBadgeProps {
  status: "published" | "unpublished" | "completed" | "in-progress"
  className?: string
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "published":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "unpublished":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "in-progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyles()} ${className}`}
    >
      {status === "published" && "Published"}
      {status === "unpublished" && "Unpublished"}
      {status === "completed" && "Completed"}
      {status === "in-progress" && "In Progress"}
    </span>
  )
}
