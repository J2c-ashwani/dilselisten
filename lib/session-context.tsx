"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface SessionRecord {
  id: string
  listenerId: number
  listener: {
    name: string
    image: string
  }
  type: "chat" | "voice" | "video"
  duration: number
  status: "active" | "completed"
  scheduledTime: Date
  price: number
}

interface SessionContextType {
  sessions: SessionRecord[]
  addSession: (session: SessionRecord) => void
  updateSession: (id: string, updates: Partial<SessionRecord>) => void
  removeSession: (id: string) => void
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<SessionRecord[]>([])

  const addSession = (session: SessionRecord) => {
    setSessions([...sessions, session])
  }

  const updateSession = (id: string, updates: Partial<SessionRecord>) => {
    setSessions(sessions.map((s) => (s.id === id ? { ...s, ...updates } : s)))
  }

  const removeSession = (id: string) => {
    setSessions(sessions.filter((s) => s.id !== id))
  }

  return (
    <SessionContext.Provider value={{ sessions, addSession, updateSession, removeSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error("useSession must be used within SessionProvider")
  }
  return context
}
