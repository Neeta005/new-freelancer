"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

export function GradientButton({
  children,
  onClick,
  type = "button",
  size = "md",
  className = "",
  disabled = false,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm h-8",
    md: "px-6 py-2 text-sm h-10",
    lg: "px-8 py-3 text-base h-12",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  )
}
