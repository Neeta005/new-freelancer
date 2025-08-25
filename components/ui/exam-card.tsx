import React from "react"
import type { Exam } from "@/types"

interface ExamCardProps {
  exam: Exam
}

const ExamCard = React.memo<ExamCardProps>(({ exam }) => {
  return (
    <div className="bg-card relative rounded-lg p-3 sm:p-4 lg:p-6 border border-border flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 flex-1">
      {/* Vertical Line - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block absolute right-[120px] md:right-[140px] lg:right-[155px] top-1/2 transform -translate-y-1/2 h-[60px] w-px bg-border" />

      {/* Left Section */}
      <div className="flex-1 sm:pr-[130px] md:pr-[150px] lg:pr-[210px] overflow-hidden">
        <h3 className="text-white font-medium text-sm sm:text-base lg:text-lg mb-1 leading-tight truncate">
          {exam.title}
        </h3>
        <p className="text-gray-text text-xs sm:text-sm truncate">
          {exam.date} • {exam.time}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex sm:flex-col items-start sm:items-center gap-2 sm:gap-3 sm:ml-auto">
        <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium ${exam.badgeClass}`}>
          {exam.status}
        </span>
        <span className="text-gray-text text-xs sm:text-sm whitespace-nowrap">{exam.info}</span>
      </div>
    </div>
  )
})

ExamCard.displayName = "ExamCard"
export { ExamCard }
