import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Head from "next/head"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shaidozzaman Araf",
  description: "An AI engineer with a deep skillset in software development, electronics and science. Has a passion for everything that makes sense.",
  icons: {
    icon: "/favicon.jpg",
  },
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}

