"use client"

import type { Section, LessonUnit } from "@/data/syllabus"
import { SectionRow } from "./section-row"
import { LessonRow } from "./lesson-row"

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
            <SectionRow
              title={section.title}
              onTitleChange={(title) => updateSectionTitle(section.id, title)}
              onAddSection={addSection}
            />

            <div className="pl-7 space-y-3">
              {section.lessons.map((lesson) => (
                <LessonRow
                  key={lesson.id}
                  value={lesson.value}
                  onValueChange={(value) => updateLessonValue(section.id, lesson.id, value)}
                  onAddLesson={() => addLesson(section.id)}
                  onRemoveLesson={() => removeLesson(section.id, lesson.id)}
                  canRemove={section.lessons.length > 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
