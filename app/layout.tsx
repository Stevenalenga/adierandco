import "./globals.css"
import { Inter } from 'next/font/google'

import { SiteHeader } from "@/components/ui/site-header"
import { SiteFooter } from "@/components/ui/site-footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Adier & Co - Top Law Firm in Kenya | Advocates, Notaries, and Legal Experts",
  description: "Adier & Co is a leading boutique law firm based in Nairobi, Kenya, specializing in litigation, corporate transactions, commercial law, and dispute resolution. Trusted by clients across Kenya, Tanzania, and East Africa for world-class legal services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
        </div>
      </body>
    </html>
  )
}

