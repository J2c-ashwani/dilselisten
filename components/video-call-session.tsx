"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface VideoCallSessionProps {
  sessionId: string
  listener: {
    name: string
  }
  onClose: () => void
}

export function VideoCallSession({ sessionId, listener, onClose }: VideoCallSessionProps) {
  const [callTime, setCallTime] = useState(0)
  const [isCallActive, setIsCallActive] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isCallActive) return

    const interval = setInterval(() => {
      setCallTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isCallActive])

  useEffect(() => {
    // Request camera access
    const setupVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: !isMuted,
        })

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream
        }
      } catch (error) {
        console.error("Error accessing camera:", error)
      }
    }

    if (isVideoOn && isCallActive) {
      setupVideo()
    }

    return () => {
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        const tracks = (localVideoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [isVideoOn, isCallActive, isMuted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-4xl h-[600px] bg-black rounded-2xl overflow-hidden flex flex-col">
        {/* Video Container */}
        <div className="flex-1 relative flex gap-2 p-2 bg-black">
          {/* Remote Video (Listener) */}
          <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center relative">
            <div className="w-full h-full bg-gradient-to-b from-primary/20 to-background flex items-center justify-center text-6xl">
              📹
            </div>
            <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full">
              <p className="text-white text-sm font-semibold">{listener.name}</p>
            </div>
          </div>

          {/* Local Video (Client) */}
          <div className="w-32 h-32 bg-gray-900 rounded-lg overflow-hidden border-2 border-primary">
            {isVideoOn ? (
              <video ref={localVideoRef} autoPlay muted className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-secondary/20 to-background flex items-center justify-center text-4xl">
                📹
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-black/80 backdrop-blur-sm border-t border-white/10 p-4 flex justify-between items-center">
          {/* Timer */}
          <div className="text-white text-lg font-mono font-bold">{formatTime(callTime)}</div>

          {/* Control Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={() => setIsMuted(!isMuted)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                isMuted ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white/20 hover:bg-white/30 text-white"
              }`}
              title="Toggle Microphone"
            >
              {isMuted ? "🔇" : "🎙️"}
            </Button>

            <Button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                !isVideoOn ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white/20 hover:bg-white/30 text-white"
              }`}
              title="Toggle Video"
            >
              {isVideoOn ? "📹" : "🚫"}
            </Button>

            <Button
              onClick={() => {
                setIsCallActive(false)
                onClose()
              }}
              className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center text-xl"
              title="End Call"
            >
              ☎️
            </Button>
          </div>

          {/* Empty space for alignment */}
          <div className="w-20"></div>
        </div>
      </div>
    </div>
  )
}
