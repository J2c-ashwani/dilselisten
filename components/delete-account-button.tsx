"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function DeleteAccountButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const router = useRouter()

  const handleDeleteAccount = async () => {
    if (!confirmed) {
      setConfirmed(true)
      return
    }

    setIsLoading(true)
    const supabase = createClient()

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) throw new Error("User not found")

      // Delete profile (cascade deletes sessions and messages)
      const { error: deleteError } = await supabase.from("profiles").delete().eq("id", user.id)

      if (deleteError) throw deleteError

      // Call admin API to delete auth user (you'd need a backend endpoint for this)
      // For now, just sign out
      await supabase.auth.signOut()
      router.push("/")
    } catch (error) {
      console.error("Delete failed:", error)
      alert("Failed to delete account. Please try again.")
    } finally {
      setIsLoading(false)
      setConfirmed(false)
    }
  }

  return (
    <Button variant="destructive" onClick={handleDeleteAccount} disabled={isLoading} className="w-full">
      {confirmed ? (isLoading ? "Deleting..." : "Confirm Delete") : "Delete Account"}
    </Button>
  )
}
