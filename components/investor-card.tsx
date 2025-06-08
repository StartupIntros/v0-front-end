"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, DollarSign, TrendingUp, MapPin, Target } from "lucide-react"
import Link from "next/link"

interface Investor {
  id: number
  name: string
  shortName: string
  type: string
  description: string
  stage: string[]
  location: string
  founded: string
  aum: string
  portfolioCount: number
  activeDeals: number
  logo: string
  recentInvestments: string[]
  focusAreas: string[]
  linkedin: string
  twitter: string
  checkSize?: {
    range: string
    sweetSpot: string
  }
}

interface InvestorCardProps {
  investor: Investor
  view: "grid" | "list"
}

export function InvestorCard({ investor, view }: InvestorCardProps) {
  if (view === "list") {
    return (
      <Link href={`/investors/${investor.id}`}>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <img
                src={investor.logo || "/placeholder.svg"}
                alt={`${investor.name} logo`}
                className="w-12 h-12 rounded-lg border flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold truncate">{investor.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-1 mb-2">{investor.description}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {investor.type}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {investor.stage.length} stages
                      </Badge>
                      {investor.checkSize && (
                        <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                          Sweet spot: {investor.checkSize.sweetSpot}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1 ml-4 flex-shrink-0">
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold text-green-600">{investor.aum}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Building2 className="w-4 h-4 mr-1" />
                      <span>{investor.portfolioCount} companies</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{investor.activeDeals} active</span>
                    </div>
                    {investor.checkSize && (
                      <div className="flex items-center text-sm text-green-600">
                        <Target className="w-4 h-4 mr-1" />
                        <span className="font-medium">{investor.checkSize.range}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  // Grid view (original card layout)
  return (
    <Link href={`/investors/${investor.id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={investor.logo || "/placeholder.svg"}
                alt={`${investor.name} logo`}
                className="w-12 h-12 rounded-lg border"
              />
              <div>
                <CardTitle className="text-lg">{investor.name}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    {investor.type}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {investor.stage.length} stages
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4 line-clamp-2">{investor.description}</CardDescription>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                <span>AUM</span>
              </div>
              <span className="font-semibold text-green-600">{investor.aum}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Building2 className="w-4 h-4 mr-1" />
                <span>Portfolio</span>
              </div>
              <span>{investor.portfolioCount} companies</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>Active Deals</span>
              </div>
              <span>{investor.activeDeals}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Location</span>
              </div>
              <span>{investor.location}</span>
            </div>

            {investor.checkSize && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-1 text-green-600" />
                  <span>Sweet Spot</span>
                </div>
                <span className="font-semibold text-green-600">{investor.checkSize.sweetSpot}</span>
              </div>
            )}
          </div>

          {investor.checkSize && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <div className="text-xs text-green-700 font-medium mb-1">Check Size Range</div>
              <div className="text-sm font-semibold text-green-800">{investor.checkSize.range}</div>
            </div>
          )}

          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2">Focus Areas:</p>
            <div className="flex flex-wrap gap-1">
              {investor.focusAreas.slice(0, 3).map((area, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {area}
                </Badge>
              ))}
              {investor.focusAreas.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{investor.focusAreas.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
