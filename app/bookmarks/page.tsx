"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { ContentCard, type ContentItem } from "@/components/content-card"

// Sample saved articles data
const savedArticles: ContentItem[] = [
  {
    id: 1,
    title: "AI Startup Raises $50M to Revolutionize Healthcare Diagnostics",
    excerpt:
      "MediScan AI has secured $50 million in Series B funding to expand its AI-powered diagnostic platform that claims to detect diseases with 99% accuracy.",
    category: "News",
    source: "TechCrunch",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=300&text=AI+Healthcare",
  },
  {
    id: 2,
    title: "The Future of AI in Startup Ecosystems",
    excerpt:
      "This week we dive deep into how artificial intelligence is reshaping the startup landscape, from funding patterns to product development strategies.",
    category: "Newsletter",
    source: "Startup Weekly",
    publishedAt: "December 15, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300&text=Newsletter+Issue+47",
  },
  {
    id: 3,
    title: "How to Build a Minimum Viable Product That Actually Works",
    excerpt: "A step-by-step guide to building an MVP that validates your assumptions and attracts early adopters.",
    category: "Blog",
    source: "Sarah Chen, Product Lead",
    publishedAt: "May 25, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300&text=MVP+Guide",
  },
]

export default function BookmarksPage() {
  const [activeTab, setActiveTab] = useState("startups")
  const [searchTerm, setSearchTerm] = useState("")
  const [view, setView] = useState<"grid" | "list">("list")

  const filteredArticles = savedArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Bookmarks</h1>
      </div>
      <Tabs defaultValue="startups" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="startups">Startups</TabsTrigger>
          <TabsTrigger value="investors">Investors</TabsTrigger>
          <TabsTrigger value="funding-rounds">Funding Rounds</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="searches">Searches</TabsTrigger>
        </TabsList>

        {/* Articles Tab Content */}
        <TabsContent value="articles" className="space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search saved articles..."
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
            </div>
          </div>

          <div className="space-y-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <ContentCard item={article} view="list" contentType="news" />
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No saved articles found.</p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Other tabs content would go here */}
        <TabsContent value="startups">
          {/* Startups content */}
          <div className="text-center py-10">
            <p className="text-muted-foreground">Your saved startups will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="investors">
          {/* Investors content */}
          <div className="text-center py-10">
            <p className="text-muted-foreground">Your saved investors will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="funding-rounds">
          {/* Funding rounds content */}
          <div className="text-center py-10">
            <p className="text-muted-foreground">Your saved funding rounds will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="searches">
          {/* Saved searches content */}
          <div className="text-center py-10">
            <p className="text-muted-foreground">Your saved searches will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper Button component for the Bookmarks page
function Button({ children, variant = "default", size = "default", className = "", ...props }) {
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
