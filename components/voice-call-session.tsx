"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface VoiceCallSessionProps {
  sessionId: string
  listener: {
    name: string
  }
  onClose: () => void
}

export function VoiceCallSession({ sessionId, listener, onClose }: VoiceCallSessionProps) {
  const [callTime, setCallTime] = useState(0)
  const [isCallActive, setIsCallActive] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (!isCallActive) return

    const interval = setInterval(() => {
      setCallTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isCallActive])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-gradient-to-b from-primary/20 to-background rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          {/* Listener Avatar */}
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-5xl animate-pulse">
            🎙️
          </div>

          {/* Listener Name */}
          <h2 className="text-2xl font-bold mb-2">{listener.name}</h2>
          <p className="text-muted-foreground mb-8">Voice Call</p>

          {/* Call Timer */}
          <div className="text-4xl font-mono font-bold text-primary mb-8">{formatTime(callTime)}</div>

          {/* Call Status */}
          <p className="text-green-500 font-semibold mb-12 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Connected
          </p>

          {/* Call Controls */}
          <div className="flex gap-4 mb-8">
            <Button
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                isMuted
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              {isMuted ? "🔇" : "🔊"}
            </Button>

            <Button
              onClick={() => {
                setIsCallActive(false)
                onClose()
              }}
              className="w-14 h-14 rounded-full bg-destructive hover:bg-destructive/90 text-white flex items-center justify-center text-2xl"
            >
              📞
            </Button>
          </div>

          {isMuted && <p className="text-xs text-muted-foreground">Microphone Muted</p>}
        </div>
      </Card>
    </div>
  )
}
