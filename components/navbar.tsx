"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { ProfileModal } from "@/components/profile-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const supabase = createClient()

    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user || null)
      setIsLoading(false)
    }

    checkUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription?.unsubscribe()
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Listeners", href: "/listeners" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl">❤️</span>
              <span>DilSe Listen</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(item.href) ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side - Only My Profile Button */}
            <div className="hidden md:flex items-center gap-4">
              {!isLoading && (
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
                >
                  <span>👤</span>
                  My Profile
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href) ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile My Profile Button */}
              {!isLoading && (
                <button
                  onClick={() => {
                    setIsProfileOpen(true)
                    setIsOpen(false)
                  }}
                  className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>👤</span>
                  My Profile
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Profile Modal - Unified auth and profile experience */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  )
}
