import type React from "react"
interface TagProps {
  children: React.ReactNode
  variant?: "design" | "security" | "default"
  className?: string
}

export function Tag({ children, variant = "default", className = "" }: TagProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "design":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "security":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getVariantStyles()} ${className}`}
    >
      {children}
    </span>
  )
}
