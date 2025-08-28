"use client"

import { Plus, Minus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { IconButton } from "@/components/ui/icon-button"
import { FormField } from "@/components/ui/form-field"

interface LessonRowProps {
  value: string
  onValueChange: (value: string) => void
  onAddLesson: () => void
  onRemoveLesson: () => void
  canRemove?: boolean
}

export function LessonRow({ value, onValueChange, onAddLesson, onRemoveLesson, canRemove = true }: LessonRowProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <FormField label="Lesson / Unit">
          <Input
            placeholder="Type here..."
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            className="flex-1 bg-muted border border-border text-foreground placeholder:text-muted-foreground rounded-full h-10 px-4"
          />
        </FormField>
      </div>
      <div className="flex gap-2">
        <IconButton onClick={onAddLesson} size="md">
          <Plus className="w-4 h-4" />
        </IconButton>
        {canRemove && (
          <IconButton onClick={onRemoveLesson} variant="secondary" size="md">
            <Minus className="w-4 h-4" />
          </IconButton>
        )}
      </div>
    </div>
  )
}
