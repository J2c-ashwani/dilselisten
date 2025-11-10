import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HowItWorks() {
  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">How It Works</h1>
          <p className="text-muted-foreground text-lg">Three simple steps to start feeling heard and understood</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Choose a Listener",
                desc: "Browse through our empathetic listeners and select the one who feels right for you. Read their profiles, specialties, and ratings.",
                emoji: "👤",
              },
              {
                step: "2",
                title: "Book a Session",
                desc: "Select your preferred time slot and pay securely through our trusted payment gateway. Your booking is confirmed instantly.",
                emoji: "📅",
              },
              {
                step: "3",
                title: "Talk Freely",
                desc: "Connect via voice or chat at your scheduled time. Everything you share remains 100% confidential and private.",
                emoji: "💬",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-4xl">
                    {item.emoji}
                  </div>
                </div>
                <div className="text-5xl font-bold text-primary/30 mb-2">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Process Flow */}
          <div className="bg-secondary/10 rounded-3xl p-12 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0 flex-1">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Browse & Choose</h3>
                <p className="text-muted-foreground">Find your perfect listener match</p>
              </div>
              <div className="hidden md:block text-3xl text-primary/30">→</div>
              <div className="text-center md:text-left mb-6 md:mb-0 flex-1">
                <div className="text-6xl mb-4">💳</div>
                <h3 className="text-2xl font-bold mb-2">Secure Payment</h3>
                <p className="text-muted-foreground">Book with confidence</p>
              </div>
              <div className="hidden md:block text-3xl text-primary/30">→</div>
              <div className="text-center md:text-left flex-1">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-2">Connect & Talk</h3>
                <p className="text-muted-foreground">Experience genuine listening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible>
            <AccordionItem value="identity">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Is my identity hidden?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Yes, you can stay completely anonymous. You're not required to share your real name or any identifying
                information. You can use a nickname or username throughout your conversations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recording">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Are sessions recorded?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                No, conversations are never recorded unless you explicitly give written consent. Your privacy and
                confidentiality are our top priorities. All sessions are transient and not stored after completion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gender">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I choose the gender of my listener?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                You can browse our listener profiles and filter by gender, or you can let us assign a listener based on
                your preferences when booking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="therapy">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Is this therapy?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                No. DilSe Listen provides emotional support and listening services only. We are not therapists or
                counselors. If you need professional mental health care, please consult a licensed therapist or
                counselor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reschedule">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I reschedule or cancel my session?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Yes, you can reschedule or cancel up to 2 hours before your scheduled session with a full refund.
                Cancellations within 2 hours of the session may incur a small fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refund">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What if I'm not satisfied with my session?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                We want you to have the best experience. If you're not satisfied with your session, we offer a full
                refund or the option to connect with a different listener at no additional cost.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to talk?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your first session now and experience the comfort of being truly heard.
          </p>
          <a
            href="/pricing"
            className="btn-glow inline-block px-10 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
          >
            Book Your First Session
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
