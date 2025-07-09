"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Keynote Speakers", href: "/keynote-speakers" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Program", href: "/program" },
    { name: "Committees", href: "/committees" },
    { name: "Venue", href: "/venue" },
    { name: "Registration", href: "/registration" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="WITS 2026"
              width={280}
              height={110}
              className="h-40 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium relative ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-slate-400 hover:text-white hover:bg-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 px-2 py-2 font-medium relative ${
                    isActive(item.href)
                      ? "text-white bg-slate-900/50 rounded-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}