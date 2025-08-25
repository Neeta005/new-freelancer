import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { TopPerformersPage } from "@/components/pages/top-performers-page"

export default function TopPerformers() {
  return (
    <div className="min-h-screen bg-[#222B40] flex flex-col overflow-x-hidden">
      <Header />

      <div className="flex flex-1">
        <Sidebar activeIndex={0} />

        <main className="flex-1 transition-all duration-300 p-4">
          <TopPerformersPage />
        </main>
      </div>
    </div>
  )
}
