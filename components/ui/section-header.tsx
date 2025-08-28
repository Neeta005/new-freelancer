"use client"

import Link from "next/link"

interface SectionHeaderProps {
  title: string
  viewAllHref?: string
  viewAllText?: string
  className?: string
}

export function SectionHeader({ title, viewAllHref, viewAllText = "View All", className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <h2 className="text-white text-lg sm:text-xl font-semibold">{title}</h2>
      {viewAllHref && (
        <Link href={viewAllHref} className="text-red-primary hover:text-red-300 text-sm font-medium">
          {viewAllText}
        </Link>
      )}
    </div>
  )
}
