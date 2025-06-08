"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"

interface EmailGateModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (email: string) => void
}

export function EmailGateModal({ isOpen, onClose, onSubmit }: EmailGateModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    onSubmit(email)
    setIsSubmitting(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-blue-600" />
            Continue Reading
          </DialogTitle>
          <DialogDescription>
            Enter your email to access our premium startup intelligence and continue exploring our platform.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Processing..." : "Get Free Access"}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to receive updates about startup trends and funding opportunities.
            </p>
          </div>
        </form>

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-gray-600">Join 10,000+ founders and investors who trust Startup Intros</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
