"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Mail, Copy, UploadCloud, Youtube, FileText, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dummy data for demonstration
const industries = [
  "AI/ML",
  "FinTech",
  "HealthTech",
  "EdTech",
  "CleanTech",
  "BioTech",
  "E-commerce",
  "SaaS",
  "Consumer",
  "Enterprise",
  "Gaming",
  "Crypto",
  "Real Estate",
  "Food & Beverage",
  "Transportation",
  "Energy",
]
const fundingStages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C", "Series D+", "Growth", "Late Stage"]

interface TeamMember {
  id: number
  name: string
  role: string
  linkedin: string
  bio: string
}

interface Metric {
  id: number
  name: string
  value: string
  growth: string
}

export default function MyStartupPage() {
  const [companyName, setCompanyName] = useState("Acme Innovations")
  const [tagline, setTagline] = useState("Revolutionizing the future with cutting-edge AI solutions")
  const [description, setDescription] = useState(
    "Acme Innovations is a leading technology startup focused on developing advanced artificial intelligence platforms for enterprise clients. Our solutions streamline workflows, enhance decision-making, and drive significant ROI.",
  )
  const [industry, setIndustry] = useState("AI/ML")
  const [fundingStage, setFundingStage] = useState("Seed")
  const [website, setWebsite] = useState("https://www.acmeinnovations.com")
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/company/acme-innovations")
  const [twitter, setTwitter] = useState("https://twitter.com/acmeinnovations")

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Jane Doe",
      role: "CEO & Co-founder",
      linkedin: "https://www.linkedin.com/in/janedoe",
      bio: "Experienced entrepreneur with a background in AI research and product development.",
    },
    {
      id: 2,
      name: "John Smith",
      role: "CTO & Co-founder",
      linkedin: "https://www.linkedin.com/in/johnsmith",
      bio: "Deep expertise in machine learning algorithms and scalable system architectures.",
    },
  ])

  const [metrics, setMetrics] = useState<Metric[]>([
    { id: 1, name: "Monthly Recurring Revenue (MRR)", value: "$150,000", growth: "15% MoM" },
    { id: 2, name: "Active Users", value: "10,000", growth: "10% MoM" },
  ])

  const [pitchDeckUrl, setPitchDeckUrl] = useState("")
  const [pitchVideoUrl, setPitchVideoUrl] = useState("")
  const [additionalDocUrl, setAdditionalDocUrl] = useState("")

  const [isPublic, setIsPublic] = useState(true)
  const [customUrl, setCustomUrl] = useState("acme-innovations")

  useEffect(() => {
    const errorHandler = (e: ErrorEvent) => {
      if (e.message.includes("ResizeObserver loop completed with undelivered notifications")) {
        e.stopImmediatePropagation()
      }
    }
    window.addEventListener("error", errorHandler)
    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { id: Date.now(), name: "", role: "", linkedin: "", bio: "" }])
  }

  const updateTeamMember = (id: number, field: keyof TeamMember, value: string) => {
    setTeamMembers(teamMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const removeTeamMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
  }

  const addMetric = () => {
    setMetrics([...metrics, { id: Date.now(), name: "", value: "", growth: "" }])
  }

  const updateMetric = (id: number, field: keyof Metric, value: string) => {
    setMetrics(metrics.map((metric) => (metric.id === id ? { ...metric, [field]: value } : metric)))
  }

  const removeMetric = (id: number) => {
    setMetrics(metrics.filter((metric) => metric.id !== id))
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`startupintros.com/startup/${customUrl}`)
    alert("Profile link copied to clipboard!")
  }

  const handleEmailShare = () => {
    const subject = `Check out ${companyName}'s Startup Profile on StartupIntros`
    const body = `Hi, I thought you might be interested in checking out our public profile on StartupIntros: startupintros.com/startup/${customUrl}`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Startup Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your public-facing startup profile for investors.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleCopyLink}>
            <Copy className="w-4 h-4 mr-2" />
            Copy Profile Link
          </Button>
          <Button variant="outline" onClick={handleEmailShare}>
            <Mail className="w-4 h-4 mr-2" />
            Share via Email
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic-info" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic-info" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Details</CardTitle>
              <CardDescription>Information about your startup.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input id="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fundingStage">Current Funding Stage</Label>
                  <Select value={fundingStage} onValueChange={setFundingStage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      {fundingStages.map((stage) => (
                        <SelectItem key={stage} value={stage}>
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                <Input id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="twitter">Twitter Profile URL</Label>
                <Input id="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
              </div>
              <Button>Save Basic Info</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Founding Team</CardTitle>
              <CardDescription>Introduce your core team members.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="border p-4 rounded-md space-y-3 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                    onClick={() => removeTeamMember(member.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="grid gap-2">
                    <Label htmlFor={`team-name-${member.id}`}>Name</Label>
                    <Input
                      id={`team-name-${member.id}`}
                      value={member.name}
                      onChange={(e) => updateTeamMember(member.id, "name", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor={`team-role-${member.id}`}>Role</Label>
                    <Input
                      id={`team-role-${member.id}`}
                      value={member.role}
                      onChange={(e) => updateTeamMember(member.id, "role", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor={`team-linkedin-${member.id}`}>LinkedIn URL</Label>
                    <Input
                      id={`team-linkedin-${member.id}`}
                      value={member.linkedin}
                      onChange={(e) => updateTeamMember(member.id, "linkedin", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor={`team-bio-${member.id}`}>Bio</Label>
                    <Textarea
                      id={`team-bio-${member.id}`}
                      value={member.bio}
                      onChange={(e) => updateTeamMember(member.id, "bio", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={addTeamMember}>
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Team Member
              </Button>
              <Button>Save Team Info</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
              <CardDescription>Highlight your most important business metrics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {metrics.map((metric) => (
                <div key={metric.id} className="border p-4 rounded-md space-y-3 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                    onClick={() => removeMetric(metric.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="grid gap-2">
                    <Label htmlFor={`metric-name-${metric.id}`}>Metric Name</Label>
                    <Input
                      id={`metric-name-${metric.id}`}
                      value={metric.name}
                      onChange={(e) => updateMetric(metric.id, "name", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor={`metric-value-${metric.id}`}>Value</Label>
                    <Input
                      id={`metric-value-${metric.id}`}
                      value={metric.value}
                      onChange={(e) => updateMetric(metric.id, "value", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor={`metric-growth-${metric.id}`}>Growth (e.g., 10% MoM)</Label>
                    <Input
                      id={`metric-growth-${metric.id}`}
                      value={metric.growth}
                      onChange={(e) => updateMetric(metric.id, "growth", e.target.value)}
                    />
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={addMetric}>
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Metric
              </Button>
              <Button>Save Metrics</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pitch Materials</CardTitle>
              <CardDescription>Upload your pitch deck, video, and other relevant documents.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="pitchDeck">Pitch Deck (PDF)</Label>
                <div className="flex items-center space-x-2">
                  <Input id="pitchDeck" type="file" className="flex-1" />
                  <Button variant="outline" size="icon">
                    <UploadCloud className="h-4 w-4" />
                  </Button>
                </div>
                {pitchDeckUrl && (
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <FileText className="h-3 w-3" /> Current:{" "}
                    <a href={pitchDeckUrl} target="_blank" rel="noopener noreferrer" className="underline">
                      {pitchDeckUrl.split("/").pop()}
                    </a>
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pitchVideo">Pitch Video (YouTube/Vimeo URL)</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="pitchVideo"
                    placeholder="e.g., https://www.youtube.com/watch?v=..."
                    value={pitchVideoUrl}
                    onChange={(e) => setPitchVideoUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="additionalDoc">Additional Document (PDF)</Label>
                <div className="flex items-center space-x-2">
                  <Input id="additionalDoc" type="file" className="flex-1" />
                  <Button variant="outline" size="icon">
                    <UploadCloud className="h-4 w-4" />
                  </Button>
                </div>
                {additionalDocUrl && (
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <FileText className="h-3 w-3" /> Current:{" "}
                    <a href={additionalDocUrl} target="_blank" rel="noopener noreferrer" className="underline">
                      {additionalDocUrl.split("/").pop()}
                    </a>
                  </p>
                )}
              </div>
              <Button>Save Materials</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Control the visibility and URL of your public profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="public-profile">Make Profile Public</Label>
                <Switch id="public-profile" checked={isPublic} onCheckedChange={setIsPublic} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="custom-url">Custom Profile URL</Label>
                <div className="flex items-center">
                  <span className="whitespace-nowrap text-muted-foreground">startupintros.com/startup/</span>
                  <Input
                    id="custom-url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    className="ml-1"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Your public profile will be accessible at:{" "}
                  <a
                    href={`https://startupintros.com/startup/${customUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    startupintros.com/startup/{customUrl}
                  </a>
                </p>
              </div>
              <Button>Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
