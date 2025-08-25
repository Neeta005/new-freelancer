"use client"

import type React from "react"
import { Upload, File, X } from "lucide-react"
import type { UploadedFile } from "@/data/syllabus"

interface FileUploadSectionProps {
  uploadedFiles: UploadedFile[]
  onFilesChange: (files: UploadedFile[]) => void
}

export function FileUploadSection({ uploadedFiles, onFilesChange }: FileUploadSectionProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newFiles: UploadedFile[] = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      newFiles.push({
        id: Date.now().toString() + i,
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      })
    }
    onFilesChange([...uploadedFiles, ...newFiles])
  }

  const removeFile = (fileId: string) => {
    onFilesChange(uploadedFiles.filter((file) => file.id !== fileId))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-foreground text-lg font-semibold mb-4">Uploaded Files</h3>

        {uploadedFiles.length > 0 ? (
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm">Files you want to add</p>
            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between bg-muted p-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <File className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground text-sm">{file.name}</span>
                    <span className="text-muted-foreground text-xs">({file.size})</span>
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No files uploaded yet</p>
        )}
      </div>

      <div className="border-2 border-dashed border-orange-600 rounded-lg p-8 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Upload className="w-12 h-12 text-muted-foreground" />
          <p className="text-foreground font-medium">Drop your file or click here to upload the file</p>
          <p className="text-muted-foreground text-sm">Supported formats: PDF, DOC, DOCX</p>
          <label className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-6 py-2 rounded-md cursor-pointer transition-colors">
            <input type="file" className="hidden" multiple onChange={handleFileUpload} accept=".pdf,.doc,.docx" />
            Upload Files
          </label>
        </div>
      </div>
    </div>
  )
}
