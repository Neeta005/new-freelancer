"use client"

import React from "react"
import type { Violator } from "@/types"
import { BaseCard } from "@/components/ui/base-card"
import { UserInfoSection } from "@/components/ui/user-info-section"
import { MetricDisplay } from "@/components/ui/metric-display"

const ViolatorCard = React.memo<Violator>(
  ({ id, name, subject, avatar, violations }) => {
    return (
      <BaseCard className="p-3 md:p-4 flex items-center justify-between">
        <UserInfoSection name={name} subtitle={subject} avatar={avatar} />
        <MetricDisplay
          percentage={violations}
          label="Violations"
          color="hsl(var(--red-primary))"
        />
      </BaseCard>
    )
  }
)

ViolatorCard.displayName = "ViolatorCard"
export { ViolatorCard }
