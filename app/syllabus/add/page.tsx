import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { AddSyllabus } from "@/components/syllabus/add-syllabus"

export default function AddSyllabusPage() {
  return (
    <div className="min-h-screen bg-[#222B40] overflow-x-hidden flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar activeIndex={1} />

        <main className="flex-1 transition-all duration-300 p-4">
          <AddSyllabus />
        </main>
      </div>
    </div>
  )
}
