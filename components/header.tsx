"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Search,
  Bell,
  User,
  TrendingUp,
  Settings,
  LogOut,
  Building,
  Users,
  DollarSign,
  Menu,
  Bookmark,
} from "lucide-react"
import Link from "next/link"

// Mock search data
const searchData = [
  { type: "startup", name: "Anthropic", description: "AI Safety Research", href: "/startups/anthropic" },
  { type: "startup", name: "Perplexity AI", description: "AI-powered search", href: "/startups/perplexity-ai" },
  {
    type: "investor",
    name: "Andreessen Horowitz",
    description: "Venture Capital",
    href: "/investors/andreessen-horowitz",
  },
  { type: "investor", name: "Sequoia Capital", description: "Venture Capital", href: "/investors/sequoia-capital" },
  {
    type: "funding",
    name: "Anthropic Series C",
    description: "$450M funding round",
    href: "/funding-rounds/anthropic-series-c",
  },
]

interface HeaderProps {
  onToggleSidebar: () => void
  sidebarOpen: boolean
}

export function Header({ onToggleSidebar, sidebarOpen }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const filteredResults = searchData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const getSearchIcon = (type: string) => {
    switch (type) {
      case "startup":
        return <Building className="w-4 h-4" />
      case "investor":
        return <Users className="w-4 h-4" />
      case "funding":
        return <DollarSign className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Sidebar Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              className="mr-2" // Always visible, adjusts based on screen size via layout
              aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              <Menu className="w-5 h-5" />
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Startup Intros</span>
            </Link>
          </div>

          {/* Search Bar - Centered and takes available space */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <Popover open={searchOpen} onOpenChange={setSearchOpen}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search startups, investors, funding rounds..."
                    className="pl-10 pr-4 w-full"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setSearchOpen(true)}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[calc(100vw-4rem)] md:w-[600px] p-0" align="start">
                <Command>
                  <CommandInput
                    placeholder="Search startups, investors, funding rounds..."
                    value={searchValue}
                    onValueChange={setSearchValue}
                  />
                  <CommandList>
                    {filteredResults.length === 0 ? (
                      <CommandEmpty>No results found.</CommandEmpty>
                    ) : (
                      <CommandGroup>
                        {filteredResults.map((item, index) => (
                          <CommandItem
                            key={index}
                            onSelect={() => {
                              setSearchOpen(false)
                              setSearchValue("")
                              // Consider using router.push(item.href) if Link doesn't close popover
                            }}
                            asChild
                          >
                            <Link href={item.href} className="flex items-center space-x-3 p-2">
                              {getSearchIcon(item.type)}
                              <div className="flex-1">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-gray-500">{item.description}</div>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {item.type}
                              </Badge>
                            </Link>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Bookmarks */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/bookmarks">
                <Bookmark className="w-5 h-5" />
                <span className="sr-only">Bookmarks</span>
              </Link>
            </Button>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center p-0"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="space-y-2 p-2">
                  <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="font-medium text-sm">TechFlow AI raises $15M Series A</div>
                    <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="font-medium text-sm">Growth signals detected: HealthTech Pro</div>
                    <div className="text-xs text-gray-500 mt-1">4 hours ago</div>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="font-medium text-sm">New investment: a16z in QuantumFlow</div>
                    <div className="text-xs text-gray-500 mt-1">Yesterday</div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/notifications" className="w-full">
                    View all notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Account Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/account">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
