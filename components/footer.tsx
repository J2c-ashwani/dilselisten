import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-accent/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
              <span className="text-xl">❤️</span>
              <span>DilSe Listen</span>
            </div>
            <p className="text-sm text-muted-foreground">Because everyone deserves to be heard.</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listeners" className="hover:text-primary transition-colors">
                  Our Listeners
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Become a Listener</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Help others by sharing your listening skills and earn rewards.
            </p>
            <Link
              href="/join-listener"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Join as Listener
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Emergency</h3>
            <p className="text-xs text-muted-foreground mb-2">If you need urgent mental health help:</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>AASRA: +91-9820466726</li>
              <li>Snehi: +91-9582208181</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            DilSe Listen is not a therapy or medical platform. We offer listening and emotional support only.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-4">
            © 2025 DilSe Listen — Because everyone deserves to be heard. ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
