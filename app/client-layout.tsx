"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { EmailGateModal } from "@/components/email-gate-modal"
import { FundyAIChatbot } from "@/components/fundy-ai-chatbot"
import { Button } from "@/components/ui/button"
import { TrendingUp, Search, Newspaper, BookOpen, Home, Mail, Wrench, Briefcase, Building } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

interface NavItem {
  label: string
  icon: React.ElementType
  href: string
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showEmailGate, setShowEmailGate] = useState(false)
  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  const isHomepage = pathname === "/"

  const navigationItems: NavItem[] = [
    { label: "Dashboard", icon: Home, href: "/dashboard" },
    { label: "Startups", icon: Search, href: "/startups" },
    { label: "Investors", icon: TrendingUp, href: "/investors" },
    { label: "Funding Rounds", icon: Briefcase, href: "/funding-rounds" },
    { label: "News Feed", icon: Newspaper, href: "/news-feed" },
    { label: "Newsletter", icon: Mail, href: "/newsletter" },
    { label: "Blog", icon: BookOpen, href: "/blog" },
    { label: "Partners", icon: Wrench, href: "/partners" },
    { label: "My Startup", icon: Building, href: "/startup" },
  ]

  useEffect(() => {
    const emailSubmitted = localStorage.getItem("startup-intros-email-submitted")
    if (emailSubmitted) setHasSubmittedEmail(true)
    const currentViews = Number.parseInt(localStorage.getItem("startup-intros-page-views") || "0")
    localStorage.setItem("startup-intros-page-views", (currentViews + 1).toString())
    if (currentViews + 1 > 1 && !emailSubmitted) {
      const timer = setTimeout(() => setShowEmailGate(true), 2000)
      return () => clearTimeout(timer)
    }

    // Suppress ResizeObserver loop error
    const suppressResizeObserverError = (e: Event) => {
      if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
        e.stopImmediatePropagation()
      }
    }
    window.addEventListener("error", suppressResizeObserverError)

    return () => {
      window.removeEventListener("error", suppressResizeObserverError)
    }
  }, [])

  const handleEmailSubmit = (email: string) => {
    localStorage.setItem("startup-intros-email-submitted", "true")
    localStorage.setItem("startup-intros-user-email", email)
    setHasSubmittedEmail(true)
    setShowEmailGate(false)
    console.log("Email submitted:", email)
  }

  if (isHomepage) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <nav className="bg-white border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">Startup Intros</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Button asChild variant="ghost" className="font-medium">
                    <Link href="/dashboard">Sign In</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 font-medium">
                    <Link href="/dashboard">Get Started Free</Link>
                  </Button>
                </div>
              </div>
            </div>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <EmailGateModal
            isOpen={showEmailGate && !hasSubmittedEmail}
            onClose={() => setShowEmailGate(false)}
            onSubmit={handleEmailSubmit}
          />
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <div className="flex flex-col h-screen">
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
          <div className="flex flex-1 overflow-hidden">
            <aside
              className={`fixed inset-y-0 left-0 z-30 hidden lg:flex flex-col bg-white border-r transition-all duration-300 ease-in-out top-16`}
              style={{ width: sidebarOpen ? "12rem" : "0", visibility: sidebarOpen ? "visible" : "hidden" }}
            >
              <div className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                {navigationItems.map((item) => {
                  // More precise active state logic
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center space-x-2 px-2 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700 border border-blue-200 font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium whitespace-nowrap text-sm">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </aside>
            {sidebarOpen && (
              <div className="lg:hidden">
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
                <aside className="fixed inset-y-0 left-0 z-50 w-56 bg-white border-r transform top-16">
                  <div className="flex flex-col h-[calc(100%-4rem)]">
                    <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                      {navigationItems.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center space-x-2 px-2 py-2 rounded-lg transition-colors ${
                              isActive
                                ? "bg-blue-50 text-blue-700 border border-blue-200 font-medium"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="font-medium text-sm">{item.label}</span>
                          </Link>
                        )
                      })}
                    </nav>
                  </div>
                </aside>
              </div>
            )}
            <main
              className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out`}
              style={{ marginLeft: sidebarOpen ? "12rem" : "0" }}
            >
              {/* Removed the extra padding from here */}
              <Suspense fallback={<div className="p-8">Loading...</div>}>{children}</Suspense>
            </main>
          </div>
          <EmailGateModal
            isOpen={showEmailGate && !hasSubmittedEmail}
            onClose={() => setShowEmailGate(false)}
            onSubmit={handleEmailSubmit}
          />
          <FundyAIChatbot />
        </div>
      </body>
    </html>
  )
}
