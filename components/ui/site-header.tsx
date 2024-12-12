"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "The Firm", href: "/firm" },
  { title: "The Team", href: "/team" },
  { title: "Practice Areas", href: "/practice-areas" },
  { title: "Insights", href: "/insights" },
  { title: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-[rgb(10,35,41)]/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      isScrolled && "shadow-sm"
    )}>
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-8">
          <Image
            src="/adierandco.png"
            alt="Adier & Co Logo"
            width={192}
            height={57}
            className="h-auto w-48"
            priority
          />
          <span className="sr-only">Adier & Co</span>
        </Link>
        <nav className="hidden md:flex md:flex-1">
          <ul className="flex gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white transition-colors hover:text-[rgb(157,67,43)]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="px-2 md:hidden text-white"
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="text-[rgb(10,35,41)]">Menu</SheetTitle>
            <nav>
              <ul className="grid gap-4 py-6">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-semibold tracking-tight text-[rgb(10,35,41)]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

