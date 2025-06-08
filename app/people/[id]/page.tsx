"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Linkedin, Globe, Award, Bell } from "lucide-react"
import Link from "next/link"

export default function PersonPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch this data based on the ID
  const person = {
    id: "marc-andreessen",
    name: "Marc Andreessen",
    title: "Co-Founder & General Partner",
    currentCompany: {
      name: "Andreessen Horowitz",
      role: "Co-Founder & General Partner",
      startDate: "2009-07-01",
      logo: "/placeholder.svg?height=40&width=40",
    },
    bio: "Marc Andreessen is a co-founder and general partner of the venture capital firm Andreessen Horowitz. He is an American entrepreneur, investor, and software engineer. He is best known as co-author of Mosaic, the first widely used web browser; as co-founder of Netscape; and as co-founder and general partner of Silicon Valley venture capital firm Andreessen Horowitz.",
    location: "Menlo Park, CA",
    avatar: "/placeholder.svg?height=120&width=120",
    social: {
      linkedin: "https://linkedin.com/in/pmarca",
      twitter: "https://x.com/pmarca",
      website: "https://pmarca.com",
    },
    experience: [
      {
        company: "Andreessen Horowitz",
        role: "Co-Founder & General Partner",
        startDate: "2009-07-01",
        endDate: null,
        description: "Co-founded leading venture capital firm investing in technology companies",
        logo: "/placeholder.svg?height=40&width=40",
        type: "investor",
      },
      {
        company: "Ning",
        role: "Co-Founder & Chairman",
        startDate: "2004-01-01",
        endDate: "2010-12-31",
        description: "Social platform creation company",
        logo: "/placeholder.svg?height=40&width=40",
        type: "startup",
      },
      {
        company: "Netscape",
        role: "Co-Founder & CTO",
        startDate: "1994-04-01",
        endDate: "1999-03-31",
        description: "Pioneering web browser company",
        logo: "/placeholder.svg?height=40&width=40",
        type: "startup",
      },
    ],
    investments: [
      { company: "Facebook", stage: "Series A", year: "2010", status: "Exited" },
      { company: "Twitter", stage: "Series B", year: "2011", status: "Exited" },
      { company: "Coinbase", stage: "Series A", year: "2013", status: "Exited" },
      { company: "Notion", stage: "Series C", year: "2023", status: "Active" },
      { company: "Clubhouse", stage: "Series B", year: "2023", status: "Active" },
    ],
    boards: [
      { company: "Meta", role: "Board Member", since: "2008" },
      { company: "Coinbase", role: "Board Member", since: "2013" },
    ],
    achievements: [
      "Co-created Mosaic, the first widely-used web browser",
      "Co-founded Netscape, pioneering commercial web browser",
      "Named to Time 100 Most Influential People",
      "Inducted into World Wide Web Hall of Fame",
    ],
    education: [
      {
        school: "University of Illinois at Urbana-Champaign",
        degree: "Bachelor of Science in Computer Science",
        year: "1993",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={person.avatar || "/placeholder.svg"}
              alt={`${person.name} avatar`}
              className="w-24 h-24 rounded-full border shadow-sm"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
                  <p className="text-lg text-gray-600 mb-3">
                    {person.title} at{" "}
                    <Link
                      href={`/investors/${person.currentCompany.name.toLowerCase().replace(" ", "-")}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {person.currentCompany.name}
                    </Link>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">
                      <MapPin className="w-3 h-3 mr-1" />
                      {person.location}
                    </Badge>
                    <Badge variant="secondary">Investor</Badge>
                    <Badge variant="secondary">Entrepreneur</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={person.social.twitter} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={person.social.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button>
                    <Bell className="w-4 h-4 mr-2" />
                    Get Alerts
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
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="investments">Investments</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {person.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{person.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {person.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Board Positions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {person.boards.map((board, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <Link
                              href={`/startups/${board.company.toLowerCase()}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {board.company}
                            </Link>
                            <p className="text-sm text-gray-600">{board.role}</p>
                          </div>
                          <Badge variant="secondary">Since {board.since}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {person.experience.map((exp, index) => (
                        <div key={index} className="flex items-start space-x-4 pb-6 border-b last:border-b-0">
                          <img
                            src={exp.logo || "/placeholder.svg"}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 rounded-lg border"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Link
                                href={
                                  exp.type === "investor"
                                    ? `/investors/${exp.company.toLowerCase().replace(" ", "-")}`
                                    : `/startups/${exp.company.toLowerCase()}`
                                }
                                className="font-semibold hover:text-blue-600"
                              >
                                {exp.company}
                              </Link>
                              <Badge variant={exp.type === "investor" ? "default" : "secondary"}>
                                {exp.type === "investor" ? "Investor" : "Startup"}
                              </Badge>
                            </div>
                            <p className="font-medium text-gray-800 mb-1">{exp.role}</p>
                            <p className="text-sm text-gray-600 mb-2">
                              {new Date(exp.startDate).getFullYear()} -{" "}
                              {exp.endDate ? new Date(exp.endDate).getFullYear() : "Present"}
                            </p>
                            <p className="text-sm text-gray-700">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {person.education.map((edu, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <h4 className="font-semibold">{edu.school}</h4>
                          <p className="text-gray-600">{edu.degree}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="investments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Portfolio</CardTitle>
                    <CardDescription>Notable investments and their current status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {person.investments.map((investment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Link
                              href={`/startups/${investment.company.toLowerCase()}`}
                              className="font-semibold hover:text-blue-600"
                            >
                              {investment.company}
                            </Link>
                            <p className="text-sm text-gray-600">
                              {investment.stage} • {investment.year}
                            </p>
                          </div>
                          <Badge variant={investment.status === "Exited" ? "default" : "secondary"}>
                            {investment.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent News & Mentions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Marc Andreessen Discusses AI Investment Strategy at Tech Conference",
                          excerpt:
                            "a16z co-founder shares insights on the future of artificial intelligence investments",
                          date: "3 days ago",
                          source: "TechCrunch",
                        },
                        {
                          title: "Andreessen Horowitz Announces New $4.5B Growth Fund",
                          excerpt: "Marc Andreessen and Ben Horowitz lead firm's largest fund to date",
                          date: "1 week ago",
                          source: "Forbes",
                        },
                        {
                          title: "The Browser Wars: Marc Andreessen Reflects on Netscape Legacy",
                          excerpt: "Co-founder looks back on pioneering web browser and its impact on the internet",
                          date: "2 weeks ago",
                          source: "Wired",
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
                <CardTitle className="text-lg">Current Role</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={person.currentCompany.logo || "/placeholder.svg"}
                    alt={`${person.currentCompany.name} logo`}
                    className="w-10 h-10 rounded-lg border"
                  />
                  <div>
                    <Link
                      href={`/investors/${person.currentCompany.name.toLowerCase().replace(" ", "-")}`}
                      className="font-semibold hover:text-blue-600"
                    >
                      {person.currentCompany.name}
                    </Link>
                    <p className="text-sm text-gray-600">{person.currentCompany.role}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Since {new Date(person.currentCompany.startDate).getFullYear()}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Investment Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{person.investments.length}</div>
                  <p className="text-sm text-gray-600">Notable Investments</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {person.investments.filter((i) => i.status === "Exited").length}
                  </div>
                  <p className="text-sm text-gray-600">Successful Exits</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{person.boards.length}</div>
                  <p className="text-sm text-gray-600">Board Positions</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline" asChild>
                  <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <a href={person.social.twitter} target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X Profile
                  </a>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <a href={person.social.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    Personal Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Similar People</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Ben Horowitz", "Peter Thiel", "Reid Hoffman"].map((person, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">{person}</span>
                    <Button variant="ghost" size="sm" className="text-xs">
                      View Profile
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
