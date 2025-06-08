"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { ViewToggle } from "@/components/view-toggle"
import { ContentCard, type ContentItem } from "@/components/content-card"

const newsletterIssues: ContentItem[] = [
  {
    id: 1,
    title: "The Future of AI in Startup Ecosystems",
    excerpt:
      "This week we dive deep into how artificial intelligence is reshaping the startup landscape, from funding patterns to product development strategies.",
    category: "Issue #47",
    source: "Startup Weekly",
    publishedAt: "December 15, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300&text=Newsletter+Issue+47",
    featured: true,
  },
  {
    id: 2,
    title: "Fundraising Trends: What Changed in Q4 2024",
    excerpt:
      "A comprehensive analysis of Q4 funding data, emerging investor preferences, and what founders need to know for 2025 fundraising.",
    category: "Issue #46",
    source: "Startup Weekly",
    publishedAt: "December 8, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300&text=Newsletter+Issue+46",
    featured: false,
  },
  {
    id: 3,
    title: "The Rise of Remote-First Startups",
    excerpt: "How companies are building culture, processes, and technology stacks for distributed teams from day one.",
    category: "Issue #45",
    source: "Startup Weekly",
    publishedAt: "December 1, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=300&text=Newsletter+Issue+45",
    featured: false,
  },
]

export default function NewsletterPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [view, setView] = useState<"grid" | "list">("grid")

  const filteredNewsletters = newsletterIssues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Newsletter</h1>
          <p className="text-muted-foreground mt-1">Our weekly insights and analysis.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search newsletters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <ViewToggle storageKey="newsletter-view" onViewChange={setView} />
        </div>
      </div>

      <div className="space-y-6">
        {/* Featured newsletter */}
        {filteredNewsletters.find((issue) => issue.featured) && (
          <ContentCard
            item={filteredNewsletters.find((issue) => issue.featured)!}
            view="grid"
            contentType="newsletter"
          />
        )}

        {/* Regular newsletters */}
        <div className={view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredNewsletters
            .filter((issue) => !issue.featured)
            .map((issue) => (
              <ContentCard key={issue.id} item={issue} view={view} contentType="newsletter" />
            ))}
        </div>
      </div>
    </div>
  )
}
