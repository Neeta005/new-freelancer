import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Violator } from "@/types"
import { CircularProgress } from "@/components/ui/circular-progress" 

interface ViolatorCardProps {
  violator: Violator
}

const ViolatorCard = React.memo<ViolatorCardProps>(({ violator }) => {
  return (
    <div className="bg-card rounded-lg p-3 md:p-4 border border-border flex items-center justify-between">
      {/* Avatar + Info */}
      <div className="flex items-center space-x-2 md:space-x-3">
        <Avatar className="size-10 md:size-12">
          <AvatarImage src={violator.avatar || "/images/avtar.jpg"} />
          <AvatarFallback className="bg-orange-primary text-white text-xs md:text-sm font-semibold">
            {violator.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="max-w-[120px] md:max-w-none">
          <h3 className="text-white font-medium text-sm md:text-base truncate">
            {violator.name}
          </h3>
          <p className="text-gray-text text-xs md:text-sm truncate">
            {violator.subject}
          </p>
        </div>
      </div>

      {/* Violations Circle */}
      <div className="flex flex-col items-center">
        <CircularProgress
          percentage={violator.violations}
          size={48} // matches md:size-12 (48px)
          strokeWidth={2.5}
          color="hsl(var(--red-primary))"
          className="mb-1"
        />
        <span className="text-gray-text text-[10px] md:text-xs">Violations</span>
      </div>
    </div>
  )
})

ViolatorCard.displayName = "ViolatorCard"
export { ViolatorCard }
