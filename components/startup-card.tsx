"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, MapPin, TrendingUp } from "lucide-react"
import Link from "next/link"

interface Startup {
  id: number
  name: string
  description: string
  stage: string
  funding: string
  industry: string
  location: string
  employees: string
  founded: string
  logo: string
  linkedin: string
  twitter: string
}

interface StartupCardProps {
  startup: Startup
  view: "grid" | "list"
}

export function StartupCard({ startup, view }: StartupCardProps) {
  if (view === "list") {
    return (
      <Link href={`/startups/${startup.id}`}>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <img
                src={startup.logo || "/placeholder.svg"}
                alt={`${startup.name} logo`}
                className="w-12 h-12 rounded-lg border flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold truncate">{startup.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-1 mb-2">{startup.description}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {startup.stage}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {startup.industry}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1 ml-4 flex-shrink-0">
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold text-green-600">{startup.funding}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{startup.employees}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="truncate max-w-32">{startup.location}</span>
                    </div>
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
    <Link href={`/startups/${startup.id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={startup.logo || "/placeholder.svg"}
                alt={`${startup.name} logo`}
                className="w-12 h-12 rounded-lg border"
              />
              <div>
                <CardTitle className="text-lg">{startup.name}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    {startup.stage}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {startup.industry}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4 line-clamp-2">{startup.description}</CardDescription>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                <span>Funding</span>
              </div>
              <span className="font-semibold text-green-600">{startup.funding}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>Team Size</span>
              </div>
              <span>{startup.employees}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Location</span>
              </div>
              <span>{startup.location}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>Founded</span>
              </div>
              <span>{startup.founded}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
