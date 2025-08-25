import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TextProps {
  children: ReactNode
  variant?: "heading" | "body" | "caption" | "label"
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  color?: "primary" | "secondary" | "muted" | "accent" | "destructive"
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export function Text({
  children,
  variant = "body",
  size = "base",
  weight = "normal",
  color = "primary",
  className,
  as: Component = "p",
  ...props
}: TextProps) {
  const baseClasses = "font-archivo"

  const variantClasses = {
    heading: "text-heading",
    body: "text-body",
    caption: "text-sm leading-normal",
    label: "text-sm font-medium leading-none",
  }

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  const colorClasses = {
    primary: "text-foreground",
    secondary: "text-secondary-foreground",
    muted: "text-muted-foreground",
    accent: "text-accent-foreground",
    destructive: "text-destructive-foreground",
  }

  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
