import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Performer } from "@/types"
import { CircularProgress } from "@/components/ui/circular-progress" 

interface PerformerCardProps {
  performer: Performer
}

const PerformerCard = React.memo<PerformerCardProps>(({ performer }) => {
  return (
    <div className="bg-card rounded-lg p-3 md:p-4 border border-border flex items-center justify-between">
      {/* Avatar + Info */}
      <div className="flex items-center space-x-2 md:space-x-3">
        <Avatar className="size-10 md:size-12">
          <AvatarImage src={performer.avatar || "/images/avtar.jpg"} />
          <AvatarFallback className="bg-orange-primary text-white text-xs md:text-sm font-semibold">
            {performer.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="max-w-[120px] md:max-w-none">
          <h3 className="text-white font-medium text-sm md:text-base truncate">
            {performer.name}
          </h3>
          <p className="text-gray-text text-xs md:text-sm truncate">
            {performer.subject}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <CircularProgress
          percentage={Number.parseInt(performer.rate)}
          size={48}
          strokeWidth={2.5}
          color="hsl(var(--green-primary))"
          className="mb-1"
        />
        <span className="text-gray-text text-[10px] md:text-xs">Success Rate</span>
      </div>
    </div>
  )
})

PerformerCard.displayName = "PerformerCard"
export { PerformerCard }
