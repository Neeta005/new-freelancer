import React from "react"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  iconColor: string
  iconBg: string
}


const StatCard = React.memo<StatCardProps>(({ title, value, icon: Icon, iconColor, iconBg }) => {
  return (
    <div className="bg-card rounded-lg p-4 border border-border">
      <div className="flex items-center gap-3">
        <div className={`size-10 ${iconBg} rounded-lg flex items-center justify-center`}>
          <Icon size={20} className={iconColor} />
        </div>
        <div>
          <p className="text-white text-sm">{title}</p>
          <p className="text-gray-300 text-lg">{value}</p>
        </div>
      </div>
    </div>
  )
})

StatCard.displayName = "StatCard"
export { StatCard }
