// Route to manage session creation and retrieval
import { NextResponse } from "next/server"

// Mock database for sessions
const sessions: Map<string, any> = new Map()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { clientId, listenerId, sessionType, scheduledTime, duration, price } = body

    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const booking = {
      id: sessionId,
      clientId,
      listenerId,
      sessionType,
      scheduledTime: new Date(scheduledTime),
      duration,
      status: "pending",
      price,
      createdAt: new Date(),
    }

    sessions.set(sessionId, booking)

    return NextResponse.json({ success: true, sessionId, booking })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create session" }, { status: 400 })
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const clientId = searchParams.get("clientId")

    if (!clientId) {
      return NextResponse.json({ success: false, error: "clientId required" }, { status: 400 })
    }

    const userSessions = Array.from(sessions.values()).filter((s) => s.clientId === clientId)

    return NextResponse.json({ success: true, sessions: userSessions })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch sessions" }, { status: 400 })
  }
}
