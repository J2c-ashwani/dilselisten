import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Blog: Emotional Wellness Tips - DilSe Listen",
  description:
    "Read blog posts about breakup recovery, relationship stress, anxiety management, loneliness and emotional wellness. Expert insights and personal stories.",
  openGraph: {
    title: "Emotional Wellness Blog - Tips for Relationships, Anxiety & Stress",
    description:
      "Discover practical advice for managing breakups, relationships, loneliness, anxiety and emotional challenges.",
  },
}

const blogPosts = [
  {
    id: 1,
    slug: "signs-you-need-emotional-support",
    title: "5 Signs You Need to Talk to Someone About Your Emotions",
    excerpt:
      "Learn to recognize when it's time to seek emotional support for breakups, stress, anxiety and relationship issues.",
    date: "2024-11-07",
    category: "Mental Wellness",
    keywords: "emotional support, mental health, stress signs, anxiety symptoms",
  },
  {
    id: 2,
    slug: "how-to-deal-with-loneliness-after-breakup",
    title: "How to Deal with Loneliness After a Breakup: Practical Steps",
    excerpt: "Strategies to combat loneliness and isolation after a breakup and rebuild your social connections.",
    date: "2024-11-06",
    category: "Relationships",
    keywords: "breakup loneliness, post breakup isolation, moving on after breakup",
  },
  {
    id: 3,
    slug: "overthinking-anxiety-relationship",
    title: "Is Your Overthinking Ruining Your Relationship? What to Do",
    excerpt: "Understand how overthinking affects relationships and learn strategies to break the cycle.",
    date: "2024-11-05",
    category: "Relationships",
    keywords: "overthinking in relationships, relationship anxiety, rumination",
  },
  {
    id: 4,
    slug: "managing-stress-in-marriage",
    title: "Managing Stress in Marriage: Communication Tips That Work",
    excerpt: "Discover effective ways to reduce stress in your marriage and improve communication with your partner.",
    date: "2024-11-04",
    category: "Relationships",
    keywords: "marriage stress, relationship stress, couple communication",
  },
  {
    id: 5,
    slug: "anxiety-before-marriage-is-normal",
    title: "Cold Feet Before Marriage: Is It Normal Anxiety or a Warning Sign?",
    excerpt: "Explore pre-marriage anxiety, understand what's normal jitters and what might indicate serious concerns.",
    date: "2024-11-03",
    category: "Relationships",
    keywords: "cold feet marriage, pre-wedding anxiety, commitment anxiety",
  },
  {
    id: 6,
    slug: "why-talking-helps-mental-health",
    title: "Why Talking to Someone Can Transform Your Mental Health",
    excerpt: "Discover the therapeutic power of being heard and how empathetic listening reduces stress and anxiety.",
    date: "2024-11-02",
    category: "Mental Wellness",
    keywords: "therapeutic listening, mental health support, emotional therapy",
  },
]

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Emotional Wellness Blog & Insights</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore practical tips, personal stories, and expert insights on managing relationships, stress, anxiety,
            breakups and emotional wellbeing. Connect with our community of people prioritizing their mental health.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="border-b border-border pb-8 transition-all duration-300 hover:shadow-lg p-6 rounded-lg hover:bg-accent/10"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h2>
                </Link>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How is DilSe Listen different from therapy?",
                a: "DilSe Listen connects you with empathetic listeners - real people trained to listen and support you. Unlike therapy which involves diagnosis and treatment, our listeners provide compassionate listening for everyday emotional challenges like stress, loneliness, and relationship issues.",
              },
              {
                q: "Is my conversation really private?",
                a: "Absolutely. All conversations are 100% private and confidential. We don't record conversations, share information with third parties, or keep records of what you discuss. Your privacy is paramount.",
              },
              {
                q: "Can I talk about relationship and breakup issues?",
                a: "Yes, relationship challenges, breakup recovery, and marriage stress are among the most common topics people discuss. Our listeners have extensive experience supporting people through relationship difficulties.",
              },
              {
                q: "How much does a session cost?",
                a: "Sessions start at just 99 INR for 30 minutes. We offer flexible session lengths and different listener rates to fit your budget and needs.",
              },
              {
                q: "How do I start talking to someone?",
                a: "Sign up, choose a listener based on their profiles and experience, select your session type (chat, voice, or video), and book your session. You can start within minutes.",
              },
              {
                q: "What if I'm struggling with severe anxiety or depression?",
                a: "While DilSe Listen is excellent for everyday emotional support, if you're experiencing severe mental health symptoms, please consult with a mental health professional or therapist.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
