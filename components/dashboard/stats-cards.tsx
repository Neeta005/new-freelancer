import { StatCard } from "@/components/ui/stat-card"
import { dashboardStats } from "@/data/dashboard"

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {dashboardStats?.map(({ iconColor, ...stat }, index) => (
        <StatCard key={index} iconColor={iconColor} {...stat} />
      ))}
    </div>
  )
}
