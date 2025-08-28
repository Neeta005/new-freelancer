import { ExamCard } from "@/components/ui/exam-card"
import { SectionHeader } from "@/components/ui/section-header"
import { BaseCard } from "@/components/ui/base-card"
import { activeExams } from "@/data/exams"

export function ActiveExams() {
  return (
    <BaseCard className="p-3 sm:p-4 lg:p-6 w-full h-[280px] sm:h-[320px] lg:h-[342px] flex flex-col font-['Poppins',sans-serif]">
      <SectionHeader title="Active / Upcoming Exams" viewAllHref="/active-exams" className="mb-3 sm:mb-4" />

      {/* Exam List */}
      <div className="flex flex-col gap-2 sm:gap-3 flex-1 overflow-hidden">
        {activeExams?.map((exam, idx) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </BaseCard>
  )
}
