"use client"

import React from "react"
import { Filter, ChevronDown } from "lucide-react"
import { SearchBar } from "./search-bar"
import { cn } from "@/lib/utils"

interface FilterOption {
  label: string
  value: string
}

interface SearchWithFilterProps {
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  filterOptions?: FilterOption[]
  selectedFilter?: string
  onFilterChange?: (value: string) => void
  filterLabel?: string
  searchVariant?: "rounded" | "pill"
  searchSize?: "sm" | "md" | "lg"
  className?: string
}

export const SearchWithFilter = React.memo<SearchWithFilterProps>(
  ({
    searchValue,
    onSearchChange,
    searchPlaceholder = "Search...",
    filterOptions = [],
    selectedFilter,
    onFilterChange,
    filterLabel = "Filter By",
    searchVariant = "pill",
    searchSize = "md",
    className,
  }) => {
    return (
      <div className={cn("flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", className)}>
        <SearchBar
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onSearchChange}
          variant={searchVariant}
          size={searchSize}
          className="w-full sm:w-64"
        />

        {filterOptions.length > 0 && onFilterChange && (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">{filterLabel}</span>
            <div className="relative">
              <select
                value={selectedFilter || ""}
                onChange={(e) => onFilterChange(e.target.value)}
                className="appearance-none bg-secondary border border-border rounded-lg px-4 py-2 pr-10 text-card-foreground focus:outline-none focus:border-ring"
              >
                <option value="">{filterLabel}</option>
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
                size={16}
              />
            </div>
          </div>
        )}

        {filterOptions.length === 0 && (
          <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-3 py-2 cursor-pointer hover:bg-accent transition-colors">
            <Filter className="size-4 text-muted-foreground" />
            <span className="text-card-foreground text-sm font-medium">{filterLabel}</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </div>
        )}
      </div>
    )
  },
)

SearchWithFilter.displayName = "SearchWithFilter"
