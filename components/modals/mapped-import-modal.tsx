"use client"

import React, { useState } from "react"
import { X, RotateCcw, Trash2 } from "lucide-react"
import Image from "next/image"
import { mockQuestions } from "@/data/mock-questions"
import { TableHeader } from "@/components/ui/table-header"
import { TableRow } from "@/components/ui/table-row"

interface MappedImportModalProps {
  isOpen: boolean
  onClose: () => void
  fileType: "xls" | "csv" | "google-sheet" | null
}

const tableColumns = [
  { span: 5, label: "Question" },
  { span: 2, label: "Type" },
  { span: 2, label: "Difficulty" },
  { span: 1, label: "Marks" },
  { span: 1, label: "Status" },
  { span: 1, label: "Actions", className: "text-center" },
]

export const MappedImportModal = React.memo(({ isOpen, onClose }: MappedImportModalProps) => {
  const [searchTerm, setSearchTerm] = useState("Design")
  const [selectedTopic, setSelectedTopic] = useState("UI Design")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-[#1F2937] rounded-2xl p-6 w-[1000px] max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl font-bold mb-6">Import CSV</h2>

        {/* Selected File Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 border border-white/20 rounded-lg p-3">
            <h3 className="text-white text-lg font-semibold">Selected File</h3>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-[#EF5723] hover:text-[#DC2626] transition-colors">
                <RotateCcw size={16} />
                Reupload
              </button>

              <div className="bg-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2 text-black">
                <div className="w-4 h-4 flex items-center justify-center">
                  <Image src="/icons/uploadicon.png" alt="CSV icon" width={16} height={16} />
                </div>
                Questions.CSV
              </div>
            </div>
          </div>

          {/* Search and Topic Select */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#111827] border border-[#374151] rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Design"
              />
            </div>
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Topic</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="UI Design">UI Design</option>
                <option value="UX Design">UX Design</option>
                <option value="Interactive Design">Interactive Design</option>
              </select>
            </div>
          </div>
        </div>

        {/* Questions Table */}
        <div className="bg-[#111827] rounded-xl overflow-hidden border border-[#374151] mb-6">
          {/* Mapped Table Header */}
          <TableHeader
            columns={tableColumns}
            variant="modal"
            size="sm"
            className="bg-[#1F2937] border-[#374151] text-gray-300"
          />

          {/* Mapped Table Rows */}
          {mockQuestions.map((question) => (
            <TableRow key={question.id} variant="modal" size="sm" className="border-[#374151] hover:bg-[#1F2937]">
              <div className="col-span-5 text-white text-sm">{question.question}</div>
              <div className="col-span-2 text-gray-300 text-sm">{question.type}</div>
              <div
                className={`col-span-2 text-xs px-2 py-1 rounded-lg font-medium text-center
                  ${
                    question.difficulty === "Easy"
                      ? "bg-green-500/20 text-green-400"
                      : question.difficulty === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
              >
                {question.difficulty}
              </div>
              <div className="col-span-1 text-white text-sm">{question.marks}</div>
              <div
                className={`w-fit text-xs px-3 py-1 rounded-full font-medium
                    ${
                      question.status === "Published"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-purple-500/20 text-purple-500"
                    }`}
              >
                {question.status}
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <button className="p-1.5 rounded-md border border-[#374151] text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </TableRow>
          ))}
        </div>

        <div className="text-gray-400 text-sm mb-6">100 Entries</div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button className="flex justify-center items-center px-[10px] gap-[10px] w-[176px] h-[47px] bg-gradient-to-r from-[#D02F4F] to-[#EF5723] rounded-[5px] text-white">
            Preview
          </button>
        </div>
      </div>
    </div>
  )
})

MappedImportModal.displayName = "MappedImportModal"
