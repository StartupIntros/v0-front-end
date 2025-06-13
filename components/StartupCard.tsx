'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, MapPin, Users, TrendingUp } from 'lucide-react'

interface Startup {
  id: number
  name: string
  tagline: string | null
  description: string | null
  industry: string | null
  stage: string
  location: string | null
  founded_year: number | null
  employee_count: number | null
  website_url: string | null
  logo_url: string | null
  traction_score: number | null
  total_funding_raised: number | null
  profile_slug: string | null
}

interface StartupCardProps {
  startup: Startup
  onClick?: (startup: Startup) => void
}

export function StartupCard({ startup, onClick }: StartupCardProps) {
  const formatCurrency = (amount: number | null) => {
    if (!amount) return 'N/A'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount / 100) // Convert from cents
  }

  const formatEmployeeCount = (count: number | null) => {
    if (!count) return 'N/A'
    if (count < 10) return '1-10'
    if (count < 50) return '11-50'
    if (count < 200) return '51-200'
    if (count < 500) return '201-500'
    return '500+'
  }

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onClick?.(startup)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {startup.logo_url && (
              <img 
                src={startup.logo_url} 
                alt={`${startup.name} logo`}
                className="w-12 h-12 rounded-lg object-cover"
              />
            )}
            <div>
              <CardTitle className="text-lg">{startup.name}</CardTitle>
              {startup.tagline && (
                <CardDescription className="text-sm">{startup.tagline}</CardDescription>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <Badge variant="secondary">{startup.stage}</Badge>
            {startup.industry && (
              <Badge variant="outline" className="text-xs">{startup.industry}</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {startup.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {startup.description}
          </p>
        )}
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{startup.location || 'Remote'}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{formatEmployeeCount(startup.employee_count)}</span>
          </div>
          
          {startup.founded_year && (
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Founded:</span>
              <span>{startup.founded_year}</span>
            </div>
          )}
          
          {startup.traction_score && (
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
              <span>Traction: {startup.traction_score}/100</span>
            </div>
          )}
        </div>
        
        {startup.total_funding_raised && (
          <div className="mt-3 pt-3 border-t">
            <p className="text-sm">
              <span className="text-muted-foreground">Total Funding: </span>
              <span className="font-medium">{formatCurrency(startup.total_funding_raised)}</span>
            </p>
          </div>
        )}
        
        {startup.website_url && (
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={(e) => {
                e.stopPropagation()
                window.open(startup.website_url!, '_blank')
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Website
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Hook for fetching startups
export function useStartups() {
  const [startups, setStartups] = useState<Startup[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStartups() {
      try {
        setLoading(true)
        const { data, error } = await db.startups.getPublic()
        
        if (error) {
          throw error
        }
        
        setStartups(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch startups')
      } finally {
        setLoading(false)
      }
    }

    fetchStartups()
  }, [])

  return { startups, loading, error }
} 