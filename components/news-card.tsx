"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, ExternalLink, Bookmark } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  category: string
  source: string
  publishedAt: string
  readTime: string
  image: string
  trending: boolean
}

interface NewsCardProps {
  article: NewsArticle
  view: "grid" | "list"
  featured?: boolean
}

export function NewsCard({ article, view, featured = false }: NewsCardProps) {
  if (view === "list") {
    return (
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    {article.trending && (
                      <Badge variant="destructive" className="bg-red-100 text-red-800 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-2 hover:text-blue-600 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{article.source}</span>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.publishedAt}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4 flex-shrink-0">
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
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

  // Grid view (original card layout)
  if (featured) {
    return (
      <Card className="mb-8 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge>{article.category}</Badge>
              {article.trending && (
                <Badge variant="destructive" className="bg-red-100 text-red-800">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 cursor-pointer">{article.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span>{article.source}</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.publishedAt}
                </div>
                <span>{article.readTime}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="aspect-video">
        <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {article.category}
          </Badge>
          {article.trending && (
            <Badge variant="destructive" className="bg-red-100 text-red-800 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg line-clamp-2 hover:text-blue-600">{article.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 mb-4">{article.excerpt}</CardDescription>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span>{article.source}</span>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {article.publishedAt}
            </div>
          </div>
          <span>{article.readTime}</span>
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
