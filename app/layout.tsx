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
    default: "Shaidozzaman Araf | Award-Winning AI Engineer & Entrepreneur",
    template: "%s | Shaidozzaman Araf",
  },
  description: "Official portfolio of Shaidozzaman Araf, the award-winning founder of PippaQuiz. An AI Engineer and Full Stack Developer based in Bangladesh, Shaidozzaman Araf specializes in building scalable, intelligent systems and solving complex problems with cutting-edge technology.",
  keywords: [
    "Shaidozzaman Araf",
    "Captain Araf",
    "Shaidozzaman Araf AI Engineer",
    "Shaidozzaman Araf Portfolio",
    "Founder of PippaQuiz",
    "Best Startup Award Winner",
    "AI Engineer Bangladesh",
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
    "Competitive Programmer",
    "Technology Entrepreneur"
  ],
  authors: [{ name: "Shaidozzaman Araf", url: "https://captainaraf.com" }],
  creator: "Shaidozzaman Araf",
  publisher: "Shaidozzaman Araf",
  alternates: {
    canonical: "https://captainaraf.com",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://captainaraf.com",
    title: "Shaidozzaman Araf | Award-Winning AI Engineer & Entrepreneur",
    description: "Discover the work of Shaidozzaman Araf, Founder of PippaQuiz and an award-winning AI Engineer. Explore his portfolio of innovative projects in AI and software engineering.",
    siteName: "Shaidozzaman Araf",
    firstName: "Shaidozzaman",
    lastName: "Araf",
    username: "captainaraf",
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
    description: "Portfolio of Shaidozzaman Araf, Founder of PippaQuiz and award-winning AI Engineer. Building the future of education and technology.",
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
              "jobTitle": ["AI Engineer", "Full Stack Developer", "Founder", "CEO", "CTO"],
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
              "description": "Shaidozzaman Araf is an award-winning AI engineer, Full Stack Developer, and entrepreneur found of PippaQuiz. He specializes in building intelligent, scalable web applications.",
              "knowsAbout": ["Artificial Intelligence", "Computer Science", "Web Development", "Next.js", "React", "Machine Learning", "Software Engineering", "Business Strategy"],
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
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

