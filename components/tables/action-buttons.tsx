"use client"

import type React from "react"
import { Eye, Edit3, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface ActionButton {
  type: "view" | "edit" | "delete" | "more" | "custom"
  onClick: () => void
  icon?: React.ReactNode
  label?: string
  className?: string
  disabled?: boolean
}

interface ActionButtonsProps {
  actions: ActionButton[]
  className?: string
}

export function ActionButtons({ actions, className = "" }: ActionButtonsProps) {
  const getButtonIcon = (action: ActionButton) => {
    if (action.icon) return action.icon

    switch (action.type) {
      case "view":
        return <Eye size={14} />
      case "edit":
        return <Edit3 size={14} />
      case "delete":
        return <Trash2 size={14} />
      case "more":
        return <MoreHorizontal size={14} />
      default:
        return null
    }
  }

  const getButtonStyles = (action: ActionButton) => {
    if (action.className) return action.className

    switch (action.type) {
      case "view":
        return "text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
      case "edit":
        return "text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
      case "delete":
        return "text-red-400 hover:text-red-300 hover:bg-red-500/10"
      case "more":
        return "text-muted-foreground hover:text-foreground hover:bg-muted"
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-muted"
    }
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          onClick={action.onClick}
          disabled={action.disabled}
          className={`p-2 h-8 w-8 transition-colors ${getButtonStyles(action)}`}
          title={action.label}
        >
          {getButtonIcon(action)}
        </Button>
      ))}
    </div>
  )
}

export function ViewLogsButton({ onClick, className = "" }: { onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors ${className}`}
    >
      <Eye size={14} />
      <span className="text-sm font-medium underline underline-offset-2 decoration-orange-400">View Logs</span>
    </button>
  )
}
