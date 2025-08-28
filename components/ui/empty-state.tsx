"use client"

import type React from "react"

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function EmptyState({ icon, title, description, className = "" }: EmptyStateProps) {
  return (
    <div className={`text-center flex flex-col items-center justify-center min-h-[300px] ${className}`}>
      <div className="mb-4">{icon}</div>
      <h4 className="text-foreground text-lg font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
