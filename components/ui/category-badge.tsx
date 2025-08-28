"use client"

interface CategoryBadgeProps {
  category: string
  className?: string
}

export function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  const getCategoryStyles = () => {
    const normalizedCategory = category.toLowerCase()

    switch (normalizedCategory) {
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

  return (
    <span
      className={`inline-flex justify-center items-center px-3 py-1 rounded-sm text-sm font-medium ${getCategoryStyles()} ${className}`}
    >
      {category}
    </span>
  )
}
