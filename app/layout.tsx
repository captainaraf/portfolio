import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://captainaraf.com"),
  title: {
    default: "Shaidozzaman Araf | Award-Winning AI Engineer & Entrepreneur",
    template: "%s | Shaidozzaman Araf",
  },
  description: "Official portfolio of Shaidozzaman Araf, the award-winning founder of PippaQuiz. An AI Engineer building scalable intelligent systems, focused on deep tech, business strategy, and educational innovation.",
  keywords: [
    "Shaidozzaman Araf",
    "Captain Araf",
    "Shaidozzaman Araf AI Engineer",
    "Shaidozzaman Araf Portfolio",
    "Founder of PippaQuiz",
    "Co-Founder PippaQuiz",
    "Best Startup Award Winner",
    "Bangladesh AI Olympiad Finalist",
    "AI Engineer Bangladesh",
    "Software Engineer Bangladesh",
    "Full Stack Developer",
    "Next.js Expert",
    "Deep Tech Founder",
    "PippaQuiz",
    "Innoverse Bangladesh",
    "WhiteBoard Initiatives",
    "Prodigy Studios",
    "Competitive Programmer",
    "Technology Entrepreneur"
  ],
  authors: [{ name: "Shaidozzaman Araf", url: "https://captainaraf.com" }],
  creator: "Shaidozzaman Araf",
  publisher: "Shaidozzaman Araf",
  alternates: {
    canonical: "https://captainaraf.com",
    languages: {
      'en-US': 'https://captainaraf.com',
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://captainaraf.com",
    title: "Shaidozzaman Araf | Award-Winning AI Engineer & Entrepreneur",
    description: "Discover the work of Shaidozzaman Araf, Co-Founder of PippaQuiz and an award-winning AI Engineer. Explore his portfolio of innovative projects in AI and software engineering.",
    siteName: "Shaidozzaman Araf",
    firstName: "Shaidozzaman",
    lastName: "Araf",
    username: "captainaraf",
    gender: "male",
    images: [
      {
        url: "/araf.jpg",
        width: 1200,
        height: 630,
        alt: "Shaidozzaman Araf - AI Engineer & Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaidozzaman Araf | Award-Winning AI Engineer & Entrepreneur",
    description: "Portfolio of Shaidozzaman Araf, Co-Founder of PippaQuiz and award-winning AI Engineer. Building the future of education and technology.",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className={`font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Shaidozzaman Araf",
                "url": "https://captainaraf.com",
                "alternateName": ["Captain Araf", "Shaidozzaman Araf Portfolio"],
                "author": {
                  "@type": "Person",
                  "name": "Shaidozzaman Araf"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Shaidozzaman Araf",
                "alternateName": "Captain Araf",
                "url": "https://captainaraf.com",
                "image": "https://captainaraf.com/araf.jpg",
                "sameAs": [
                  "https://github.com/captainaraf",
                  "https://facebook.com/in/shaidozzamanaraf",
                  "https://twitter.com/captainaraf",
                  "https://captainaraf.substack.com/",
                  "https://www.linkedin.com/in/shaidozzamanaraf"
                ],
                "jobTitle": ["Co-Founder", "AI Engineer", "Software Architect", "Technology Entrepreneur"],
                "worksFor": [
                  {
                    "@type": "Organization",
                    "name": "PippaQuiz",
                    "url": "https://pippaquiz.com",
                    "sameAs": "https://www.linkedin.com/company/pippaquiz"
                  },
                  {
                    "@type": "Organization",
                    "name": "Innoverse Bangladesh",
                    "url": "https://innoverse.com.bd" // Assuming a URL or placeholder
                  },
                  {
                    "@type": "Organization",
                    "name": "WhiteBoard Initiatives"
                  }
                ],
                "description": "Shaidozzaman Araf is an award-winning AI engineer, Co-Founder of PippaQuiz, and a tech entrepreneur. He builds intelligent systems and impactful businesses.",
                "knowsAbout": ["Artificial Intelligence", "Deep Tech", "Business Strategy", "Next.js", "React", "Machine Learning", "Software Engineering", "System Architecture", "Startups"],
                "award": [
                  "Best Startup Award - Innovation Summit 2026",
                  "National Finalist - Bangladesh Olympiad in AI",
                  "Divisional Runner Up - National High School Programming Contest",
                  "National Contestant - Bangladesh Olympiad in Informatics"
                ],
                "nationality": {
                  "@type": "Country",
                  "name": "Bangladesh"
                }
              }
            ])
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

