import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "DilSe Listen - Talk to Someone About Breakups, Relationships & Stress",
  description:
    "Connect with empathetic listeners for private conversations about breakups, relationship stress, loneliness, anxiety & overthinking. 100% judgment-free emotional support.",
  openGraph: {
    title: "DilSe Listen - Private Emotional Support Platform",
    description:
      "Talk to someone about what's bothering you. Real listeners for breakups, relationships, stress, anxiety and emotional support.",
  },
  keywords:
    "breakup support, relationship stress, emotional support, talk to someone, anxiety help, loneliness support, overthinking help, marriage stress",
}

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section with Long-Tail Keywords */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Talk to Someone About Your Breakup, Relationship Stress, or Loneliness
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Connect with empathetic listeners for private, judgment-free conversations about what's really bothering
            you. Whether you're dealing with a breakup, marriage stress, anxiety, overthinking, or just feeling lonely -
            we're here to listen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/pricing"
              className="btn-glow px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 inline-block"
            >
              Start Talking Now
            </Link>
            <Link
              href="/listeners"
              className="btn-glow px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 inline-block border border-border"
            >
              Browse Listeners
            </Link>
          </div>

          <div className="relative h-64 md:h-96 bg-gradient-to-b from-secondary/20 to-transparent rounded-3xl overflow-hidden">
            <img
              src="/placeholder.svg?key=t4mc0"
              alt="People having a meaningful conversation about relationships and emotional support"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Why People Trust DilSe Listen for Emotional Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Breakup Support & Recovery",
                desc: "Navigate heartbreak, healing after breakups, and the journey of moving on with someone who truly understands.",
              },
              {
                title: "Relationship & Marriage Stress",
                desc: "Get support with marriage problems, relationship communication, and navigating couple challenges.",
              },
              {
                title: "Anxiety, Stress & Overthinking",
                desc: "Talk through anxiety, manage stress, and break free from overthinking cycles with patient listeners.",
              },
              {
                title: "Loneliness & Isolation Support",
                desc: "Feel heard and connected when dealing with loneliness, social isolation, or emotional disconnection.",
              },
              {
                title: "Pre-Marriage Anxiety & Cold Feet",
                desc: "Process pre-wedding doubts and commitment anxiety in a judgment-free space.",
              },
              {
                title: "100% Private & Confidential",
                desc: "No recordings, no judgment, no sharing. Your conversations stay completely private and confidential.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Support for Every Emotional Challenge
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "💔", title: "Breakup Recovery & Healing" },
              { emoji: "❤️", title: "Marriage & Relationship Stress" },
              { emoji: "💭", title: "Overthinking & Anxiety" },
              { emoji: "🤝", title: "Loneliness & Connection" },
            ].map((topic, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer p-8 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl border border-border text-center hover:shadow-md"
              >
                <div className="text-4xl mb-4">{topic.emoji}</div>
                <h3 className="font-semibold text-lg">{topic.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/resources" className="text-primary font-semibold hover:underline">
              Explore All Support Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Start Getting Support in 3 Steps</h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Sign Up & Browse Listeners",
                desc: "Create your account and explore profiles of empathetic listeners who specialize in breakup support, relationship stress, anxiety management, and more.",
              },
              {
                step: 2,
                title: "Book Your Session Type",
                desc: "Choose your session type - chat for text conversations, voice call for talking, or video for face-to-face connection. Pick a time that works for you.",
              },
              {
                step: 3,
                title: "Start Talking & Healing",
                desc: "Connect with your listener in a private, judgment-free space. Talk about what's really bothering you - breakups, relationships, anxiety, loneliness, or anything else.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Stop Struggling Alone. Start Talking Today.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're healing from a breakup, managing relationship stress, dealing with anxiety, or struggling
            with loneliness - DilSe Listen connects you with someone who genuinely cares and will truly listen.
          </p>
          <Link
            href="/pricing"
            className="btn-glow inline-block px-10 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
          >
            Book Your First Session
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
