"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"

export function ActiveExamsPage() {
  const [activeTab, setActiveTab] = useState("Active")

  const exams = [
    {
      title: "Mid - Term: Network Security",
      date: "05 Aug, 2025",
      endTime: "Ends in 00:56",
      violations: "10 Violations",
      status: "Active",
    },
    {
      title: "Mid - Term: Network Security",
      date: "05 Aug, 2025",
      endTime: "Ends in 00:56",
      violations: "10 Violations",
      status: "Active",
    },
    {
      title: "Mid - Term: Network Security",
      date: "05 Aug, 2025",
      endTime: "Ends in 00:56",
      violations: "10 Violations",
      status: "Active",
    },
    {
      title: "Mid - Term: Network Security",
      date: "05 Aug, 2025",
      endTime: "Ends in 00:56",
      violations: "10 Violations",
      status: "Active",
    },
    {
      title: "Mid - Term: Network Security",
      date: "05 Aug, 2025",
      endTime: "Ends in 00:56",
      violations: "10 Violations",
      status: "Active",
    },
    {
      title: "Mid - Term: Network Security",
      date: "05 Aug, 2025",
      endTime: "Ends in 00:56",
      violations: "10 Violations",
      status: "Active",
    },
  ]

  const tabs = ["Active", "Upcoming", "Completed"]

  return (
    <div className=" mx-auto  sm:px-2 lg:px-2 ">
      <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-700">
        {/* Header with Back Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-white text-xl sm:text-2xl font-semibold">Active / Upcoming Exams</h1>
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 whitespace-nowrap">
              <ChevronLeft size={16} />
              Back
            </button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-8 mb-6 sm:mb-8 border border-gray-700 bg-gray-800 rounded-lg py-3 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mb-2 sm:mb-0 pb-2 px-4 font-medium transition-colors rounded-md whitespace-nowrap ${
                activeTab === tab ? "bg-gray-800 text-red-500" : "text-gray-400 hover:text-white bg-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Exams List */}
        <div className="space-y-4">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0"
            >
              {/* Exam Info */}
              <div className="flex-1">
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2 break-words">{exam.title}</h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-400 text-xs sm:text-sm">
                  <span>{exam.date}</span>
                  <span>•</span>
                  <span>{exam.endTime}</span>
                </div>
              </div>

              {/* Status and Violations */}
              <div className="flex items-center space-x-6">
                {/* Light white vertical line */}
                <div className="hidden sm:block w-0.5 bg-white/20 rounded-full h-12" />

                {/* Violations and Status stacked vertically */}
                <div className="flex flex-col justify-center space-y-1">
                  <div className="text-gray-400 text-xs sm:text-sm">{exam.violations}</div>
                  <div className="bg-white text-green-600 px-4 py-1 rounded-md text-xs sm:text-sm font-medium text-center whitespace-nowrap">
                    {exam.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
