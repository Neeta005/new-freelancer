"use client"
import { ChevronDown, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Section, LessonUnit } from "@/data/syllabus"
import { gradientButtonStyle } from "@/data/syllabus"

interface SectionFormProps {
  sections: Section[]
  onSectionsChange: (sections: Section[]) => void
}

export function SectionForm({ sections, onSectionsChange }: SectionFormProps) {
  const addSection = () => {
    const newSection: Section = {
      id: Date.now().toString(),
      title: "",
      lessons: [{ id: `${Date.now()}-1`, value: "" }],
    }
    onSectionsChange([...sections, newSection])
  }

  const addLesson = (sectionId: string) => {
    onSectionsChange(
      sections.map((section) => {
        if (section.id === sectionId) {
          const newLesson: LessonUnit = {
            id: `${sectionId}-${Date.now()}`,
            value: "",
          }
          return { ...section, lessons: [...section.lessons, newLesson] }
        }
        return section
      }),
    )
  }

  const removeLesson = (sectionId: string, lessonId: string) => {
    onSectionsChange(
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
    onSectionsChange(sections.map((section) => (section.id === sectionId ? { ...section, title } : section)))
  }

  const updateLessonValue = (sectionId: string, lessonId: string, value: string) => {
    onSectionsChange(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lessons: section.lessons.map((lesson) => (lesson.id === lessonId ? { ...lesson, value } : lesson)),
          }
        }
        return section
      }),
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-foreground text-lg font-semibold mb-4">Course Content</h3>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <ChevronDown className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-6" />
              <div className="flex-1">
                <label className="block text-foreground text-sm font-medium mb-1">Section / Module</label>
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Type here..."
                    value={section.title}
                    onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                    className="flex-1 bg-muted border border-border text-foreground placeholder:text-muted-foreground h-10 px-4"
                  />
                  <Button
                    onClick={addSection}
                    className={`text-white rounded-full flex-shrink-0 h-10 w-10 flex items-center justify-center ${gradientButtonStyle}`}
                    size="sm"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="pl-7 space-y-3">
              {section.lessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="block text-foreground text-sm font-medium mb-1">Lesson / Unit</label>
                    <Input
                      placeholder="Type here..."
                      value={lesson.value}
                      onChange={(e) => updateLessonValue(section.id, lesson.id, e.target.value)}
                      className="flex-1 bg-muted border border-border text-foreground placeholder:text-muted-foreground rounded-full h-10 px-4"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => addLesson(section.id)}
                      className={`text-white rounded-full h-10 w-10 flex items-center justify-center ${gradientButtonStyle}`}
                      size="sm"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => removeLesson(section.id, lesson.id)}
                      className="bg-muted hover:bg-accent text-foreground rounded-full h-10 w-10 flex items-center justify-center"
                      size="sm"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
