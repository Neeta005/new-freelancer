"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Plus, Minus, ChevronDown, ChevronRight, Search } from "lucide-react"
import { gradientButtonStyle } from "@/data/syllabus"

interface EditableLesson {
  id: string
  title: string
}

interface EditableSection {
  id: string
  title: string
  isExpanded: boolean
  lessons: EditableLesson[]
}

interface EditSyllabusProps {
  syllabusId: string
}

export function EditSyllabus({ syllabusId = "1" }: EditSyllabusProps) {
  const [subject, setSubject] = useState("Design")
  const [targetAudience, setTargetAudience] = useState("Designers")
  const [sections, setSections] = useState<EditableSection[]>([
    {
      id: "1",
      title: "UX Design",
      isExpanded: true,
      lessons: [
        { id: "1-1", title: "Introduction to Ux" },
        { id: "1-2", title: "Basic Info" },
      ],
    },
    {
      id: "2",
      title: "UX Design",
      isExpanded: true,
      lessons: [
        { id: "2-1", title: "Introduction to Ux" },
        { id: "2-2", title: "Basic Info" },
      ],
    },
    {
      id: "3",
      title: "UX Design",
      isExpanded: true,
      lessons: [
        { id: "3-1", title: "Introduction to Ux" },
        { id: "3-2", title: "Basic Info" },
      ],
    },
    {
      id: "4",
      title: "UI Design",
      isExpanded: false,
      lessons: [],
    },
  ])

  const [previewSections, setPreviewSections] = useState<{ [key: string]: boolean }>({
    "1": true,
    "2": true,
    "3": true,
    "4": true,
  })

  const togglePreviewSection = (sectionId: string) => {
    setPreviewSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const addSection = () => {
    const newSection: EditableSection = {
      id: Date.now().toString(),
      title: "",
      isExpanded: true,
      lessons: [{ id: `${Date.now()}-1`, title: "" }],
    }
    setSections([...sections, newSection])
  }

  const addLesson = (sectionId: string) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          const newLesson: EditableLesson = {
            id: `${sectionId}-${Date.now()}`,
            title: "",
          }
          return { ...section, lessons: [...section.lessons, newLesson] }
        }
        return section
      }),
    )
  }

  const removeLesson = (sectionId: string, lessonId: string) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId && section.lessons.length > 1) {
          return {
            ...section,
            lessons: section.lessons.filter((lesson) => lesson.id !== lessonId),
          }
        }
        return section
      }),
    )
  }

  const updateSectionTitle = (sectionId: string, title: string) => {
    setSections(sections.map((section) => (section.id === sectionId ? { ...section, title } : section)))
  }

  const updateLessonTitle = (sectionId: string, lessonId: string, title: string) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lessons: section.lessons.map((lesson) => (lesson.id === lessonId ? { ...lesson, title } : lesson)),
          }
        }
        return section
      }),
    )
  }

  const toggleSection = (sectionId: string) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section,
      ),
    )
  }

  return (
    <div className="min-h-screen p-4">
      <div className="bg-card text-white p-8 rounded-lg">
        <h1 className="text-2xl font-semibold">Edit Syllabus</h1>

        {/* Subject and Target Audience Row */}
        <div className="flex justify-between items-end gap-8 mb-8 mt-2">
          <div className="w-80">
            <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
            <div className="relative">
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white rounded-full pl-4 pr-10 h-12"
                placeholder="Design"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="w-80">
            <label className="block text-sm font-medium mb-3 text-gray-300">Target Audience</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Search target audience..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="designers">Designers</SelectItem>
                <SelectItem value="developers">Developers</SelectItem>
                <SelectItem value="devops">DevOps Engineers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-600 mb-8"></div>

        {/* Main Content Area with Vertical Divider */}
        <div className="relative flex gap-8">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>

          {/* Left Side - Course Content */}
          <div className="flex-1 pr-8">
            <h3 className="text-lg font-semibold mb-6">Course content</h3>

            <div className="space-y-1">
              {sections.map((section) => (
                <div key={section.id} className="space-y-1">
                  <div className="text-sm text-gray-400 mb-1">Section/Module</div>
                  <div className="flex items-center gap-3 mb-3">
                    <button onClick={() => toggleSection(section.id)} className="text-gray-400 hover:text-white">
                      {section.isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                    <Input
                      value={section.title}
                      onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                      className="flex-1 bg-slate-700 border-slate-600 text-white rounded-full h-11"
                      placeholder="UX Design"
                    />
                   <Button
  onClick={addSection}
  className={`${gradientButtonStyle} text-white rounded-full size-10 p-0 flex items-center justify-center shadow-md`}
>
  <Plus className="size-4 text-white" />
</Button>

                    <Button className="bg-white hover:bg-gray-500 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center">
                      <Minus className="size-4 text-black" />
                    </Button>
                  </div>

                  {section.isExpanded &&
                    section.lessons.map((lesson) => (
                      <div key={lesson.id} className="ml-7 space-y-1">
                        <div className="text-sm text-gray-400">Lesson/Unit</div>
                        <div className="flex items-center gap-3 mb-3">
                          <Input
                            value={lesson.title}
                            onChange={(e) => updateLessonTitle(section.id, lesson.id, e.target.value)}
                            className="flex-1 bg-slate-700 border-slate-600 text-white rounded-full h-11"
                            placeholder="Introduction to Ux"
                          />
                        <Button
  onClick={() => addLesson(section.id)}
  className={`${gradientButtonStyle} text-white rounded-full size-10 p-0 flex items-center justify-center shadow-md`}
>
  <Plus className="size-4 text-white" />
</Button>

                          {section.lessons.length > 1 && (
                            <Button
                              onClick={() => removeLesson(section.id, lesson.id)}
                              className="bg-white hover:bg-gray-500 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
                            >
                              <Minus className="size-4 text-black" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="flex-1 pl-8">
            <h3 className="text-lg font-semibold mb-6">Preview</h3>

            <div className="space-y-3">
              {sections.map((section) => {
                if (!section.title) return null
                const isPreviewExpanded = previewSections[section.id] !== false
                return (
                  <div key={section.id} className="rounded-lg overflow-hidden border border-slate-600">
                    {/* Header row */}
                    <button
                      onClick={() => togglePreviewSection(section.id)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-white font-medium bg-slate-700 hover:bg-slate-600"
                    >
                      <div className="flex items-center gap-2">
                        {isPreviewExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                        {section.title}
                      </div>
                    </button>

                    {/* Dropdown options (lessons) */}
                    {isPreviewExpanded && (
                      <div className="px-4 pt-2 pb-3 space-y-2 bg-slate-800">
                        {section.lessons.map(
                          (lesson) =>
                            lesson.title && (
                              <div
                                key={lesson.id}
                                className="text-gray-300 text-sm hover:text-white cursor-pointer transition"
                              >
                                {lesson.title}
                              </div>
                            ),
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end gap-4 mt-12 pt-6">
        <Button className="bg-transparent border border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-lg">
  Cancel
</Button>

        <Button
  className={`${gradientButtonStyle} text-white px-8 py-2 rounded-lg`}
>
  Update Syllabus
</Button>

        </div>
      </div>
    </div>
  )
}
