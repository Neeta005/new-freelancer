"use client"

import type React from "react"

interface FormFieldProps {
  label: string
  children: React.ReactNode
  className?: string
  required?: boolean
}

export function FormField({ label, children, className = "", required = false }: FormFieldProps) {
  return (
    <div className={className}>
      <label className="block text-card-foreground text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}
