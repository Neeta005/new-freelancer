"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserInfoSectionProps {
  name: string
  subtitle: string
  avatar?: string
  avatarFallbackBg?: string
  className?: string
}

export function UserInfoSection({
  name,
  subtitle,
  avatar,
  avatarFallbackBg = "bg-orange-primary",
  className = "",
}: UserInfoSectionProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className={`flex items-center space-x-2 md:space-x-3 ${className}`}>
      <Avatar className="size-10 md:size-12">
        <AvatarImage src={avatar || "/images/avtar.jpg"} />
        <AvatarFallback className={`${avatarFallbackBg} text-white text-xs md:text-sm font-semibold`}>
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="max-w-[120px] md:max-w-none">
        <h3 className="text-white font-medium text-sm md:text-base truncate">{name}</h3>
        <p className="text-gray-text text-xs md:text-sm truncate">{subtitle}</p>
      </div>
    </div>
  )
}
