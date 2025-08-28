"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { menuItems } from "@/data/navigation"

// ✅ Explicit props type
interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: Readonly<ClientLayoutProps>) {
  // ✅ Explicit state type
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const toggleSidebar = (): void => setSidebarOpen((prev) => !prev)

  const getActiveIndex = (): number => {
    if (!pathname) return 0
    const activeItem = menuItems.findIndex((item) => item.href === pathname)
    return activeItem !== -1 ? activeItem : 0
  }

  return (
    <div className="min-h-screen bg-dark-bg flex">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeIndex={getActiveIndex()}
      />
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 pt-16 pl-0 lg:pl-20 bg-dark-bg overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
