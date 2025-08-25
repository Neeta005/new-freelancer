"use client"

import { useState } from "react"
import { Clock, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { mockStudentData } from "@/data/exam-logs"
import type { StudentExamLog } from "@/types"

export function ExamLogsTable() {
  const [currentPage, setCurrentPage] = useState(1)

  const handleViewLogs = (studentId: string) => {
    // View logs logic would go here
  }

  const getViolationColor = (violations: number) => {
    if (violations <= 3) return "bg-green-500/20 text-green-400"
    if (violations <= 7) return "bg-orange-500/20 text-orange-400"
    return "bg-red-500/20 text-red-400"
  }

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
          Completed
        </span>
      )
    }
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
        In Progress
      </span>
    )
  }

  const CircularProgress = ({ percentage, color }: { percentage: number; color: string }) => {
    const radius = 16
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative size-10 flex items-center justify-center">
        <svg className="size-10 transform -rotate-90" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-slate-700"
          />
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <span className="absolute text-xs font-medium text-white">{percentage}%</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-black">
              <th className="text-left py-2 px-4 text-slate-300 font-medium">Student</th>
              <th className="text-left py-2 px-4 text-slate-300 font-medium">Status</th>
              <th className="text-left py-2 px-4 text-slate-300 font-medium">Duration</th>
              <th className="text-left py-2 px-4 text-slate-300 font-medium">Violations</th>
              <th className="text-left py-2 px-4 text-slate-300 font-medium">Focus Score</th>
              <th className="text-left py-2 px-4 text-slate-300 font-medium">Seated Time</th>
              <th className="text-left py-2 px-4 text-slate-300 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockStudentData?.map((student: StudentExamLog) => (
              <tr key={student.id} className="border-b border-border/30 bg-card hover:bg-muted">
                <td className="py-2 px-4 text-white font-medium">{student.name}</td>
                <td className="py-2 px-4">{getStatusBadge(student.status)}</td>
                <td className="py-2 px-4 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-slate-400" />
                    {student.duration}
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`inline-flex items-center justify-center size-9 h-5 rounded-full text-[11px] font-medium ${getViolationColor(
                      student.violations,
                    )}`}
                  >
                    {student.violations < 10 ? `0${student.violations}` : student.violations}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <CircularProgress percentage={student.focusScore} color="#3b82f6" />
                </td>
                <td className="py-2 px-4">
                  <CircularProgress percentage={student.seatedTime} color="#10b981" />
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleViewLogs(student.id)}
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <Eye size={14} />
                    <span className="text-sm font-medium underline underline-offset-2 decoration-orange-400">
                      View Logs
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-3">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="flex items-center gap-2 px-3 py-1.5 text-slate-400 hover:text-white bg-muted hover:bg-muted/80 rounded-lg transition-colors"
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        <div className="flex items-center gap-2">
          {[1, 2].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`size-7 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                currentPage === pageNum ? "bg-red-primary text-white" : "text-slate-400 hover:text-white hover:bg-muted"
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="flex items-center gap-2 px-3 py-1.5 text-white bg-red-primary hover:bg-red-primary/80 rounded-lg transition-colors"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
