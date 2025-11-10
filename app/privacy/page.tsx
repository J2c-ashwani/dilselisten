import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Privacy() {
  return (
    <main>
      <Navbar />

      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy & Disclaimer</h1>
          <p className="text-muted-foreground text-lg">Important information about DilSe Listen services</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Disclaimer */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">⚠️</span>
              <h2 className="text-2xl font-bold">Important Disclaimer</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Not a Medical Service:</span> DilSe Listen is not a
                therapy, counseling, or medical platform. We provide emotional support and listening services only.
              </li>
              <li>
                <span className="font-semibold text-foreground">Not a Substitute for Professional Help:</span> If you
                have mental health concerns, please consult a licensed therapist or psychiatrist.
              </li>
              <li>
                <span className="font-semibold text-foreground">No Crisis Intervention:</span> DilSe Listen cannot
                provide crisis intervention. If you're in danger, contact emergency services or a crisis helpline.
              </li>
              <li>
                <span className="font-semibold text-foreground">Listeners Are Not Trained Professionals:</span> Our
                listeners are empathetic individuals, not licensed therapists.
              </li>
            </ul>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Your Privacy Matters</h3>
                <p className="text-muted-foreground">
                  We take your privacy seriously. All conversations on DilSe Listen are private and confidential.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Data We Collect</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Email address and phone number for booking and confirmation</li>
                  <li>Session history and conversation metadata</li>
                  <li>Payment information processed through secure channels</li>
                  <li>Device and browser information for service improvement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">How We Use Your Data</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>To schedule and manage your sessions</li>
                  <li>To connect you with appropriate listeners</li>
                  <li>To send booking confirmations and reminders</li>
                  <li>To improve our service quality</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Conversations & Recording</h3>
                <p className="text-muted-foreground mb-2">
                  Conversations are NOT recorded by default. Written consent is required before any recording takes
                  place.
                </p>
                <p className="text-muted-foreground">
                  Conversation content is not shared with third parties except where required by law or court order.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Third-Party Sharing</h3>
                <p className="text-muted-foreground">We do not sell your data. We may share information with:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside mt-2">
                  <li>Service providers who help us operate the platform</li>
                  <li>Payment processors to handle transactions</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside mt-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Security</h3>
                <p className="text-muted-foreground">
                  We use industry-standard encryption and security measures to protect your data. However, no online
                  platform is 100% secure. Use a strong password and never share your login credentials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Cookies</h3>
                <p className="text-muted-foreground">
                  We use cookies to enhance your experience. You can manage cookie preferences in your browser settings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Children's Privacy</h3>
                <p className="text-muted-foreground">
                  DilSe Listen is not intended for users under 18. We do not knowingly collect data from minors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Changes to This Policy</h3>
                <p className="text-muted-foreground">
                  We may update this policy periodically. We'll notify you of significant changes via email.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  For privacy concerns, email us at <span className="font-mono">privacy@dilselisten.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>

            <div className="space-y-6 text-muted-foreground">
              <p>By using DilSe Listen, you agree that:</p>
              <ul className="space-y-3 list-disc list-inside">
                <li>You are at least 18 years old</li>
                <li>You understand this is not therapy or medical advice</li>
                <li>You use the service responsibly and respectfully</li>
                <li>You will not engage in harassment, abuse, or illegal activity</li>
                <li>You understand conversations are confidential but not privileged</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>We reserve the right to terminate service for policy violations</li>
              </ul>
            </div>
          </div>

          {/* Emergency Resources */}
          <div className="bg-secondary/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">If You're in Crisis</h2>
            <p className="text-muted-foreground mb-6">
              DilSe Listen is not equipped to handle crisis situations. Please reach out to these resources immediately:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold mb-1">AASRA</p>
                <p className="text-muted-foreground">+91-9820466726</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold mb-1">Snehi</p>
                <p className="text-muted-foreground">+91-9582208181</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold mb-1">iCall</p>
                <p className="text-muted-foreground">9152987821</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
