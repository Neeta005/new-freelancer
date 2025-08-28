"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Eye, Trash } from "lucide-react"
import Link from "next/link"
import { syllabusData } from "@/data/syllabus"
import { gradientButtonStyle } from "@/data/syllabus"
import { Pagination } from "@/components/ui/reusable-pagination"
import { CategoryBadge } from "@/components/ui/category-badge"
import { MobileCard } from "@/components/ui/mobile-card"
import { useState } from "react"
import { ViewSyllabusModal } from "./view-syllabus-modal"
import Image from "next/image"

function TableRows() {
  const [selectedSyllabus, setSelectedSyllabus] = useState<string | null>(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  const handleViewSyllabus = (syllabusId: string) => {
    setSelectedSyllabus(syllabusId)
    setIsViewModalOpen(true)
  }

  const handleEditSyllabus = (syllabusId: string) => {
    window.location.href = `/syllabus/edit/${syllabusId}`
  }

  const handleDisableSyllabus = (syllabusId: string) => {
    console.log("Disable syllabus:", syllabusId)
  }

  return (
    <>
      {syllabusData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 gap-x-24 px-6 py-2 bg-gray-800 hover:bg-gray-700 transition-colors border-b border-gray-700 last:rounded-b-lg items-center"
        >
          <div className="text-white min-w-[160px]">{item.subject}</div>
          <div className="min-w-[160px]">
            <CategoryBadge category={item.category} />
          </div>
          <div className="text-white text-md min-w-[220px] whitespace-normal">{item.targetAudience}</div>
          <div className="min-w-[100px]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700 p-1">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border border-gray-600 text-white">
  <DropdownMenuItem
    className="hover:bg-gray-700 cursor-pointer"
    onClick={() => handleViewSyllabus(item.id)}
  >
    <Eye size={16} className="mr-2" />
    View
  </DropdownMenuItem>

  <DropdownMenuItem
    className="hover:bg-gray-700 cursor-pointer"
    onClick={() => handleEditSyllabus(item.id)}
  >
    <Image 
      src="/icons/editdotconnector.png"   // ✅ make sure path is correct in /public/icons
      alt="Edit"
      width={12}
      height={12}
      className="mr-2"
    />
    Edit
  </DropdownMenuItem>

  <DropdownMenuItem
    className="hover:bg-gray-700 cursor-pointer"
    onClick={() => handleDisableSyllabus(item.id)}
  >
    <Trash size={16} className="mr-2" />   {/* ✅ Replaced Ban with Trash */}
    Delete
  </DropdownMenuItem>
</DropdownMenuContent>

            </DropdownMenu>
          </div>
        </div>
      ))}
      <ViewSyllabusModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        syllabusId={selectedSyllabus}
      />
    </>
  )
}

function MobileCards() {
  return (
    <>
      {syllabusData.map((item) => (
        <MobileCard key={item.id} title={item.subject} category={item.category} description={item.targetAudience} />
      ))}
    </>
  )
}

export function Syllabus() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(syllabusData.length / itemsPerPage)

  return (
    <div className="min-h-screen p-4">
      <div className="bg-card rounded-lg sm:p-6 md:p-8 2xl:p-10">
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

        <div className="border-b border-gray-600 mb-6"></div>

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
              <SelectItem value="latest" className="hover:bg-gray-600">
                Latest
              </SelectItem>
              <SelectItem value="older" className="hover:bg-gray-600">
                Older
              </SelectItem>
              <SelectItem value="higher-degree" className="hover:bg-gray-600">
                Higher Degree
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <div className="grid grid-cols-4 gap-x-24 px-6 py-2 bg-black text-white font-medium rounded-t-lg">
            <div className="min-w-[160px]">Subject</div>
            <div className="min-w-[160px]">Category</div>
            <div className="min-w-[220px]">Target Audience</div>
            <div className="min-w-[100px]">Actions</div>
          </div>
          <TableRows />
        </div>

        <div className="block md:hidden space-y-4">
          <MobileCards />
        </div>

        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={syllabusData.length}
          />
        </div>
      </div>
    </div>
  )
}
