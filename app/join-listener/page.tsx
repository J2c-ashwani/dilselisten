"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function JoinListener() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    languages: "",
    bio: "",
    availability: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      availability: checked ? [...prev.availability, value] : prev.availability.filter((a) => a !== value),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ fullName: "", age: "", languages: "", bio: "", availability: [] })
    }, 5000)
  }

  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Join as a Listener</h1>
          <p className="text-muted-foreground text-lg">
            Are you a good listener? Help people feel heard and make a difference.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <>
              <div className="bg-secondary/10 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">❤️</span>
                    <span>Make a real difference in people's lives through genuine listening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">❤️</span>
                    <span>Flexible schedule - work when you want, as much as you want</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">❤️</span>
                    <span>Earn competitive rates for your time and empathy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">❤️</span>
                    <span>No psychology degree needed - just genuine empathy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold mb-8">Apply to Become a Listener</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Languages Spoken</label>
                    <select
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select languages</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="English, Hindi">English, Hindi</option>
                      <option value="Marathi">Marathi</option>
                      <option value="Gujarati">Gujarati</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Why do you want to be a listener? (max 200 words)
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Tell us about yourself and why you'd be a great listener..."
                      maxLength={200}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-2">{formData.bio.length}/200 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Availability</label>
                    <div className="space-y-2">
                      {["Morning", "Evening", "Weekend"].map((slot) => (
                        <label key={slot} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={slot}
                            checked={formData.availability.includes(slot)}
                            onChange={handleCheckbox}
                            className="w-4 h-4"
                          />
                          <span>{slot}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-glow w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
                  >
                    Submit Application
                  </button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-6">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </>
          ) : (
            <div className="bg-secondary/20 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-6">✨</div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg text-muted-foreground mb-4">Your application has been submitted successfully.</p>
              <p className="text-muted-foreground">
                Our team will review your application and contact you within 48 hours via email or phone.
              </p>
              <p className="text-sm text-muted-foreground mt-6">
                We're excited about the possibility of working with you!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
