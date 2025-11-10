"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Pricing() {
  const sessions = [
    {
      name: "Express Chat",
      duration: "30 mins",
      price: 149,
      description: "Anonymous text-based chat",
      features: ["Text-based conversation", "Anonymous", "Flexible listener selection", "Session history"],
    },
    {
      name: "Heart Talk",
      duration: "30 mins",
      price: 199,
      description: "1-to-1 audio conversation",
      popular: true,
      features: [
        "Audio or chat",
        "Personal listener match",
        "Flexible availability",
        "Full confidentiality",
        "Priority support",
      ],
    },
    {
      name: "Deep Connection",
      duration: "60 mins",
      price: 349,
      description: "Extended, calm discussion",
      features: [
        "Full hour with your listener",
        "Deep emotional support",
        "Extended comfort time",
        "Listener continuity",
        "Priority booking",
      ],
    },
  ]

  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground text-lg">Choose the session that works best for you</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sessions.map((session, idx) => (
              <div
                key={idx}
                className={`relative transition-all duration-300 hover:shadow-lg rounded-2xl p-8 border ${
                  session.popular
                    ? "border-primary bg-primary/5 transform md:scale-105 shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {session.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{session.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{session.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">₹{session.price}</span>
                    <span className="text-muted-foreground">/ {session.duration}</span>
                  </div>
                </div>

                <Link
                  href="/listeners"
                  className={`btn-glow block w-full py-3 rounded-lg font-semibold text-center transition-all mb-8 ${
                    session.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  }`}
                >
                  Book Now
                </Link>

                <div>
                  <p className="text-sm font-semibold mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {session.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-accent/30 rounded-2xl p-8 text-center">
            <p className="text-lg mb-4">
              <span className="font-semibold">Every session is private, safe, and confidential.</span> You can choose
              your listener or let us assign one for you based on your needs.
            </p>
            <p className="text-muted-foreground">
              Multiple sessions available at discounted rates. Contact us for bulk session packages.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Session Types</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Express Chat</th>
                  <th className="text-center py-4 px-4 font-semibold">Heart Talk</th>
                  <th className="text-center py-4 px-4 font-semibold">Deep Connection</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Duration", express: "30 min", heart: "30 min", deep: "60 min" },
                  { feature: "Audio Support", express: "No", heart: "Yes", deep: "Yes" },
                  { feature: "Text Chat", express: "Yes", heart: "Yes", deep: "Yes" },
                  { feature: "Anonymity", express: "Yes", heart: "Optional", deep: "Optional" },
                  { feature: "Same Listener Option", express: "No", heart: "Yes", deep: "Yes" },
                  { feature: "Listener Selection", express: "Random", heart: "Your Choice", deep: "Your Choice" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/20">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.express}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.heart}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start feeling heard?</h2>
          <Link
            href="/listeners"
            className="btn-glow inline-block px-10 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
          >
            Choose Your Listener
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
