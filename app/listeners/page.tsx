"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListenerCard } from "@/components/listener-card"
import { ListenerProfile } from "@/components/listener-profile"
import { SessionBookingModal } from "@/components/session-booking-modal"

// Mock listener data
const listenersData = [
  {
    id: 1,
    name: "Priya",
    gender: "Female",
    ageRange: "28-32",
    image: "/placeholder.svg?key=listener1",
    languages: ["English", "Hindi"],
    tags: ["Empathetic", "Breakup Support", "Relationship Clarity"],
    bio: "With 5+ years of experience in active listening, I specialize in helping people navigate relationship challenges and emotional turbulence. I believe in the power of being truly heard.",
    price: 199,
    availability: ["Morning", "Evening"],
    rating: 4.8,
    sessions: 120,
  },
  {
    id: 2,
    name: "Arjun",
    gender: "Male",
    ageRange: "30-35",
    image: "/placeholder.svg?key=listener2",
    languages: ["English", "Hindi", "Marathi"],
    tags: ["Thoughtful", "Pre-Marriage", "Life Choices"],
    bio: "I'm a dedicated listener who loves helping people think through major life decisions. My calm demeanor and genuine interest in your story make me a trusted confidant.",
    price: 199,
    availability: ["Evening", "Weekend"],
    rating: 4.9,
    sessions: 95,
  },
  {
    id: 3,
    name: "Aisha",
    gender: "Female",
    ageRange: "26-30",
    image: "/placeholder.svg?key=listener3",
    languages: ["English", "Hindi"],
    tags: ["Warm", "Loneliness Support", "Emotional Clarity"],
    bio: "Having walked through similar struggles, I understand the pain of feeling alone. I create a safe space where your feelings matter and are validated.",
    price: 249,
    availability: ["Morning", "Evening", "Weekend"],
    rating: 4.7,
    sessions: 150,
  },
  {
    id: 4,
    name: "Rohit",
    gender: "Male",
    ageRange: "32-38",
    image: "/placeholder.svg?key=listener4",
    languages: ["English", "Hindi", "Gujarati"],
    tags: ["Practical", "Breakup Support", "Career-Life Balance"],
    bio: "As someone who has gone through personal transformation, I help others find clarity during emotional storms. Your growth is my purpose.",
    price: 199,
    availability: ["Morning", "Evening"],
    rating: 4.6,
    sessions: 110,
  },
  {
    id: 5,
    name: "Maya",
    gender: "Female",
    ageRange: "24-28",
    image: "/placeholder.svg?key=listener5",
    languages: ["English", "Hindi"],
    tags: ["Energetic", "Overthinking", "Young Adult Life"],
    bio: "I bring energy and hope to conversations. I love helping young adults navigate confusion and find their unique path forward.",
    price: 149,
    availability: ["Evening", "Weekend"],
    rating: 4.8,
    sessions: 85,
  },
  {
    id: 6,
    name: "Vikram",
    gender: "Male",
    ageRange: "35-42",
    image: "/placeholder.svg?key=listener6",
    languages: ["English", "Hindi"],
    tags: ["Experienced", "Marriage Support", "Life Wisdom"],
    bio: "With life experience and genuine care, I help people navigate complex emotions and relationship dynamics with wisdom and compassion.",
    price: 349,
    availability: ["Morning", "Evening"],
    rating: 4.9,
    sessions: 200,
  },
]

export default function ListenersPage() {
  const [selectedListener, setSelectedListener] = useState<(typeof listenersData)[0] | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("")
  const [sortBy, setSortBy] = useState("rating")
  const [showBookingModal, setShowBookingModal] = useState(false)

  const allTags = [...new Set(listenersData.flatMap((l) => l.tags))]

  let filtered = listenersData
  if (selectedLanguage) {
    filtered = filtered.filter((l) => l.languages.includes(selectedLanguage))
  }
  if (selectedTopic) {
    filtered = filtered.filter((l) => l.tags.includes(selectedTopic))
  }

  if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating)
  } else if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price)
  }

  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Our Listeners</h1>
          <p className="text-muted-foreground text-lg">
            Browse profiles and choose the listener who feels right for you
          </p>
        </div>
      </section>

      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold">
            <span>🔍</span>
            Filters
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="">All Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
                <option value="Gujarati">Gujarati</option>
              </select>
            </div>

            {/* Topic Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Topic</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="">All Topics</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {selectedListener ? (
            <ListenerProfile
              listener={selectedListener}
              onClose={() => setSelectedListener(null)}
              onBook={() => {
                setShowBookingModal(true)
              }}
            />
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filtered.length} listener{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {filtered.map((listener) => (
                  <ListenerCard key={listener.id} listener={listener} onSelect={() => setSelectedListener(listener)} />
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No listeners match your filters. Try adjusting them!</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {showBookingModal && selectedListener && (
        <SessionBookingModal
          listener={selectedListener}
          onClose={() => setShowBookingModal(false)}
          onBook={async (sessionData) => {
            try {
              const response = await fetch("/api/sessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  clientId: "current_user", // In real app, get from auth
                  ...sessionData,
                }),
              })
              if (response.ok) {
                alert("Session booked successfully!")
                setShowBookingModal(false)
                setSelectedListener(null)
              }
            } catch (error) {
              alert("Failed to book session")
            }
          }}
        />
      )}

      <Footer />
    </main>
  )
}
