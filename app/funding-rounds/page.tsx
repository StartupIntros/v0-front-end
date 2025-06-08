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
  Search,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  Bookmark,
  Briefcase,
  Building,
  Check,
  ChevronDown,
  Target,
  X,
  Download,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

// Data and functions specific to Funding Rounds Search
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
const roundStages = [
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "Series D",
  "Series E+",
  "Growth",
  "Late Stage",
  "Bridge",
  "Convertible",
]
const roundTypes = ["Equity", "Debt", "Convertible", "SAFE", "Grant", "Revenue-Based", "Acquisition"]
const leadInvestors = [
  "Sequoia Capital",
  "Andreessen Horowitz",
  "Accel",
  "Bessemer Venture Partners",
  "General Catalyst",
  "Kleiner Perkins",
  "Lightspeed Venture Partners",
  "NEA",
  "Greylock Partners",
  "Benchmark",
  "First Round Capital",
  "Union Square Ventures",
  "Y Combinator",
  "Techstars",
  "500 Startups",
]
const fundingRoundsResults = [
  {
    id: 1,
    company: {
      name: "TechFlow AI",
      description: "AI-powered workflow automation for enterprises",
      industry: "AI/ML",
      location: "San Francisco, CA",
      logo: "/placeholder.svg?height=40&width=40",
    },
    round: { stage: "Series A", amount: "$15M", valuation: "$75M", type: "Equity", announcedDate: "2024-01-15" },
    investors: { lead: "Sequoia Capital", participants: ["Accel", "Y Combinator", "Angel Investors"] },
    matchScore: 94,
  },
  {
    id: 2,
    company: {
      name: "QuantumFlow AI",
      description: "Quantum-enhanced machine learning platform",
      industry: "AI/ML",
      location: "Boston, MA",
      logo: "/placeholder.svg?height=40&width=40",
    },
    round: { stage: "Seed", amount: "$8M", valuation: "$32M", type: "Equity", announcedDate: "2024-01-10" },
    investors: { lead: "Andreessen Horowitz", participants: ["General Catalyst", "Techstars"] },
    matchScore: 89,
  },
  {
    id: 3,
    company: {
      name: "BioAnalytics Pro",
      description: "AI-driven drug discovery and development",
      industry: "BioTech",
      location: "San Diego, CA",
      logo: "/placeholder.svg?height=40&width=40",
    },
    round: { stage: "Series B", amount: "$35M", valuation: "$200M", type: "Equity", announcedDate: "2024-01-05" },
    investors: { lead: "Kleiner Perkins", participants: ["NEA", "Bessemer Venture Partners", "Strategic Investors"] },
    matchScore: 87,
  },
]

export default function FundingRoundsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [fundingRange, setFundingRange] = useState([0, 100])
  const [announcementDateRange, setAnnouncementDateRange] = useState([0, 12]) // months ago
  const [selectedRoundStages, setSelectedRoundStages] = useState<string[]>([])
  const [selectedRoundTypes, setSelectedRoundTypes] = useState<string[]>([])
  const [selectedInvestorNames, setSelectedInvestorNames] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]) // Company Location
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]) // Company Industry

  const [roundStageOpen, setRoundStageOpen] = useState(false)
  const [roundTypeOpen, setRoundTypeOpen] = useState(false)
  const [investorNameOpen, setInvestorNameOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const [industryOpen, setIndustryOpen] = useState(false)

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

  const activeFiltersCount =
    selectedRoundStages.length +
    selectedRoundTypes.length +
    selectedInvestorNames.length +
    selectedLocations.length +
    selectedIndustries.length

  const renderFilters = () => (
    <div className="space-y-6">
      {/* Funding Stage */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Funding Stage</label>
        <Popover open={roundStageOpen} onOpenChange={setRoundStageOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={roundStageOpen} className="w-full justify-between">
              {selectedRoundStages.length === 0 ? "Select" : `${selectedRoundStages.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search stages..." />
              <CommandList>
                <CommandEmpty>No stage found.</CommandEmpty>
                <CommandGroup>
                  {roundStages.map((stage) => (
                    <CommandItem
                      key={stage}
                      onSelect={() => toggleSelection(stage, selectedRoundStages, setSelectedRoundStages)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedRoundStages.includes(stage) ? "opacity-100" : "opacity-0"}`}
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

      {/* Round Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Round Type</label>
        <Popover open={roundTypeOpen} onOpenChange={setRoundTypeOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={roundTypeOpen} className="w-full justify-between">
              {selectedRoundTypes.length === 0 ? "Select" : `${selectedRoundTypes.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search types..." />
              <CommandList>
                <CommandEmpty>No type found.</CommandEmpty>
                <CommandGroup>
                  {roundTypes.map((type) => (
                    <CommandItem
                      key={type}
                      onSelect={() => toggleSelection(type, selectedRoundTypes, setSelectedRoundTypes)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedRoundTypes.includes(type) ? "opacity-100" : "opacity-0"}`}
                      />
                      {type}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Lead Investors */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Lead Investors</label>
        <Popover open={investorNameOpen} onOpenChange={setInvestorNameOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={investorNameOpen}
              className="w-full justify-between"
            >
              {selectedInvestorNames.length === 0 ? "Select" : `${selectedInvestorNames.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search investors..." />
              <CommandList>
                <CommandEmpty>No investor found.</CommandEmpty>
                <CommandGroup className="max-h-64 overflow-auto">
                  {leadInvestors.map((investor) => (
                    <CommandItem
                      key={investor}
                      onSelect={() => toggleSelection(investor, selectedInvestorNames, setSelectedInvestorNames)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          selectedInvestorNames.includes(investor) ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {investor}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Company Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Company Location</label>
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
                  {locations.map((loc) => (
                    <CommandItem
                      key={loc}
                      onSelect={() => toggleSelection(loc, selectedLocations, setSelectedLocations)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedLocations.includes(loc) ? "opacity-100" : "opacity-0"}`}
                      />
                      {loc}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Company Industry */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Company Industry</label>
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
                  {industries.map((ind) => (
                    <CommandItem
                      key={ind}
                      onSelect={() => toggleSelection(ind, selectedIndustries, setSelectedIndustries)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedIndustries.includes(ind) ? "opacity-100" : "opacity-0"}`}
                      />
                      {ind}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Funding Amount Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Funding Amount ($M)</label>
        <div className="px-1 py-2">
          <Slider value={fundingRange} onValueChange={setFundingRange} max={100} min={0} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
            <span>${fundingRange[0]}M</span>
            <span>${fundingRange[1] >= 100 ? "100M+" : `${fundingRange[1]}M`}</span>
          </div>
        </div>
      </div>

      {/* Announcement Date Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Announced (Months Ago)</label>
        <div className="px-1 py-2">
          <Slider
            value={announcementDateRange}
            onValueChange={setAnnouncementDateRange}
            max={12}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
            <span>{announcementDateRange[0]} months</span>
            <span>{announcementDateRange[1] >= 12 ? "12+ months" : `${announcementDateRange[1]} months`}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Funding Rounds</h1>
          <p className="text-muted-foreground mt-1">Find funding rounds with precision filters.</p>
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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Company name, investor name..."
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
            <SelectItem value="amount">Funding Amount</SelectItem>
            <SelectItem value="stage">Funding Stage</SelectItem>
            <SelectItem value="date">Announcement Date</SelectItem>
            <SelectItem value="valuation">Valuation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium">Active Filters:</span>
          {selectedRoundStages.map((stg) => (
            <Badge key={stg} variant="secondary" className="text-xs">
              {stg}
              <button
                onClick={() => removeSelection(stg, selectedRoundStages, setSelectedRoundStages)}
                className="ml-1 hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {/* Add other active filters here */}
        </div>
      )}

      {/* Search Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{fundingRoundsResults.length} rounds found</p>
        </div>
        <div className="space-y-4">
          {fundingRoundsResults.map((round) => (
            <Card key={round.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-start sm:justify-between gap-4">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0 flex-shrink-0">
                    <img
                      src={round.company.logo || "/placeholder.svg"}
                      alt={`${round.company.name} logo`}
                      className="w-10 h-10 rounded-md object-cover bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <Link
                        href={`/funding-rounds/${round.id}`}
                        className="text-xl font-bold hover:text-blue-600 truncate"
                      >
                        {round.round.stage} - {round.company.name}
                      </Link>
                      <Badge variant="secondary" className="whitespace-nowrap">
                        {round.matchScore}% match
                      </Badge>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {round.round.stage}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3 line-clamp-2">{round.company.description}</p>
                    <div className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm truncate">
                          {round.round.amount} • {round.round.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Valuation: {round.round.valuation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm truncate">{round.company.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        <span className="text-sm truncate">Lead: {round.investors.lead}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm whitespace-nowrap">
                          {new Date(round.round.announcedDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="text-sm truncate">{round.company.industry}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Other Participants:</div>
                      <div className="flex flex-wrap gap-1">
                        {round.investors.participants.map((p, i) => (
                          <Badge key={i} variant="outline">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2 sm:ml-4 w-full sm:w-auto items-stretch">
                    <Button asChild size="sm" className="w-full sm:w-auto">
                      <Link href={`/funding-rounds/${round.id}`}>
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
