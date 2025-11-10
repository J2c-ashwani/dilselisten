import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

const resourceContent = {
  "breakup-recovery": {
    title: "Breakup Recovery: Healing After a Breakup",
    meta: {
      title: "Breakup Recovery Guide: How to Heal & Move On After a Breakup",
      description:
        "Complete guide on breakup recovery, healing strategies, and moving on after ending a relationship. Talk to empathetic listeners about breakup pain.",
    },
    content: `Breakups are emotionally challenging experiences. Whether you initiated the split or were blindsided, the pain can feel overwhelming. This guide explores healthy ways to recover and rebuild your life after a breakup.

## Understanding Breakup Emotions

The end of a relationship triggers grief similar to other losses. You may experience sadness, anger, confusion, and loneliness - sometimes all at once. These emotions are completely normal.

## Stages of Breakup Recovery

1. **Shock & Denial** - Initial disbelief about the relationship ending
2. **Pain & Processing** - Confronting the reality and emotional hurt
3. **Anger** - Frustration about the situation and loss
4. **Acceptance & Healing** - Beginning to move forward positively
5. **Rebuilding** - Discovering yourself again and new purpose

## Strategies for Moving On

- Maintain no contact during initial healing
- Lean on supportive friends and family
- Engage in activities you enjoy
- Practice self-compassion during difficult moments
- Consider talking to someone who truly listens
- Gradually rebuild your identity beyond the relationship

## When to Seek Support

If you're struggling with intense grief, depression, or finding it hard to function, talking to someone who listens without judgment can help immensely. Many people benefit from sharing their breakup experience with empathetic listeners.`,
  },
  "relationship-stress": {
    title: "Managing Marriage & Relationship Stress",
    meta: {
      title: "Relationship Stress Management: Help for Marriage & Couple Issues",
      description:
        "Learn to manage relationship stress, improve communication with partners, and find support for marriage challenges. Connect with listeners who understand relationships.",
    },
    content: `Relationships bring joy, but also stress and challenges. Whether you're navigating marriage problems, communication breakdowns, or general relationship anxiety, understanding stress sources helps.

## Common Sources of Relationship Stress

- Communication misunderstandings
- Different life goals or expectations
- Financial disagreements
- Work-life balance impact on the relationship
- Family interference or pressure
- Unresolved conflicts
- Trust issues
- Physical or emotional intimacy concerns

## Improving Relationship Communication

- Practice active listening without judgment
- Express needs clearly and calmly
- Use "I feel" statements instead of blame
- Schedule dedicated conversation time
- Avoid bringing up multiple issues at once
- Validate your partner's feelings

## When Stress Becomes Overwhelming

Relationship stress can lead to anxiety, depression, and feelings of hopelessness. Talking through relationship challenges with someone outside the relationship often provides clarity and perspective. Many people find it helpful to discuss concerns with empathetic listeners who can help them see situations more objectively.`,
  },
  loneliness: {
    title: "Overcoming Loneliness & Finding Connection",
    meta: {
      title: "Dealing with Loneliness: Strategies to Combat Isolation & Find Connection",
      description:
        "Practical strategies for managing loneliness and isolation. Connect with empathetic listeners who understand the pain of feeling alone.",
    },
    content: `Loneliness is increasingly common but deeply painful. Unlike solitude, loneliness is the distressing feeling of disconnect from others. Understanding and addressing it is crucial for wellbeing.

## Types of Loneliness

- **Emotional Loneliness** - Missing deep connections and intimate relationships
- **Social Loneliness** - Lacking a social community or friend group
- **Situational Loneliness** - Temporary isolation due to life circumstances
- **Chronic Loneliness** - Long-term struggle with connection

## Practical Ways to Combat Loneliness

- Join groups aligned with your interests
- Volunteer in your community
- Deepen existing relationships through consistent contact
- Take classes or learn new skills
- Participate in online communities
- Reach out to old friends
- Consider talking to someone who listens

## The Power of Being Heard

Sometimes loneliness stems from feeling unheard or misunderstood. Having someone fully present and listening to your thoughts and feelings can profoundly reduce loneliness. This is why many people find conversations with empathetic listeners transformative.`,
  },
  "anxiety-stress": {
    title: "Managing Anxiety & Stress: Practical Support",
    meta: {
      title: "Anxiety & Stress Management: Relief Strategies & Support Options",
      description:
        "Effective strategies for managing anxiety, stress, and overwhelm. Get support from empathetic listeners trained in emotional support.",
    },
    content: `Anxiety and stress are common experiences, but persistent worry can significantly impact quality of life. Understanding anxiety sources and management strategies helps.

## Recognizing Anxiety & Stress Symptoms

- Persistent worry or racing thoughts
- Physical symptoms: tension, headaches, sleep issues
- Difficulty concentrating
- Irritability or mood changes
- Avoiding situations that trigger anxiety
- Panic attacks or intense fear

## Evidence-Based Anxiety Management

- Deep breathing exercises
- Progressive muscle relaxation
- Regular physical exercise
- Mindfulness and meditation practices
- Maintaining structured daily routines
- Limiting caffeine and stimulants
- Getting adequate sleep
- Connecting with supportive people

## When Professional Support Helps

While self-help strategies are valuable, sometimes anxiety requires external support. Talking through anxiety triggers and fears with an empathetic listener can help you gain perspective and develop coping strategies. Many people find these conversations essential for anxiety management.`,
  },
  overthinking: {
    title: "Breaking Free from Overthinking & Rumination",
    meta: {
      title: "Stop Overthinking: Strategies to Break Rumination & Worry Cycles",
      description:
        "Learn to recognize and break overthinking patterns. Get support from empathetic listeners who help you process racing thoughts.",
    },
    content: `Overthinking - or rumination - is replaying situations repeatedly, analyzing every detail, and imagining negative outcomes. This mental habit drains energy and increases anxiety.

## Signs You're Overthinking

- Replaying conversations or situations repeatedly
- Imagining worst-case scenarios
- Over-analyzing words or actions of others
- Difficulty making decisions
- Analysis paralysis
- Sleep disruption due to racing thoughts
- Anxiety about things you can't control

## Strategies to Stop Overthinking

- Recognize when you're overthinking
- Practice the "15-minute rule" - give yourself 15 minutes to worry, then redirect focus
- Challenge catastrophic thinking with evidence
- Focus on present moment awareness
- Engage in physical activities to interrupt thought loops
- Keep a thought journal to identify patterns
- Practice acceptance of uncertainty

## The Role of External Perspective

Overthinking often involves distorted thinking patterns that feel real to you. Sharing your thoughts with someone who listens objectively can help identify these patterns and challenge them constructively. Many people breakthrough with support from empathetic listeners.`,
  },
  "pre-marriage": {
    title: "Pre-Marriage Confusion & Cold Feet",
    meta: {
      title: "Cold Feet Before Marriage: Understanding Pre-Wedding Doubts & Anxiety",
      description:
        "Navigate pre-marriage anxiety, cold feet, and relationship doubts. Talk to empathetic listeners about wedding stress and commitment concerns.",
    },
    content: `Pre-marriage anxiety and cold feet are common experiences that many people don't discuss openly. Whether you're having minor doubts or significant concerns, understanding these feelings is important.

## Common Pre-Marriage Concerns

- Fear of losing independence
- Doubts about the relationship
- Pressure from family expectations
- Anxiety about life changes
- Worry about financial implications
- Concerns about compatibility
- Fear of marriage failure
- Sexual anxiety or pressure

## Distinguishing Normal Jitters from Serious Concerns

- **Normal Jitters** - Temporary anxiety that decreases with reassurance and planning
- **Serious Concerns** - Persistent doubts about the partnership or fundamental incompatibility

## Processing Pre-Marriage Emotions

- Discuss feelings with your partner openly
- Examine the source of your doubts
- Consider pre-marriage counseling
- Give yourself permission to have complex emotions
- Talk to trusted friends or family
- Seek guidance from someone objective

## Finding Clarity

Pre-marriage uncertainty deserves serious consideration, not dismissal. Talking through your doubts with an empathetic listener who has no stake in your decision can help you gain clarity about what you truly want.`,
  },
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const content = resourceContent[params.slug as keyof typeof resourceContent]
  if (!content) {
    return {
      title: "Resource Not Found",
      description: "The resource you're looking for doesn't exist.",
    }
  }

  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(resourceContent).map((slug) => ({
    slug,
  }))
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = resourceContent[params.slug as keyof typeof resourceContent]

  if (!resource) {
    return (
      <main>
        <Navbar />
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
          <Link href="/resources" className="text-primary hover:underline">
            Back to Resources
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
          <Link href="/resources" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Resources
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{resource.title}</h1>

          <div className="prose prose-invert max-w-none mb-12">
            {resource.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    {paragraph
                      .split("\n")
                      .filter((line) => line.startsWith("- "))
                      .map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                  </ul>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <ol key={idx} className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                    {paragraph
                      .split("\n")
                      .filter((line) => line.match(/^\d+\./))
                      .map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\.\s*\*\*/, "").replace(/\*\*/, "")}</li>
                      ))}
                  </ol>
                )
              }
              return (
                <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          <div className="bg-accent/30 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Ready to Talk?</h3>
            <p className="text-muted-foreground mb-6">
              Sometimes understanding the challenges is only part of healing. Talking to someone who truly listens can
              make a profound difference in your journey.
            </p>
            <Link
              href="/pricing"
              className="btn-glow inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
            >
              Book a Session Now
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
