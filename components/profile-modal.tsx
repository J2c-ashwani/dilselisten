"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import Link from "next/link"
import LogoutButton from "@/components/logout-button"
import DeleteAccountButton from "@/components/delete-account-button"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"dashboard" | "profile" | "settings">("dashboard")
  const [profile, setProfile] = useState<any>(null)
  const [sessions, setSessions] = useState<any[]>([])

  useEffect(() => {
    const supabase = createClient()

    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user || null)

      if (user) {
        // Fetch profile
        const { data: profileData } = await supabase.from("profiles").select("*").eq("id", user.id).single()
        setProfile(profileData)

        // Fetch sessions
        const { data: sessionsData } = await supabase
          .from("sessions")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(5)
        setSessions(sessionsData || [])
      }

      setIsLoading(false)
    }

    if (isOpen) {
      checkUser()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} aria-hidden="true" />

      {/* Modal - Side panel that doesn't cover everything */}
      <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-end pointer-events-none">
        <div className="w-full md:w-96 h-[90vh] md:h-auto md:max-h-[85vh] bg-background rounded-t-3xl md:rounded-3xl shadow-2xl overflow-y-auto animate-in slide-in-from-bottom-5 md:slide-in-from-right-5 duration-300 pointer-events-auto md:mr-4">
          {/* Header */}
          <div className="sticky top-0 bg-background border-b border-border p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">My Profile</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {isLoading ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">Loading...</p>
            </div>
          ) : !user ? (
            <div className="p-6 space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Welcome to DilSe Listen</h3>
                <p className="text-muted-foreground">Sign in to manage your profile and sessions</p>
              </div>

              <Link
                href="/auth/login"
                onClick={onClose}
                className="block w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-center hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                onClick={onClose}
                className="block w-full px-4 py-3 border-2 border-primary text-primary rounded-xl font-semibold text-center hover:bg-primary/10 transition-colors"
              >
                Create Account
              </Link>

              <button
                onClick={onClose}
                className="block w-full px-4 py-3 text-primary font-semibold text-center hover:text-primary/80 transition-colors"
              >
                Continue Exploring →
              </button>
            </div>
          ) : (
            <div className="pb-6">
              {/* Tab Navigation */}
              <div className="flex gap-2 px-4 pt-4 border-b border-border">
                {[
                  { id: "dashboard" as const, label: "Dashboard", icon: "📊" },
                  { id: "profile" as const, label: "Profile", icon: "👤" },
                  { id: "settings" as const, label: "Settings", icon: "⚙️" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 pb-3 px-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "text-primary border-primary"
                        : "text-muted-foreground border-transparent hover:text-foreground"
                    }`}
                  >
                    <span className="mr-1">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Dashboard Tab */}
                {activeTab === "dashboard" && (
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <p className="text-2xl font-bold">{sessions.length}</p>
                      <p className="text-sm text-muted-foreground">Total Sessions</p>
                    </div>

                    <Link
                      href="/"
                      onClick={onClose}
                      className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                    >
                      Explore Listeners →
                    </Link>

                    {sessions.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-muted-foreground">Recent Sessions</p>
                        {sessions.map((session) => (
                          <div key={session.id} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium capitalize">{session.session_type}</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(session.scheduled_at).toLocaleDateString()}
                                </p>
                              </div>
                              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                                {session.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {sessions.length === 0 && (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No sessions yet</p>
                        <Link
                          href="/listeners"
                          onClick={onClose}
                          className="text-sm text-primary font-medium mt-2 block hover:underline"
                        >
                          Browse listeners →
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* Profile Tab */}
                {activeTab === "profile" && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="text-lg font-bold">{profile?.first_name || "Not set"}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground">Bio</p>
                      <p className="text-sm">{profile?.bio || "No bio added yet"}</p>
                    </div>

                    <Link
                      href="/account"
                      onClick={onClose}
                      className="w-full px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-center hover:bg-primary/20 transition-colors"
                    >
                      Edit Profile
                    </Link>
                  </div>
                )}

                {/* Settings Tab */}
                {activeTab === "settings" && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium">{new Date(user.created_at).toLocaleDateString()}</p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-border">
                      <LogoutButton />
                      <DeleteAccountButton />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
