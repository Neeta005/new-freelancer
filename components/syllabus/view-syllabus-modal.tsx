"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import { syllabusDetailData } from "@/data/syllabus"

interface ViewSyllabusModalProps {
  isOpen: boolean
  onClose: () => void
  syllabusId: string | null
}

export function ViewSyllabusModal({ isOpen, onClose, syllabusId }: ViewSyllabusModalProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  if (!syllabusId) return null

  const syllabusDetail = syllabusDetailData[syllabusId]
  if (!syllabusDetail) return null

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const collapseAll = () => {
    setExpandedSections([])
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
<DialogContent className="bg-card border border-gray-600 text-white  overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 border-b border-gray-600">
          <div>
            <DialogTitle className="text-2xl font-semibold text-white">
              {syllabusDetail.subject}
            </DialogTitle>
            <p className="text-gray-300 mt-1">
              {syllabusDetail.totalTopics} Topics • {syllabusDetail.totalLessons} Lessons
            </p>
          </div>

          <div className="flex items-center gap-4">
           <Button
  onClick={collapseAll}
  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
>
  <img
    src="\icons\viewsyllabus.png"
    alt="Collapse Icon"
    className="w-4 h-4"
  />
  Collapse All
</Button>

          </div>
        </DialogHeader>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[65vh]">
          <div className="space-y-4">
            {syllabusDetail.sections.map((section) => {
              const isExpanded = expandedSections.includes(section.id)
              return (
                <div key={section.id} className="bg-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-300" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                      )}
                      <span className="text-white font-medium">{section.title}</span>
                    </div>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {section.lessonCount} Lessons
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 bg-gray-750">
                      <div className="pl-8 space-y-2">
                        {section.lessons.map((lesson) => (
                          <div key={lesson.id} className="text-gray-300 py-2">
                            {lesson.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-600">
          <Button onClick={onClose} className="bg-gradient-to-r from-orange-600 to-rose-600 hover:bg-orange-600 text-white px-8 py-2 rounded-md">
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
