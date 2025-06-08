"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  MapPin,
  Calendar,
  Globe,
  Mail,
  Linkedin,
  DollarSign,
  TrendingUp,
  Bell,
  Target,
  Bookmark,
  Printer,
} from "lucide-react"
import Link from "next/link"

export default function InvestorDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch this data based on the ID
  const investor = {
    id: 1,
    name: "Andreessen Horowitz",
    shortName: "a16z",
    type: "Venture Capital",
    description:
      "Andreessen Horowitz (a16z) is a venture capital firm in Silicon Valley, California, that backs bold entrepreneurs building the future through technology.",
    fullDescription:
      "Founded in 2009 by Marc Andreessen and Ben Horowitz, a16z has become one of the most prominent venture capital firms in Silicon Valley. The firm is known for its thesis-driven approach to investing and its comprehensive support system for portfolio companies, including operational expertise, network access, and strategic guidance. a16z invests across multiple stages and sectors, with particular strength in enterprise software, consumer technology, cryptocurrency, and bio/healthcare.",
    stage: ["Seed", "Series A", "Series B", "Series C", "Growth"],
    location: "Menlo Park, CA",
    founded: "2009",
    aum: "$35B",
    portfolioCount: 450,
    activeDeals: 25,
    website: "https://a16z.com",
    linkedin: "https://linkedin.com/company/andreessen-horowitz",
    twitter: "https://x.com/a16z",
    logo: "/placeholder.svg?height=80&width=80",
    checkSize: {
      range: "$500K - $100M",
      sweetSpot: "$25M",
      typical: "$10M - $50M",
    },
    partners: [
      {
        name: "Marc Andreessen",
        role: "Co-Founder & General Partner",
        linkedin: "https://linkedin.com/in/pmarca",
        twitter: "https://x.com/pmarca",
      },
      {
        name: "Ben Horowitz",
        role: "Co-Founder & General Partner",
        linkedin: "https://linkedin.com/in/bhorowitz",
        twitter: "https://x.com/bhorowitz",
      },
      {
        name: "Chris Dixon",
        role: "General Partner",
        linkedin: "https://linkedin.com/in/cdixon",
        twitter: "https://x.com/cdixon",
      },
      {
        name: "Jeff Jordan",
        role: "General Partner",
        linkedin: "https://linkedin.com/in/jeff-jordan",
        twitter: "https://x.com/jeff_jordan",
      },
    ],
    focusAreas: ["AI/ML", "Crypto", "SaaS", "Consumer", "Enterprise", "Bio/Healthcare"],
    recentInvestments: [
      { name: "Notion", stage: "Series C", amount: "$275M", date: "2023-10-01", checkSize: "$50M" },
      { name: "Clubhouse", stage: "Series B", amount: "$100M", date: "2023-08-15", checkSize: "$25M" },
      { name: "Coinbase", stage: "Series A", amount: "$25M", date: "2023-06-20", checkSize: "$15M" },
    ],
    portfolioCompanies: [
      { name: "Airbnb", status: "Public", valuation: "$75B" },
      { name: "Coinbase", status: "Public", valuation: "$16B" },
      { name: "Notion", status: "Private", valuation: "$10B" },
      { name: "Clubhouse", status: "Private", valuation: "$4B" },
      { name: "Stripe", status: "Private", valuation: "$95B" },
      { name: "Instacart", status: "Public", valuation: "$10B" },
    ],
    funds: [
      { name: "a16z Fund VII", size: "$4.5B", year: "2022", type: "Growth" },
      { name: "a16z Crypto Fund III", size: "$4.5B", year: "2022", type: "Crypto" },
      { name: "a16z Bio Fund II", size: "$450M", year: "2021", type: "Bio/Healthcare" },
    ],
  }

  const handleEmailShare = () => {
    const subject = `Check out ${investor.name}'s Investor Profile on StartupIntros`
    const body = `Hi, I thought you might be interested in checking out this investor profile: ${window.location.href}`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={investor.logo || "/placeholder.svg"}
              alt={`${investor.name} logo`}
              className="w-20 h-20 rounded-xl border shadow-sm"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{investor.name}</h1>
                  <p className="text-lg text-gray-600 mb-3">{investor.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{investor.type}</Badge>
                    <Badge variant="secondary">{investor.stage.length} Investment Stages</Badge>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href={investor.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={investor.twitter} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleEmailShare}>
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handlePrint}>
                    <Printer className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button size="icon">
                    <Bell className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="funds">Funds</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {investor.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{investor.fullDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Investment Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Investment Stages</h4>
                        <div className="flex flex-wrap gap-2">
                          {investor.stage.map((stage, index) => (
                            <Badge key={index} variant="outline">
                              {stage}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {investor.focusAreas.map((area, index) => (
                            <Badge key={index} variant="secondary">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Check Size Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <div className="text-sm text-gray-600 mb-1">Full Range</div>
                        <div className="font-semibold text-blue-600">{investor.checkSize.range}</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Target className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <div className="text-sm text-gray-600 mb-1">Sweet Spot</div>
                        <div className="font-semibold text-green-600">{investor.checkSize.sweetSpot}</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <div className="text-sm text-gray-600 mb-1">Typical Range</div>
                        <div className="font-semibold text-purple-600">{investor.checkSize.typical}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Investments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {investor.recentInvestments.map((investment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Link
                              href={`/startups/${investment.name.toLowerCase()}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {investment.name}
                            </Link>
                            <p className="text-sm text-gray-600">
                              {investment.stage} • {new Date(investment.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-green-600">{investment.amount}</div>
                            <div className="text-sm text-gray-600">Check: {investment.checkSize}</div>
                            <Link
                              href={`/funding-rounds/${investment.name.toLowerCase()}-${investment.stage.toLowerCase().replace(" ", "-")}`}
                              className="text-xs text-blue-600 hover:underline"
                            >
                              View Round
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Companies</CardTitle>
                    <CardDescription>{investor.portfolioCount} total investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {investor.portfolioCompanies.map((company, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Link
                              href={`/startups/${company.name.toLowerCase()}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {company.name}
                            </Link>
                            <p className="text-sm text-gray-600">Valuation: {company.valuation}</p>
                          </div>
                          <Badge variant={company.status === "Public" ? "default" : "secondary"}>
                            {company.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {investor.partners.map((partner, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {partner.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <Link
                              href={`/people/${partner.name.toLowerCase().replace(" ", "-")}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {partner.name}
                            </Link>
                            <p className="text-gray-600 text-sm">{partner.role}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <a href={partner.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-4 h-4" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={partner.twitter} target="_blank" rel="noopener noreferrer">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="funds" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fund Portfolio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {investor.funds.map((fund, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{fund.name}</h3>
                            <p className="text-sm text-gray-600">
                              {fund.type} • {fund.year}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-green-600">{fund.size}</div>
                            <Badge variant="secondary" className="text-xs">
                              Active
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent News</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "a16z Announces New $4.5B Growth Fund",
                          excerpt: "Andreessen Horowitz raises largest fund to date focusing on growth-stage companies",
                          date: "2 days ago",
                          source: "TechCrunch",
                        },
                        {
                          title: "Marc Andreessen Discusses AI Investment Strategy",
                          excerpt: "a16z co-founder shares insights on artificial intelligence opportunities",
                          date: "1 week ago",
                          source: "Forbes",
                        },
                        {
                          title: "a16z Portfolio Company Notion Raises $275M",
                          excerpt: "Productivity startup reaches $10B valuation in latest funding round",
                          date: "2 weeks ago",
                          source: "VentureBeat",
                        },
                      ].map((article, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h4 className="font-semibold hover:text-blue-600 cursor-pointer mb-2">{article.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{article.source}</span>
                            <span className="mx-2">•</span>
                            <span>{article.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Founded</span>
                  </div>
                  <span className="font-semibold">{investor.founded}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Location</span>
                  </div>
                  <span className="font-semibold">{investor.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">AUM</span>
                  </div>
                  <span className="font-semibold text-green-600">{investor.aum}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Portfolio</span>
                  </div>
                  <span className="font-semibold">{investor.portfolioCount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Active Deals</span>
                  </div>
                  <span className="font-semibold">{investor.activeDeals}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-sm">Sweet Spot</span>
                  </div>
                  <span className="font-semibold text-green-600">{investor.checkSize.sweetSpot}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Website</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                    <a href={investor.website} target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Linkedin className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">LinkedIn</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-blue-600" size="icon" asChild>
                    <a href={investor.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="text-sm">X (Twitter)</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-blue-600" size="icon" asChild>
                    <a href={investor.twitter} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Investment Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25</div>
                  <p className="text-sm text-gray-600">Active deals this year</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$2.1B</div>
                  <p className="text-sm text-gray-600">Deployed this year</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Similar Investors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Sequoia Capital", "Accel Partners", "Kleiner Perkins"].map((investor, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">{investor}</span>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Compare
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
