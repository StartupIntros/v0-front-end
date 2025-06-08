"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, User } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  suggestions?: string[]
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hi! I'm your AI startup advisor. I can help you navigate your journey from ideation to funding. What stage are you at?",
      timestamp: new Date(),
      suggestions: ["I have an idea", "Building MVP", "Ready to raise funds", "Need market validation"],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(message)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("idea") || lowerMessage.includes("ideation")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Great! Having a solid idea is the first step. Let me help you validate it. What problem does your idea solve, and who is your target audience?",
        timestamp: new Date(),
        suggestions: ["Market research tips", "Competitor analysis", "Customer validation", "Business model canvas"],
      }
    } else if (lowerMessage.includes("mvp") || lowerMessage.includes("building")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Building an MVP is crucial! Focus on core features that solve your main problem. What's your current development timeline and what challenges are you facing?",
        timestamp: new Date(),
        suggestions: ["MVP best practices", "Technical roadmap", "User testing", "Metrics to track"],
      }
    } else if (lowerMessage.includes("fund") || lowerMessage.includes("raise")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Fundraising is exciting! Based on our analysis, you should have strong traction metrics, a clear business model, and a compelling pitch deck. What's your current MRR and user growth?",
        timestamp: new Date(),
        suggestions: ["Pitch deck review", "Investor matching", "Valuation guidance", "Due diligence prep"],
      }
    } else {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          "I understand. Let me provide some personalized guidance based on your situation. Can you tell me more about your current challenges or specific questions?",
        timestamp: new Date(),
        suggestions: ["Business strategy", "Product development", "Marketing advice", "Team building"],
      }
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center">
          <Bot className="w-5 h-5 mr-2 text-blue-600" />
          AI Startup Advisor
          <Badge variant="secondary" className="ml-2">
            Beta
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] ${message.type === "user" ? "order-2" : "order-1"}`}>
                <div
                  className={`flex items-start space-x-2 ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {message.type === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>

                {/* Suggestions */}
                {message.suggestions && message.type === "bot" && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-gray-600" />
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
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about your startup journey..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
          />
          <Button onClick={() => handleSendMessage(inputValue)} disabled={!inputValue.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
