"use client"

import type { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva("inline-flex items-center justify-center rounded-lg font-medium transition-colors", {
  variants: {
    variant: {
      primary: "bg-red-500 hover:bg-red-600 text-white",
      secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600",
      danger: "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

interface ActionButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function ActionButton({ children, onClick, variant, size, className }: ActionButtonProps) {
  return (
    <button onClick={onClick} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </button>
  )
}
