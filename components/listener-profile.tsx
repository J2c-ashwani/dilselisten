"use client"

interface Listener {
  id: number
  name: string
  gender: string
  ageRange: string
  image: string
  languages: string[]
  tags: string[]
  bio: string
  price: number
  availability: string[]
  rating: number
  sessions: number
}

interface ListenerProfileProps {
  listener: Listener
  onClose: () => void
  onBook?: () => void
}

export function ListenerProfile({ listener, onClose, onBook }: ListenerProfileProps) {
  const stars = "★".repeat(Math.round(listener.rating)) + "☆".repeat(5 - Math.round(listener.rating))

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Listener Profile</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors text-xl"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-48 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 overflow-hidden mb-4">
                <img
                  src={listener.image || "/placeholder.svg"}
                  alt={listener.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  {listener.gender} • {listener.ageRange}
                </p>
              </div>
            </div>

            <div className="flex-grow">
              <h1 className="text-4xl font-bold mb-2">{listener.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-semibold">{stars}</span>
                <span className="font-semibold">{listener.rating}</span>
                <span className="text-muted-foreground">({listener.sessions} completed sessions)</span>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">{listener.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {listener.languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-secondary/30 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {listener.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/50 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Availability</h3>
                <div className="flex flex-wrap gap-2">
                  {listener.availability.map((slot) => (
                    <span
                      key={slot}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-primary">₹{listener.price}</span>
                <span className="text-muted-foreground">/ 30 minutes</span>
              </div>

              <button
                onClick={onBook}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 text-lg transition-all duration-300"
              >
                Book this Listener
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
