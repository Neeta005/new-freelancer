import { EditSyllabus } from "@/components/syllabus/edit-syllabus"

interface EditSyllabusPageProps {
  params: {
    id: string
  }
}

export default function EditSyllabusPage({ params }: EditSyllabusPageProps) {
  return (
    <main className="flex-1">
      <EditSyllabus syllabusId={params.id} />
    </main>
  )
}
