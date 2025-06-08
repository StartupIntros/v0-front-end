"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Settings,
  Bell,
  CreditCard,
  Shield,
  Upload,
  Globe,
  Building,
  Briefcase,
  MapPin,
  Twitter,
  Linkedin,
  LogOut,
  Eye,
  Zap,
} from "lucide-react"

// Watchlist data moved from notifications
const watchlistData = [
  { name: "TechFlow AI", category: "Company", type: "AI/ML", alerts: "All" },
  { name: "HealthTech Pro", category: "Company", type: "HealthTech", alerts: "Funding, Growth" },
  { name: "Andreessen Horowitz", category: "Investor", type: "VC", alerts: "Investments" },
  { name: "AI Infrastructure", category: "Market", type: "Sector", alerts: "News, Reports" },
  { name: "Y Combinator", category: "Accelerator", type: "Startup Program", alerts: "Demo Days, Batches" },
  { name: "EU Tech Regulation", category: "Topic", type: "Regulatory", alerts: "Updates" },
]

export default function AccountPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordValue, setPasswordValue] = useState("••••••••••••")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <p className="text-gray-600 mt-1">Manage your profile and preferences</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="profile">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="preferences">
            <Settings className="w-4 h-4 mr-2" />
            Preferences
          </TabsTrigger>
          <TabsTrigger value="watchlist">
            <Eye className="w-4 h-4 mr-2" />
            Watchlist
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="w-4 h-4 mr-2" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src="/placeholder.svg?height=128&width=128"
                        alt="Profile"
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
                    <p className="text-sm text-gray-500">Upload a new photo</p>
                    <p className="text-xs text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Johnson" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={4}
                  defaultValue="Angel investor and startup advisor with 10+ years of experience in tech. Previously VP of Product at TechCorp and early employee at StartupX (acquired by BigTech)."
                />
                <p className="text-sm text-gray-500">Brief description for your profile.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Professional Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <div className="flex">
                      <Building className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="company" defaultValue="Horizon Ventures" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <div className="flex">
                      <Briefcase className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="role" defaultValue="Partner" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="flex">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <div className="flex">
                      <Globe className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="website" defaultValue="https://alexjohnson.com" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <div className="flex">
                      <Twitter className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="twitter" defaultValue="@alexjohnson" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <div className="flex">
                      <Linkedin className="w-4 h-4 mr-2 text-gray-500 self-center" />
                      <Input id="linkedin" defaultValue="linkedin.com/in/alexjohnson" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Investment Preferences</CardTitle>
              <CardDescription>Customize your investment focus areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Industries of Interest</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "AI/ML",
                    "FinTech",
                    "HealthTech",
                    "CleanTech",
                    "EdTech",
                    "Enterprise SaaS",
                    "Consumer",
                    "Web3/Crypto",
                    "Hardware",
                  ].map((industry) => (
                    <div key={industry} className="flex items-center space-x-2">
                      <Switch
                        id={`industry-${industry}`}
                        defaultChecked={["AI/ML", "FinTech", "HealthTech"].includes(industry)}
                      />
                      <Label htmlFor={`industry-${industry}`}>{industry}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Investment Stages</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Growth"].map((stage) => (
                    <div key={stage} className="flex items-center space-x-2">
                      <Switch id={`stage-${stage}`} defaultChecked={["Pre-Seed", "Seed", "Series A"].includes(stage)} />
                      <Label htmlFor={`stage-${stage}`}>{stage}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Geographic Focus</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["North America", "Europe", "Asia", "Latin America", "Africa", "Middle East", "Oceania"].map(
                    (region) => (
                      <div key={region} className="flex items-center space-x-2">
                        <Switch id={`region-${region}`} defaultChecked={["North America", "Europe"].includes(region)} />
                        <Label htmlFor={`region-${region}`}>{region}</Label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Investment Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-investment">Minimum Investment ($)</Label>
                    <Input id="min-investment" type="number" defaultValue="25000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-investment">Maximum Investment ($)</Label>
                    <Input id="max-investment" type="number" defaultValue="500000" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Display Preferences</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="theme-light" name="theme" defaultChecked />
                    <Label htmlFor="theme-light">Light</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="theme-dark" name="theme" />
                    <Label htmlFor="theme-dark">Dark</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="theme-system" name="theme" />
                    <Label htmlFor="theme-system">System</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Dashboard Layout</h3>
                <Select defaultValue="compact">
                  <SelectTrigger>
                    <SelectValue placeholder="Select layout" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                    <SelectItem value="spacious">Spacious</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Language</h3>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="zh">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end">
                <Button>Save Display Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="watchlist" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Your Watchlist
              </CardTitle>
              <CardDescription>Entities you're tracking for alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {watchlistData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1 min-w-0 mr-2">
                    <div className="font-medium truncate">{item.name}</div>
                    <div className="text-sm text-gray-500 flex flex-wrap items-center gap-1 sm:gap-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <span className="truncate">{item.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <Badge variant="secondary" className="text-xs truncate">
                      {item.alerts}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Add to Watchlist
              </Button>
            </CardContent>
          </Card>

          {/* Suggested Alerts moved here */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                Suggested Alerts
              </CardTitle>
              <CardDescription>Based on your interests and activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "AI Infrastructure Startups",
                  description: "Track funding rounds and growth signals",
                  type: "Topic",
                },
                {
                  title: "First Round Capital",
                  description: "Track new investments and portfolio news",
                  type: "Investor",
                },
                {
                  title: "SaaS Valuation Trends",
                  description: "Market reports and analysis",
                  type: "Market",
                },
              ].map((suggestion, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-2">
                    <div className="min-w-0 mr-0 sm:mr-2">
                      <h4 className="font-medium">{suggestion.title}</h4>
                      <p className="text-xs text-gray-500">{suggestion.description}</p>
                    </div>
                    <Badge variant="outline" className="text-xs flex-shrink-0 self-start sm:self-center">
                      {suggestion.type}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="mt-2 w-full">
                    <Zap className="w-3 h-3 mr-1" /> Add to Watchlist
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Alert Preferences
              </CardTitle>
              <CardDescription>Customize how you receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  { label: "Email Digest (Daily)", id: "email-daily" },
                  { label: "Browser Notifications", id: "browser" },
                  { label: "Mobile Push Notifications", id: "mobile" },
                  { label: "Weekly Summary Report", id: "weekly-report" },
                  { label: "Urgent Alerts Only", id: "urgent-only" },
                ].map((pref) => (
                  <div key={pref.id} className="flex items-center justify-between">
                    <label htmlFor={pref.id} className="text-sm font-medium mr-2 min-w-0 flex-1">
                      {pref.label}
                    </label>
                    <Switch id={pref.id} defaultChecked={pref.id !== "urgent-only"} />
                  </div>
                ))}
              </div>
              <Button className="w-full" variant="outline">
                Advanced Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your subscription and billing details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Billing content would go here...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Security content would go here...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
