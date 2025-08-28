"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { activeExams, upcomingExams, completedExams } from "@/data/activeexam"

export function ActiveExamsPage() {
  const [activeTab, setActiveTab] = useState("Active")

  const tabs = ["Active", "Upcoming", "Completed"]

  const getCurrentExams = () => {
    switch (activeTab) {
      case "Active":
        return activeExams
      case "Upcoming":
        return upcomingExams
      case "Completed":
        return completedExams
      default:
        return activeExams
    }
  }

  const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-white text-green-600"     // white bg + green text
    case "Upcoming":
      return "bg-sky-100 text-blue-900"    // light sky bg + dark blue text
    case "Completed":
      return "bg-gray-300 text-gray-600"   // ✅ light gray bg + medium gray text
    default:
      return "bg-white text-gray-800"
  }
}


  return (
    <div className="mx-auto sm:px-2 lg:px-2">
      <div className="bg-card rounded-xl p-4 sm:p-6 border border-gray-700">
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

        <div className="flex space-x-0 mb-6 sm:mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-400 hover:text-white border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {getCurrentExams().map((exam, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-gray-700 flex items-center justify-between"
            >
              {/* Exam Info */}
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">{exam.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>{exam.date}</span>
                  <span>•</span>
                  <span>{exam.time}</span>
                </div>
              </div>

              {/* Status and Info with Vertical Line */}
              <div className="flex flex-col items-end space-y-2 border-l border-gray-600 pl-4">
                <span className={`px-4 py-1 rounded-md text-sm font-medium ${getStatusBadge(exam.status)}`}>
                  {exam.status}
                </span>
                <div className="text-gray-400 text-sm">{exam.info}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
