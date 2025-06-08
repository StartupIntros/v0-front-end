"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Users, MapPin, Calendar, Globe, Mail, Linkedin, Bell, Award, Bookmark } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Link from "next/link"

const growthData = [
  { month: "Jan", revenue: 50, users: 1200 },
  { month: "Feb", revenue: 75, users: 1800 },
  { month: "Mar", revenue: 120, users: 2400 },
  { month: "Apr", revenue: 180, users: 3200 },
  { month: "May", revenue: 250, users: 4100 },
  { month: "Jun", revenue: 320, users: 5200 },
]

export default function StartupDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch this data based on the ID
  const startup = {
    id: 1,
    name: "TechFlow AI",
    tagline: "AI-powered workflow automation for enterprises",
    description:
      "TechFlow AI revolutionizes enterprise workflows through intelligent automation. Our platform uses advanced machine learning algorithms to identify bottlenecks, optimize processes, and increase productivity by up to 40%. We serve Fortune 500 companies across various industries.",
    stage: "Series A",
    funding: "$15M",
    valuation: "$75M",
    industry: "AI/ML",
    location: "San Francisco, CA",
    employees: "25-50",
    founded: "2022",
    website: "https://techflow.ai",
    linkedin: "https://linkedin.com/company/techflow-ai",
    twitter: "https://x.com/techflowai",
    logo: "/placeholder.svg?height=80&width=80",
    founders: [
      {
        name: "Sarah Chen",
        role: "CEO",
        linkedin: "https://linkedin.com/in/sarah-chen-techflow",
        twitter: "https://x.com/sarahchen_ai",
      },
      {
        name: "Michael Rodriguez",
        role: "CTO",
        linkedin: "https://linkedin.com/in/michael-rodriguez-cto",
        twitter: "https://x.com/mrodriguez_tech",
      },
    ],
    investors: ["Accel Partners", "Sequoia Capital", "Y Combinator"],
    metrics: {
      revenue: "$320K MRR",
      growth: "45% MoM",
      customers: "150+ Enterprise",
      retention: "95%",
    },
    tractionScore: 85,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={startup.logo || "/placeholder.svg"}
              alt={`${startup.name} logo`}
              className="w-20 h-20 rounded-xl border shadow-sm"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{startup.name}</h1>
                  <p className="text-lg text-gray-600 mb-3">{startup.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{startup.stage}</Badge>
                    <Badge variant="secondary">{startup.industry}</Badge>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href={startup.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={startup.twitter} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="w-4 h-4" />
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
                <TabsTrigger value="signals">Signals</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="funding">Funding</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{startup.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Traction Score</CardTitle>
                    <CardDescription>Based on our AI analysis of public signals and market indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{startup.tractionScore}/100</span>
                        <Badge className="bg-green-100 text-green-800">Strong Traction</Badge>
                      </div>
                      <Progress value={startup.tractionScore} className="h-3" />
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="flex justify-between">
                            <span>Market Traction</span>
                            <span className="font-semibold">92/100</span>
                          </div>
                          <Progress value={92} className="h-2 mt-1" />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <span>Team Strength</span>
                            <span className="font-semibold">88/100</span>
                          </div>
                          <Progress value={88} className="h-2 mt-1" />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <span>Public Interest</span>
                            <span className="font-semibold">85/100</span>
                          </div>
                          <Progress value={85} className="h-2 mt-1" />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <span>Growth Momentum</span>
                            <span className="font-semibold">90/100</span>
                          </div>
                          <Progress value={90} className="h-2 mt-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Growth Trajectory</CardTitle>
                    <CardDescription>Revenue and user growth over the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={growthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} name="Revenue (K)" />
                        <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Users" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="signals" className="space-y-6">
                {/* Google News Signals */}
                <Card>
                  <CardHeader>
                    <CardTitle>Google News Signals</CardTitle>
                    <CardDescription>Public interest and media coverage tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">47</div>
                        <p className="text-sm text-gray-600">Mentions (30d)</p>
                        <p className="text-xs text-green-600">+12 from last month</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">0.72</div>
                        <p className="text-sm text-gray-600">Sentiment Score</p>
                        <p className="text-xs text-gray-500">Positive coverage</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">8</div>
                        <p className="text-sm text-gray-600">Top-tier Sources</p>
                        <p className="text-xs text-gray-500">TechCrunch, Forbes, etc.</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Recent Headlines</h4>
                      {[
                        {
                          title: "TechFlow AI Raises $15M Series A to Revolutionize Enterprise Workflows",
                          source: "TechCrunch",
                          date: "2 days ago",
                        },
                        {
                          title: "AI Startup TechFlow Lands Major Enterprise Clients",
                          source: "VentureBeat",
                          date: "1 week ago",
                        },
                        {
                          title: "The Future of Workflow Automation: TechFlow AI's Vision",
                          source: "Forbes",
                          date: "2 weeks ago",
                        },
                      ].map((headline, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <h5 className="font-medium text-sm line-clamp-2">{headline.title}</h5>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <span>{headline.source}</span>
                            <span className="mx-2">•</span>
                            <span>{headline.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Website & SEO Signals */}
                <Card>
                  <CardHeader>
                    <CardTitle>Website & SEO Signals</CardTitle>
                    <CardDescription>Public web presence and organic reach</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">45K</div>
                        <p className="text-sm text-gray-600">Monthly Visits</p>
                        <p className="text-xs text-green-600">+23% MoM</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-600">67</div>
                        <p className="text-sm text-gray-600">Domain Authority</p>
                        <p className="text-xs text-gray-500">Ahrefs Score</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600">1.2K</div>
                        <p className="text-sm text-gray-600">Backlinks</p>
                        <p className="text-xs text-green-600">+45 this month</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-orange-600">234</div>
                        <p className="text-sm text-gray-600">Keywords</p>
                        <p className="text-xs text-gray-500">Ranking positions</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Top Ranking Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "workflow automation",
                          "enterprise AI",
                          "process optimization",
                          "business automation",
                          "AI workflow",
                        ].map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social & Community Signals */}
                <Card>
                  <CardHeader>
                    <CardTitle>Social & Community Signals</CardTitle>
                    <CardDescription>Public engagement and community presence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Social Media Presence</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">LinkedIn Followers</span>
                            <span className="font-semibold">12.5K</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Twitter Followers</span>
                            <span className="font-semibold">8.2K</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">LinkedIn Engagement</span>
                            <span className="font-semibold text-green-600">4.2%</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Product Hunt & Reviews</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Product Hunt Upvotes</span>
                            <span className="font-semibold">1,247</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">G2 Rating</span>
                            <span className="font-semibold">4.6/5</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Capterra Reviews</span>
                            <span className="font-semibold">89 reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Job Postings & Hiring Signals */}
                <Card>
                  <CardHeader>
                    <CardTitle>Hiring & Growth Signals</CardTitle>
                    <CardDescription>Team expansion and growth indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <p className="text-sm text-gray-600">Open Positions</p>
                        <p className="text-xs text-green-600">+5 this month</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">45</div>
                        <p className="text-sm text-gray-600">Team Size</p>
                        <p className="text-xs text-green-600">+8 in 3 months</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">67%</div>
                        <p className="text-sm text-gray-600">Engineering Roles</p>
                        <p className="text-xs text-gray-500">Of open positions</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Recent Job Postings</h4>
                      <div className="space-y-2">
                        {[
                          { title: "Senior AI Engineer", department: "Engineering", posted: "3 days ago" },
                          { title: "Product Marketing Manager", department: "Marketing", posted: "1 week ago" },
                          { title: "Enterprise Sales Director", department: "Sales", posted: "2 weeks ago" },
                        ].map((job, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <div>
                              <span className="text-sm font-medium">{job.title}</span>
                              <p className="text-xs text-gray-600">{job.department}</p>
                            </div>
                            <span className="text-xs text-gray-500">{job.posted}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Leadership Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Sarah Chen",
                          role: "CEO & Co-Founder",
                          linkedin: "https://linkedin.com/in/sarah-chen-techflow",
                          twitter: "https://x.com/sarahchen_ai",
                          experience: "Former VP at Google",
                        },
                        {
                          name: "Michael Rodriguez",
                          role: "CTO & Co-Founder",
                          linkedin: "https://linkedin.com/in/michael-rodriguez-cto",
                          twitter: "https://x.com/mrodriguez_tech",
                          experience: "Former Principal Engineer at Meta",
                        },
                        {
                          name: "Emily Johnson",
                          role: "VP of Product",
                          linkedin: "https://linkedin.com/in/emily-johnson-product",
                          twitter: "https://x.com/emilyjohnson_pm",
                          experience: "Former Product Lead at Stripe",
                        },
                        {
                          name: "David Kim",
                          role: "VP of Engineering",
                          linkedin: "https://linkedin.com/in/david-kim-engineering",
                          twitter: "https://x.com/davidkim_eng",
                          experience: "Former Engineering Manager at Uber",
                        },
                      ].map((member, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <Link
                              href={`/people/${member.name.toLowerCase().replace(" ", "-")}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {member.name}
                            </Link>
                            <p className="text-gray-600 text-sm">{member.role}</p>
                            <p className="text-gray-500 text-xs">{member.experience}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-4 h-4" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
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

              <TabsContent value="funding" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Round</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stage</span>
                        <span className="font-semibold">{startup.stage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount Raised</span>
                        <span className="font-semibold text-green-600">{startup.funding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Valuation</span>
                        <span className="font-semibold">{startup.valuation}</span>
                      </div>
                      <Link href={`/funding-rounds/techflow-ai-series-a`} className="block">
                        <Button variant="outline" className="w-full">
                          View Round Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Investors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {startup.investors.map((investor, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <Link
                              href={`/investors/${investor.toLowerCase().replace(" ", "-")}`}
                              className="hover:text-blue-600"
                            >
                              {investor}
                            </Link>
                            <Badge variant="secondary" className="text-xs">
                              Lead
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Funding History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          stage: "Series A",
                          amount: "$15M",
                          date: "2023-10-01",
                          investors: ["Accel Partners", "Sequoia Capital"],
                        },
                        {
                          stage: "Seed",
                          amount: "$3M",
                          date: "2022-06-15",
                          investors: ["First Round Capital", "Y Combinator"],
                        },
                        { stage: "Pre-Seed", amount: "$500K", date: "2022-01-10", investors: ["Angel Investors"] },
                      ].map((round, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Link
                              href={`/funding-rounds/techflow-ai-${round.stage.toLowerCase().replace(" ", "-")}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {round.stage}
                            </Link>
                            <p className="text-sm text-gray-600">
                              {new Date(round.date).toLocaleDateString()} • {round.investors.join(", ")}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-green-600">{round.amount}</div>
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
                    <CardTitle>Recent News & Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "TechFlow AI Raises $15M Series A to Expand AI Platform",
                          excerpt: "Company plans to use funding for product development and team expansion",
                          date: "2 days ago",
                          source: "TechCrunch",
                        },
                        {
                          title: "TechFlow AI Launches New Workflow Automation Features",
                          excerpt: "Latest update includes advanced AI-powered process optimization tools",
                          date: "1 week ago",
                          source: "VentureBeat",
                        },
                        {
                          title: "CEO Sarah Chen Named to Forbes 30 Under 30",
                          excerpt: "TechFlow AI founder recognized for innovation in enterprise software",
                          date: "2 weeks ago",
                          source: "Forbes",
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
                  <span className="font-semibold">{startup.founded}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Location</span>
                  </div>
                  <span className="font-semibold">{startup.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Team Size</span>
                  </div>
                  <span className="font-semibold">{startup.employees}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Website</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                    <a href={startup.website} target="_blank" rel="noopener noreferrer">
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
                    <a href={startup.linkedin} target="_blank" rel="noopener noreferrer">
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
                    <a href={startup.twitter} target="_blank" rel="noopener noreferrer">
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
                <CardTitle className="text-lg">AI Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-green-800">Strong Performer</span>
                  </div>
                  <p className="text-xs text-green-700">Above-average growth metrics and strong market position</p>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-800">Growth Trajectory</span>
                  </div>
                  <p className="text-xs text-blue-700">Consistent month-over-month growth with strong unit economics</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Similar Companies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["WorkflowAI", "ProcessPro", "AutomateNow"].map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">{company}</span>
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
