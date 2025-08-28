"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { topViolators } from "@/data/topviolators"
import { CircularProgress } from "@/components/ui/circular-progress" // <-- import your reusable component

export function TopViolatorsPage() {
  return (
    <div className="mx-auto sm:px-2 lg:px-2">
      <div className="bg-card rounded-xl p-3 sm:p-4 border border-gray-700">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-white text-xl sm:text-2xl font-semibold">Top Violators</h1>
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 text-sm sm:text-base">
              <ChevronLeft size={16} />
              Back
            </button>
          </Link>
        </div>

        {/* Violators List */}
        <div className="space-y-3">
          {topViolators.map((violator, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-3 border border-gray-600 flex items-center justify-between"
            >
              {/* Rank + Avatar + Info */}
              <div className="flex items-center space-x-4">
                <div className="text-white text-xl font-bold w-7">{violator.rank}</div>
                <Avatar className="size-9">
                  <AvatarImage src="/images/avtar.jpg" />
                  <AvatarFallback className="bg-orange-500 text-white text-xs font-semibold">
                    {violator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-semibold text-base">{violator.name}</h3>
                  <p className="text-gray-400 text-xs">{violator.subject}</p>
                </div>
              </div>

              {/* Violation Rate */}
              <div className="flex flex-col items-center">
                <CircularProgress
                  percentage={Number.parseInt(violator.rate)}
                  size={48}
                  strokeWidth={4}
                  color="hsl(var(--destructive))" // red tone
                  className="mb-1"
                />
                <span className="text-gray-400 text-xs">{violator.violations}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
