import Link from "next/link"
import { ExamCard } from "@/components/ui/exam-card"
import { activeExams } from "@/data/exams"

export function ActiveExams() {
  return (
    <div className="bg-card rounded-xl p-3 sm:p-4 lg:p-6 border border-border w-full h-[280px] sm:h-[320px] lg:h-[342px] flex flex-col font-['Poppins',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-white text-lg sm:text-xl font-semibold">Active / Upcoming Exams</h2>
        <Link href="/active-exams" className="text-red-primary hover:text-red-300 text-sm font-medium">
          View All
        </Link>
      </div>

      {/* Exam List */}
      <div className="flex flex-col gap-2 sm:gap-3 flex-1 overflow-hidden">
        {activeExams?.map((exam, idx) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </div>
  )
}
