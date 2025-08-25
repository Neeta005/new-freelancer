"use client"

import { useState, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, Plus, ArrowLeft, Save } from "lucide-react"
import { sampleQuestion, Option, QuestionData } from "@/data/questionData"

interface EditQuestionFormProps {
  questionId: string
}

export default function EditQuestionForm({ questionId }: EditQuestionFormProps) {
  const router = useRouter()

  // ---------- State ----------
  const [question, setQuestion] = useState<string>(sampleQuestion.question)
  const [topic, setTopic] = useState<typeof sampleQuestion.topic>(sampleQuestion.topic)
  const [type, setType] = useState<typeof sampleQuestion.type>(sampleQuestion.type)
  const [difficulty, setDifficulty] = useState<typeof sampleQuestion.difficulty>(sampleQuestion.difficulty)
  const [status, setStatus] = useState<typeof sampleQuestion.status>(sampleQuestion.status)
  const [marks, setMarks] = useState<string>(sampleQuestion.marks)
  const [options, setOptions] = useState<Option[]>(sampleQuestion.options)

  // ---------- Handlers ----------
  const handleBack = (): void => router.back()

  const handleSave = (): void => {
    const payload: QuestionData = { question, topic, type, difficulty, status, marks, options }
    router.back()
  }

  const handleAddOption = (): void => {
    const newOption: Option = { id: Date.now().toString(), text: "", isCorrect: false }
    setOptions((prev) => [...prev, newOption])
  }

  const handleOptionChange = (optionId: string, text: string): void => {
    setOptions((prev) => prev.map((o) => (o.id === optionId ? { ...o, text } : o)))
  }

  const handleCorrectAnswerChange = (optionId: string): void => {
    setOptions((prev) => prev.map((o) => ({ ...o, isCorrect: o.id === optionId })))
  }

  const handleDifficultyChange = (newDifficulty: typeof sampleQuestion.difficulty): void =>
    setDifficulty(newDifficulty)

  const handleStatusChange = (newStatus: typeof sampleQuestion.status): void =>
    setStatus(newStatus)

  // ---------- Render ----------
  return (
    <div className="flex-1 bg-dark-bg min-h-screen text-white">
      <div className="bg-dark-card rounded-2xl p-6 md:p-8 shadow-lg min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-bold">Edit Question</h1>
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-3 md:px-4 py-2 border border-dark-border text-gray-text rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        <hr className="border-dark-border mb-0" />

        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          {/* Left Column */}
          <div className="flex flex-col flex-1 space-y-6 pr-0 lg:pr-4 border-r-0 lg:border-r border-dark-border overflow-auto pt-6 md:pt-8">
            <textarea
              value={question}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setQuestion(e.target.value)}
              className="w-full h-28 border border-white rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none resize-none bg-transparent text-sm md:text-base"
              placeholder="Enter your question here..."
            />

            <div className="space-y-4">
              {options.map((option: Option, index: number) => (
                <div
                  key={option.id}
                  className="w-full lg:w-[90%] mx-auto flex items-center space-x-3 md:space-x-4 bg-secondary border border-gray-400 rounded-lg px-3 md:px-4 py-3"
                >
                  <input
                    type="radio"
                    name="correctAnswer"
                    checked={option.isCorrect}
                    onChange={() => handleCorrectAnswerChange(option.id)}
                    className="w-5 h-5 text-orange-primary bg-secondary border-gray-400 focus:ring-orange-primary"
                  />
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleOptionChange(option.id, e.target.value)
                    }
                    className="flex-1 bg-transparent outline-none text-white placeholder-white text-sm md:text-base"
                    placeholder={`Option ${index + 1}`}
                  />
                </div>
              ))}

              <button
                onClick={handleAddOption}
                className="flex items-center space-x-2 px-4 py-2 border border-dark-border rounded-lg text-gray-text hover:bg-secondary transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Option</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-3 sm:space-y-0 mt-8">
              <button
                onClick={handleBack}
                className="px-6 py-2 border border-white text-gray-text rounded-lg hover:bg-white/10 transition-colors text-sm md:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-gradient-to-r from-orange-primary to-pink-primary text-white rounded-lg hover:from-orange-hover hover:to-pink-primary transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[420px] bg-dark-card flex flex-col mt-6 lg:mt-0">
            {/* Topic */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-dark-border">
              <label className="text-sm font-medium">Topic:</label>
              <div className="relative w-2/3">
                <select
                  value={topic}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setTopic(e.target.value as typeof sampleQuestion.topic)
                  }
                  className="w-full bg-secondary border border-white rounded-lg px-3 md:px-4 py-2 text-white focus:outline-none appearance-none text-sm md:text-base"
                >
                  <option value="UI Design">UI Design</option>
                  <option value="UX Design">UX Design</option>
                  <option value="Interactive Design">Interactive Design</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex-1 p-4 md:p-6">
              <div className="bg-dark-card rounded-xl p-4 md:p-6 space-y-6 shadow-inner">
                {/* Type */}
                <div>
                  <label className="block text-sm font-medium mb-1">Type:</label>
                  <div className="relative">
                    <select
                      value={type}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setType(e.target.value as typeof sampleQuestion.type)
                      }
                      className="w-full bg-secondary border border-white rounded-lg px-3 md:px-4 py-2 text-white focus:outline-none appearance-none text-sm md:text-base"
                    >
                      <option value="MCQS">MCQS</option>
                      <option value="True/False">True/False</option>
                      <option value="Descriptive">Descriptive</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-sm font-medium mb-1">Difficulty:</label>
                  <div className="flex flex-wrap gap-2">
                    {(["Easy", "Medium", "Hard"] as typeof sampleQuestion.difficulty[]).map((level) => (
                      <button
                        key={level}
                        onClick={() => handleDifficultyChange(level)}
                        className={`flex-1 min-w-[90px] px-4 py-2 text-sm font-medium transition-colors shadow-sm rounded-md
                          ${
                            difficulty === level
                              ? level === "Easy"
                                ? "bg-green-primary text-white"
                                : level === "Medium"
                                ? "bg-yellow-primary text-white"
                                : "bg-red-primary text-white"
                              : "bg-green-primary/30 text-gray-text"
                          }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium mb-1">Status:</label>
                  <div className="flex flex-wrap gap-2">
                    {(["Draft", "Published"] as typeof sampleQuestion.status[]).map((statusOption) => (
                      <button
                        key={statusOption}
                        onClick={() => handleStatusChange(statusOption)}
                        className={`flex-1 min-w-[95px] px-4 py-2 text-sm font-medium transition-colors shadow-sm rounded-md
                          ${
                            status === statusOption
                              ? statusOption === "Draft"
                                ? "bg-purple-primary text-white"
                                : "bg-green-primary text-white"
                              : "bg-green-primary/30 text-gray-text"
                          }`}
                      >
                        {statusOption}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Marks */}
                <div>
                  <label className="block text-sm font-medium mb-1">Marks:</label>
                  <input
                    type="text"
                    value={marks}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMarks(e.target.value)}
                    className="w-full bg-secondary border border-white rounded-lg px-3 md:px-4 py-2 text-white placeholder-gray-400 focus:outline-none text-sm md:text-base"
                    placeholder="05"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
