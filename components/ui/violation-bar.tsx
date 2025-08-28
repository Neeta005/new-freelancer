"use client"

import React from "react"

interface ViolationBarProps {
  label: string
  value: number
  maxValue: number
}

export function ViolationBar({ label, value, maxValue }: ViolationBarProps) {
  const percentage = (value / maxValue) * 100
  const [exam, time = ""] = label.split(":")

  return (
    <div className="flex flex-col items-center flex-1 max-w-[40px] md:max-w-[60px]">
      <div className="w-full bg-secondary rounded-t-lg relative mb-2 h-[200px] overflow-hidden">
        <div
          className="bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg absolute bottom-0 w-full"
          style={{ height: `${percentage}%` }}
        />
      </div>
      <span className="text-gray-400 text-[8px] md:text-[10px] text-center leading-tight max-w-full">
        {exam}
        <br />
        {time}
      </span>
    </div>
  )
}
