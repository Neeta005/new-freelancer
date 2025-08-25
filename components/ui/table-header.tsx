import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tableHeaderVariants = cva("grid gap-4 px-6 border-b font-semibold text-sm", {
  variants: {
    variant: {
      default: "bg-card border-border text-muted-foreground",
      dark: "bg-gray-900 border-gray-700 text-gray-300",
      modal: "bg-dark-card border-dark-border text-gray-text",
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

interface TableColumn {
  span: number
  label: string
  className?: string
}

interface TableHeaderProps extends VariantProps<typeof tableHeaderVariants> {
  columns: TableColumn[]
  className?: string
}

export function TableHeader({ columns, variant, size, gap, className }: TableHeaderProps) {
  return (
    <div className={cn(tableHeaderVariants({ variant, size, gap }), "grid-cols-12", className)}>
      {columns.map((column, index) => (
        <div key={index} className={cn(`col-span-${column.span}`, column.className)}>
          {column.label}
        </div>
      ))}
    </div>
  )
}
