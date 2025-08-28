import Link from "next/link"
import { ViolatorCard } from "@/components/ui/violator-card"
import { topViolators } from "@/data/performers"

export function TopViolators() {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-5 w-full h-full min-h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-white text-base md:text-lg font-semibold">Top Violators</h2>
        <Link
          href="/top-violators"
          className="text-orange-primary hover:text-orange-hover text-xs md:text-sm font-medium"
        >
          View All
        </Link>
      </div>

      {/* Violator List */}
      <div className="space-y-3 md:space-y-4 flex-1">
        {topViolators?.map((violator) => (
          <ViolatorCard key={violator.id} {...violator} />
        ))}
      </div>
    </div>
  )
}
