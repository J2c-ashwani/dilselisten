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

interface ListenerCardProps {
  listener: Listener
  onSelect: () => void
}

export function ListenerCard({ listener, onSelect }: ListenerCardProps) {
  const stars = "★".repeat(Math.round(listener.rating)) + "☆".repeat(5 - Math.round(listener.rating))

  return (
    <div
      onClick={onSelect}
      className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-card rounded-2xl border border-border p-6 group"
    >
      <div className="mb-4 h-48 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-xl overflow-hidden">
        <img
          src={listener.image || "/placeholder.svg"}
          alt={listener.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-1">{listener.name}</h3>
        <p className="text-sm text-muted-foreground">
          {listener.gender} • {listener.ageRange}
        </p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-primary font-semibold">{stars}</span>
        <span className="text-sm font-semibold">{listener.rating}</span>
        <span className="text-xs text-muted-foreground">({listener.sessions} sessions)</span>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-muted-foreground mb-2">Languages</p>
        <div className="flex flex-wrap gap-1">
          {listener.languages.map((lang) => (
            <span key={lang} className="px-2 py-1 bg-secondary/30 text-xs rounded-full">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {listener.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-accent/50 text-xs rounded-full text-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onSelect()
        }}
        className="btn-glow w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
      >
        View Profile
      </button>
    </div>
  )
}
