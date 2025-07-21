"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isStyledPage = pathname === "/" || pathname === "/venue"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const isActive = (href: string) => pathname === href

  const getTextColor = (active: boolean) => {
    if (!isStyledPage) {
      return active ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
    }
    return active
      ? (scrolled ? "text-gray-900" : "text-white")
      : (scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-300")
  }

  // ✅ Logo logic
  const logoSrc = isStyledPage && !scrolled ? "/logo2.png" : "/logo.png"

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        !isStyledPage || scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="WITS 2026"
              width={380}
              height={170}
              className="h-40 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium relative ${getTextColor(isActive(item.href))}`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className={`absolute -bottom-6 left-0 right-0 h-0.5 ${
                    !isStyledPage || scrolled ? "bg-blue-500" : "bg-white"
                  } rounded-full`}></span>
                )}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden hover:bg-gray-100 ${
              !isStyledPage || scrolled ? "text-gray-500 hover:text-gray-900" : "text-white hover:text-gray-300"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className={`lg:hidden py-6 ${
            !isStyledPage || scrolled ? "border-t border-gray-200" : "border-t border-white/20"
          }`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 px-2 py-2 font-medium relative ${
                    isActive(item.href)
                      ? (!isStyledPage || scrolled
                          ? "text-gray-900 bg-gray-100 rounded-md"
                          : "text-white bg-white/20 rounded-md")
                      : (!isStyledPage || scrolled
                          ? "text-gray-500 hover:text-gray-900"
                          : "text-white/80 hover:text-white")
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className={`absolute left-0 top-0 bottom-0 w-1 ${
                      !isStyledPage || scrolled ? "bg-blue-500" : "bg-white"
                    } rounded-r-full`}></span>
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
