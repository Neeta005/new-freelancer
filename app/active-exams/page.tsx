import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ActiveExamsPage } from "@/components/pages/active-exams-page"

export default function ActiveExams() {
  return (
    <div className=" bg-[#222B40] flex flex-col overflow-x-hidden">
      <Header />

      <div className="flex flex-1">
        <Sidebar activeIndex={0} />

        <main className="flex-1 transition-all duration-300 p-4">
          <ActiveExamsPage />
        </main>
      </div>
    </div>
  )
}
