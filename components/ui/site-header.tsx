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
  { title: "Expertise", href: "/expertise" },
  { title: "Capability Statement", href: "/capability-statement" },
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
      "sticky top-0 z-50 w-full border-b bg-[rgb(163,164,168)] backdrop-blur supports-[backdrop-filter]:bg-background/60",
      isScrolled && "shadow-sm"
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Adier & Co Logo"
            width={192}
            height={57}
            className="h-auto w-48"
            priority
          />
          <span className="sr-only">Adier & Co</span>
        </Link>
        <nav className="flex items-center">
          <ul className="hidden md:flex gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[rgb(10,35,41)] transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden text-[rgb(10,35,41)]"
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
        </nav>
      </div>
    </header>
  )
}

