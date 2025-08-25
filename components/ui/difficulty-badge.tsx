import React from "react"

interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard"
}

const DifficultyBadge = React.memo<DifficultyBadgeProps>(({ difficulty }) => {
  const getClasses = () => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-400"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400"
      case "Hard":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${getClasses()}`}>{difficulty}</span>
})

DifficultyBadge.displayName = "DifficultyBadge"
export { DifficultyBadge }
