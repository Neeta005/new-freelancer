import { ChevronLeft, ChevronRight } from "lucide-react"
import { violationChart } from "@/data/violationChart"

export function ViolationsChart() {
  const maxValue = Math.max(...violationChart.map((d) => d.value))

  return (
    <div className="bg-card rounded-xl border border-border shadow-tertiary p-4 w-full h-full min-h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm md:text-base font-semibold">Violations Per Exam</h2>
        <div className="flex items-center space-x-1 md:space-x-2">
          <button className="p-1 text-gray-400 hover:text-white">
            <ChevronLeft className="size-3 md:size-4" />
          </button>
          <span className="text-gray-400 text-xs md:text-sm">Aug 2025</span>
          <button className="p-1 text-gray-400 hover:text-white">
            <ChevronRight className="size-3 md:size-4" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 flex flex-col relative h-[300px]">
        {/* Y Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-[10px] md:text-xs py-1">
          <span>60%</span>
          <span>50%</span>
          <span>40%</span>
          <span>30%</span>
          <span>20%</span>
          <span>10%</span>
        </div>

     {/* Bars */}
<div className="flex-1 flex items-end justify-between ml-8 md:ml-10 mb-4 space-x-1 md:space-x-2">
  {violationChart?.map((item, index) => {
    const percentage = (item.value / maxValue) * 100

    return (
      <div
        key={index}
        className="flex flex-col items-center flex-1 max-w-[40px] md:max-w-[60px]"
      >
        <div className="w-full bg-secondary rounded-t-lg relative mb-2 h-[200px] overflow-hidden">
          <div
            className="bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg absolute bottom-0 w-full"
            style={{ height: `${percentage}%` }}
          />
        </div>
        <span className="text-gray-400 text-[8px] md:text-[10px] text-center leading-tight max-w-full">
          {item.label.split(":")[0]}
          <br />
          {item.label.split(":")[1]}
        </span>
      </div>
    )
  })}
</div>


        {/* Avg Point Marker */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[45%] bg-border px-2 py-1 rounded-md">
          <span className="text-white text-[10px] md:text-xs">Avg Point</span>
        </div>
      </div>
    </div>
  )
}
