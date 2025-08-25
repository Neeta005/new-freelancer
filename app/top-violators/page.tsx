import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { TopViolatorsPage } from "@/components/pages/top-violators-page"

export default function TopViolators() {
  return (
    <div className="min-h-screen bg-[#222B40] flex flex-col overflow-x-hidden">
      <Header />

      <div className="flex flex-1">
        <Sidebar activeIndex={0} />

        <main className="flex-1  transition-all duration-300 p-4">
          <TopViolatorsPage />
        </main>
      </div>
    </div>
  )
}
