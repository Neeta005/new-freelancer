import { daysOfWeek, calendarDays, specialDates } from "@/data/calendar"
import { ChevronLeft } from "@/components/icons/chevron-left"
import { ChevronRight } from "@/components/icons/chevron-right"

export function ExamCalendar() {
  const getDateStyle = (day: string, weekIndex: number, dayIndex: number) => {
    if (specialDates[day as keyof typeof specialDates]) {
      return `${specialDates[day as keyof typeof specialDates]} text-white`
    }

    if (weekIndex === 4 && dayIndex > 2) return "text-gray-text"

    return "text-white"
  }

  return (
    <div className="bg-card rounded-xl p-3 sm:p-4 lg:p-5 border border-border w-full h-[280px] sm:h-[320px] lg:h-[342px] flex flex-col">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-white text-lg sm:text-xl font-semibold">Exam Calendar</h2>
        <div className="flex items-center gap-2">
          <ChevronLeft className="size-3 sm:size-4 text-gray-text cursor-pointer hover:text-white" />
          <span className="text-gray-text text-xs sm:text-sm font-medium">Aug 2025</span>
          <ChevronRight className="size-3 sm:size-4 text-gray-text cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="flex items-center justify-center h-5 sm:h-6 text-gray-text text-xs font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {calendarDays.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1 sm:gap-2 flex-1 min-h-0">
            {week.map((day, dayIndex) => {
              const isSpecialDate = specialDates[day as keyof typeof specialDates]
              const isGrayedOut = weekIndex === 4 && dayIndex > 2

              return (
                <div key={dayIndex} className="flex items-center justify-center w-full h-full">
                  <button
                    className={`flex items-center justify-center cursor-pointer transition-all duration-200 hover:opacity-80 active:scale-95 size-[18px] text-[10px] font-normal leading-none border-none ${
                      isSpecialDate
                        ? `rounded-full ${getDateStyle(day, weekIndex, dayIndex)}`
                        : `rounded-sm ${getDateStyle(day, weekIndex, dayIndex)}`
                    }`}
                  >
                    {day}
                  </button>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
