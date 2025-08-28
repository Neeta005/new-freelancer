"use client"

interface UnifiedBadgeProps {
  value: string | number
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function UnifiedBadge({ value, variant = "primary", size = "md", className = "" }: UnifiedBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-purple-500 text-white"
      case "secondary":
        return "bg-gray-500 text-white"
      case "success":
        return "bg-green-500 text-white"
      case "warning":
        return "bg-orange-500 text-white"
      case "danger":
        return "bg-red-500 text-white"
      case "info":
        return "bg-blue-500 text-white"
      default:
        return "bg-purple-500 text-white"
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "w-6 h-5 text-xs"
      case "md":
        return "w-8 h-6 text-xs"
      case "lg":
        return "w-10 h-7 text-sm"
      default:
        return "w-8 h-6 text-xs"
    }
  }

  return (
    <span
      className={`inline-flex items-center justify-center font-bold rounded-full ${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      {value}
    </span>
  )
}
