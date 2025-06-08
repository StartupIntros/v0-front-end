"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, FileText, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"

export default function FundingRoundPage({ params }: { params: { id: string } }) {
  // In a real app, you'd parse the ID and fetch data
  // Example ID format: "notion-series-c" or "stripe-series-b"

  const fundingRound = {
    id: "notion-series-c",
    company: {
      name: "Notion",
      logo: "/placeholder.svg?height=60&width=60",
      description: "All-in-one workspace for notes, tasks, wikis, and databases",
      website: "https://notion.so",
    },
    round: {
      stage: "Series C",
      amount: "$275M",
      valuation: "$10B",
      date: "2023-10-01",
      announcementDate: "2023-10-05",
      status: "Completed",
    },
    leadInvestors: [
      {
        name: "Andreessen Horowitz",
        shortName: "a16z",
        logo: "/placeholder.svg?height=40&width=40",
        contribution: "$150M",
      },
    ],
    participatingInvestors: [
      {
        name: "Sequoia Capital",
        shortName: "Sequoia",
        logo: "/placeholder.svg?height=40&width=40",
        contribution: "$75M",
      },
      {
        name: "First Round Capital",
        shortName: "First Round",
        logo: "/placeholder.svg?height=40&width=40",
        contribution: "$50M",
      },
    ],
    useOfFunds: [
      "Product development and R&D",
      "International expansion",
      "Team growth and hiring",
      "Marketing and customer acquisition",
    ],
    keyMetrics: {
      previousValuation: "$2B",
      valuationMultiple: "5x",
      revenueMultiple: "25x",
      employeeCount: "400+",
      customerCount: "30M+",
    },
    timeline: [
      { date: "2023-08-15", event: "Fundraising process initiated" },
      { date: "2023-09-10", event: "Lead investor commitment secured" },
      { date: "2023-09-25", event: "Round oversubscribed and closed" },
      { date: "2023-10-01", event: "Funding officially completed" },
      { date: "2023-10-05", event: "Public announcement" },
    ],
    documents: [
      { name: "Press Release", type: "PDF", url: "#" },
      { name: "SEC Filing", type: "PDF", url: "#" },
      { name: "Investor Presentation", type: "PDF", url: "#" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={fundingRound.company.logo || "/placeholder.svg"}
              alt={`${fundingRound.company.name} logo`}
              className="w-16 h-16 rounded-xl border shadow-sm"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{fundingRound.round.stage}</h1>
                    <span className="text-3xl font-light text-gray-400">•</span>
                    <Link
                      href={`/startups/${fundingRound.company.name.toLowerCase()}`}
                      className="text-3xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      {fundingRound.company.name}
                    </Link>
                  </div>
                  <p className="text-lg text-gray-600 mb-3">{fundingRound.company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">{fundingRound.round.status}</Badge>
                    <Badge variant="outline">{fundingRound.round.stage}</Badge>
                    <Badge variant="secondary">{new Date(fundingRound.round.date).getFullYear()}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Button variant="outline" size="icon">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{fundingRound.round.amount}</div>
                    <p className="text-gray-600">at {fundingRound.round.valuation} valuation</p>
                  </div>
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
            {/* Round Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Round Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Funding Amount</span>
                      <span className="font-semibold text-green-600">{fundingRound.round.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Post-Money Valuation</span>
                      <span className="font-semibold">{fundingRound.round.valuation}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Previous Valuation</span>
                      <span className="font-semibold">{fundingRound.keyMetrics.previousValuation}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Valuation Multiple</span>
                      <span className="font-semibold text-blue-600">{fundingRound.keyMetrics.valuationMultiple}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Closing Date</span>
                      <span className="font-semibold">{new Date(fundingRound.round.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Announcement Date</span>
                      <span className="font-semibold">
                        {new Date(fundingRound.round.announcementDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Employee Count</span>
                      <span className="font-semibold">{fundingRound.keyMetrics.employeeCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Customer Base</span>
                      <span className="font-semibold">{fundingRound.keyMetrics.customerCount}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investors */}
            <Card>
              <CardHeader>
                <CardTitle>Investors</CardTitle>
                <CardDescription>Lead and participating investors in this round</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Lead Investors</h4>
                  <div className="space-y-3">
                    {fundingRound.leadInvestors.map((investor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
                        <div className="flex items-center space-x-3">
                          <img
                            src={investor.logo || "/placeholder.svg"}
                            alt={`${investor.name} logo`}
                            className="w-10 h-10 rounded-lg border"
                          />
                          <div>
                            <Link
                              href={`/investors/${investor.name.toLowerCase().replace(" ", "-")}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {investor.name}
                            </Link>
                            <p className="text-sm text-gray-600">Lead Investor</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">{investor.contribution}</div>
                          <Badge className="bg-green-100 text-green-800 text-xs">Lead</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Participating Investors</h4>
                  <div className="space-y-3">
                    {fundingRound.participatingInvestors.map((investor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <img
                            src={investor.logo || "/placeholder.svg"}
                            alt={`${investor.name} logo`}
                            className="w-10 h-10 rounded-lg border"
                          />
                          <div>
                            <Link
                              href={`/investors/${investor.name.toLowerCase().replace(" ", "-")}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {investor.name}
                            </Link>
                            <p className="text-sm text-gray-600">Participating Investor</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{investor.contribution}</div>
                          <Badge variant="secondary" className="text-xs">
                            Participant
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use of Funds */}
            <Card>
              <CardHeader>
                <CardTitle>Use of Funds</CardTitle>
                <CardDescription>How the company plans to deploy the capital</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {fundingRound.useOfFunds.map((use, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Funding Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fundingRound.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{event.event}</span>
                          <span className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Company Profile
                </Button>
                <Button className="w-full" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Compare Rounds
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Round Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {fundingRound.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{doc.name}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      View
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related News</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Notion Raises $275M at $10B Valuation",
                    source: "TechCrunch",
                    date: "2 days ago",
                  },
                  {
                    title: "a16z Leads Notion's Series C Round",
                    source: "VentureBeat",
                    date: "3 days ago",
                  },
                  {
                    title: "Productivity Software Market Heats Up",
                    source: "Forbes",
                    date: "1 week ago",
                  },
                ].map((article, index) => (
                  <div key={index} className="border-b pb-3 last:border-b-0">
                    <h4 className="font-medium text-sm line-clamp-2 hover:text-blue-600 cursor-pointer mb-1">
                      {article.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{article.source}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Similar Rounds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { company: "Figma", stage: "Series D", amount: "$200M" },
                  { company: "Canva", stage: "Series C", amount: "$200M" },
                  { company: "Miro", stage: "Series B", amount: "$400M" },
                ].map((round, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <span className="text-sm font-medium">{round.company}</span>
                      <p className="text-xs text-gray-600">{round.stage}</p>
                    </div>
                    <span className="text-sm font-semibold text-green-600">{round.amount}</span>
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
