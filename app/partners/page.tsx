"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, CreditCard, Mail, BarChart3, Building } from "lucide-react"

const partners = [
  {
    name: "Mercury",
    category: "Banking",
    description: "Banking built for startups with powerful financial tools and integrations.",
    offer: "$0 fees for 6 months",
    logo: "/placeholder.svg?height=60&width=120&text=Mercury",
    features: ["No monthly fees", "FDIC insured", "API integrations", "Multi-user access"],
    icon: CreditCard,
    featured: true,
  },
  {
    name: "Stripe Atlas",
    category: "Incorporation",
    description: "Complete incorporation package to start your company in Delaware.",
    offer: "Complete package for $500",
    logo: "/placeholder.svg?height=60&width=120&text=Stripe+Atlas",
    features: ["Delaware C-Corp", "EIN & bank account", "83(b) election", "Legal templates"],
    icon: Building,
    featured: true,
  },
  {
    name: "HubSpot for Startups",
    category: "CRM & Marketing",
    description: "Complete CRM and marketing platform with startup-friendly pricing.",
    offer: "90% off first year",
    logo: "/placeholder.svg?height=60&width=120&text=HubSpot",
    features: ["CRM", "Email marketing", "Sales automation", "Analytics"],
    icon: BarChart3,
    featured: true,
  },
  {
    name: "Beehiiv",
    category: "Newsletter",
    description: "Modern newsletter platform built for growth and monetization.",
    offer: "3 months free",
    logo: "/placeholder.svg?height=60&width=120&text=Beehiiv",
    features: ["Newsletter builder", "Analytics", "Monetization", "API access"],
    icon: Mail,
  },
]

export default function PartnersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredPartners = partners.filter((partner) => partner.featured)
  const allPartners = partners.filter((partner) => !partner.featured)

  const filteredPartners = [...featuredPartners, ...allPartners].filter(
    (partner) =>
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Partners</h1>
          <p className="text-muted-foreground mt-1">Tools and resources to help your startup grow.</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      {featuredPartners.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Partner Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPartners.map((partner) => (
              <Card key={partner.name} className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-8" />
                    <Badge className="bg-yellow-500 text-white">Featured</Badge>
                  </div>
                  <CardTitle className="flex items-center">
                    <partner.icon className="w-5 h-5 mr-2" />
                    {partner.name}
                  </CardTitle>
                  <CardDescription>{partner.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                  <Button className="w-full">
                    Get Started
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Partner Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners
            .filter((partner) => !partner.featured)
            .map((partner) => (
              <Card key={partner.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-8" />
                    <Badge variant="secondary">{partner.category}</Badge>
                  </div>
                  <CardTitle className="flex items-center">
                    <partner.icon className="w-5 h-5 mr-2" />
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
