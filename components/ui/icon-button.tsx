"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface IconButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

export function IconButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: IconButtonProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const variantClasses = {
    primary: "bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white",
    secondary: "bg-muted hover:bg-accent text-foreground",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  )
}
