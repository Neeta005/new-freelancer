"use client"

import { Bell, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border px-4 lg:px-6 py-2 z-50">
      <div className="flex items-center justify-between">
        {/* Left Side Logo */}
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={onMenuClick}
          >
            <Menu className="size-5" />
          </button>
          <Image src="/images/logo.png" alt="World of Interns" width={80} height={32} className="w-20 h-8" />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="size-6" />
          </button>

          {/* Profile Section */}
          <div className="flex flex-col items-center w-15 h-12">
            <Avatar className="size-8">
              <AvatarImage src="/images/avtar.jpg" />
              <AvatarFallback className="bg-muted text-muted-foreground text-xs">JD</AvatarFallback>
            </Avatar>
            <span className="text-foreground text-xs mt-1">Profile</span>
          </div>
        </div>
      </div>
    </header>
  )
}
