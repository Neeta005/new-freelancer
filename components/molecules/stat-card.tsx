import { cn } from "@/lib/utils"
import { Text } from "@/components/atoms/text"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  className?: string
}

export function StatCard({
  title,
  value,
  icon: Icon,
  iconColor = "text-primary",
  iconBg = "bg-primary/20",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn("bg-card rounded-lg p-4 border border-border flex items-center gap-3 shadow-tertiary", className)}
    >
      <div className={cn("w-10 h-10 flex items-center justify-center rounded-full", iconBg)}>
        <Icon className={cn("w-5 h-5", iconColor)} />
      </div>

      <div className="flex flex-col">
        <Text variant="caption" color="muted" className="mb-1">
          {title}
        </Text>
        <Text variant="heading" size="lg" weight="semibold">
          {value}
        </Text>
      </div>
    </div>
  )
}
