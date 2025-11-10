import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Dashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const { data: sessions } = await supabase
    .from("sessions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(10)

  const upcomingSessions = sessions?.filter((s) => new Date(s.scheduled_at) > new Date()) || []

  const pastSessions = sessions?.filter((s) => new Date(s.scheduled_at) <= new Date()) || []

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, {profile?.first_name}!</h1>
            <p className="text-muted-foreground">Manage your sessions and account</p>
          </div>
          <Link href="/account">
            <Button variant="outline">Account Settings</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{sessions?.length || 0}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{upcomingSessions.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                ${(sessions?.reduce((sum, s) => sum + (s.price || 0), 0) || 0).toFixed(2)}
              </p>
            </CardContent>
          </Card>
        </div>

        {upcomingSessions.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="capitalize">{session.session_type} Session</CardTitle>
                        <CardDescription>{new Date(session.scheduled_at).toLocaleString()}</CardDescription>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {session.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Duration: {session.duration_minutes} minutes</p>
                        <p className="text-sm text-muted-foreground">Price: ${session.price.toFixed(2)}</p>
                      </div>
                      <Link href={`/sessions/${session.id}`}>
                        <Button>Join Session</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {pastSessions.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Session History</h2>
            <div className="space-y-4">
              {pastSessions.map((session) => (
                <Card key={session.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="capitalize">{session.session_type} Session</CardTitle>
                        <CardDescription>{new Date(session.scheduled_at).toLocaleString()}</CardDescription>
                      </div>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-semibold">
                        {session.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Duration: {session.duration_minutes} minutes • Price: ${session.price.toFixed(2)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {sessions?.length === 0 && (
          <Card>
            <CardContent className="pt-8">
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No sessions yet. Start by booking a listener!</p>
                <Link href="/listeners">
                  <Button>Browse Listeners</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
