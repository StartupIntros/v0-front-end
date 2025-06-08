"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, ExternalLink, Bookmark } from "lucide-react"

export interface ContentItem {
  id: number
  title: string
  excerpt: string
  category: string
  source: string
  publishedAt: string
  readTime: string
  image: string
  trending?: boolean
  featured?: boolean
  tags?: string[]
}

interface ContentCardProps {
  item: ContentItem
  view: "grid" | "list"
  contentType: "news" | "newsletter" | "blog"
}

export function ContentCard({ item, view, contentType }: ContentCardProps) {
  // List view is consistent across all content types
  if (view === "list") {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    {item.trending && (
                      <Badge variant="destructive" className="bg-red-100 text-red-800 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-2 hover:text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{item.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{item.source}</span>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.publishedAt}
                    </div>
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4 flex-shrink-0">
                  <Button variant="ghost" size="sm" title="Save">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" title="Read">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Featured items get special treatment
  if (item.featured) {
    return (
      <Card className="mb-8 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
          </div>
          <div className="md:w-3/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge>
                {contentType === "newsletter" ? "Featured Issue" : contentType === "blog" ? "Featured" : item.category}
              </Badge>
              {item.trending && (
                <Badge variant="destructive" className="bg-red-100 text-red-800">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 cursor-pointer">{item.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-4">
                <span>{item.source}</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.publishedAt}
                </div>
                <span>{item.readTime}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button>
                {contentType === "newsletter"
                  ? "Read Full Issue"
                  : contentType === "blog"
                    ? "Read Article"
                    : "Read More"}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  // Standard grid view
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video">
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {item.category}
          </Badge>
          {item.trending && (
            <Badge variant="destructive" className="bg-red-100 text-red-800 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg line-clamp-2 hover:text-blue-600">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 mb-4">{item.excerpt}</CardDescription>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span>{item.source}</span>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {item.publishedAt}
            </div>
          </div>
          <span>{item.readTime}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Bookmark className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            Read
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
