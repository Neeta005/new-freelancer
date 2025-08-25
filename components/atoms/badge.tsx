import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "success" | "warning" | "error" | "info"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Badge({ children, variant = "default", size = "md", className, ...props }: BadgeProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium font-archivo"

  const variantClasses = {
    default: "bg-secondary text-secondary-foreground",
    success: "bg-green-500/20 text-green-400",
    warning: "bg-orange-500/20 text-orange-400",
    error: "bg-red-500/20 text-red-400",
    info: "bg-blue-500/20 text-blue-400",
  }

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  }

  return (
    <span className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
      {children}
    </span>
  )
}
