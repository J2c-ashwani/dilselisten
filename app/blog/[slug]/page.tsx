import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

const blogContent = {
  "signs-you-need-emotional-support": {
    meta: {
      title: "5 Signs You Need to Talk to Someone: When to Seek Emotional Support",
      description:
        "Recognize the signs you need emotional support for stress, anxiety, relationships. Learn when talking to someone can help.",
    },
    content: `Many people struggle silently with emotional challenges like breakups, relationship stress, anxiety, and loneliness. But how do you know when it's time to reach out and talk to someone? Here are five key signs.

## 1. Your Worries Are Affecting Your Daily Life

If anxiety, overthinking, or stress is interfering with work, relationships, or self-care, it's time to talk to someone. When emotional challenges start impacting your functioning, seeking support can make a real difference.

**Signs to watch for:**
- Difficulty concentrating
- Changes in sleep or appetite
- Avoiding social situations
- Reduced productivity at work
- Withdrawing from activities you enjoy

## 2. You're Feeling Persistently Lonely or Isolated

Loneliness isn't just about being alone - it's about feeling disconnected from others. If you're experiencing persistent loneliness, talking to someone who truly listens can help bridge that gap.

## 3. Relationship Issues Are Causing Ongoing Pain

Whether it's post-breakup heartache, marriage stress, or relationship confusion - if these issues are occupying your thoughts and causing emotional pain, talking through them with someone objective helps.

## 4. You're Caught in Overthinking Cycles

If you find yourself replaying situations repeatedly, imagining worst-case scenarios, or unable to stop anxious thoughts, you're caught in an overthinking loop. External perspective from an empathetic listener can help break the cycle.

## 5. You Feel Unheard or Misunderstood

Sometimes the issue isn't the problem itself - it's that nobody seems to understand what you're going through. Feeling heard and validated is profoundly healing.

## Why Talking Helps

Sharing your challenges with someone trained to listen provides multiple benefits:

- **Emotional relief** - Getting feelings out reduces their intensity
- **New perspective** - Outside viewpoint helps you see situations differently
- **Validation** - Knowing your feelings are understood reduces shame
- **Clarity** - Talking through issues often leads to insights
- **Connection** - Feeling heard reduces loneliness

## Take the First Step

Recognizing you need support is already a sign of strength, not weakness. Whether you're dealing with breakup pain, relationship stress, anxiety, overthinking, or loneliness - reaching out to talk to someone who listens can be transformative.`,
  },
  "how-to-deal-with-loneliness-after-breakup": {
    meta: {
      title: "How to Deal with Loneliness After a Breakup: Practical Steps",
      description:
        "Concrete strategies for managing post-breakup loneliness and rebuilding connection and social life.",
    },
    content: `After a breakup, loneliness often hits hardest. You've lost not just a relationship, but daily companionship, shared routines, and someone who knew you intimately. Here are practical steps to navigate post-breakup loneliness.

## Understand Your Loneliness Type

**Emotional Loneliness** - Missing the specific person and the intimate connection you had

**Social Loneliness** - Missing your social network (friends may have drifted, social plans revolved around your ex)

Both are real and require different approaches.

## Practical Steps to Combat Post-Breakup Loneliness

### 1. Don't Isolate
The urge to withdraw is strong, but isolation amplifies loneliness. Force yourself to maintain social contact even when you don't feel like it.

### 2. Deepen Existing Friendships
Invest time in friends. Have vulnerable conversations. Let them support you. Quality over quantity matters.

### 3. Join Communities
- Classes or workshops on topics you're interested in
- Sports or fitness groups
- Volunteer organizations
- Online communities (but balance with in-person)

### 4. Rebuild Your Identity
Breakups often leave you questioning who you are. Reconnecting with your individual identity helps.

### 5. Talk to Someone
Sometimes loneliness after a breakup runs deep. Having someone truly listen to your feelings - not try to fix them - can be incredibly healing.

## When Loneliness Becomes Concerning

If loneliness persists for months or leads to depression, anxiety, or destructive behaviors, seek professional support. Talking through your experience with an empathetic listener trained in emotional support can help tremendously.`,
  },
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const content = blogContent[params.slug as keyof typeof blogContent]
  if (!content) {
    return {
      title: "Post Not Found",
    }
  }
  return {
    title: content.meta.title,
    description: content.meta.description,
  }
}

export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug as keyof typeof blogContent]

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <article className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{post.meta.title}</h1>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            {post.content.split("\n\n").map((section, idx) => {
              if (section.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {section.replace("## ", "")}
                  </h2>
                )
              }
              if (section.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                    {section.replace("### ", "")}
                  </h3>
                )
              }
              if (section.match(/^- /)) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 mb-4">
                    {section
                      .split("\n")
                      .filter((line) => line.startsWith("- "))
                      .map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="mb-4 leading-relaxed">
                  {section}
                </p>
              )
            })}
          </div>

          <div className="mt-12 bg-accent/30 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Ready to Talk to Someone?</h3>
            <p className="text-muted-foreground mb-6">
              If you're struggling with loneliness, breakup pain, relationship stress, anxiety, or overthinking, talking
              to an empathetic listener can help. Connect today.
            </p>
            <Link
              href="/pricing"
              className="btn-glow inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
