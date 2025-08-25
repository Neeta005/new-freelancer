import React from "react"
import type { TargetBadgeProps } from "@/types"

const TargetBadge = React.memo<TargetBadgeProps>(({ text, variant = "default" }) => {
  const getClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-primary-foreground"
      case "secondary":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getClasses()}`}>
      {text}
    </span>
  )
})

TargetBadge.displayName = "TargetBadge"
export { TargetBadge }
