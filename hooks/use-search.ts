"use client"

import { useState, useMemo } from "react"

interface UseSearchProps<T> {
  data: T[]
  searchFields: (keyof T)[]
  initialSearchTerm?: string
}

export function useSearch<T>({ data, searchFields, initialSearchTerm = "" }: UseSearchProps<T>) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data

    const lowercaseSearch = searchTerm.toLowerCase()

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field]
        if (typeof value === "string") {
          return value.toLowerCase().includes(lowercaseSearch)
        }
        if (typeof value === "number") {
          return value.toString().includes(lowercaseSearch)
        }
        return false
      }),
    )
  }, [data, searchFields, searchTerm])

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  }
}
