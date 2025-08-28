"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface EditTopicModalProps {
  isOpen: boolean
  onClose: () => void
  topic?: {
    subject: string
    name: string
    description?: string
  }
}

export function EditTopicModal({ isOpen, onClose, topic }: EditTopicModalProps) {
  const [topicName, setTopicName] = useState(topic?.name || "")
  const [description, setDescription] = useState(topic?.description || "")

  if (!isOpen) return null

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving topic:", { topicName, description })
    onClose()
  }

  const handleCancel = () => {
    setTopicName(topic?.name || "")
    setDescription(topic?.description || "")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md border border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-semibold">Edit Topic</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Subject Display */}
        <div className="mb-6">
          <span className="text-gray-400 text-sm">Subject</span>
          <div className="text-white font-medium mt-1">{topic?.subject || "Network Security"}</div>
        </div>

        {/* Topic Input */}
        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">Topic</label>
          <input
            type="text"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="Enter topic name"
          />
        </div>

        {/* Description Input */}
        <div className="mb-8">
          <label className="block text-white text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            placeholder="Enter Description"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleCancel}
            className="flex-1 bg-transparent border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-orange-600 transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
