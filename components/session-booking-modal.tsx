"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface SessionBookingModalProps {
  listener: {
    id: number
    name: string
    price: number
  }
  onClose: () => void
  onBook: (sessionData: any) => void
}

export function SessionBookingModal({ listener, onClose, onBook }: SessionBookingModalProps) {
  const [sessionType, setSessionType] = useState<"chat" | "voice" | "video">("chat")
  const [duration, setDuration] = useState(30)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const sessionTypes = [
    { id: "chat", name: "Chat Session", icon: "💬", description: "Text-based conversation" },
    { id: "voice", name: "Voice Call", icon: "🎙️", description: "Audio conversation" },
    { id: "video", name: "Video Call", icon: "📹", description: "Face-to-face video" },
  ]

  const calculatePrice = () => {
    const basePrice = listener.price
    return Math.round((basePrice / 30) * duration)
  }

  const handleBook = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select date and time")
      return
    }

    onBook({
      listenerId: listener.id,
      sessionType,
      duration,
      scheduledTime: `${selectedDate}T${selectedTime}`,
      price: calculatePrice(),
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg p-6 bg-background rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Book with {listener.name}</h2>
          <button onClick={onClose} className="text-2xl hover:text-muted-foreground transition-colors">
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Session Type Selection */}
          <div>
            <h3 className="font-semibold mb-3">Choose Session Type</h3>
            <div className="grid grid-cols-3 gap-3">
              {sessionTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSessionType(type.id as "chat" | "voice" | "video")}
                  className={`p-3 rounded-lg border-2 transition-all text-center ${
                    sessionType === type.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-2xl mb-1">{type.icon}</div>
                  <div className="text-xs font-semibold">{type.name}</div>
                  <div className="text-xs text-muted-foreground">{type.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Duration Selection */}
          <div>
            <h3 className="font-semibold mb-3">Duration</h3>
            <div className="flex gap-2">
              {[30, 60].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`flex-1 py-2 rounded-lg border-2 transition-all ${
                    duration === d ? "border-primary bg-primary/10" : "border-border"
                  }`}
                >
                  {d} mins
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Time</label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg"
              />
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-accent/30 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Price</span>
              <span className="text-2xl font-bold text-primary">₹{calculatePrice()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button onClick={handleBook} className="flex-1 bg-primary hover:bg-primary/90">
              Book Session
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
