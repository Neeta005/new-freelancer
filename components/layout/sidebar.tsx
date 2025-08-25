"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuItems } from "@/data/navigation"

interface SidebarProps {
  activeIndex?: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Sidebar({ activeIndex, isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-20 bg-sidebar border-r border-sidebar-border flex flex-col items-center z-40 
          transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:flex`}
      >
        {/* Menu items with proper spacing from top */}
        <div className="mt-16 flex flex-col items-center">
          {menuItems.map((item, index) => {
            const isActive = activeIndex !== undefined ? activeIndex === index : pathname === item.href
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`w-16 h-11 flex items-center justify-center transition-all duration-200 
                  ${isActive ? "bg-destructive shadow-lg" : "hover:bg-sidebar-accent"}`}
                title={item.name}
                onClick={() => setIsOpen(false)} // Close sidebar on mobile when clicking a link
              >
                <Image
                  src={item.icon || "/placeholder.svg"}
                  alt={item.name}
                  width={40}
                  height={40}
                  className={`size-10 transition-all duration-200 
                    ${isActive ? "brightness-0 invert" : "opacity-80 hover:opacity-100"}`}
                />
              </Link>
            )
          })}
        </div>
      </aside>
    </>
  )
}
