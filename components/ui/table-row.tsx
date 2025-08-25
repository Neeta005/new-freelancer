"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

const tableRowVariants = cva("grid gap-4 px-6 border-b last:border-b-0 transition-colors", {
  variants: {
    variant: {
      default: "border-border hover:bg-accent",
      dark: "border-gray-700 hover:bg-gray-700",
      modal: "border-dark-border hover:bg-dark-border",
    },
    size: {
      sm: "py-3",
      md: "py-4",
    },
    gap: {
      4: "gap-4",
      6: "gap-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    gap: 4,
  },
})

interface TableRowProps extends VariantProps<typeof tableRowVariants> {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function TableRow({ children, variant, size, gap, className, onClick }: TableRowProps) {
  return (
    <div className={cn(tableRowVariants({ variant, size, gap }), "grid-cols-12", className)} onClick={onClick}>
      {children}
    </div>
  )
}
