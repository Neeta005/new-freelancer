"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

type TemplateType = "xls" | "csv" | "google-sheet"

interface ImportCSVModalProps {
  isOpen: boolean
  onClose: () => void
  onTemplateSelect?: (type: TemplateType) => void
  onFileSelect?: (file: File) => void
}

export const ImportCSVModal: React.FC<ImportCSVModalProps> = ({ isOpen, onClose, onTemplateSelect, onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    if (e.type === "dragleave") setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const file = e.dataTransfer?.files?.[0]
    if (file) onFileSelect?.(file)
  }

  const handleChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) onFileSelect?.(file)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
      <div className="relative w-[560px] rounded-2xl bg-gray-800 p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="mb-6 text-2xl font-bold text-white">Import CSV</h2>

        <div className="mb-6">
          <h3 className="mb-4 text-lg font-semibold text-white">Download Templates</h3>
          <div className="flex gap-3">
            {["xls", "csv", "google-sheet"].map((t) => (
              <button
                key={t}
                onClick={() => onTemplateSelect?.(t as TemplateType)}
                className="flex-1 rounded-lg bg-green-600 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                {t === "xls" && "XLS File"}
                {t === "csv" && "CSV File"}
                {t === "google-sheet" && "Google Sheet"}
              </button>
            ))}
          </div>
        </div>

        <label
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative block cursor-pointer overflow-hidden rounded-xl p-8 text-center transition-colors border-2 border-dashed border-orange-500
            ${dragActive ? "bg-orange-500/10" : "bg-transparent"}`}
        >
          <input type="file" accept=".csv,.xls,.xlsx" className="hidden" onChange={handleChoose} />

          <div className="relative z-10 flex flex-col items-center">
            <p className="mb-4 text-lg font-semibold text-white">Pick the CSV file you want to add</p>

            <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-green-600/10">
              <img src="\icons\uploadicon.png" alt="Upload file" className="size-12" />
            </div>

            <p className="text-sm text-gray-400">
              Drag your file or <span className="font-semibold text-orange-500 underline">click here</span> to upload
              the file
            </p>
          </div>
        </label>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-600 px-6 py-2 text-gray-300 transition-colors hover:bg-gray-700"
          >
            Cancel
          </button>
          <button className="rounded-lg bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 font-semibold text-white transition-opacity hover:opacity-90">
            Import
          </button>
        </div>
      </div>
    </div>
  )
}
