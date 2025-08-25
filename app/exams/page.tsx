import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ActiveExams } from "@/components/exams/active-exams"

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-[#222B40] overflow-x-hidden flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar activeIndex={1} />

        <main className="flex-1 ml-0 lg:ml-16 transition-all duration-300 mt-[60px]">
          <ActiveExams />
        </main>
      </div>
    </div>
  )
}
