"use client"

import { File, X } from "lucide-react"

interface FileItemProps {
  name: string
  size?: string
  onRemove?: () => void
  className?: string
}

export function FileItem({ name, size, onRemove, className = "" }: FileItemProps) {
  return (
    <div className={`flex items-center justify-between bg-muted p-3 rounded-md ${className}`}>
      <div className="flex items-center gap-2">
        <File className="w-4 h-4 text-muted-foreground" />
        <span className="text-foreground text-sm">{name}</span>
        {size && <span className="text-muted-foreground text-xs">({size})</span>}
      </div>
      {onRemove && (
        <button onClick={onRemove} className="text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
