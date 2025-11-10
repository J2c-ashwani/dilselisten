"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  sender: "client" | "listener"
  text: string
  timestamp: Date
}

interface ChatSessionProps {
  sessionId: string
  listener: {
    name: string
    image: string
  }
  onClose: () => void
}

export function ChatSession({ sessionId, listener, onClose }: ChatSessionProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "listener",
      text: `Hi there! I'm ${listener.name}. I'm here to listen. What's on your mind today?`,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "client",
      text: inputValue,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputValue("")

    // Simulate listener response
    setTimeout(() => {
      const responses = [
        "That sounds really challenging. Can you tell me more about how that makes you feel?",
        "I understand. Thank you for sharing that with me.",
        "That's a lot to process. How are you coping with it?",
        "I'm here for you. What would help you feel better right now?",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "listener",
          text: randomResponse,
          timestamp: new Date(),
        },
      ])
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl h-[600px] bg-background rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-primary/10 border-b border-border p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">🎧</div>
            <div>
              <h3 className="font-semibold">{listener.name}</h3>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <button onClick={onClose} className="text-2xl hover:text-muted-foreground transition-colors">
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  msg.sender === "client"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border p-4 bg-background">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-primary hover:bg-primary/90 rounded-full px-6"
            >
              Send
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
