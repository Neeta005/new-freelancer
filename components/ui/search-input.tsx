"use client"

import { Search } from "lucide-react"

interface SearchInputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  className?: string
}

export function SearchInput({ placeholder = "Search...", value, onChange, className = "" }: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-3 py-2 bg-muted text-card-foreground placeholder-muted-foreground border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  )
}
