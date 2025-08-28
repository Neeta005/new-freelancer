"use client"

import { useState } from "react"
import { ArrowLeft, Download } from "lucide-react"
import { ChevronDown, ChevronRight } from "lucide-react"

interface QuestionPreviewProps {
  onBack: () => void
}

export function QuestionPreview({ onBack }: QuestionPreviewProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["fundamentals", "network-security"])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-secondary border-r border-dark-border p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-orange-primary rounded-lg">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-orange-primary text-sm font-bold">📊</span>
            </div>
            <span className="text-white font-medium">Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-dark-card rounded-lg transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-gray-400">📝</span>
            </div>
            <span className="text-gray-400">Syllabus</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-dark-card rounded-lg transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-gray-400">❓</span>
            </div>
            <span className="text-gray-400">Question Bank</span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-blue-600 rounded-lg">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 text-sm font-bold">📄</span>
            </div>
            <span className="text-white font-medium">Question Papers</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-dark-card rounded-lg transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-gray-400">🏆</span>
            </div>
            <span className="text-gray-400">Candidates</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-dark-card rounded-lg transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-gray-400">📊</span>
            </div>
            <span className="text-gray-400">Exams</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-dark-card rounded-lg transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-gray-400">📈</span>
            </div>
            <span className="text-gray-400">Results</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-dark-card rounded-lg transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-gray-400">📋</span>
            </div>
            <span className="text-gray-400">Exam Logs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-orange-primary transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-white text-2xl font-bold">Question Paper Preview</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400">50 Questions</span>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 transition-all">
              <Download size={16} />
              Export PDF
            </button>
          </div>
        </div>

        {/* Exam Info */}
        <div className="bg-blue-600 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Exam Title</h3>
              <p className="text-white text-lg font-semibold">Final Exam: Programming & Networking</p>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Target Audience</h3>
              <p className="text-white text-lg font-semibold">Students & Fresher</p>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {/* Fundamentals of Programming Section */}
          <div className="bg-secondary rounded-xl border border-dark-border overflow-hidden">
            <button
              onClick={() => toggleSection("fundamentals")}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-dark-card transition-colors"
            >
              <div className="flex items-center gap-3">
                {expandedSections.includes("fundamentals") ? (
                  <ChevronDown size={20} className="text-blue-400" />
                ) : (
                  <ChevronRight size={20} className="text-blue-400" />
                )}
                <h2 className="text-blue-400 text-lg font-semibold">Fundamentals Of Programming</h2>
              </div>
              <span className="text-gray-400 text-sm">5 Questions</span>
            </button>

            {expandedSections.includes("fundamentals") && (
              <div className="p-6 pt-0 space-y-6">
                {/* Question 1 */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q1) Which Of The Following Is An Example Of A Compiled Language?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q1" className="text-blue-500" />
                      Python
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q1" className="text-blue-500" />
                      Java
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q1" className="text-blue-500" />
                      C++
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q1" className="text-blue-500" />
                      JavaScript
                    </label>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q2) Explain The Difference Between A Compiler And An Interpreter.
                  </h3>
                  <textarea
                    className="w-full h-24 bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 resize-none"
                    placeholder="Write your answer here..."
                  />
                </div>

                {/* Question 3 - Code Question */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q3) Which Of The Following Python Snippets Will Correctly Print Numbers From 1 To 5 (Inclusive)?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="flex items-start gap-2 text-gray-300">
                        <input type="radio" name="q3" className="text-blue-500 mt-1" />
                        <div className="bg-dark-card p-3 rounded-lg border border-green-500">
                          <div className="text-green-400 text-xs mb-1">Python</div>
                          <code className="text-green-300 text-sm">
                            for i in range(1, 6):
                            <br />
                            &nbsp;&nbsp;print(i)
                          </code>
                        </div>
                      </label>

                      <label className="flex items-start gap-2 text-gray-300">
                        <input type="radio" name="q3" className="text-blue-500 mt-1" />
                        <div className="bg-dark-card p-3 rounded-lg border border-green-500">
                          <div className="text-green-400 text-xs mb-1">Python</div>
                          <code className="text-green-300 text-sm">
                            while i &lt; 6:
                            <br />
                            &nbsp;&nbsp;print(i)
                            <br />
                            &nbsp;&nbsp;i += 1
                          </code>
                        </div>
                      </label>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-start gap-2 text-gray-300">
                        <input type="radio" name="q3" className="text-blue-500 mt-1" />
                        <div className="bg-dark-card p-3 rounded-lg border border-green-500">
                          <div className="text-green-400 text-xs mb-1">Python</div>
                          <code className="text-green-300 text-sm">
                            for i in range(0, 5):
                            <br />
                            &nbsp;&nbsp;print(i)
                          </code>
                        </div>
                      </label>

                      <label className="flex items-start gap-2 text-gray-300">
                        <input type="radio" name="q3" className="text-blue-500 mt-1" />
                        <div className="bg-dark-card p-3 rounded-lg border border-green-500">
                          <div className="text-green-400 text-xs mb-1">Python</div>
                          <code className="text-green-300 text-sm">
                            for i in range(1, 5):
                            <br />
                            &nbsp;&nbsp;print(i)
                          </code>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Question 4 - Code Output */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q4) What Will Be The Output Of The Following Code (In Python)?
                  </h3>
                  <div className="bg-dark-card p-4 rounded-lg border border-green-500 mb-4">
                    <div className="text-green-400 text-xs mb-2">Python</div>
                    <code className="text-green-300">
                      x = 5<br />y = 3<br />
                      print(x // y)
                    </code>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q4" className="text-blue-500" />
                      2.5
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q4" className="text-blue-500" />2
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q4" className="text-blue-500" />3
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="q4" className="text-blue-500" />
                      2.0
                    </label>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q5) Name Three Data Types Commonly Used In Programming.
                  </h3>
                  <textarea
                    className="w-full h-24 bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 resize-none"
                    placeholder="Write your answer here..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Network Security Section */}
          <div className="bg-secondary rounded-xl border border-dark-border overflow-hidden">
            <button
              onClick={() => toggleSection("network-security")}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-dark-card transition-colors"
            >
              <div className="flex items-center gap-3">
                {expandedSections.includes("network-security") ? (
                  <ChevronDown size={20} className="text-orange-400" />
                ) : (
                  <ChevronRight size={20} className="text-orange-400" />
                )}
                <h2 className="text-orange-400 text-lg font-semibold">Network Security</h2>
              </div>
              <span className="text-gray-400 text-sm">5 Questions</span>
            </button>

            {expandedSections.includes("network-security") && (
              <div className="p-6 pt-0 space-y-6">
                {/* Question 1 */}
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q1) Which Of The Following Is An Example Of A Strong Password?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="ns1" className="text-orange-500" />
                      Password123
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="ns1" className="text-orange-500" />
                      John1990
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="ns1" className="text-orange-500" />
                      $Tr0ng_P@ss#45
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="ns1" className="text-orange-500" />
                      Qwerty
                    </label>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q2) What Is The Difference Between Symmetric And Asymmetric Encryption?
                  </h3>
                  <textarea
                    className="w-full h-24 bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 resize-none"
                    placeholder="Write your answer here..."
                  />
                </div>

                {/* Question 3 */}
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q3) Which Of The Following Best Explains The Concept Of Encapsulation In Object-Oriented Programming
                    (OOP)?
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-start gap-2 text-gray-300">
                      <input type="radio" name="ns3" className="text-orange-500 mt-1" />
                      <span>
                        Encapsulation Means Breaking A Program Into Multiple Functions So That Each Function Can Handle
                        A Specific Task. This Approach Helps In Modular Programming And Allows For Code Reuse And A
                        Hierarchical Structure In The Program.
                      </span>
                    </label>
                    <label className="flex items-start gap-2 text-gray-300">
                      <input type="radio" name="ns3" className="text-orange-500 mt-1" />
                      <span>
                        Encapsulation Refers To The Process Of Binding Data (Variables) And The Methods (Functions) That
                        Operate On That Data Into A Single Unit, Typically A Class. It Also Restricts Direct Access To
                        Some Of The Object's Components, Which Is Achieved Through Access Modifiers Like Private,
                        Protected, And Public.
                      </span>
                    </label>
                    <label className="flex items-start gap-2 text-gray-300">
                      <input type="radio" name="ns3" className="text-orange-500 mt-1" />
                      <span>
                        Encapsulation In When Inheritance Allows A Class To Inherit Properties And Methods From A Single
                        Function So That Function Can Handle A Specific Task. This Approach Helps In Modular Programming
                        And Allows For Code Reuse And A Hierarchical Structure In The Program.
                      </span>
                    </label>
                    <label className="flex items-start gap-2 text-gray-300">
                      <input type="radio" name="ns3" className="text-orange-500 mt-1" />
                      <span>
                        Encapsulation Means Writing All Your Program Logic Inside A Single Function So That Function Can
                        Handle A Specific Task. This Approach Helps In Modular Programming And Allows For Code Reuse And
                        Unnecessary Complexity.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q4) Two-Factor Authentication Adds An Extra Layer Of Security Beyond Just A Password.
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="ns4" className="text-orange-500" />
                      True
                    </label>
                    <label className="flex items-center gap-2 text-gray-300">
                      <input type="radio" name="ns4" className="text-orange-500" />
                      False
                    </label>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-white font-medium mb-3">
                    Q5) What Is The Role Of Intrusion Detection Systems (IDS) In Network Security?
                  </h3>
                  <textarea
                    className="w-full h-32 bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 resize-none"
                    placeholder="Write your answer here..."
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 transition-all">
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}
