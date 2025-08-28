"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Plus,
  Trash2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Type,
  Link,
  Clock,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
} from "lucide-react"

interface AddQuestionMCQProps {
  onBack: () => void
}

interface Option {
  id: string
  text: string
  isCorrect: boolean
}

export function AddQuestionMCQ({ onBack }: AddQuestionMCQProps) {
  const [question, setQuestion] = useState('Which of the following best describes "Visual Hierarchy" in UI design')
  const [subject, setSubject] = useState("Design")
  const [topic, setTopic] = useState("UI Design")
  const [type, setType] = useState("MCQS")
  const [difficulty, setDifficulty] = useState("Easy")
  const [status, setStatus] = useState("Draft")
  const [marks, setMarks] = useState("05")
  const [isCollapsed, setIsCollapsed] = useState(false)

  const [options, setOptions] = useState<Option[]>([
    { id: "1", text: "Using random colors to make UI attractive", isCorrect: false },
    { id: "2", text: "Organizing elements to guide the user's attention", isCorrect: true },
    { id: "3", text: "Adding animations to every UI element", isCorrect: false },
    { id: "4", text: "Using only black and white colors", isCorrect: false },
  ])

  const addOption = () => {
    const newOption: Option = {
      id: Date.now().toString(),
      text: "",
      isCorrect: false,
    }
    setOptions([...options, newOption])
  }

  const removeOption = (id: string) => {
    setOptions(options.filter((option) => option.id !== id))
  }

  const updateOption = (id: string, text: string) => {
    setOptions(options.map((option) => (option.id === id ? { ...option, text } : option)))
  }

  const setCorrectOption = (id: string) => {
    setOptions(options.map((option) => ({ ...option, isCorrect: option.id === id })))
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <h1 className="text-white text-2xl font-bold">Add Question</h1>
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-2 px-4 py-2 text-white hover:text-orange-primary transition-colors"
          >
            {isCollapsed ? "Expand" : "Collapse"}
          </button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Side - Question Editor */}
          <div className="col-span-8">
            <div className="bg-secondary rounded-xl p-6 border border-dark-border">
              <h2 className="text-white text-xl font-semibold mb-6">Multiple Choice Question (MCQ)</h2>

              {/* Rich Text Editor Toolbar */}
              <div className="flex items-center gap-2 mb-4 p-2 bg-dark-card rounded-lg border border-dark-border">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <Bold size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <Italic size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <Underline size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <Strikethrough size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <Type size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <Link size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <Clock size={16} />
                </button>
                <div className="w-px h-6 bg-gray-600 mx-2"></div>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <AlignLeft size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <AlignCenter size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <AlignRight size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <List size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  <ListOrdered size={16} />
                </button>
              </div>

              {/* Question Text Area */}
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full h-32 bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="Enter your question here..."
              />

              {/* Options */}
              <div className="mt-6 space-y-4">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="correctOption"
                      checked={option.isCorrect}
                      onChange={() => setCorrectOption(option.id)}
                      className="w-4 h-4 text-orange-500 bg-dark-card border-gray-600 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) => updateOption(option.id, e.target.value)}
                      className="flex-1 bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Enter option text"
                    />
                    <button
                      onClick={() => removeOption(option.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Option Button */}
              <button
                onClick={addOption}
                className="flex items-center gap-2 mt-4 px-4 py-2 text-orange-primary hover:text-orange-hover transition-colors"
              >
                <Plus size={16} />
                Add Option
              </button>
            </div>
          </div>

          {/* Right Side - Question Settings */}
          <div className="col-span-4">
            <div className="bg-secondary rounded-xl p-6 border border-dark-border space-y-6">
              {/* Coding Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Coding</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">{"</>"}</span>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Subject:</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Security">Security</option>
                </select>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Topic:</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="UI Design">UI Design</option>
                  <option value="UX Design">UX Design</option>
                  <option value="Interactive Design">Interactive Design</option>
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="MCQS">MCQS</option>
                  <option value="Text">Text</option>
                  <option value="Code">Code</option>
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Difficulty</label>
                <div className="flex gap-2">
                  {["Easy", "Medium", "Hard"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        difficulty === level
                          ? level === "Easy"
                            ? "bg-green-primary text-white"
                            : level === "Medium"
                              ? "bg-yellow-primary text-white"
                              : "bg-red-primary text-white"
                          : "bg-dark-card text-gray-400 hover:text-white"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Status</label>
                <div className="flex gap-2">
                  {["Draft", "Published"].map((statusOption) => (
                    <button
                      key={statusOption}
                      onClick={() => setStatus(statusOption)}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        status === statusOption
                          ? statusOption === "Draft"
                            ? "bg-purple-primary text-white"
                            : "bg-green-primary text-white"
                          : "bg-dark-card text-gray-400 hover:text-white"
                      }`}
                    >
                      {statusOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Marks */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Marks</label>
                <input
                  type="text"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="05"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 transition-all">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
