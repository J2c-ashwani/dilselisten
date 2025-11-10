"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatSession } from "@/components/chat-session"
import { VoiceCallSession } from "@/components/voice-call-session"
import { VideoCallSession } from "@/components/video-call-session"

interface SessionRecord {
  id: string
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

export default function SessionsPage() {
  const [sessions, setSessions] = useState<SessionRecord[]>([
    {
      id: "1",
      listener: { name: "Priya", image: "/placeholder.svg" },
      type: "chat",
      duration: 30,
      status: "completed",
      scheduledTime: new Date(Date.now() - 86400000),
      price: 149,
    },
  ])

  const [activeSession, setActiveSession] = useState<SessionRecord | null>(null)
  const [sessionType, setSessionType] = useState<"chat" | "voice" | "video" | null>(null)

  const handleStartSession = (session: SessionRecord, type: "chat" | "voice" | "video") => {
    setActiveSession(session)
    setSessionType(type)
  }

  const handleCloseSession = () => {
    setActiveSession(null)
    setSessionType(null)
  }

  const activeSessions = sessions.filter((s) => s.status === "active")
  const pastSessions = sessions.filter((s) => s.status === "completed")

  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">My Sessions</h1>
          <p className="text-muted-foreground text-lg">Manage and join your listening sessions</p>
        </div>
      </section>

      <section className="py-12 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Active Sessions */}
          {activeSessions.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Active Sessions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {activeSessions.map((session) => (
                  <Card key={session.id} className="p-6 border-2 border-green-500/50 bg-green-500/5 rounded-2xl">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-green-600">Session Active</h3>
                        <p className="text-sm text-muted-foreground">
                          {session.type === "chat" && "Chat Session"}
                          {session.type === "voice" && "Voice Call"}
                          {session.type === "video" && "Video Call"}
                        </p>
                      </div>
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <p>
                        <span className="font-semibold">Listener:</span> {session.listener.name}
                      </p>
                      <p>
                        <span className="font-semibold">Duration:</span> {session.duration} minutes
                      </p>
                      <p>
                        <span className="font-semibold">Price:</span> ₹{session.price}
                      </p>
                    </div>

                    <Button
                      onClick={() => handleStartSession(session, session.type)}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Join Session
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Past Sessions */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Session History</h2>
            {pastSessions.length > 0 ? (
              <div className="space-y-3">
                {pastSessions.map((session) => (
                  <Card key={session.id} className="p-4 flex items-center justify-between rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        {session.type === "chat" && "💬"}
                        {session.type === "voice" && "🎙️"}
                        {session.type === "video" && "📹"}
                      </div>
                      <div>
                        <p className="font-semibold">{session.listener.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {session.type === "chat" && "Chat Session"} • {session.scheduledTime.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{session.price}</p>
                      <p className="text-sm text-muted-foreground">{session.duration} mins</p>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center bg-muted/20 rounded-2xl">
                <p className="text-muted-foreground">No past sessions yet. Book your first session!</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Active Session Components */}
      {activeSession && sessionType === "chat" && (
        <ChatSession sessionId={activeSession.id} listener={activeSession.listener} onClose={handleCloseSession} />
      )}
      {activeSession && sessionType === "voice" && (
        <VoiceCallSession sessionId={activeSession.id} listener={activeSession.listener} onClose={handleCloseSession} />
      )}
      {activeSession && sessionType === "video" && (
        <VideoCallSession sessionId={activeSession.id} listener={activeSession.listener} onClose={handleCloseSession} />
      )}

      <Footer />
    </main>
  )
}
