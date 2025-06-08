"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, DollarSign, BarChart3, Users, ExternalLink } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import Link from "next/link"
import { useEffect } from "react"

// Data remains the same as it's for the Overview section
const fundingData = [
  { month: "Jan", amount: 120 },
  { month: "Feb", amount: 180 },
  { month: "Mar", amount: 240 },
  { month: "Apr", amount: 200 },
  { month: "May", amount: 320 },
  { month: "Jun", amount: 280 },
]

const trendingStartups = [
  {
    name: "Anthropic",
    description: "Building reliable, interpretable, and steerable AI systems",
    industry: "AI/ML",
    funding: "$450M",
    trend: "+28%",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Perplexity AI",
    description: "AI-powered answer engine with real-time information",
    industry: "Search/AI",
    funding: "$73.6M",
    trend: "+42%",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Mistral AI",
    description: "Open-source large language models and AI research",
    industry: "AI/ML",
    funding: "$415M",
    trend: "+35%",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

const startupNews = [
  {
    title: "Anthropic Releases Claude 3 with Improved Reasoning Capabilities",
    source: "TechCrunch",
    time: "2 hours ago",
    category: "AI",
    company: "Anthropic",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    title: "Perplexity AI Raises $73.6M Series B at $520M Valuation",
    source: "Bloomberg",
    time: "1 day ago",
    category: "Funding",
    company: "Perplexity AI",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    title: "Mistral AI Launches New Open-Source Model to Compete with GPT-4",
    source: "The Verge",
    time: "3 days ago",
    category: "AI",
    company: "Mistral AI",
    image: "/placeholder.svg?height=80&width=120",
  },
]

const industryTrends = [
  { industry: "AI/ML", growth: 85, deals: 124 },
  { industry: "Climate Tech", growth: 72, deals: 87 },
  { industry: "Fintech", growth: 58, deals: 93 },
  { industry: "Healthcare", growth: 64, deals: 76 },
]

const marketTrends = [
  {
    trend: "AI Startup Valuations Up 40%",
    impact: "High",
    category: "Valuation Trends",
    change: "+40%",
    timeframe: "30 days",
  },
  {
    trend: "Enterprise SaaS Deals Increasing",
    impact: "Medium",
    category: "Sector Activity",
    change: "+25%",
    timeframe: "30 days",
  },
  {
    trend: "Late-Stage Funding Slowing",
    impact: "Medium",
    category: "Market Conditions",
    change: "-15%",
    timeframe: "30 days",
  },
]

const emergingTechnologies = [
  { tech: "Generative AI", growth: "+145%", companies: 87 },
  { tech: "Quantum Computing", growth: "+89%", companies: 32 },
  { tech: "Fusion Energy", growth: "+67%", companies: 18 },
]

export default function DashboardOverviewPage() {
  useEffect(() => {
    // Suppress ResizeObserver errors
    const resizeObserverErrorHandler = (e: ErrorEvent) => {
      if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
        e.stopImmediatePropagation()
        return false
      }
    }

    window.addEventListener("error", resizeObserverErrorHandler)

    return () => {
      window.removeEventListener("error", resizeObserverErrorHandler)
    }
  }, [])

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {/* Page Header Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Your daily briefing on the startup ecosystem.</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="week">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Last 24 Hours</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Funding</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8.4B</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deal Count</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Deal Size</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24.6M</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Startups</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">187</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout for Trending Startups and Latest News */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Trending Startups */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Trending Startups</CardTitle>
              <CardDescription>Companies gaining significant traction</CardDescription>
            </div>
            <Link href="/startups">
              <Button variant="ghost" size="sm" className="gap-1">
                View All <ExternalLink className="h-3 w-3" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingStartups.slice(0, 3).map((startup, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                  <img
                    src={startup.logo || "/placeholder.svg?height=40&width=40&query=company+logo"}
                    alt={startup.name}
                    className="w-10 h-10 rounded-md object-cover bg-gray-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold truncate">{startup.name}</h3>
                      <Badge variant="secondary" className="text-green-600 whitespace-nowrap">
                        {startup.trend}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">{startup.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="outline">{startup.industry}</Badge>
                      <span className="text-sm font-medium">{startup.funding}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Latest News */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Latest News</CardTitle>
              <CardDescription>Breaking stories from the tech ecosystem</CardDescription>
            </div>
            <Link href="/news-feed">
              <Button variant="ghost" size="sm" className="gap-1">
                View All <ExternalLink className="h-3 w-3" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {startupNews.slice(0, 3).map((story, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                  <img
                    src={story.image || "/placeholder.svg?height=80&width=120&query=news+thumbnail"}
                    alt={story.title}
                    className="w-16 h-12 rounded-md object-cover bg-gray-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm line-clamp-2">{story.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 truncate">{story.source}</span>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{story.time}</span>
                      </div>
                      <Badge variant="outline">{story.category}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Trends Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Funding Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Funding Trends</CardTitle>
            <CardDescription>Monthly funding activity in the startup ecosystem</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={fundingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#8b5cf6" strokeWidth={2} name="Funding ($M)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Industry Growth Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Industry Growth</CardTitle>
            <CardDescription>Relative growth and deal activity by industry</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={industryTrends.slice(0, 4)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="industry" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="growth" name="Growth Score" fill="#8b5cf6" />
                <Bar dataKey="deals" name="Deal Count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Market Trends and Emerging Technologies */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Market Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Market Signals</CardTitle>
            <CardDescription>Key patterns and movements in the ecosystem</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {marketTrends.map((trend, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold text-sm">{trend.trend}</h4>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={trend.change.startsWith("+") ? "default" : "destructive"}
                        className="text-xs whitespace-nowrap"
                      >
                        {trend.change}
                      </Badge>
                      <Badge variant={trend.impact === "High" ? "destructive" : "secondary"} className="text-xs">
                        {trend.impact}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="truncate">{trend.category}</span>
                    <span className="whitespace-nowrap">{trend.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emerging Technologies */}
        <Card>
          <CardHeader>
            <CardTitle>Emerging Technologies</CardTitle>
            <CardDescription>Technologies gaining traction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emergingTechnologies.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="min-w-0">
                    <h4 className="font-semibold truncate">{trend.tech}</h4>
                    <p className="text-sm text-gray-600">{trend.companies} companies</p>
                  </div>
                  <Badge variant="secondary" className="text-green-600 whitespace-nowrap">
                    {trend.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
