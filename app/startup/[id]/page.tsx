"use client"

import { CardDescription } from "@/components/ui/card"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Linkedin,
  Twitter,
  Users,
  Calendar,
  MapPin,
  FileText,
  Youtube,
  Mail,
  Printer,
  Bookmark,
  Bell,
} from "lucide-react"
import Link from "next/link"

// Dummy data for a public startup profile
const dummyStartupProfile = {
  id: "acme-innovations", // Matches the customUrl from MyStartupPage
  name: "Acme Innovations",
  tagline: "Revolutionizing the future with cutting-edge AI solutions",
  description:
    "Acme Innovations is a leading technology startup focused on developing advanced artificial intelligence platforms for enterprise clients. Our solutions streamline workflows, enhance decision-making, and drive significant ROI. We are passionate about leveraging AI to solve complex business challenges and create a more efficient future.",
  industry: "AI/ML",
  fundingStage: "Seed",
  location: "San Francisco, CA",
  founded: "2022",
  teamSize: 15,
  logo: "/placeholder.svg?height=100&width=100&text=Acme+Logo",
  website: "https://www.acmeinnovations.com",
  linkedin: "https://www.linkedin.com/company/acme-innovations",
  twitter: "https://twitter.com/acmeinnovations",
  team: [
    {
      name: "Jane Doe",
      role: "CEO & Co-founder",
      linkedin: "https://www.linkedin.com/in/janedoe",
      bio: "Experienced entrepreneur with a background in AI research and product development. Passionate about building impactful technologies.",
    },
    {
      name: "John Smith",
      role: "CTO & Co-founder",
      linkedin: "https://www.linkedin.com/in/johnsmith",
      bio: "Deep expertise in machine learning algorithms and scalable system architectures. Drives technical innovation.",
    },
    {
      name: "Emily White",
      role: "Head of Product",
      linkedin: "https://www.linkedin.com/in/emilywhite",
      bio: "Product leader with a track record of bringing successful SaaS products to market.",
    },
  ],
  metrics: [
    { name: "Monthly Recurring Revenue (MRR)", value: "$150,000", growth: "15% MoM" },
    { name: "Active Users", value: "10,000", growth: "10% MoM" },
    { name: "Customer Churn", value: "2%", growth: "Decreasing" },
  ],
  materials: {
    pitchDeck: "/placeholder.pdf?text=Pitch+Deck", // Placeholder for a PDF
    pitchVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Rick Astley for demo
    additionalDocs: ["/placeholder.pdf?text=Business+Plan"],
  },
  isPublic: true,
}

export default function PublicStartupProfilePage() {
  const params = useParams()
  const startupId = params.id as string

  // In a real app, you would fetch data based on startupId
  const startup = dummyStartupProfile // For demonstration, use dummy data

  if (!startup || !startup.isPublic) {
    return (
      <div className="flex-1 space-y-4 p-8 pt-6 flex items-center justify-center h-full">
        <Card className="w-full max-w-md text-center p-8">
          <CardTitle className="text-2xl mb-4">Profile Not Found or Private</CardTitle>
          <CardDescription>
            The startup profile you are looking for does not exist or is currently set to private.
          </CardDescription>
        </Card>
      </div>
    )
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Profile link copied to clipboard!")
  }

  const handleEmailShare = () => {
    const subject = `Check out ${startup.name}'s Startup Profile on StartupIntros`
    const body = `Hi, I thought you might be interested in checking out this startup profile: ${window.location.href}`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={startup.logo || "/placeholder.svg"}
            alt={`${startup.name} logo`}
            className="w-20 h-20 rounded-lg object-cover bg-gray-100"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{startup.name}</h1>
            <p className="text-muted-foreground mt-1 text-lg">{startup.tagline}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{startup.industry}</Badge>
              <Badge variant="outline">{startup.fundingStage}</Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
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

      <Card>
        <CardHeader>
          <CardTitle>About {startup.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{startup.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> {startup.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" /> Founded {startup.founded}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" /> {startup.teamSize} Employees
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />{" "}
              <a href={startup.website} target="_blank" rel="noopener noreferrer" className="underline">
                Website
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Linkedin className="w-4 h-4" />{" "}
              <a href={startup.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Twitter className="w-4 h-4" />{" "}
              <a href={startup.twitter} target="_blank" rel="noopener noreferrer" className="underline">
                Twitter
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Founding Team</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startup.team.map((member, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{member.bio}</p>
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn Profile
                </Link>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startup.metrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-lg font-semibold">{metric.name}</h3>
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.growth}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pitch Materials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {startup.materials.pitchDeck && (
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <Link
                href={startup.materials.pitchDeck}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Pitch Deck
              </Link>
            </div>
          )}
          {startup.materials.pitchVideo && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Pitch Video</span>
              </div>
              <div className="aspect-video w-full max-w-2xl rounded-md overflow-hidden">
                <iframe
                  src={startup.materials.pitchVideo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
          {startup.materials.additionalDocs && startup.materials.additionalDocs.length > 0 && (
            <div className="space-y-2">
              <div className="font-medium">Additional Documents:</div>
              {startup.materials.additionalDocs.map((doc, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                  <Link href={doc} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {doc.split("/").pop()}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
