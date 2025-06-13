'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Loader2, Database, Users, Building2, Newspaper, TrendingUp } from 'lucide-react'

export default function DatabaseDemoPage() {
  const [activeTab, setActiveTab] = useState('startups')
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData(activeTab)
  }, [activeTab])

  const fetchData = async (table: string) => {
    try {
      setLoading(true)
      setError(null)
      
      let result
      switch (table) {
        case 'startups':
          result = await db.startups.getPublic()
          break
        case 'investment_firms':
          result = await db.investmentFirms.getAll()
          break
        case 'funding_rounds':
          result = await db.fundingRounds.getRecent()
          break
        case 'people':
          result = await db.people.getAll()
          break
        case 'news':
          result = await db.news.getRecent()
          break
        default:
          result = await db.startups.getPublic()
      }
      
      if (result.error) {
        throw result.error
      }
      
      setData(result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (amount: number | null) => {
    if (!amount) return 'N/A'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount / 100)
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString()
  }

  const renderStartupCard = (startup: any) => (
    <Card key={startup.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{startup.name}</CardTitle>
            {startup.tagline && (
              <CardDescription>{startup.tagline}</CardDescription>
            )}
          </div>
          <Badge variant="secondary">{startup.stage}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Industry:</span>
            <span>{startup.industry || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Location:</span>
            <span>{startup.location || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Founded:</span>
            <span>{startup.founded_year || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Funding:</span>
            <span>{formatCurrency(startup.total_funding_raised)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderInvestmentFirmCard = (firm: any) => (
    <Card key={firm.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{firm.name}</CardTitle>
            {firm.short_name && (
              <CardDescription>{firm.short_name}</CardDescription>
            )}
          </div>
          <Badge variant="outline">{firm.firm_type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Location:</span>
            <span>{firm.location || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Portfolio:</span>
            <span>{firm.portfolio_count} companies</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Active Deals:</span>
            <span>{firm.active_deals_count}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Founded:</span>
            <span>{firm.founded_year || 'N/A'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderFundingRoundCard = (round: any) => (
    <Card key={round.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{round.round_name}</CardTitle>
            <CardDescription>Round ID: {round.id}</CardDescription>
          </div>
          <Badge variant="secondary">{round.round_status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount:</span>
            <span>{formatCurrency(round.funding_amount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Type:</span>
            <span>{round.round_type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Announced:</span>
            <span>{formatDate(round.announcement_date)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Investors:</span>
            <span>{round.investor_count || 'N/A'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderPersonCard = (person: any) => (
    <Card key={person.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{person.full_name}</CardTitle>
            {person.title && (
              <CardDescription>{person.title}</CardDescription>
            )}
          </div>
          <Badge variant="outline">{person.role_type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Location:</span>
            <span>{person.location || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Experience:</span>
            <span>{person.experience_years || 'N/A'} years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Investments:</span>
            <span>{person.investments_count}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Exits:</span>
            <span>{person.successful_exits_count}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderNewsCard = (news: any) => (
    <Card key={news.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
            {news.source_name && (
              <CardDescription>{news.source_name}</CardDescription>
            )}
          </div>
          <Badge variant="outline">{news.news_type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          {news.excerpt && (
            <p className="text-muted-foreground line-clamp-2">{news.excerpt}</p>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Published:</span>
            <span>{formatDate(news.published_at)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Views:</span>
            <span>{news.view_count}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Trending Score:</span>
            <span>{news.trending_score}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderCards = () => {
    switch (activeTab) {
      case 'startups':
        return data.map(renderStartupCard)
      case 'investment_firms':
        return data.map(renderInvestmentFirmCard)
      case 'funding_rounds':
        return data.map(renderFundingRoundCard)
      case 'people':
        return data.map(renderPersonCard)
      case 'news':
        return data.map(renderNewsCard)
      default:
        return data.map(renderStartupCard)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Database className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Database Demo</h1>
        </div>
        <p className="text-muted-foreground">
          Explore your Supabase database tables and see real data from your startup ecosystem
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="startups" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Startups
          </TabsTrigger>
          <TabsTrigger value="investment_firms" className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Investors
          </TabsTrigger>
          <TabsTrigger value="funding_rounds" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Funding
          </TabsTrigger>
          <TabsTrigger value="people" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            People
          </TabsTrigger>
          <TabsTrigger value="news" className="flex items-center gap-2">
            <Newspaper className="w-4 h-4" />
            News
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <Loader2 className="w-8 h-8 animate-spin" />
              <span className="ml-2">Loading {activeTab}...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-red-600 mb-2">Error Loading Data</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={() => fetchData(activeTab)}>Try Again</Button>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No data found</h3>
              <p className="text-muted-foreground">
                No {activeTab} data available in your database
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {data.length} {activeTab.replace('_', ' ')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => fetchData(activeTab)}
                >
                  Refresh
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCards()}
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
} 