"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface BaseCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function BaseCard({ children, className, onClick }: BaseCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-lg border border-border transition-colors",
        onClick && "cursor-pointer hover:bg-muted/50",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
