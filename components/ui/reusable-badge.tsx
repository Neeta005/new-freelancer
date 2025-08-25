import React from "react"
import type { BadgeProps } from "@/types"
import { badgeColors } from "@/data/question-bank"

const Badge = React.memo<BadgeProps>(({ value, variant = "primary" }) => {
  const getColor = () => {
    switch (variant) {
      case "danger":
        return badgeColors.danger
      case "warning":
        return badgeColors.warning
      case "success":
        return badgeColors.success
      case "secondary":
        return badgeColors.secondary
      default:
        return badgeColors.purple
    }
  }

  return (
    <span
      className="inline-flex items-center justify-center w-8 h-6 text-xs font-bold text-white rounded-full"
      style={{ backgroundColor: getColor() }}
    >
      {value}
    </span>
  )
})

Badge.displayName = "Badge"
export { Badge }
