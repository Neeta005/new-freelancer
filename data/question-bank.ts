import type { Subject } from "@/types"

export const designSubtopics = [
  { id: "ui-design", name: "UI Design", questions: 18 },
  { id: "ux-design", name: "UX Design", questions: 12 },
  { id: "interactive-design", name: "Interactive Design", questions: 8 },
  { id: "universal-design", name: "Universal Design", questions: 15 },
]

export const subjects: Subject[] = [
  {
    id: "design",
    name: "Design",
    targetAudience: "Graphic Designers",
    topicCount: 3,
    questionCount: 18,
    subtopics: designSubtopics,
  },
  {
    id: "programming",
    name: "Programming",
    targetAudience: "Software Developers",
    topicCount: 4,
    questionCount: 25,
    subtopics: [
      { id: "javascript", name: "JavaScript", questions: 10 },
      { id: "react", name: "React", questions: 8 },
      { id: "nodejs", name: "Node.js", questions: 7 },
    ],
  },
]

export const initialExpandedSections: Record<string, boolean> = {
  design: false,
  programming: true,
}

// Color configuration from tailwind theme
export const badgeColors = {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  danger: "#EF4444",
  warning: "#F59E0B",
  success: "#10B981",
  purple: "#8B5CF6",
}
