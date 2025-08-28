"use client"

import type React from "react"

interface TabButtonProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  position?: "left" | "right" | "middle"
  className?: string
}

export function TabButton({ active, onClick, children, position = "middle", className = "" }: TabButtonProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "rounded-l-md"
      case "right":
        return "rounded-r-md"
      default:
        return ""
    }
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-sm font-medium transition-colors ${getPositionClasses()} ${
        active
          ? "text-white bg-gradient-to-r from-orange-500 to-pink-600"
          : "bg-muted text-muted-foreground hover:bg-accent"
      } ${className}`}
    >
      {children}
    </button>
  )
}
