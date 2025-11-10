// Session and booking type definitions
export type SessionType = "chat" | "voice" | "video"

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  isListener: boolean
}

export interface Booking {
  id: string
  clientId: string
  listenerId: string
  sessionType: SessionType
  scheduledTime: Date
  duration: number // in minutes
  status: "pending" | "active" | "completed" | "cancelled"
  price: number
  notes?: string
  createdAt: Date
}

export interface Session {
  id: string
  booking: Booking
  client: User
  listener: User
  startTime: Date
  endTime?: Date
  messages?: ChatMessage[]
  recordingUrl?: string
}

export interface ChatMessage {
  id: string
  sessionId: string
  senderId: string
  message: string
  timestamp: Date
}
