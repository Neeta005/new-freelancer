"use client"

import { useState } from "react"
import { QuestionPaperCard } from "./question-paper-card"
import { Search, Plus, ChevronDown } from "lucide-react"
import { questionPapers } from "@/data/question-papers"  // <-- import your data

export function QuestionPapersGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("Latest")

  const handleEdit = (id: string) => {
  }

  const handleDelete = (id: string) => {
  }

  const handleTogglePublish = (id: string, published: boolean) => {
  }

  const handleViewQuestions = (id: string) => {
  }

  const handleCreateQuestionPaper = () => {
  }

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">
        <h1 className="text-2xl font-bold text-white">Question Papers</h1>
        <div className="flex items-center gap-4">
          <button className=" text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            <img src="\icons\image 1.png" alt="Custom Icon" width={20} height={20} />
          </button>

          <button
            onClick={handleCreateQuestionPaper}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-primary to-red-primary text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <Plus size={16} />
            Create Question Papers
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full">
        <div className="relative w-60">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-secondary border border-white rounded-full text-white placeholder-slate-300 focus:outline-none focus:border-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">Sort by</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-secondary border border-white rounded-lg px-4 py-2 pr-10 text-white focus:outline-none focus:border-white"
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
              <option value="Name">High Degree</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
              size={16}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questionPapers.map((paper) => (
          <QuestionPaperCard
            key={paper.id}
            {...paper}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onTogglePublish={handleTogglePublish}
            onViewQuestions={handleViewQuestions}
          />
        ))}
      </div>
    </div>
  )
}
