// components/syllabus/syllabus.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MoreHorizontal, ChevronLeft, ChevronRight, Search } from "lucide-react"
import Link from "next/link"
import { syllabusData } from "@/data/syllabus"
import { gradientButtonStyle } from "@/data/syllabus"

// ✅ Extracted Table Row into a function
function TableRows() {
  return (
    <>
      {syllabusData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 gap-x-24 px-6 py-2 bg-gray-800 hover:bg-gray-700 transition-colors border-b border-gray-700 last:rounded-b-lg items-center"
        >
          <div className="text-white min-w-[160px]">{item.subject}</div>
          <div className="min-w-[160px]">
            <span
              className={`
                inline-flex justify-center items-center px-3 py-1 rounded-sm text-sm font-medium
                ${
                  item.category === "Design"
                    ? "bg-green-900/40 text-green-400"
                    : item.category === "Development"
                    ? "bg-blue-900/40 text-blue-400"
                    : item.category === "Security"
                    ? "bg-orange-900/40 text-orange-400"
                    : "bg-gray-700 text-gray-300"
                }
              `}
            >
              {item.category}
            </span>
          </div>
          <div className="text-white text-md min-w-[220px] whitespace-normal">
            {item.targetAudience}
          </div>
          <div className="min-w-[100px]">
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700 p-1">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </>
  )
}

// ✅ Extracted Mobile Cards into a function
function MobileCards() {
  return (
    <>
      {syllabusData.map((item) => (
        <div
          key={item.id}
          className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-1">{item.subject}</h3>
              <span
                className={`
                  inline-flex justify-center items-center px-2 py-1 rounded-sm text-xs font-medium
                  ${
                    item.category === "Design"
                      ? "bg-green-900/40 text-green-400"
                      : item.category === "Development"
                      ? "bg-blue-900/40 text-blue-400"
                      : item.category === "Security"
                      ? "bg-orange-900/40 text-orange-400"
                      : "bg-gray-700 text-gray-300"
                  }
                `}
              >
                {item.category}
              </span>
            </div>
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-600 p-2">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-gray-300 text-sm">
            <span className="text-gray-400">Target Audience:</span> {item.targetAudience}
          </div>
        </div>
      ))}
    </>
  )
}

export function Syllabus() {
  return (
    <div className="min-h-screen p-2">
      <div className="bg-gray-900 rounded-lg sm:p-6 md:p-8 2xl:p-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-white">Syllabus</h1>
          <Link href="/syllabus/add">
            <Button
              className={`${gradientButtonStyle} text-white px-4 py-2 flex items-center gap-2 w-full sm:w-auto justify-center rounded-md shadow-md`}
            >
              <span className="text-lg">+</span>
              Add Syllabus
            </Button>
          </Link>
        </div>

        {/* Horizontal line */}
        <div className="border-b border-gray-600 mb-6"></div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:hidden" />
            <Input
              placeholder="search"
              className="bg-gray-700 border border-gray-600 text-white placeholder:text-gray-300 rounded-md pl-10 md:pl-4 py-2 w-full"
            />
          </div>

          <Select>
            <SelectTrigger className="w-full sm:w-32 bg-gray-700 border border-gray-600 text-white rounded-md">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border border-gray-600 text-white">
              <SelectItem value="latest" className="hover:bg-gray-600">Latest</SelectItem>
              <SelectItem value="older" className="hover:bg-gray-600">Older</SelectItem>
              <SelectItem value="higher-degree" className="hover:bg-gray-600">Higher Degree</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-x-24 px-6 py-2 bg-black text-white font-medium rounded-t-lg">
            <div className="min-w-[160px]">Subject</div>
            <div className="min-w-[160px]">Category</div>
            <div className="min-w-[220px]">Target Audience</div>
            <div className="min-w-[100px]">Actions</div>
          </div>
          <TableRows />
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          <MobileCards />
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <Button
            variant="outline"
            className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 flex items-center gap-2 w-full sm:w-auto"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </Button>

          <div className="flex items-center gap-2">
            <Button className={`${gradientButtonStyle} text-white w-8 h-8 p-0 text-sm`}>1</Button>
            <Button className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 p-0 text-sm">2</Button>
          </div>

          <Button className={`${gradientButtonStyle} text-white flex items-center gap-2 w-full sm:w-auto`}>
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
