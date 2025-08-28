import Link from "next/link"
import { PerformerCard } from "@/components/ui/performer-card"
import { topPerformers } from "@/data/performers"

export function TopPerformers() {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-5 w-full h-full min-h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-white text-base md:text-lg font-semibold">Top Performers</h2>
        <Link
          href="/top-performers"
          className="text-orange-primary hover:text-orange-hover text-xs md:text-sm font-medium"
        >
          View All
        </Link>
      </div>

      {/* Performer List */}
      <div className="space-y-3 md:space-y-4 flex-1">
        {topPerformers.map((performer) => (
          <PerformerCard key={performer.id} {...performer} />
        ))}
      </div>
    </div>
  )
}
