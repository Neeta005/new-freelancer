import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function TopViolatorsPage() {
  const violators = [
    { rank: "01", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
    { rank: "02", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
    { rank: "03", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
    { rank: "04", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
    { rank: "05", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
    { rank: "06", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
    { rank: "07", name: "John Doe", subject: "Network Security", rate: "25%", violations: "18 Violations" },
  ]

  return (
    <div className=" mx-auto  sm:px-2 lg:px-2 ">
      <div className="bg-gray-900 rounded-xl p-3 sm:p-4 border border-gray-700">
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
          {violators.map((violator, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-3 border border-gray-600 flex items-center justify-between"
            >
              {/* Rank + Avatar + Info */}
              <div className="flex items-center space-x-4">
                <div className="text-white text-xl font-bold w-7">{violator.rank}</div>
                <Avatar className="size-9">
                  <AvatarImage src="/images/avtar.jpg" />
                  <AvatarFallback className="bg-orange-500 text-white text-xs font-semibold">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-semibold text-base">{violator.name}</h3>
                  <p className="text-gray-400 text-xs">{violator.subject}</p>
                </div>
              </div>

              {/* Violation Rate */}
              <div className="flex flex-col items-center">
                <div className="relative size-12 mb-1">
                  <svg className="size-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="2"
                      strokeDasharray={`${Number.parseInt(violator.rate)}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-red-400 text-base font-bold">{violator.rate}</span>
                  </div>
                </div>
                <span className="text-gray-400 text-xs">{violator.violations}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
