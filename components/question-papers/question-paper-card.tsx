"use client"

import { useState } from "react"
import { StatusBadge } from "../ui/status-badge"
import { Tag } from "../ui/tag"
import { Edit, Trash2 } from "lucide-react"

interface QuestionPaperCardProps {
  id: string
  title: string
  tags: Array<{ name: string; variant: "design" | "security" | "default" }>
  questionCount: number
  marks: number
  targetAudience: string
  isPublished: boolean
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  onTogglePublish?: (id: string, published: boolean) => void
  onViewQuestions?: (id: string) => void
}

export function QuestionPaperCard({
  id,
  title,
  tags,
  questionCount,
  marks,
  targetAudience,
  isPublished,
  onEdit,
  onDelete,
  onTogglePublish,
  onViewQuestions,
}: QuestionPaperCardProps) {
  const [published, setPublished] = useState(isPublished)

  const handleTogglePublish = () => {
    const newPublished = !published
    setPublished(newPublished)
    onTogglePublish?.(id, newPublished)
  }

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-600 p-3 hover:border-slate-500 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <StatusBadge status={published ? "published" : "unpublished"} />
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={published}
              onChange={handleTogglePublish}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-slate-600 rounded-full peer-focus:outline-none peer peer-checked:bg-green-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit?.(id)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
          >
            <Edit size={15} />
          </button>
          <button
            onClick={() => onDelete?.(id)}
            className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold mb-4 truncate">{title}</h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag, index) => (
          <Tag key={index} variant={tag.variant} className="text-sm px-2 py-1">
            {tag.name}
          </Tag>
        ))}
      </div>

      {/* Stats */}
      <div className="space-y-1.5 mb-4">
        <div className="text-slate-400 text-center">
          <span className="text-md">{questionCount}</span>
          <span className="text-slate-400 ml-1 text-sm">Question</span>
        </div>
        <div className="text-slate-400 text-center">
          <span className="text-md">{marks}</span>
          <span className="text-slate-400 ml-1 text-sm">Marks</span>
        </div>
      </div>

      {/* Target Audience */}
      <p className="text-slate-400 text-center mb-4 text-sm truncate">{targetAudience}</p>

      {/* Action Button */}
      <button
        onClick={() => onViewQuestions?.(id)}
        className="w-full text-white py-2.5 px-5 rounded font-semibold transition-colors text-base bg-gradient-to-r from-orange-600 to-rose-600 hover:from-rose-600 hover:to-orange-600"
      >
        View Questions
      </button>
    </div>
  )
}
