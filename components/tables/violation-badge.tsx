"use client"

interface ViolationBadgeProps {
  violations: number
  className?: string
}

export function ViolationBadge({ violations, className = "" }: ViolationBadgeProps) {
  const getViolationColor = (violations: number) => {
    if (violations <= 3) return "bg-green-500/20 text-green-400"
    if (violations <= 7) return "bg-orange-500/20 text-orange-400"
    return "bg-red-500/20 text-red-400"
  }

  return (
    <span
      className={`inline-flex items-center justify-center w-9 h-5 rounded-full text-[11px] font-medium ${getViolationColor(violations)} ${className}`}
    >
      {violations < 10 ? `0${violations}` : violations}
    </span>
  )
}
