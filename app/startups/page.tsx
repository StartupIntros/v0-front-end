"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet"
import {
  SearchIcon,
  Filter,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Bookmark,
  Check,
  ChevronDown,
  X,
  Bell,
  Download,
  ExternalLink,
  Search,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { StartupCard, useStartups } from '@/components/StartupCard'

// Data and functions specific to Startup Search
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
const locations = [
  "San Francisco Bay Area",
  "New York City",
  "Boston",
  "Austin",
  "Seattle",
  "Los Angeles",
  "Chicago",
  "Denver",
  "Miami",
  "Atlanta",
  "London",
  "Berlin",
  "Paris",
  "Amsterdam",
  "Singapore",
  "Hong Kong",
  "Tokyo",
  "Sydney",
  "Toronto",
  "Tel Aviv",
  "Stockholm",
  "Zurich",
  "Barcelona",
  "Dublin",
  "Remote/Distributed",
]
const startupResults = [
  {
    id: 1,
    name: "TechFlow AI",
    description: "AI-powered workflow automation for enterprises",
    stage: "Series A",
    funding: "$15M",
    industry: "AI/ML",
    location: "San Francisco, CA",
    teamSize: 45,
    founded: "2022",
    matchScore: 95,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "QuantumFlow AI",
    description: "Quantum-enhanced machine learning platform",
    stage: "Seed",
    funding: "$8M",
    industry: "AI/ML",
    location: "Boston, MA",
    teamSize: 28,
    founded: "2023",
    matchScore: 89,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "BioAnalytics Pro",
    description: "AI-driven drug discovery and development",
    stage: "Series B",
    funding: "$35M",
    industry: "BioTech",
    location: "San Diego, CA",
    teamSize: 120,
    founded: "2021",
    matchScore: 82,
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export default function StartupsPage() {
  const { startups, loading, error } = useStartups()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedStage, setSelectedStage] = useState('')

  // Get unique industries and stages for filters
  const industries = [...new Set(startups.map(s => s.industry).filter((industry): industry is string => industry !== null))]
  const stages = [...new Set(startups.map(s => s.stage))]

  // Filter startups based on search and filters
  const filteredStartups = startups.filter(startup => {
    const matchesSearch = !searchQuery || 
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.tagline?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesIndustry = selectedIndustry === 'all' || !selectedIndustry || startup.industry === selectedIndustry
    const matchesStage = selectedStage === 'all' || !selectedStage || startup.stage === selectedStage
    
    return matchesSearch && matchesIndustry && matchesStage
  })

  const handleStartupClick = (startup: any) => {
    // Navigate to startup detail page
    const slug = startup.profile_slug || startup.id.toString()
    window.location.href = `/startup/${slug}`
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin" />
          <span className="ml-2">Loading startups...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Error Loading Startups</h1>
          <p className="text-muted-foreground mt-2">{error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Startups</h1>
        <p className="text-muted-foreground">
          Discover innovative startups and connect with founders
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search startups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Industries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map(industry => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedStage} onValueChange={setSelectedStage}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Stages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              {stages.map(stage => (
                <SelectItem key={stage} value={stage}>
                  {stage}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {(searchQuery || selectedIndustry !== 'all' || selectedStage !== 'all') && (
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Showing {filteredStartups.length} of {startups.length} startups
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setSearchQuery('')
                setSelectedIndustry('all')
                setSelectedStage('all')
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Startups Grid */}
      {filteredStartups.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No startups found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <StartupCard
              key={startup.id}
              startup={startup}
              onClick={handleStartupClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}
