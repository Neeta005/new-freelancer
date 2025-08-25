"use client"

import type React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { menuItems } from "@/data/navigation"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const getActiveIndex = () => {
    const activeItem = menuItems.findIndex((item) => item.href === pathname)
    return activeItem !== -1 ? activeItem : 0
  }

  return (
    <div className="min-h-screen bg-dark-bg flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeIndex={getActiveIndex()} />
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 pt-16 pl-0 lg:pl-20 bg-dark-bg overflow-x-hidden">{children}</main>
      </div>
    </div>
  )
}
