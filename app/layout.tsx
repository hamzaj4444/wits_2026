import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] })



export const metadata: Metadata = {
  title: "WITS 2026 - Workshop on Information Technologies & Systems",
  description:
    "Join leading researchers and practitioners in exploring the future of information technologies and systems at WITS 2026 in Fez, Morocco.",
    icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
