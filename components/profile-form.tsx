"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Profile {
  id: string
  first_name: string
  last_name: string
  bio: string
  avatar_url: string
}

export default function ProfileForm({
  profile,
  userId,
}: {
  profile: Profile
  userId: string
}) {
  const [firstName, setFirstName] = useState(profile?.first_name || "")
  const [lastName, setLastName] = useState(profile?.last_name || "")
  const [bio, setBio] = useState(profile?.bio || "")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const supabase = createClient()

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: firstName,
          last_name: lastName,
          bio: bio,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      if (error) throw error

      setMessage({
        type: "success",
        text: "Profile updated successfully!",
      })
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Failed to update profile",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell us about yourself"
          rows={4}
        />
      </div>

      {message && (
        <div
          className={`p-3 rounded-lg text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  )
}
