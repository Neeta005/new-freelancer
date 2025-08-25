export interface LessonUnit {
  id: string
  value: string
}

export interface Section {
  id: string
  title: string
  lessons: LessonUnit[]
}

export interface UploadedFile {
  id: string
  name: string
  size: string
}

export interface SyllabusItem {
  id: string
  subject: string
  category: string
  targetAudience: string
}

export const targetAudienceOptions = [
  { value: "graphic-designers", label: "Graphic Designers" },
  { value: "developers", label: "Developers" },
  { value: "devops", label: "DevOps Engineers" },
  { value: "ui-ux", label: "UI/UX Designers" },
]

export const syllabusData: SyllabusItem[] = [
  { id: "1", subject: "Design", category: "Design", targetAudience: "Graphic Designers" },
  { id: "2", subject: "Development", category: "Development", targetAudience: "Developers" },
  { id: "3", subject: "Cyber Security", category: "Security", targetAudience: "DevOps Engineers" },
  { id: "4", subject: "Design", category: "Design", targetAudience: "Graphic Designers" },
  { id: "5", subject: "Development", category: "Development", targetAudience: "Frontend Developers" },
  { id: "6", subject: "Cyber Security", category: "Security", targetAudience: "Security Specialists" },
  { id: "7", subject: "Design", category: "Design", targetAudience: "UI/UX Designers" },
  { id: "8", subject: "Development", category: "Development", targetAudience: "Backend Developers" },
  { id: "9", subject: "Cyber Security", category: "Security", targetAudience: "Network Security" },
]

export const initialSections: Section[] = [
  {
    id: "1",
    title: "",
    lessons: [
      { id: "1-1", value: "" },
      { id: "1-2", value: "" },
      { id: "1-3", value: "" },
    ],
  },
]

// Gradient button style from tailwind config
export const gradientButtonStyle =
  "bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
