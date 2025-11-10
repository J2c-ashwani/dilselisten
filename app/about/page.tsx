import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-muted-foreground text-lg">Our mission to bring warmth back into conversations</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/10 rounded-2xl p-12 mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make sure no one feels alone when they just need to be heard.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              We believe in the power of human connection and genuine listening. In a world where everyone is trying to
              give advice or fix problems, sometimes what we need most is simply to be understood. DilSe Listen creates
              that safe space.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Story</h2>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
              <p className="text-muted-foreground leading-relaxed">
                DilSe Listen began with a simple observation: millions of people feel lonely, not because they lack
                friends or family, but because they lack genuine listeners. In our fast-paced world, we've forgotten the
                art of truly hearing each other.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold mb-4">Why We Started</h3>
              <p className="text-muted-foreground leading-relaxed">
                We've seen how loneliness silently affects millions - from heartbroken individuals to people
                overthinking their life choices. While therapy is valuable, sometimes people just need someone to listen
                without judgment, without trying to fix, without having an agenda. They need empathy.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold mb-4">What We Believe</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that emotional support and genuine listening are fundamental human needs. We believe that not
                everyone needs therapy, but everyone needs to be heard. We believe that real people connecting with real
                people can create profound healing and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                emoji: "❤️",
                title: "Empathy",
                desc: "We lead with genuine care and understanding in every interaction",
              },
              {
                emoji: "🔒",
                title: "Privacy",
                desc: "Your secrets are safe with us. Complete confidentiality always.",
              },
              {
                emoji: "👥",
                title: "Humanity",
                desc: "Real people, real conversations, real connection without judgment",
              },
              { emoji: "✨", title: "Hope", desc: "Every conversation is an opportunity for healing and clarity" },
            ].map((value, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer p-8 bg-secondary/10 rounded-2xl border border-border text-center"
              >
                <div className="text-4xl mx-auto mb-4">{value.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Founder's Note</h2>

          <div className="bg-card rounded-2xl border border-border p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full" />
              </div>
              <div className="flex-grow">
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  "I've watched close people struggle with loneliness, heartbreak, and confusion—not because they lack
                  support, but because they lack someone who truly listens without judgment or advice. This platform is
                  my small effort to change that. Every conversation here is a reminder that we're not alone, and that
                  being heard can be the first step toward healing."
                </p>
                <div>
                  <p className="font-bold">DilSe Team</p>
                  <p className="text-muted-foreground text-sm">Founders of DilSe Listen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Users" },
              { number: "50+", label: "Empathetic Listeners" },
              { number: "2000+", label: "Sessions Completed" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to feel heard?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of people who have found clarity, comfort, and connection through DilSe Listen.
          </p>
          <a
            href="/listeners"
            className="btn-glow inline-block px-10 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
          >
            Start Your First Session
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
