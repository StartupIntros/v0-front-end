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
} from "lucide-react"
import Link from "next/link"

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

export default function StartupsSearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [fundingRange, setFundingRange] = useState([0, 100])
  const [teamSizeRange, setTeamSizeRange] = useState([1, 500])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedFundingStages, setSelectedFundingStages] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [industryOpen, setIndustryOpen] = useState(false)
  const [fundingStageOpen, setFundingStageOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)

  const toggleSelection = (item: string, selectedItems: string[], setSelectedItems: (items: string[]) => void) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const removeSelection = (item: string, selectedItems: string[], setSelectedItems: (items: string[]) => void) => {
    setSelectedItems(selectedItems.filter((i) => i !== item))
  }

  const activeFiltersCount = selectedIndustries.length + selectedFundingStages.length + selectedLocations.length

  const renderFilters = () => (
    <div className="space-y-6">
      {/* Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={locationOpen} className="w-full justify-between">
              {selectedLocations.length === 0 ? "Select" : `${selectedLocations.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search locations..." />
              <CommandList>
                <CommandEmpty>No location found.</CommandEmpty>
                <CommandGroup className="max-h-64 overflow-auto">
                  {locations.map((location) => (
                    <CommandItem
                      key={location}
                      onSelect={() => toggleSelection(location, selectedLocations, setSelectedLocations)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedLocations.includes(location) ? "opacity-100" : "opacity-0"}`}
                      />
                      {location}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Industry */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Industry</label>
        <Popover open={industryOpen} onOpenChange={setIndustryOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={industryOpen} className="w-full justify-between">
              {selectedIndustries.length === 0 ? "Select" : `${selectedIndustries.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search industries..." />
              <CommandList>
                <CommandEmpty>No industry found.</CommandEmpty>
                <CommandGroup className="max-h-64 overflow-auto">
                  {industries.map((industry) => (
                    <CommandItem
                      key={industry}
                      onSelect={() => toggleSelection(industry, selectedIndustries, setSelectedIndustries)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedIndustries.includes(industry) ? "opacity-100" : "opacity-0"}`}
                      />
                      {industry}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Funding Stage */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Funding Stage</label>
        <Popover open={fundingStageOpen} onOpenChange={setFundingStageOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={fundingStageOpen}
              className="w-full justify-between"
            >
              {selectedFundingStages.length === 0 ? "Select" : `${selectedFundingStages.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search stages..." />
              <CommandList>
                <CommandEmpty>No stage found.</CommandEmpty>
                <CommandGroup>
                  {fundingStages.map((stage) => (
                    <CommandItem
                      key={stage}
                      onSelect={() => toggleSelection(stage, selectedFundingStages, setSelectedFundingStages)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedFundingStages.includes(stage) ? "opacity-100" : "opacity-0"}`}
                      />
                      {stage}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Funding Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Funding Range ($M)</label>
        <div className="px-1 py-2">
          <Slider value={fundingRange} onValueChange={setFundingRange} max={100} min={0} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
            <span>${fundingRange[0]}M</span>
            <span>${fundingRange[1] >= 100 ? "100M+" : `${fundingRange[1]}M`}</span>
          </div>
        </div>
      </div>

      {/* Team Size */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Team Size</label>
        <div className="px-1 py-2">
          <Slider
            value={teamSizeRange}
            onValueChange={setTeamSizeRange}
            max={500}
            min={1}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
            <span>{teamSizeRange[0]}</span>
            <span>{teamSizeRange[1] >= 500 ? "500+" : teamSizeRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Startups</h1>
          <p className="text-muted-foreground mt-1">Find startups with precision filters.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Bookmark className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline">Saved Searches (3)</Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-card rounded-lg border">
        <div className="relative flex-grow w-full">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Company name, description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto shrink-0">
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:w-[400px] sm:max-w-none">
            <SheetHeader>
              <SheetTitle>Search Filters</SheetTitle>
            </SheetHeader>
            <div className="py-6 overflow-y-auto h-[calc(100vh-150px)] pr-6">{renderFilters()}</div>
            <SheetFooter className="pr-6">
              <Button className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Select>
          <SelectTrigger className="w-full sm:w-48 shrink-0">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="funding">Funding Amount</SelectItem>
            <SelectItem value="stage">Stage</SelectItem>
            <SelectItem value="team-size">Team Size</SelectItem>
            <SelectItem value="founded">Founded Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {(selectedLocations.length > 0 || selectedIndustries.length > 0 || selectedFundingStages.length > 0) && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium">Active Filters:</span>
          {selectedLocations.map((loc) => (
            <Badge key={loc} variant="secondary" className="text-xs">
              {loc}
              <button
                onClick={() => removeSelection(loc, selectedLocations, setSelectedLocations)}
                className="ml-1 hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedIndustries.map((ind) => (
            <Badge key={ind} variant="secondary" className="text-xs">
              {ind}
              <button
                onClick={() => removeSelection(ind, selectedIndustries, setSelectedIndustries)}
                className="ml-1 hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedFundingStages.map((stg) => (
            <Badge key={stg} variant="secondary" className="text-xs">
              {stg}
              <button
                onClick={() => removeSelection(stg, selectedFundingStages, setSelectedFundingStages)}
                className="ml-1 hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Search Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{startupResults.length} companies found</p>
        </div>
        <div className="space-y-4">
          {startupResults.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-start sm:justify-between gap-4">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0 flex-shrink-0">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      className="w-10 h-10 rounded-md object-cover bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Link href={`/startups/${company.id}`} className="text-xl font-bold hover:text-blue-600 truncate">
                        {company.name}
                      </Link>
                      <Badge variant="secondary" className="whitespace-nowrap">
                        {company.matchScore}% match
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3 line-clamp-2">{company.description}</p>
                    <div className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">
                          {company.stage} • {company.funding}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm truncate">{company.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{company.teamSize} employees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Founded {company.founded}</span>
                      </div>
                    </div>
                    <div>
                      <Badge variant="outline">{company.industry}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2 sm:ml-4 w-full sm:w-auto items-stretch">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <Bell className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button asChild size="sm" className="w-full sm:w-auto">
                      <Link href={`/startups/${company.id}`}>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">1</Button>
          <Button>2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}
