"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Grid3X3, List } from "lucide-react"

interface ViewToggleProps {
  storageKey: string
  onViewChange: (view: "grid" | "list") => void
  className?: string
}

export function ViewToggle({ storageKey, onViewChange, className = "" }: ViewToggleProps) {
  const [view, setView] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const savedView = localStorage.getItem(storageKey) as "grid" | "list" | null
    if (savedView) {
      setView(savedView)
      onViewChange(savedView)
    }
  }, [storageKey, onViewChange])

  const handleViewChange = (newView: "grid" | "list") => {
    setView(newView)
    localStorage.setItem(storageKey, newView)
    onViewChange(newView)
  }

  return (
    <div className={`flex items-center border rounded-lg p-1 bg-gray-50 ${className}`}>
      <Button
        variant={view === "grid" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleViewChange("grid")}
        className="h-8 px-3"
      >
        <Grid3X3 className="w-4 h-4" />
        <span className="sr-only">Grid view</span>
      </Button>
      <Button
        variant={view === "list" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleViewChange("list")}
        className="h-8 px-3"
      >
        <List className="w-4 h-4" />
        <span className="sr-only">List view</span>
      </Button>
    </div>
  )
}
