
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! I'm your AI assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")

    // Simulate AI response (in a real app, this would call an AI API)
    setTimeout(() => {
      const aiResponse = {
        role: "system",
        content:
          "Thanks for your question. As an AI  assistant, I can provide general information.",
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 p-0 flex items-center justify-center"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-80 md:w-96 z-50 transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <Card className="shadow-xl border-slate-200 overflow-hidden flex flex-col h-[450px]">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <h3 className="font-medium">AI Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="h-8 w-8 text-white hover:bg-blue-700 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "max-w-[80%] p-3 rounded-lg",
                  message.role === "user"
                    ? "bg-blue-600 text-white ml-auto rounded-br-none"
                    : "bg-white text-slate-800 border border-slate-200 rounded-bl-none",
                )}
              >
                {message.content}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 bg-white">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your legal question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  )
}

