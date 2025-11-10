import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ProfileForm from "@/components/profile-form"
import DeleteAccountButton from "@/components/delete-account-button"
import LogoutButton from "@/components/logout-button"

export default async function AccountPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/dashboard" className="mb-4">
          <Button variant="outline">← Back to Dashboard</Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Account Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileForm profile={profile} userId={user.id} />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">{user.email}</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Member since</p>
                  <p className="font-semibold">{new Date(user.created_at).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <LogoutButton />
                <DeleteAccountButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
