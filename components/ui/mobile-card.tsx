"use client"

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { CategoryBadge } from "@/components/ui/category-badge"

interface MobileCardProps {
  title: string
  category: string
  description: string
  onAction?: () => void
  className?: string
}

export function MobileCard({ title, category, description, onAction, className = "" }: MobileCardProps) {
  return (
    <div
      className={`bg-gray-800 rounded-lg p-4 border border-gray-700 hover:bg-gray-700 transition-colors ${className}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-base sm:text-lg mb-1">{title}</h3>
          <CategoryBadge category={category} />
        </div>
        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-600 p-2" onClick={onAction}>
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
      <div className="text-gray-300 text-sm">
        <span className="text-gray-400">Target Audience:</span> {description}
      </div>
    </div>
  )
}
