import { StatsCards } from "./stats-cards"
import { ActiveExams } from "../exams/active-exams"
import { ViolationsChart } from "./violations-chart"
import { TopPerformers } from "./top-performers"
import { TopViolators } from "./top-violators"
import { ExamCalendar } from "../exams/exam-calendar"

export function Dashboard() {
  return (
    <div className="p-3 md:p-4 lg:p-6 space-y-4 md:space-y-6 min-h-screen">
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2">
          <ActiveExams />
        </div>
        <div className="lg:col-span-1">
          <ExamCalendar />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-1">
          <ViolationsChart />
        </div>
        <div className="lg:col-span-1">
          <TopPerformers />
        </div>
        <div className="lg:col-span-1">
          <TopViolators />
        </div>
      </div>
    </div>
  )
}
