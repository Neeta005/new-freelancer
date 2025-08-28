"use client"

import React from "react"
import type { Performer } from "@/types"
import { BaseCard } from "@/components/ui/base-card"
import { UserInfoSection } from "@/components/ui/user-info-section"
import { MetricDisplay } from "@/components/ui/metric-display"

const PerformerCard = React.memo<Performer>(
  ({ id, name, subject, avatar, rate }) => {
    return (
      <BaseCard className="p-3 md:p-4 flex items-center justify-between">
        <UserInfoSection name={name} subtitle={subject} avatar={avatar} />
        <MetricDisplay
          percentage={Number.parseInt(rate)}
          label="Success Rate"
          color="hsl(var(--green-primary))"
        />
      </BaseCard>
    )
  }
)

PerformerCard.displayName = "PerformerCard"
export { PerformerCard }
