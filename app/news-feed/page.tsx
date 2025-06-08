"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { ViewToggle } from "@/components/view-toggle"
import { ContentCard, type ContentItem } from "@/components/content-card"

// Sample news data
const newsArticles: ContentItem[] = [
  {
    id: 1,
    title: "AI Startup Raises $50M to Revolutionize Healthcare Diagnostics",
    excerpt:
      "MediScan AI has secured $50 million in Series B funding to expand its AI-powered diagnostic platform that claims to detect diseases with 99% accuracy.",
    category: "Funding",
    source: "TechCrunch",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=300&text=AI+Healthcare",
    trending: true,
    featured: true,
  },
  {
    id: 2,
    title: "Top VC Firm Announces New $1B Fund Focused on Climate Tech",
    excerpt:
      "Sequoia Capital has announced a new $1 billion fund dedicated to investing in startups tackling climate change and sustainability challenges.",
    category: "Venture Capital",
    source: "Bloomberg",
    publishedAt: "5 hours ago",
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=300&text=Climate+Tech+Fund",
    trending: false,
    featured: false,
  },
  {
    id: 3,
    title: "E-commerce Platform Expands to Southeast Asian Markets",
    excerpt:
      "Shopify competitor Commercify has announced its expansion into Indonesia, Thailand, and Vietnam, targeting the region's rapidly growing online retail market.",
    category: "Expansion",
    source: "Reuters",
    publishedAt: "Yesterday",
    readTime: "3 min read",
    image: "/placeholder.svg?height=200&width=300&text=Ecommerce+Expansion",
    trending: false,
    featured: false,
  },
  {
    id: 4,
    title: "New Regulations Could Impact Fintech Startups",
    excerpt:
      "Upcoming regulatory changes in the EU and US could significantly impact how fintech startups operate, particularly those in the cryptocurrency and lending spaces.",
    category: "Regulation",
    source: "Financial Times",
    publishedAt: "2 days ago",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=300&text=Fintech+Regulation",
    trending: true,
    featured: false,
  },
]

export default function NewsFeedPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [view, setView] = useState<"grid" | "list">("grid")

  const filteredNews = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">News Feed</h1>
          <p className="text-muted-foreground mt-1">Stay updated with the latest startup and tech news.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search news..."
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
          <ViewToggle storageKey="news-view" onViewChange={setView} />
        </div>
      </div>

      <div className="space-y-6">
        {/* Featured article */}
        {filteredNews.find((article) => article.featured) && (
          <ContentCard item={filteredNews.find((article) => article.featured)!} view="grid" contentType="news" />
        )}

        {/* Regular articles */}
        <div className={view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredNews
            .filter((article) => !article.featured)
            .map((article) => (
              <ContentCard key={article.id} item={article} view={view} contentType="news" />
            ))}
        </div>
      </div>
    </div>
  )
}
