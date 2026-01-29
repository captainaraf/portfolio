import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://captainaraf.com"),
  title: {
    default: "Shaidozzaman Araf | AI Engineer & Full Stack Developer",
    template: "%s | Shaidozzaman Araf",
  },
  description: "Portfolio of Shaidozzaman Araf, an AI engineer, Full Stack Developer, and entrepreneur based in Bangladesh. Specializing in building intelligent, scalable web applications and solving complex problems with modern technologies.",
  keywords: [
    "Shaidozzaman Araf",
    "Captain Araf",
    "AI Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Web Development",
    "Next.js Developer",
    "React Developer",
    "Machine Learning",
    "PippaQuiz",
    "Innoverse",
    "WhiteBoard Initiatives",
    "Prodigy Studios",
    "Bangladesh",
    "Dhaka",
    "Competitive Programmer"
  ],
  authors: [{ name: "Shaidozzaman Araf", url: "https://captainaraf.com" }],
  creator: "Shaidozzaman Araf",
  publisher: "Shaidozzaman Araf",
  alternates: {
    canonical: "https://captainaraf.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://captainaraf.com",
    title: "Shaidozzaman Araf | AI Engineer & Full Stack Developer",
    description: "Portfolio of Shaidozzaman Araf, an AI engineer and Full Stack Developer specializing in building intelligent, scalable web applications.",
    siteName: "Shaidozzaman Araf",
    images: [
      {
        url: "/araf.jpg",
        width: 1200,
        height: 630,
        alt: "Shaidozzaman Araf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaidozzaman Araf | AI Engineer & Full Stack Developer",
    description: "Portfolio of Shaidozzaman Araf, an AI engineer and Full Stack Developer.",
    creator: "@captainaraf",
    images: ["/araf.jpg"],
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: "#0a0a1a",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shaidozzaman Araf",
              "url": "https://captainaraf.com",
              "image": "https://captainaraf.com/araf.jpg",
              "sameAs": [
                "https://github.com/captainaraf",
                "https://facebook.com/in/shaidozzamanaraf",
                "https://twitter.com/captainaraf",
                "https://captainaraf.substack.com/",
                "https://www.linkedin.com/in/shaidozzamanaraf"
              ],
              "jobTitle": ["AI Engineer", "Full Stack Developer", "CEO", "CTO"],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "PippaQuiz",
                  "url": "https://pippaquiz.com"
                },
                {
                  "@type": "Organization",
                  "name": "WhiteBoard Initiatives"
                },
                {
                  "@type": "Organization",
                  "name": "Prodigy Studios"
                }
              ],
              "description": "AI engineer and Full Stack Developer specializing in building intelligent, scalable web applications.",
              "knowsAbout": ["Artificial Intelligence", "Computer Science", "Web Development", "Next.js", "React", "Machine Learning", "Software Engineering"],
              "award": [
                "National Finalist - Bangladesh Olympiad in AI",
                "Divisional Runner Up - National High School Programming Contest",
                "National Contestant - Bangladesh Olympiad in Informatics"
              ]
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

