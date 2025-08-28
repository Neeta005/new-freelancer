"use client"

import { useState } from "react"
import { ExamLogsTable } from "../tables/exam-logs-table"
import { Search, Calendar, ChevronDown } from "lucide-react"
import { statsData, dateRangeOptions, DateRangeOption } from "@/data/exam-logs-data"

export function ExamLogsDashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState<boolean>(false)
  const [selectedDateRange, setSelectedDateRange] = useState<DateRangeOption>("Today")

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
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

      {/* Search + Filters */}
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
          {/* Search */}
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

          {/* Date Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
              className="flex items-center gap-2 bg-secondary border border-white rounded-lg px-4 py-2 text-white focus:outline-none"
            >
              <Calendar size={16} className="text-muted-foreground" />
              <span>{selectedDateRange}</span>
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
                    onClick={() => {
                      setSelectedDateRange(option)
                      setIsDateDropdownOpen(false)
                    }}
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
