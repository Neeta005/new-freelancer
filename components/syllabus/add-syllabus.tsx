"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Link from "next/link"
import { SectionForm } from "./section-form"
import { FileUploadSection } from "./file-upload-section"
import { SyllabusPreview } from "./syllabus-preview"
import {
  type Section,
  type UploadedFile,
  targetAudienceOptions,
  initialSections,
  gradientButtonStyle,
} from "@/data/syllabus"

export function AddSyllabus() {
  const [activeTab, setActiveTab] = useState<"manual" | "upload">("manual")
  const [subject, setSubject] = useState("")
  const [targetAudience, setTargetAudience] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [sections, setSections] = useState<Section[]>(initialSections)

  return (
    <div className="min-h-screen">
      <div className="bg-card rounded-lg p-6 max-w-none">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-6">Add Syllabus</h1>

          <div className="flex gap-0 mb-6">
            <button
              onClick={() => setActiveTab("manual")}
              className={`px-6 py-2 text-sm font-medium rounded-l-md transition-colors ${
                activeTab === "manual"
                  ? `text-white ${gradientButtonStyle}`
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              Manual
            </button>
            <button
              onClick={() => setActiveTab("upload")}
              className={`px-6 py-2 text-sm font-medium rounded-r-md transition-colors ${
                activeTab === "upload"
                  ? `text-white ${gradientButtonStyle}`
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              File Upload
            </button>
          </div>

          <div className="border-b border-border mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-card-foreground text-sm font-medium mb-2">Subject</label>
              <div className="relative w-full md:w-[260px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search syllabus..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-muted text-card-foreground placeholder-muted-foreground border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full md:w-auto">
                <label className="block text-card-foreground text-sm font-medium mb-2">Target Audience</label>
                <Select value={targetAudience} onValueChange={setTargetAudience}>
                  <SelectTrigger className="bg-muted border border-border text-card-foreground placeholder:text-muted-foreground rounded-full px-4 h-10 w-full md:w-[240px]">
                    <SelectValue placeholder="Select Audience" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border">
                    {targetAudienceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-card-foreground hover:bg-accent"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="border-b border-border mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 pr-0 lg:pr-8 border-r-0 lg:border-r border-border">
            {activeTab === "manual" ? (
              <SectionForm sections={sections} onSectionsChange={setSections} />
            ) : (
              <FileUploadSection uploadedFiles={uploadedFiles} onFilesChange={setUploadedFiles} />
            )}
          </div>

          <div className="flex-1 pl-0 lg:pl-8 mt-8 lg:mt-0">
            <h3 className="text-card-foreground text-lg font-semibold mb-4">Preview</h3>
            <SyllabusPreview
              subject={subject}
              targetAudience={targetAudience}
              sections={sections}
              uploadedFiles={uploadedFiles}
              activeTab={activeTab}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 pt-6 border-t border-border">
          <Link href="/syllabus">
            <Button className="bg-muted hover:bg-accent text-card-foreground px-8 py-2 h-10 w-full sm:w-auto">
              Cancel
            </Button>
          </Link>
          <Button className={`text-white px-8 py-2 h-10 w-full sm:w-auto ${gradientButtonStyle}`}>Add Syllabus</Button>
        </div>
      </div>
    </div>
  )
}
