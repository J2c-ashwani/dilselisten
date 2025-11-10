"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CheckEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-accent via-background to-background">
      <div className="w-full max-w-md">
        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
            <CardDescription className="mt-2">We&apos;ve sent you a confirmation link</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Please check your email and click the confirmation link to verify your account. After confirming, you can
              log in.
            </p>

            <div className="flex flex-col gap-3">
              <Link href="/auth/login">
                <Button className="w-full">Back to Login</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
