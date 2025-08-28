import { FileText } from "lucide-react"
import type { Section, UploadedFile } from "@/data/syllabus"
import { EmptyState } from "@/components/ui/empty-state"
import { FileItem } from "@/components/ui/file-item"

interface SyllabusPreviewProps {
  subject: string
  targetAudience: string
  sections: Section[]
  uploadedFiles: UploadedFile[]
  activeTab: "manual" | "upload"
}

export function SyllabusPreview({ subject, targetAudience, sections, uploadedFiles, activeTab }: SyllabusPreviewProps) {
  const hasManualContent =
    subject ||
    targetAudience ||
    sections.some((section) => section.title || section.lessons.some((lesson) => lesson.value))
  const hasUploadedFiles = uploadedFiles.length > 0

  if (activeTab === "manual" && !hasManualContent) {
    return (
      <EmptyState
        icon={<FileText className="w-16 h-16 text-muted-foreground mx-auto" />}
        title="No Course Content!"
        description="Enter Course Content to see the preview"
      />
    )
  }

  if (activeTab === "upload" && !hasUploadedFiles) {
    return (
      <EmptyState
        icon={<FileText className="w-16 h-16 text-muted-foreground mx-auto" />}
        title="No files Uploaded!"
        description="Upload files to see the preview"
      />
    )
  }

  return (
    <div className="w-full">
      {activeTab === "manual" ? (
        <>
          {subject && (
            <div className="mb-4">
              <h4 className="text-foreground font-semibold">Subject:</h4>
              <p className="text-muted-foreground">{subject}</p>
            </div>
          )}
          {targetAudience && (
            <div className="mb-4">
              <h4 className="text-foreground font-semibold">Target Audience:</h4>
              <p className="text-muted-foreground">{targetAudience}</p>
            </div>
          )}
          <div className="space-y-3">
            {sections.map((section) => (
              <div key={section.id}>
                {section.title && (
                  <div className="mb-2">
                    <h5 className="text-foreground font-medium">{section.title}</h5>
                    <ul className="ml-4 space-y-1">
                      {section.lessons.map(
                        (lesson) =>
                          lesson.value && (
                            <li key={lesson.id} className="text-muted-foreground text-sm">
                              • {lesson.value}
                            </li>
                          ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h4 className="text-foreground font-semibold mb-3">Uploaded Files:</h4>
          <ul className="space-y-2">
            {uploadedFiles.map((file) => (
              <li key={file.id}>
                <FileItem name={file.name} size={file.size} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
