import type { ReactNode } from "react"

interface StatsCardProps {
  title: string
  value: string | number
  icon: ReactNode
  iconColor: string
  className?: string
}

export function StatsCard({ title, value, icon, iconColor, className = "" }: StatsCardProps) {
  return (
    <div className={`bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 ${className}`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${iconColor}`}>{icon}</div>
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-white text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  )
}
