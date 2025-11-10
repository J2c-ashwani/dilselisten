"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      setLoginSuccess(true)
      setTimeout(() => {
        router.push("/")
      }, 1000)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (loginSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-accent via-background to-background">
        <Card className="border-2 max-w-md">
          <CardContent className="pt-8 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <h2 className="text-2xl font-bold text-primary mb-2">Login Successful!</h2>
            <p className="text-muted-foreground mb-4">Redirecting to home page...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-accent via-background to-background">
      <div className="w-full max-w-md">
        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DilSe Listen
            </CardTitle>
            <CardDescription className="mt-2">Login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive text-destructive rounded-lg text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={isLoading} className="w-full h-10">
                {isLoading ? "Logging in..." : "Login"}
              </Button>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-primary hover:underline font-semibold">
                  Sign up
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  href="/"
                  className="block w-full px-4 py-2 text-center text-muted-foreground hover:text-foreground transition-colors font-medium border border-border rounded-lg hover:bg-muted"
                >
                  Continue Exploring
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
