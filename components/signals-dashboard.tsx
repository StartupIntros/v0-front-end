"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface SignalCardProps {
  title: string
  value: string | number
  change?: number
  changeType?: "increase" | "decrease" | "neutral"
  description?: string
  trend?: "up" | "down" | "neutral"
}

export function SignalCard({ title, value, change, changeType, description, trend }: SignalCardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <Minus className="w-4 h-4 text-gray-600" />
    }
  }

  const getChangeColor = () => {
    switch (changeType) {
      case "increase":
        return "text-green-600"
      case "decrease":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">{value}</div>
          {trend && getTrendIcon()}
        </div>
        {change !== undefined && (
          <p className={`text-xs ${getChangeColor()}`}>
            {change > 0 ? "+" : ""}
            {change} {description || "from last period"}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export function SignalsOverview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <SignalCard
        title="News Mentions"
        value={47}
        change={12}
        changeType="increase"
        trend="up"
        description="this month"
      />
      <SignalCard title="Website Visits" value="45K" change={23} changeType="increase" trend="up" description="% MoM" />
      <SignalCard
        title="Open Positions"
        value={12}
        change={5}
        changeType="increase"
        trend="up"
        description="new this month"
      />
      <SignalCard
        title="Social Engagement"
        value="4.2%"
        change={0.8}
        changeType="increase"
        trend="up"
        description="% increase"
      />
    </div>
  )
}
