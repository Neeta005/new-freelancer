"use client"

import React from "react"
import { Eye, Edit3, Trash2 } from "lucide-react"
import type { Subtopic } from "@/types"
import { Badge } from "@/components/ui/reusable-badge"

interface SubtopicRowProps {
  subtopic: Subtopic
  onEyeClick: (topicName: string) => void
  onEditClick?: (topicName: string) => void
  onDeleteClick?: (topicId: string) => void
}

const SubtopicRow = React.memo<SubtopicRowProps>(({ subtopic, onEyeClick, onEditClick, onDeleteClick }) => (
  <div className="grid grid-cols-12 gap-6 items-center py-2 px-3 bg-card rounded-lg">
    <div className="col-span-3 flex items-center space-x-2">
      <div className="w-1.5 h-1.5 bg-destructive rounded-full flex-shrink-0 ml-1"></div>
      <span className="text-card-foreground font-medium text-sm">{subtopic.name}</span>
    </div>
    <div className="col-span-2"></div>
    <div className="col-span-2">
      <Badge value="01" variant="primary" />
    </div>
    <div className="col-span-2">
      <Badge value={subtopic.questions} variant="danger" />
    </div>
    <div className="col-span-3 flex items-center space-x-2">
      {onDeleteClick && (
        <button
          onClick={() => onDeleteClick(subtopic.id)}
          className="p-1.5 border border-orange-500 rounded-lg transition-colors hover:bg-orange-500/10"
        >
          <Trash2 className="w-3 h-3 text-orange-500" />
        </button>
      )}
      <button
        onClick={() => onEyeClick(subtopic.name)}
        className="p-1.5 border border-border hover:bg-muted rounded-lg transition-colors"
      >
        <Eye className="w-3 h-3 text-foreground" />
      </button>
      {onEditClick && (
        <button
          onClick={() => onEditClick(subtopic.name)}
          className="p-1.5 border border-red-500 hover:bg-muted rounded-lg transition-colors"
        >
          <Edit3 className="w-3 h-3 text-red-500" />
        </button>
      )}
    </div>
  </div>
))

SubtopicRow.displayName = "SubtopicRow"
export { SubtopicRow }
