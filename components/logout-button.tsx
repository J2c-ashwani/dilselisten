"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true)
    const supabase = createClient()

    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push("/")
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button variant="outline" onClick={handleLogout} disabled={isLoading} className="w-full bg-transparent">
      {isLoading ? "Logging out..." : "Logout"}
    </Button>
  )
}
