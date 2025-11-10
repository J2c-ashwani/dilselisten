"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 5000)
  }

  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">We're here to help. Reach out with any questions or concerns.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {!submitted ? (
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more..."
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-glow w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-secondary/20 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you as soon as possible.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-secondary/10 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@dilselisten.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground">+91 9876543210</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+91 9876543210</p>
                  </div>
                </div>
              </div>

              {/* Emergency Helplines */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">⚠️</span>
                  <h3 className="font-semibold text-lg">In Crisis? Get Help Now</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're feeling unsafe or having thoughts of self-harm, please contact these helplines immediately:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">AASRA Helpline:</span>
                    <span>+91-9820466726</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Snehi Helpline:</span>
                    <span>+91-9582208181</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">iCall:</span>
                    <span>9152987821</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
