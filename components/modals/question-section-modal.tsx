"use client"

import React, { useState } from "react"
import { Filter, Trash2, Eye, Edit } from "lucide-react"
import { mockQuestions } from "@/data/questions"
import { TableHeader } from "@/components/ui/table-header"
import { TableRow } from "@/components/ui/table-row"

// ✅ Import your reusable pagination components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"

interface QuestionSectionModalProps {
  isOpen: boolean
  onClose: () => void
  topicName?: string
}

interface Question {
  id: string | number
  question: string
  type: string
  difficulty: "Easy" | "Medium" | "Hard"
  marks: number
  status: "Published" | "Draft"
}

interface TableColumn {
  span: number
  label: string
}

const tableColumns: TableColumn[] = [
  { span: 1, label: "Sr." },
  { span: 5, label: "Question" },
  { span: 2, label: "Type" },
  { span: 1, label: "Difficulty" },
  { span: 1, label: "Marks" },
  { span: 1, label: "Status" },
  { span: 1, label: "Actions" },
]

export const QuestionSectionModal = React.memo<QuestionSectionModalProps>(
  ({ isOpen, onClose, topicName = "Design" }) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [selectedDesign, setSelectedDesign] = useState<string>("Design")
    const [selectedUIDesign, setSelectedUIDesign] = useState<string>("UI Design")

    const itemsPerPage = 5
    const typedQuestions = mockQuestions as Question[]
    const totalPages = Math.ceil(typedQuestions.length / itemsPerPage)

    const getDifficultyColor = (difficulty: Question["difficulty"]): string => {
      switch (difficulty) {
        case "Easy":
          return "bg-green-primary"
        case "Medium":
          return "bg-yellow-primary"
        case "Hard":
          return "bg-red-primary"
        default:
          return "bg-gray-500"
      }
    }

    const getStatusColor = (status: Question["status"]): string => {
      return status === "Published" ? "bg-green-primary" : "bg-purple-primary"
    }

    if (!isOpen) return null

    // Paginate questions
    const paginatedQuestions = typedQuestions.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-dark-card rounded-2xl p-6 w-[1200px] max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-white text-2xl font-bold">Question Bank</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-dark-border text-white rounded-lg hover:bg-border transition-colors"
                type="button"
              >
                Back
              </button>
              <button
                className="px-4 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors"
                type="button"
              >
                Preview
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                type="button"
              >
                Add Question
              </button>
              <button
                className="px-4 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors"
                type="button"
              >
                Edit Topic
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center justify-between mb-6">
            <input
              type="text"
              placeholder="Search"
              className="bg-secondary border border-dark-border rounded-full px-4 py-2 text-gray-text placeholder-gray-500 focus:outline-none focus:border-blue-500 w-80"
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">Filter By</span>
                <Filter size={16} className="text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-orange-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <span className="size-2 bg-white rounded-full"></span>
                  {selectedDesign}
                </div>
                <div className="bg-green-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <span className="size-2 bg-white rounded-full"></span>
                  {selectedUIDesign}
                </div>
              </div>
            </div>
          </div>

          {/* Questions Table */}
          <div className="bg-secondary rounded-xl overflow-hidden border border-dark-border mb-6">
            <TableHeader columns={tableColumns} variant="modal" />

            {paginatedQuestions.map((question: Question, index: number) => (
              <TableRow key={question.id} variant="modal">
                <div className="col-span-1 text-white text-sm">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </div>
                <div className="col-span-5 text-white text-sm">{question.question}</div>
                <div className="col-span-2 text-gray-text text-sm">{question.type}</div>
                <div className="col-span-1">
                  <span
                    className={`px-2 py-1 rounded text-xs text-white ${getDifficultyColor(
                      question.difficulty
                    )}`}
                  >
                    {question.difficulty}
                  </span>
                </div>
                <div className="col-span-1 text-white text-sm">{question.marks}</div>
                <div className="col-span-1">
                  <span
                    className={`px-2 py-1 rounded text-xs text-white ${getStatusColor(
                      question.status
                    )}`}
                  >
                    {question.status}
                  </span>
                </div>
                <div className="col-span-1 flex items-center gap-1">
                  <button
                    className="p-1 text-orange-primary hover:bg-dark-border rounded transition-colors"
                    type="button"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button
                    className="p-1 text-white hover:bg-dark-border rounded transition-colors"
                    type="button"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    className="p-1 text-red-primary hover:bg-dark-border rounded transition-colors"
                    type="button"
                  >
                    <Edit size={16} />
                  </button>
                </div>
              </TableRow>
            ))}
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(i + 1)
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    )
  }
)

QuestionSectionModal.displayName = "QuestionSectionModal"
