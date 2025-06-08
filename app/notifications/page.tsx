"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  DollarSign,
  TrendingUp,
  Users,
  Settings,
  Check,
  X,
  BarChart3,
  FileText,
  Calendar,
  AlertCircle,
  Briefcase,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"

// Sample data for notifications
const notificationsData = [
  {
    id: 1,
    type: "funding",
    title: "TechFlow AI raises $15M Series A",
    description: "One of your watched startups just completed a funding round led by Sequoia Capital",
    time: "2 hours ago",
    read: false,
    category: "Funding Alert",
    entity: "TechFlow AI",
    importance: "high", // Keep importance for data, but not displayed
  },
  {
    id: 2,
    type: "signal",
    title: "Growth signals detected: HealthTech Pro",
    description: "45% increase in website traffic and 3 new key hires in the last month",
    time: "4 hours ago",
    read: false,
    category: "Growth Signal",
    entity: "HealthTech Pro",
    importance: "medium",
  },
  {
    id: 3,
    type: "investor",
    title: "New investment: Andreessen Horowitz in QuantumFlow",
    description: "a16z just led a $25M round in AI infrastructure startup QuantumFlow",
    time: "Yesterday",
    read: false,
    category: "Investor Activity",
    entity: "Andreessen Horowitz",
    importance: "high",
  },
  {
    id: 4,
    type: "market",
    title: "AI Infrastructure Market Report",
    description: "New market report shows 78% YoY growth in AI infrastructure spending",
    time: "2 days ago",
    read: true,
    category: "Market Intelligence",
    entity: "AI Sector",
    importance: "medium",
  },
  {
    id: 5,
    type: "event",
    title: "Upcoming Demo Day: Y Combinator W24",
    description: "YC's Winter 2024 batch Demo Day is next week - 12 companies match your interests",
    time: "3 days ago",
    read: true,
    category: "Event Alert",
    entity: "Y Combinator",
    importance: "medium",
  },
  {
    id: 6,
    type: "competitor",
    title: "Competitor Alert: RivalTech launched new product",
    description:
      "RivalTech just launched an AI-powered analytics platform competing with your portfolio company DataSense",
    time: "4 days ago",
    read: true,
    category: "Competitive Intelligence",
    entity: "RivalTech",
    importance: "high",
  },
  {
    id: 7,
    type: "talent",
    title: "Key talent movement: VP Engineering left CloudScale",
    description:
      "Sarah Johnson, VP of Engineering at CloudScale, has updated her LinkedIn profile indicating she left the company",
    time: "5 days ago",
    read: true,
    category: "Talent Movement",
    entity: "CloudScale",
    importance: "medium",
  },
  {
    id: 8,
    type: "regulatory",
    title: "New AI regulations proposed in EU",
    description: "European Commission proposed new AI regulations that may impact 5 companies in your watchlist",
    time: "1 week ago",
    read: true,
    category: "Regulatory Alert",
    entity: "EU Regulation",
    importance: "high",
  },
]

const alertTypeOptions = [
  { value: "funding", label: "Funding" },
  { value: "signal", label: "Signals" },
  { value: "investor", label: "Investors" },
  { value: "market", label: "Market" },
  { value: "event", label: "Events" },
  { value: "competitor", label: "Competition" },
  { value: "regulatory", label: "Regulatory" },
]
const allTypeValues = alertTypeOptions.map((opt) => opt.value)

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsData)
  const [selectedAlertTypes, setSelectedAlertTypes] = useState<string[]>(allTypeValues)

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "funding":
        return <DollarSign className="w-5 h-5 text-green-600" />
      case "signal":
        return <TrendingUp className="w-5 h-5 text-blue-600" />
      case "investor":
        return <Briefcase className="w-5 h-5 text-purple-600" />
      case "market":
        return <BarChart3 className="w-5 h-5 text-indigo-600" />
      case "event":
        return <Calendar className="w-5 h-5 text-orange-600" />
      case "competitor":
        return <AlertCircle className="w-5 h-5 text-red-600" />
      case "talent":
        return <Users className="w-5 h-5 text-cyan-600" />
      case "regulatory":
        return <FileText className="w-5 h-5 text-gray-600" />
      default:
        return <Bell className="w-5 h-5 text-gray-600" />
    }
  }

  const handleAlertTypeChange = (typeValue: string) => {
    setSelectedAlertTypes((prev) =>
      prev.includes(typeValue) ? prev.filter((t) => t !== typeValue) : [...prev, typeValue],
    )
  }

  const handleSelectAllTypes = () => {
    if (selectedAlertTypes.length === alertTypeOptions.length) {
      setSelectedAlertTypes([]) // Deselect all
    } else {
      setSelectedAlertTypes(allTypeValues) // Select all
    }
  }

  const filteredNotifications = notifications.filter((notification) => {
    if (selectedAlertTypes.length > 0) {
      if (!selectedAlertTypes.includes(notification.type)) return false
    } else {
      // If no types are selected, show no notifications
      return false
    }
    return true
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {/* Header content */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <p className="text-gray-600 mt-1">
          Personalized alerts and insights about companies, investors, and markets you follow
        </p>
      </div>

      {/* Notification Actions Row */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="secondary">{unreadCount} unread</Badge>
        <Button variant="outline" onClick={markAllAsRead}>
          <Check className="w-4 h-4 mr-2" />
          Mark All Read
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-[200px] justify-between">
              {selectedAlertTypes.length === alertTypeOptions.length
                ? "All Types"
                : selectedAlertTypes.length === 0
                  ? "No Types Selected"
                  : `${selectedAlertTypes.length} Type(s) Selected`}
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[240px] p-0" align="start">
            <div className="p-2 border-b">
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleSelectAllTypes}>
                {selectedAlertTypes.length === alertTypeOptions.length ? "Deselect All" : "Select All"}
              </Button>
            </div>
            <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
              {alertTypeOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 p-1 hover:bg-accent rounded-md cursor-pointer"
                  onClick={() => handleAlertTypeChange(option.value)}
                >
                  <Checkbox
                    id={`type-${option.value}`}
                    checked={selectedAlertTypes.includes(option.value)}
                    onCheckedChange={() => handleAlertTypeChange(option.value)} // This will be triggered by label click too
                  />
                  <label
                    htmlFor={`type-${option.value}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Alert Settings
        </Button>
      </div>

      {/* Notification Filters (empty now, can be removed if not needed for future filters) */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 hidden">
        {" "}
        {/* Hidden as it's empty */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-3"></div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No notifications</h3>
              <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
            </CardContent>
          </Card>
        ) : (
          filteredNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={`hover:shadow-lg transition-shadow ${!notification.read ? "border-blue-200 bg-blue-50" : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="mt-1">{getIcon(notification.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${!notification.read ? "text-blue-900" : "text-gray-900"}`}>
                          {notification.title}
                        </h3>
                        {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                        {/* Removed getImportanceBadge(notification.importance) */}
                      </div>
                      <p className="text-gray-600 mb-2">{notification.description}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <Badge variant="outline" className="text-xs">
                          {notification.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {notification.entity}
                        </Badge>
                        <span>{notification.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-1 sm:gap-2 ml-2 sm:ml-4">
                    <Button variant="ghost" size="sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                    {!notification.read && (
                      <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                        <Check className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
