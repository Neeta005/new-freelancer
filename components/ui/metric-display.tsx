"use client"

import { CircularProgress } from "@/components/ui/circular-progress"

interface MetricDisplayProps {
  percentage: number
  label: string
  color?: string
  size?: number
  strokeWidth?: number
  className?: string
}

export function MetricDisplay({
  percentage,
  label,
  color = "hsl(var(--blue-primary))",
  size = 48,
  strokeWidth = 2.5,
  className = "",
}: MetricDisplayProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <CircularProgress percentage={percentage} size={size} strokeWidth={strokeWidth} color={color} className="mb-1" />
      <span className="text-gray-text text-[10px] md:text-xs">{label}</span>
    </div>
  )
}
