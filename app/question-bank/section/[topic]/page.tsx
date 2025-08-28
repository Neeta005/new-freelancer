"use client"

import { QuestionSection } from "@/components/question-bank/question-section"
import { useRouter, useParams } from "next/navigation"

export default function QuestionSectionPage() {
  const router = useRouter()
  const params = useParams()
  const topicName = decodeURIComponent(params.topic as string)

  const handleBack = () => {
    router.push("/question-bank")
  }

  return <QuestionSection topicName={topicName} onBack={handleBack} />
}
