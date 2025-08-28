"use client"

import type React from "react"

export interface Column<T> {
  key: keyof T | string
  header: string
  render?: (value: any, row: T, index: number) => React.ReactNode
  className?: string
  headerClassName?: string
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T) => void
  className?: string
  headerClassName?: string
  rowClassName?: string | ((row: T, index: number) => string)
  emptyMessage?: string
}

export function DataTable<T>({
  data,
  columns,
  onRowClick,
  className = "",
  headerClassName = "",
  rowClassName = "",
  emptyMessage = "No data available",
}: DataTableProps<T>) {
  const getRowClassName = (row: T, index: number) => {
    if (typeof rowClassName === "function") {
      return rowClassName(row, index)
    }
    return rowClassName
  }

  if (data.length === 0) {
    return (
      <div className={`rounded-lg border border-border bg-card p-8 text-center ${className}`}>
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={`overflow-x-auto rounded-lg ${className}`}>
      <table className="w-full">
        <thead>
          <tr className={`border-b border-border ${headerClassName}`}>
            {columns.map((column, index) => (
              <th key={index} className={`text-left py-3 px-4 font-medium ${column.headerClassName || ""}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-border/30 transition-colors hover:bg-muted/50 ${
                onRowClick ? "cursor-pointer" : ""
              } ${getRowClassName(row, index)}`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={`py-3 px-4 ${column.className || ""}`}>
                  {column.render
                    ? column.render(
                        typeof column.key === "string" && column.key.includes(".")
                          ? column.key.split(".").reduce((obj, key) => obj?.[key], row as any)
                          : (row as any)[column.key],
                        row,
                        index,
                      )
                    : typeof column.key === "string" && column.key.includes(".")
                      ? column.key.split(".").reduce((obj, key) => obj?.[key], row as any)
                      : (row as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
