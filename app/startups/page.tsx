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
  ChevronUp,
  X,
  Bell,
  Download,
  ExternalLink,
  Search,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { StartupCard, useStartups } from '@/components/StartupCard'
import { Checkbox } from "@/components/ui/checkbox"

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
const stages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C", "Series D+", "Growth", "Late Stage"]
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

// Helper to convert employee_count to a string range for team size filtering
function getTeamSizeRange(count: number): string {
  if (count < 10) return "1-10"
  if (count < 50) return "11-50"
  if (count < 200) return "51-200"
  if (count < 500) return "201-500"
  if (count < 1000) return "501-1000"
  return "1000+"
}

const teamSizes = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]

export default function StartupsPage() {
  const { startups, loading, error } = useStartups()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('relevance')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [filterOpen, setFilterOpen] = useState(false)

  // Filter states for Sheet
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedStages, setSelectedStages] = useState<string[]>([])
  const [selectedTeamSizes, setSelectedTeamSizes] = useState<string[]>([])
  const [amountRaised, setAmountRaised] = useState<[number, number]>([0, 100])
  const [valuation, setValuation] = useState<[number, number]>([0, 100])

  // Use static arrays for all filter options (already defined at the top of the file)
  // locations, industries, stages, teamSizes are available from the top scope

  // Filtering logic
  const filteredStartups = startups.filter(startup => {
    const matchesSearch = !searchQuery || 
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.tagline?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = selectedLocations.length === 0 || !startup.location || selectedLocations.includes(startup.location)
    const matchesIndustry = selectedIndustries.length === 0 || !startup.industry || selectedIndustries.includes(startup.industry)
    const matchesStage = selectedStages.length === 0 || !startup.stage || selectedStages.includes(startup.stage)
    const matchesTeamSize = selectedTeamSizes.length === 0 || !startup.employee_count || selectedTeamSizes.includes(getTeamSizeRange(startup.employee_count))
    // Only filter by amount raised if the user has changed the default range
    const isAmountRaisedFiltered = amountRaised[0] !== 0 || amountRaised[1] !== 100
    const matchesAmountRaised = !isAmountRaisedFiltered || (startup.total_funding_raised != null && startup.total_funding_raised / 1_000_000 >= amountRaised[0] && startup.total_funding_raised / 1_000_000 <= amountRaised[1])
    // Only filter by valuation if the user has changed the default range
    const isValuationFiltered = valuation[0] !== 0 || valuation[1] !== 100
    const matchesValuation = !isValuationFiltered || ((startup as any).valuation_amount != null && (startup as any).valuation_amount / 1_000_000 >= valuation[0] && (startup as any).valuation_amount / 1_000_000 <= valuation[1])
    return matchesSearch && matchesLocation && matchesIndustry && matchesStage && matchesTeamSize && matchesAmountRaised && matchesValuation
  })

  // Sorting logic
  const sortedStartups = [...filteredStartups].sort((a, b) => {
    if (sortBy === 'relevance') return 0 // No-op for now
    if (sortBy === 'amountRaised') {
      const aVal = a.total_funding_raised ?? 0
      const bVal = b.total_funding_raised ?? 0
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    }
    if (sortBy === 'valuation') {
      const aVal = (a as any).valuation_amount ?? 0
      const bVal = (b as any).valuation_amount ?? 0
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    }
    if (sortBy === 'teamSize') {
      const aVal = a.employee_count ?? 0
      const bVal = b.employee_count ?? 0
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    }
    return 0
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

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-card rounded-lg border mb-6 flex-wrap">
        {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search startups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        {/* Filter Button for advanced filters (all filters in sheet) */}
        <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto shrink-0" onClick={() => setFilterOpen(true)}>
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:w-[400px] sm:max-w-none">
            <SheetHeader>
              <SheetTitle>Startup Filters</SheetTitle>
            </SheetHeader>
            <div className="py-6 overflow-y-auto h-[calc(100vh-150px)] pr-6 space-y-6">
              {/* Location Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {selectedLocations.length === 0 ? "Select" : `${selectedLocations.length} selected`}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0">
                    <div className="p-2">
                      <Command>
                        <CommandInput placeholder="Search location..." />
                        <CommandList>
                          <CommandEmpty>No location found.</CommandEmpty>
                          <CommandGroup>
                            {locations.map(loc => (
                              <CommandItem
                                key={loc}
                                onSelect={() => {
                                  setSelectedLocations(prev =>
                                    prev.includes(loc)
                                      ? prev.filter(l => l !== loc)
                                      : [...prev, loc]
                                  )
                                }}
                              >
                                <Check className={`mr-2 h-4 w-4 ${selectedLocations.includes(loc) ? "opacity-100" : "opacity-0"}`} />
                                {loc}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Industry Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Industry</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {selectedIndustries.length === 0 ? "Select" : `${selectedIndustries.length} selected`}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0">
                    <div className="p-2">
                      <Command>
                        <CommandInput placeholder="Search industry..." />
                        <CommandList>
                          <CommandEmpty>No industry found.</CommandEmpty>
                          <CommandGroup>
                            {industries.map(ind => (
                              <CommandItem
                                key={ind}
                                onSelect={() => {
                                  setSelectedIndustries(prev =>
                                    prev.includes(ind)
                                      ? prev.filter(i => i !== ind)
                                      : [...prev, ind]
                                  )
                                }}
                              >
                                <Check className={`mr-2 h-4 w-4 ${selectedIndustries.includes(ind) ? "opacity-100" : "opacity-0"}`} />
                                {ind}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Stage Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Stage</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {selectedStages.length === 0 ? "Select" : `${selectedStages.length} selected`}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0">
                    <div className="p-2">
                      <Command>
                        <CommandInput placeholder="Search stage..." />
                        <CommandList>
                          <CommandEmpty>No stage found.</CommandEmpty>
                          <CommandGroup>
                            {stages.map((stage: string) => (
                              <CommandItem
                                key={stage}
                                onSelect={() => {
                                  setSelectedStages(prev =>
                                    prev.includes(stage)
                                      ? prev.filter(s => s !== stage)
                                      : [...prev, stage]
                                  )
                                }}
                              >
                                <Check className={`mr-2 h-4 w-4 ${selectedStages.includes(stage) ? "opacity-100" : "opacity-0"}`} />
                                {stage}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Team Size Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Team Size</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {selectedTeamSizes.length === 0 ? "Select" : `${selectedTeamSizes.length} selected`}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0">
                    <div className="p-2">
                      <Command>
                        <CommandInput placeholder="Search team size..." />
                        <CommandList>
                          <CommandEmpty>No team size found.</CommandEmpty>
                          <CommandGroup>
                            {teamSizes.map((size: string) => (
                              <CommandItem
                                key={size}
                                onSelect={() => {
                                  setSelectedTeamSizes(prev =>
                                    prev.includes(size)
                                      ? prev.filter(s => s !== size)
                                      : [...prev, size]
                                  )
                                }}
                              >
                                <Check className={`mr-2 h-4 w-4 ${selectedTeamSizes.includes(size) ? "opacity-100" : "opacity-0"}`} />
                                {size}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Amount Raised Slider */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Amount Raised ($M)</label>
                <div className="px-1 py-2">
                  <Slider
                    value={amountRaised}
                    onValueChange={val => setAmountRaised(val as [number, number])}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                    range
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                    <span>${amountRaised[0]}M</span>
                    <span>${amountRaised[1] >= 100 ? "100M+" : `${amountRaised[1]}M`}</span>
                  </div>
                </div>
              </div>
              {/* Valuation Slider */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Valuation ($M)</label>
                <div className="px-1 py-2">
                  <Slider
                    value={valuation}
                    onValueChange={val => setValuation(val as [number, number])}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                    range
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                    <span>${valuation[0]}M</span>
                    <span>${valuation[1] >= 100 ? "100M+" : `${valuation[1]}M`}</span>
                  </div>
                </div>
              </div>
            </div>
            <SheetFooter className="pr-6">
              <Button className="w-full" onClick={() => setFilterOpen(false)}>
                Apply Filters
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        {/* Sort By Dropdown with Asc/Desc (remove extra arrow) */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-36 shrink-0 min-w-[120px]">
            <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="amountRaised">Amount Raised</SelectItem>
            <SelectItem value="valuation">Valuation</SelectItem>
            <SelectItem value="teamSize">Team Size</SelectItem>
            </SelectContent>
          </Select>
        {/* Asc/Desc Toggle Button */}
        <Button variant="ghost" size="icon" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          {sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
        </div>
      {/* Filtered Count and Clear Filters */}
      {(searchQuery || selectedLocations.length > 0 || selectedIndustries.length > 0 || selectedStages.length > 0 || selectedTeamSizes.length > 0 || amountRaised[0] !== 0 || amountRaised[1] !== 100 || valuation[0] !== 0 || valuation[1] !== 100) && (
        <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
            Showing {sortedStartups.length} of {startups.length} startups
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setSearchQuery('')
              setSelectedLocations([])
              setSelectedIndustries([])
              setSelectedStages([])
              setSelectedTeamSizes([])
              setAmountRaised([0, 100])
              setValuation([0, 100])
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      {/* Startups Grid */}
      {sortedStartups.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No startups found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedStartups.map((startup) => (
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
