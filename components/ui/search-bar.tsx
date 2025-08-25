"use client"

import React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  variant?: "rounded" | "pill"
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
  className?: string
  disabled?: boolean
}

export const SearchBar = React.memo<SearchBarProps>(
  ({
    placeholder = "Search...",
    value,
    onChange,
    variant = "pill",
    size = "md",
    showIcon = true,
    className,
    disabled = false,
  }) => {
    const baseClasses =
      "w-full bg-secondary border border-border text-card-foreground placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors"

    const variantClasses = {
      rounded: "rounded-lg",
      pill: "rounded-full",
    }

    const sizeClasses = {
      sm: showIcon ? "pl-8 pr-3 py-1.5 text-sm" : "px-3 py-1.5 text-sm",
      md: showIcon ? "pl-10 pr-4 py-2.5" : "px-4 py-2.5",
      lg: showIcon ? "pl-12 pr-4 py-3 text-lg" : "px-4 py-3 text-lg",
    }

    const iconSizes = {
      sm: 14,
      md: 16,
      lg: 18,
    }

    const iconPositions = {
      sm: "left-2.5",
      md: "left-3",
      lg: "left-4",
    }

    return (
      <div className="relative">
        {showIcon && (
          <Search
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none",
              iconPositions[size],
            )}
            size={iconSizes[size]}
          />
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            disabled && "opacity-50 cursor-not-allowed",
            className,
          )}
        />
      </div>
    )
  },
)

SearchBar.displayName = "SearchBar"
