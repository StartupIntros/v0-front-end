"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Brain, Send, User, Minimize2, Maximize2, X, Paperclip, Download, FileText, Upload } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  attachments?: FileAttachment[]
}

interface FileAttachment {
  name: string
  size: number
  type: string
  url: string
}

export function FundyAIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hi! I'm Fundy AI, your personal startup advisor. I can help you with fundraising strategy, pitch deck reviews, financial modeling, and more. What can I help you with today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (message: string, attachments?: FileAttachment[]) => {
    if (!message.trim() && !attachments?.length) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message || "📎 File uploaded",
      timestamp: new Date(),
      attachments,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(message, attachments)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userMessage: string, attachments?: FileAttachment[]): Message => {
    const lowerMessage = userMessage.toLowerCase()

    if (attachments?.length) {
      const fileTypes = attachments.map((f) => f.type).join(", ")
      return {
        id: Date.now().toString(),
        type: "bot",
        content: `I've analyzed your uploaded files (${fileTypes}). Based on the documents, I can see some areas for improvement. Would you like me to provide specific feedback on your pitch deck structure, financial projections, or overall fundraising strategy?`,
        timestamp: new Date(),
      }
    }

    if (lowerMessage.includes("pitch") || lowerMessage.includes("deck")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Great! I'd love to help with your pitch deck. A strong pitch deck should tell a compelling story in 10-12 slides. Key elements include: Problem, Solution, Market Size, Business Model, Traction, Team, and Ask. Would you like me to review your current deck or help you create one from scratch?",
        timestamp: new Date(),
      }
    } else if (lowerMessage.includes("fund") || lowerMessage.includes("raise")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Fundraising is a critical milestone! Let me help you prepare. First, what stage are you at? Pre-seed, seed, or Series A? Also, what's your current MRR, user growth rate, and how much are you looking to raise?",
        timestamp: new Date(),
      }
    } else if (lowerMessage.includes("financial") || lowerMessage.includes("model")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Financial modeling is crucial for fundraising success. I can help you build a 3-year financial projection including revenue forecasts, expense planning, and cash flow analysis. Do you have existing financials I can review, or should we start from scratch?",
        timestamp: new Date(),
      }
    } else {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "I'm here to help with all aspects of your startup journey. I can assist with pitch deck reviews, financial modeling, fundraising strategy, market analysis, and more. What specific challenge are you facing right now?",
        timestamp: new Date(),
      }
    }
  }

  const handleFileUpload = (files: FileList) => {
    const fileAttachments: FileAttachment[] = Array.from(files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    }))

    handleSendMessage("", fileAttachments)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Brain className="w-6 h-6 text-white" />
        </Button>
        <div className="absolute -top-12 right-0 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
          Ask Fundy AI
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}>
        <CardHeader className="pb-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Brain className="w-5 h-5 mr-2" />
              Fundy AI
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white border-white/30">
                Beta
              </Badge>
            </CardTitle>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {dragActive && (
                <div className="absolute inset-4 border-2 border-dashed border-blue-400 bg-blue-50 rounded-lg flex items-center justify-center z-10">
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-blue-600 font-medium">Drop files here to upload</p>
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] ${message.type === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`flex items-start space-x-2 ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        }`}
                      >
                        {message.type === "user" ? <User className="w-4 h-4" /> : <Brain className="w-4 h-4" />}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>

                        {/* File attachments */}
                        {message.attachments && message.attachments.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {message.attachments.map((file, index) => (
                              <div key={index} className="flex items-center space-x-2 bg-white/10 rounded p-2">
                                <FileText className="w-4 h-4" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium truncate">{file.name}</p>
                                  <p className="text-xs opacity-75">{formatFileSize(file.size)}</p>
                                </div>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <Download className="w-3 h-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about fundraising, pitch decks, financials..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                    className="pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                  />
                </div>
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Upload pitch decks, financials, or other documents for AI analysis
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
