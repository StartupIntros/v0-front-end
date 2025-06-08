"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Tag } from "lucide-react"
import { ContentCard, type ContentItem } from "@/components/content-card"

const blogPosts: ContentItem[] = [
  {
    id: 1,
    title: "How to Build a Minimum Viable Product That Actually Works",
    excerpt: "A step-by-step guide to building an MVP that validates your assumptions and attracts early adopters.",
    category: "Product Development",
    source: "Sarah Chen, Product Lead",
    publishedAt: "May 25, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300&text=MVP+Guide",
    featured: true,
    tags: ["MVP", "Product Development", "Validation"],
  },
  {
    id: 2,
    title: "The Founder's Guide to Startup Financial Modeling",
    excerpt:
      "Learn how to create financial models that will impress investors and help you make better business decisions.",
    category: "Finance",
    source: "David Thompson, Finance Expert",
    publishedAt: "May 18, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=300&text=Financial+Modeling",
    featured: false,
    tags: ["Finance", "Fundraising", "Metrics"],
  },
  {
    id: 3,
    title: "Customer Research Methods for Early-Stage Startups",
    excerpt:
      "Effective techniques for understanding your customers when you're still defining your product and market.",
    category: "Customer Research",
    source: "Emily Rodriguez, UX Researcher",
    publishedAt: "May 10, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300&text=Customer+Research",
    featured: false,
    tags: ["Research", "Customer Development", "Interviews"],
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [view, setView] = useState<"grid" | "list">("grid")

  const filteredBlogPosts = blogPosts.filter(
    (post) =>
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (selectedCategory === "" || post.category === selectedCategory),
  )

  const featuredPost = filteredBlogPosts.find((post) => post.featured)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground mt-1">Insights, guides, and resources for startups.</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* Featured post */}
          {featuredPost && <ContentCard item={featuredPost} view="grid" contentType="blog" />}

          {/* Regular posts */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {filteredBlogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <ContentCard key={post.id} item={post} view="grid" contentType="blog" />
              ))}
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Product Development", "Finance", "Customer Research", "Pricing", "Marketing", "Team Building"].map(
                (category) => (
                  <div
                    key={category}
                    className={`flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer ${
                      selectedCategory === category ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setSelectedCategory(category === selectedCategory ? "" : category)}
                  >
                    <span className="text-sm">{category}</span>
                    <Badge variant="secondary" className="text-xs">
                      {blogPosts.filter((post) => post.category === category).length}
                    </Badge>
                  </div>
                ),
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Popular Tags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["MVP", "Fundraising", "SaaS", "Growth", "Metrics", "Remote Work"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-gray-100">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
