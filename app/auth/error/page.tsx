import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-accent via-background to-background">
      <div className="w-full max-w-md">
        <Card className="border-2 border-destructive/50">
          <CardHeader>
            <CardTitle className="text-2xl text-destructive">Authentication Error</CardTitle>
            <CardDescription>Something went wrong during authentication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The authentication process encountered an error. Please try again or contact support if the problem
              persists.
            </p>
            <div className="flex flex-col gap-2">
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
