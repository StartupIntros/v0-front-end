"use client"

import { useState, useEffect } from "react"
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
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  Bookmark,
  Briefcase,
  Target,
  Check,
  ChevronDown,
  Building,
  SearchIcon,
  X,
  Bell,
  Download,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { db } from '@/lib/supabase'

// Data and functions specific to Investor Search
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
const investorTypes = [
  "Venture Capital",
  "Angel Investor",
  "Accelerator",
  "Corporate VC",
  "Family Office",
  "Private Equity",
  "Government Fund",
]
const investmentStages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Growth", "Late Stage", "All Stages"]
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
const geographicFocus = [
  "North America",
  "Europe",
  "Asia",
  "Global",
  "Emerging Markets",
  "Latin America",
  "Middle East",
  "Africa",
  "Oceania",
]

export default function InvestorsSearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [aumRange, setAumRange] = useState([0, 100])
  const [checkSizeRange, setCheckSizeRange] = useState([0, 100])
  const [selectedInvestorTypes, setSelectedInvestorTypes] = useState<string[]>([])
  const [selectedInvestmentStages, setSelectedInvestmentStages] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedGeographicFocus, setSelectedGeographicFocus] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]) // For Industry Focus

  const [investorTypeOpen, setInvestorTypeOpen] = useState(false)
  const [investmentStageOpen, setInvestmentStageOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const [geographicFocusOpen, setGeographicFocusOpen] = useState(false)
  const [industryFocusOpen, setIndustryFocusOpen] = useState(false)

  const [investors, setInvestors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
    selectedInvestorTypes.length +
    selectedInvestmentStages.length +
    selectedLocations.length +
    selectedGeographicFocus.length +
    selectedIndustries.length

  const renderFilters = () => (
    <div className="space-y-6">
      {/* Investor Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Investor Type</label>
        <Popover open={investorTypeOpen} onOpenChange={setInvestorTypeOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={investorTypeOpen}
              className="w-full justify-between"
            >
              {selectedInvestorTypes.length === 0 ? "Select" : `${selectedInvestorTypes.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search types..." />
              <CommandList>
                <CommandEmpty>No type found.</CommandEmpty>
                <CommandGroup>
                  {investorTypes.map((type) => (
                    <CommandItem
                      key={type}
                      onSelect={() => toggleSelection(type, selectedInvestorTypes, setSelectedInvestorTypes)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedInvestorTypes.includes(type) ? "opacity-100" : "opacity-0"}`}
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

      {/* Geographic Focus */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Geographic Focus</label>
        <Popover open={geographicFocusOpen} onOpenChange={setGeographicFocusOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={geographicFocusOpen}
              className="w-full justify-between"
            >
              {selectedGeographicFocus.length === 0 ? "Select" : `${selectedGeographicFocus.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search regions..." />
              <CommandList>
                <CommandEmpty>No region found.</CommandEmpty>
                <CommandGroup>
                  {geographicFocus.map((region) => (
                    <CommandItem
                      key={region}
                      onSelect={() => toggleSelection(region, selectedGeographicFocus, setSelectedGeographicFocus)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          selectedGeographicFocus.includes(region) ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {region}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Industry Focus */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Industry Focus</label>
        <Popover open={industryFocusOpen} onOpenChange={setIndustryFocusOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={industryFocusOpen}
              className="w-full justify-between"
            >
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
                        className={`mr-2 h-4 w-4 ${
                          selectedIndustries.includes(industry) ? "opacity-100" : "opacity-0"
                        }`}
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

      {/* Investment Stage Focus */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Investment Stage Focus</label>
        <Popover open={investmentStageOpen} onOpenChange={setInvestmentStageOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={investmentStageOpen}
              className="w-full justify-between"
            >
              {selectedInvestmentStages.length === 0 ? "Select" : `${selectedInvestmentStages.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search stages..." />
              <CommandList>
                <CommandEmpty>No stage found.</CommandEmpty>
                <CommandGroup>
                  {investmentStages.map((stage) => (
                    <CommandItem
                      key={stage}
                      onSelect={() => toggleSelection(stage, selectedInvestmentStages, setSelectedInvestmentStages)}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          selectedInvestmentStages.includes(stage) ? "opacity-100" : "opacity-0"
                        }`}
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

      {/* Check Size Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Check Size Range ($M)</label>
        <div className="px-1 py-2">
          <Slider
            value={checkSizeRange}
            onValueChange={setCheckSizeRange}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
            <span>${checkSizeRange[0]}M</span>
            <span>${checkSizeRange[1] >= 100 ? "100M+" : `${checkSizeRange[1]}M`}</span>
          </div>
        </div>
      </div>

      {/* AUM Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Assets Under Management ($B)</label>
        <div className="px-1 py-2">
          <Slider value={aumRange} onValueChange={setAumRange} max={100} min={0} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
            <span>${aumRange[0]}B</span>
            <span>${aumRange[1] >= 100 ? "100B+" : `${aumRange[1]}B`}</span>
          </div>
        </div>
      </div>
    </div>
  )

  useEffect(() => {
    async function fetchInvestors() {
      setLoading(true)
      setError(null)
      const { data, error } = await db.investmentFirms.getAll()
      if (error) setError(error.message)
      setInvestors(data || [])
      setLoading(false)
    }
    fetchInvestors()
  }, [])

  // Filtering and searching logic for fetched investors
  const filteredInvestors = investors.filter((investor) => {
    // Search by name or description
    const matchesSearch = !searchTerm ||
      investor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.full_description?.toLowerCase().includes(searchTerm.toLowerCase())

    // Filter by investor type
    const matchesType = selectedInvestorTypes.length === 0 ||
      (investor.firm_type && selectedInvestorTypes.includes(investor.firm_type))

    // Filter by location
    const matchesLocation = selectedLocations.length === 0 ||
      (investor.location && selectedLocations.includes(investor.location))

    // Filter by industry focus
    const matchesIndustry = selectedIndustries.length === 0 ||
      (Array.isArray(investor.focus_industries) && investor.focus_industries.some((ind: string) => selectedIndustries.includes(ind)))

    // Filter by investment stage
    const matchesStage = selectedInvestmentStages.length === 0 ||
      (Array.isArray(investor.investment_stages) && investor.investment_stages.some((stage: string) => selectedInvestmentStages.includes(stage)))

    // You can add more filters here (AUM, check size, etc.)

    return matchesSearch && matchesType && matchesLocation && matchesIndustry && matchesStage
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investors</h1>
          <p className="text-muted-foreground mt-1">Find investors with precision filters.</p>
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
            placeholder="Firm name, focus area..."
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
            <SelectItem value="aum">Assets Under Management</SelectItem>
            <SelectItem value="check-size">Check Size</SelectItem>
            <SelectItem value="investments">Number of Investments</SelectItem>
            <SelectItem value="type">Investor Type</SelectItem>
            <SelectItem value="founded">Founded Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium">Active Filters:</span>
          {selectedInvestorTypes.map((type) => (
            <Badge key={type} variant="secondary" className="text-xs">
              {type}
              <button
                onClick={() => removeSelection(type, selectedInvestorTypes, setSelectedInvestorTypes)}
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
          <p className="text-gray-600">{filteredInvestors.length} investors found</p>
        </div>
        {loading ? (
          <div className="text-center py-12">
            <p>Loading investors...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInvestors.map((investor) => (
              <Card key={investor.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-start sm:justify-between gap-4">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0 flex-shrink-0">
                      <img
                        src={investor.logo_url || "/placeholder.svg"}
                        alt={`${investor.name} logo`}
                        className="w-10 h-10 rounded-md object-cover bg-gray-100"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Link
                          href={`/investors/${investor.id}`}
                          className="text-xl font-bold hover:text-blue-600 truncate"
                        >
                          {investor.name}
                        </Link>
                      </div>
                      <p className="text-gray-600 mb-3 line-clamp-2">{investor.description || investor.full_description}</p>
                      <div className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-gray-500" />
                          <span className="text-sm truncate">
                            {investor.firm_type} • {investor.aum_amount || 'N/A'} AUM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm truncate">{investor.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">Check: {investor.check_size_min && investor.check_size_max ? `$${(investor.check_size_min/1000000).toLocaleString()}M - $${(investor.check_size_max/1000000).toLocaleString()}M` : 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{investor.portfolio_count || 0} investments</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">Founded {investor.founded_year || 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600 font-medium">
                            Sweet spot: {investor.check_size_sweet_spot ? `$${(investor.check_size_sweet_spot/1000000).toLocaleString()}M` : 'N/A'}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Investment Focus:</div>
                        <div className="flex flex-wrap gap-1">
                          {(investor.focus_industries || []).map((area: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {area}
                            </Badge>
                          ))}
                        </div>
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
                        <Link href={`/investors/${investor.id}`}>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
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
