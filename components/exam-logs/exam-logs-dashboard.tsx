"use client"

import { useState } from "react"
import { ExamLogsTable } from "../tables/exam-logs-table"
import { Users, AlertTriangle, Clock, Eye, Search, Calendar, ChevronDown } from "lucide-react"

const statsData = [
  {
    icon: Users,
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    label: "Total Students Attempted",
    value: "43",
  },
  {
    icon: AlertTriangle,
    bgColor: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    label: "Total Violations",
    value: "5",
  },
  {
    icon: Clock,
    bgColor: "bg-green-500/20",
    iconColor: "text-green-400",
    label: "Average Duration",
    value: "1hr 55 min",
  },
  {
    icon: Eye,
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    label: "Common Violation",
    value: "1hr 55 min",
  },
]

const dateRangeOptions = ["Today", "This Week", "Last 14 Days", "This Month", "Custom Range"]

export function ExamLogsDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className={`size-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <IconComponent size={20} className={stat.iconColor} />
                </div>
                <div>
                  <p className="text-white text-sm">{stat.label}</p>
                  <p className="text-gray-300 text-lg">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-white">Student Performance Overview</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-secondary border border-border rounded-lg px-4 py-2 pr-10 text-white focus:outline-none focus:border-ring">
                <option>Mid-Term: Network Security</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-white rounded-full text-white placeholder-muted-foreground focus:outline-none focus:border-white"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
              className="flex items-center gap-2 bg-secondary border border-white rounded-lg px-4 py-2 text-white focus:outline-none"
            >
              <Calendar size={16} className="text-muted-foreground" />
              <span>Date Range</span>
              <ChevronDown size={16} className="text-muted-foreground ml-1" />
            </button>

            {isDateDropdownOpen && (
              <div className="absolute right-0 mt-1 w-44 bg-secondary border border-white rounded-lg shadow-lg z-10">
                {dateRangeOptions.map((option, index) => (
                  <button
                    key={option}
                    className={`block w-full text-left px-4 py-1.5 text-sm text-white hover:bg-muted transition-colors ${
                      index === 0 ? "rounded-t-lg" : index === dateRangeOptions.length - 1 ? "rounded-b-lg" : ""
                    }`}
                    onClick={() => setIsDateDropdownOpen(false)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <ExamLogsTable searchTerm={searchTerm} />
      </div>
    </div>
  )
}
