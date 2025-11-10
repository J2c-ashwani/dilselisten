import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Emotional Support Resources - DilSe Listen",
  description:
    "Explore resources for breakup recovery, relationship stress, loneliness, anxiety and overthinking. Connect with empathetic listeners today.",
  openGraph: {
    title: "Emotional Support Resources & Guides - DilSe Listen",
    description:
      "Free guides and resources for emotional challenges including breakups, relationships, stress and mental wellness.",
  },
}

export default function ResourcesPage() {
  const topics = [
    {
      slug: "breakup-recovery",
      title: "Breakup Recovery & Moving On",
      description: "Guidance for healing after a breakup and rebuilding your life",
      keywords: "breakup help, moving on after breakup, heartbreak recovery, ending a relationship",
    },
    {
      slug: "relationship-stress",
      title: "Managing Marriage & Relationship Stress",
      description: "Support for navigating relationship challenges and communication issues",
      keywords: "relationship stress, marriage problems, couples issues, relationship anxiety",
    },
    {
      slug: "loneliness",
      title: "Dealing with Loneliness & Isolation",
      description: "Find connection and support when feeling lonely or isolated",
      keywords: "loneliness help, feeling alone, social isolation, overcoming loneliness",
    },
    {
      slug: "anxiety-stress",
      title: "Managing Anxiety & Stress",
      description: "Techniques and support for managing anxiety, stress and overwhelm",
      keywords: "anxiety relief, stress management, anxiety support, emotional stress",
    },
    {
      slug: "overthinking",
      title: "Stop Overthinking & Worry Cycles",
      description: "Learn to break free from overthinking patterns and racing thoughts",
      keywords: "overthinking, rumination, anxious thoughts, racing mind",
    },
    {
      slug: "pre-marriage",
      title: "Pre-Marriage Confusion & Cold Feet",
      description: "Talk through pre-wedding doubts and relationship uncertainties",
      keywords: "cold feet before marriage, pre-wedding anxiety, relationship doubts",
    },
  ]

  return (
    <main>
      <Navbar />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Emotional Support Resources & Guides</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Explore comprehensive resources on emotional wellbeing, relationships, and mental health. Connect with
            empathetic listeners who understand your challenges.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Link key={topic.slug} href={`/resources/${topic.slug}`}>
                <div className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md h-full">
                  <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground mb-4">{topic.description}</p>
                  <p className="text-sm text-primary font-medium">Read Guide →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Talk to Someone Who Understands</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sometimes reading about emotional challenges isn't enough. Connect with empathetic listeners who can truly
            listen and support you through difficult times.
          </p>
          <Link
            href="/pricing"
            className="btn-glow inline-block px-10 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
          >
            Book a Session
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
