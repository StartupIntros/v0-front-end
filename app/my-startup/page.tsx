"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Building,
  Users,
  BarChart3,
  FileText,
  Video,
  Settings,
  Mail,
  Plus,
  Trash2,
  Upload,
  LinkIcon,
  Eye,
  EyeOff,
  Globe,
  Twitter,
  Linkedin,
  ExternalLink,
  Copy,
} from "lucide-react"

export default function MyStartupPage() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Jane Smith",
      role: "CEO & Co-Founder",
      linkedin: "linkedin.com/in/janesmith",
      bio: "Former VP at TechCorp, 10+ years experience in SaaS",
    },
    {
      name: "Alex Johnson",
      role: "CTO & Co-Founder",
      linkedin: "linkedin.com/in/alexjohnson",
      bio: "Ex-Google engineer, ML expert",
    },
  ])

  const [metrics, setMetrics] = useState([
    { name: "ARR", value: "$1.2M", growth: "+45% YoY" },
    { name: "Customers", value: "120", growth: "+30% YoY" },
    { name: "CAC", value: "$2,500", growth: "-15% YoY" },
    { name: "LTV", value: "$45,000", growth: "+20% YoY" },
  ])

  const [isPublic, setIsPublic] = useState(true)
  const [profileLink, setProfileLink] = useState("startupintros.com/startups/techwave-ai")

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

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", role: "", linkedin: "", bio: "" }])
  }

  const removeTeamMember = (index: number) => {
    const newTeamMembers = [...teamMembers]
    newTeamMembers.splice(index, 1)
    setTeamMembers(newTeamMembers)
  }

  const addMetric = () => {
    setMetrics([...metrics, { name: "", value: "", growth: "" }])
  }

  const removeMetric = (index: number) => {
    const newMetrics = [...metrics]
    newMetrics.splice(index, 1)
    setMetrics(newMetrics)
  }

  const copyProfileLink = () => {
    navigator.clipboard.writeText(profileLink)
    // Would add toast notification here
  }

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=Check out our startup&body=View our startup profile at ${profileLink}`
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Startup</h1>
          <p className="text-muted-foreground mt-1">Manage your startup's public profile</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-2 mr-2">
            <Switch id="public-profile" checked={isPublic} onCheckedChange={setIsPublic} />
            <Label htmlFor="public-profile" className="font-medium">
              {isPublic ? (
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" /> Public
                </span>
              ) : (
                <span className="flex items-center">
                  <EyeOff className="w-4 h-4 mr-1" /> Private
                </span>
              )}
            </Label>
          </div>
          <Button variant="outline" onClick={copyProfileLink}>
            <Copy className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
          <Button variant="outline" onClick={shareViaEmail}>
            <Mail className="w-4 h-4 mr-2" />
            Share via Email
          </Button>
          <Button>
            <ExternalLink className="w-4 h-4 mr-2" />
            View Public Profile
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="basic">
            <Building className="w-4 h-4 mr-2" />
            Basic Info
          </TabsTrigger>
          <TabsTrigger value="team">
            <Users className="w-4 h-4 mr-2" />
            Team
          </TabsTrigger>
          <TabsTrigger value="metrics">
            <BarChart3 className="w-4 h-4 mr-2" />
            Metrics
          </TabsTrigger>
          <TabsTrigger value="materials">
            <FileText className="w-4 h-4 mr-2" />
            Materials
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Basic Info Tab */}
        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Basic details about your startup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src="/placeholder.svg?height=128&width=128&text=Logo"
                        alt="Company Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                    >
                      <Upload className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Upload company logo</p>
                    <p className="text-xs text-gray-400">SVG, PNG or JPG. 1MB max.</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" defaultValue="TechWave AI" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founded">Founded</Label>
                      <Input id="founded" type="date" defaultValue="2021-03-15" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input id="tagline" defaultValue="AI-powered workflow automation for modern teams" />
                    <p className="text-sm text-gray-500">A short, catchy description of your company</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select defaultValue="ai">
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai">AI/ML</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="healthtech">HealthTech</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Stage</Label>
                      <Select defaultValue="seed">
                        <SelectTrigger id="stage">
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="series-a">Series A</SelectItem>
                          <SelectItem value="series-b">Series B</SelectItem>
                          <SelectItem value="series-c">Series C+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea
                  id="description"
                  rows={6}
                  defaultValue="TechWave AI is building the next generation of workflow automation tools powered by artificial intelligence. Our platform helps teams automate repetitive tasks, streamline processes, and gain insights from their data. Founded in 2021, we're on a mission to help companies work smarter, not harder."
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Company Links</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <div className="flex">
                      <Globe className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="website" defaultValue="https://techwave-ai.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <div className="flex">
                      <Twitter className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="twitter" defaultValue="@techwaveai" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <div className="flex">
                      <Linkedin className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="linkedin" defaultValue="linkedin.com/company/techwave-ai" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Founding Team</CardTitle>
              <CardDescription>Add information about your founding team members</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="space-y-4 pb-4 border-b last:border-0">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Team Member {index + 1}</h3>
                    <Button variant="ghost" size="sm" onClick={() => removeTeamMember(index)}>
                      <Trash2 className="w-4 h-4 mr-1" /> Remove
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`name-${index}`}>Name</Label>
                      <Input
                        id={`name-${index}`}
                        value={member.name}
                        onChange={(e) => {
                          const newMembers = [...teamMembers]
                          newMembers[index].name = e.target.value
                          setTeamMembers(newMembers)
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`role-${index}`}>Role</Label>
                      <Input
                        id={`role-${index}`}
                        value={member.role}
                        onChange={(e) => {
                          const newMembers = [...teamMembers]
                          newMembers[index].role = e.target.value
                          setTeamMembers(newMembers)
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`linkedin-${index}`}>LinkedIn Profile</Label>
                    <div className="flex">
                      <Linkedin className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input
                        id={`linkedin-${index}`}
                        value={member.linkedin}
                        onChange={(e) => {
                          const newMembers = [...teamMembers]
                          newMembers[index].linkedin = e.target.value
                          setTeamMembers(newMembers)
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`bio-${index}`}>Short Bio</Label>
                    <Textarea
                      id={`bio-${index}`}
                      rows={3}
                      value={member.bio}
                      onChange={(e) => {
                        const newMembers = [...teamMembers]
                        newMembers[index].bio = e.target.value
                        setTeamMembers(newMembers)
                      }}
                    />
                  </div>
                </div>
              ))}

              <Button variant="outline" onClick={addTeamMember} className="w-full">
                <Plus className="w-4 h-4 mr-2" /> Add Team Member
              </Button>

              <div className="flex justify-end">
                <Button>Save Team</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
              <CardDescription>Showcase your startup's performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <Card key={index} className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => removeMetric(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor={`metric-name-${index}`}>Metric Name</Label>
                          <Input
                            id={`metric-name-${index}`}
                            value={metric.name}
                            onChange={(e) => {
                              const newMetrics = [...metrics]
                              newMetrics[index].name = e.target.value
                              setMetrics(newMetrics)
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`metric-value-${index}`}>Value</Label>
                            <Input
                              id={`metric-value-${index}`}
                              value={metric.value}
                              onChange={(e) => {
                                const newMetrics = [...metrics]
                                newMetrics[index].value = e.target.value
                                setMetrics(newMetrics)
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`metric-growth-${index}`}>Growth</Label>
                            <Input
                              id={`metric-growth-${index}`}
                              value={metric.growth}
                              onChange={(e) => {
                                const newMetrics = [...metrics]
                                newMetrics[index].growth = e.target.value
                                setMetrics(newMetrics)
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="outline" onClick={addMetric} className="w-full">
                <Plus className="w-4 h-4 mr-2" /> Add Metric
              </Button>

              <div className="flex justify-end">
                <Button>Save Metrics</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Materials Tab */}
        <TabsContent value="materials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pitch Materials</CardTitle>
              <CardDescription>Upload your pitch deck and video</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Pitch Deck</h3>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                  <FileText className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Drag and drop your pitch deck or click to browse</p>
                  <p className="text-xs text-gray-400 mb-4">PDF, PPT or PPTX. 10MB max.</p>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" /> Upload Pitch Deck
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Pitch Video</h3>
                <div className="space-y-2">
                  <Label htmlFor="video-url">Video URL (YouTube, Vimeo, etc.)</Label>
                  <div className="flex">
                    <Video className="w-4 h-4 mr-2 text-gray-500 self-center" />
                    <Input id="video-url" placeholder="https://youtube.com/watch?v=..." />
                  </div>
                  <p className="text-sm text-gray-500">Enter the URL of your pitch video</p>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                    <Video className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-500">Video preview will appear here</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Additional Materials</h3>
                <div className="space-y-2">
                  <Label htmlFor="one-pager">One-Pager</Label>
                  <div className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center">
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" /> Upload One-Pager
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="financial-model">Financial Model</Label>
                  <div className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center">
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" /> Upload Financial Model
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Materials</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Control your startup profile visibility and sharing options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Visibility Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="public-profile" className="text-base font-medium">
                        Public Profile
                      </Label>
                      <p className="text-sm text-gray-500">Make your startup profile visible to investors</p>
                    </div>
                    <Switch id="public-profile" checked={isPublic} onCheckedChange={setIsPublic} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-metrics" className="text-base font-medium">
                        Show Metrics
                      </Label>
                      <p className="text-sm text-gray-500">Display your key metrics on your public profile</p>
                    </div>
                    <Switch id="show-metrics" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-materials" className="text-base font-medium">
                        Show Materials
                      </Label>
                      <p className="text-sm text-gray-500">Make pitch deck and materials available to investors</p>
                    </div>
                    <Switch id="show-materials" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="investor-requests" className="text-base font-medium">
                        Allow Investor Requests
                      </Label>
                      <p className="text-sm text-gray-500">Let investors request access to your full profile</p>
                    </div>
                    <Switch id="investor-requests" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Profile URL</h3>
                <div className="space-y-2">
                  <Label htmlFor="profile-url">Custom Profile URL</Label>
                  <div className="flex">
                    <div className="bg-gray-100 border border-r-0 rounded-l-md px-3 py-2 text-sm text-gray-500">
                      startupintros.com/startups/
                    </div>
                    <Input
                      id="profile-url"
                      className="rounded-l-none"
                      defaultValue="techwave-ai"
                      onChange={(e) => setProfileLink(`startupintros.com/startups/${e.target.value}`)}
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    <LinkIcon className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-500">{profileLink}</span>
                    <Button variant="ghost" size="sm" className="ml-2 h-6" onClick={copyProfileLink}>
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Sharing Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-sharing" className="text-base font-medium">
                        Email Sharing
                      </Label>
                      <p className="text-sm text-gray-500">Allow team members to share profile via email</p>
                    </div>
                    <Switch id="email-sharing" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="social-sharing" className="text-base font-medium">
                        Social Media Sharing
                      </Label>
                      <p className="text-sm text-gray-500">Enable social media sharing buttons on profile</p>
                    </div>
                    <Switch id="social-sharing" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
