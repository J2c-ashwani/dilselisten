import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "DilSe Listen - Talk to Someone About Breakups, Relationships & Stress",
  description:
    "Connect with empathetic listeners for private conversations about breakups, relationship stress, loneliness, anxiety & overthinking. 100% judgment-free emotional support platform.",
  keywords:
    "emotional support, breakup help, relationship stress, loneliness, anxiety support, overthinking, marriage stress, mental wellness, talk to someone, listening service",
  generator: "v0.app",
  metadataBase: new URL("https://dilsenlisten.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dilsenlisten.com",
    title: "DilSe Listen - Private Emotional Support & Listening Platform",
    description:
      "Talk to empathetic listeners about breakups, relationship stress, loneliness, anxiety and overthinking. Private, judgment-free conversations with real people who care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DilSe Listen - Emotional Support Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DilSe Listen - Talk About Breakups, Relationships & Stress",
    description: "Private emotional support conversations with empathetic listeners.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://dilsenlisten.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DilSe Listen",
              description:
                "Emotional support platform connecting people with empathetic listeners for conversations about breakups, relationships, anxiety and loneliness",
              url: "https://dilsenlisten.com",
              logo: "https://dilsenlisten.com/logo.png",
              sameAs: [
                "https://twitter.com/dilsenlisten",
                "https://facebook.com/dilsenlisten",
                "https://instagram.com/dilsenlisten",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "support@dilsenlisten.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "DilSe Listen",
              url: "https://dilsenlisten.com",
              description:
                "Get emotional support and talk to empathetic listeners about breakups, relationships, stress and more",
              applicationCategory: "LifestyleApplication",
              offers: {
                "@type": "Offer",
                price: "99",
                priceCurrency: "INR",
                description: "30-minute emotional support session",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
