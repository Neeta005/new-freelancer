import EditQuestionForm from "@/components/edit-question/edit-question-form"

interface EditQuestionPageProps {
  params: { id: string }
}

export default function EditQuestionPage({ params }: EditQuestionPageProps) {
  const questionId = params.id

  return (
    <div className="p-6">
      <EditQuestionForm questionId={questionId} />
    </div>
  )
}
