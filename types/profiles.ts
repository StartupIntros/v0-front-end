// Types for user profiles, companies, and relationships

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  title?: string
  bio?: string
  location?: string
  social?: {
    linkedin?: string
    twitter?: string
    website?: string
  }
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface CompanyProfile {
  id: string
  type: "startup" | "investor"
  name: string
  slug: string
  logo?: string
  description?: string
  shortDescription?: string
  website?: string
  domainName?: string // For verification
  founded?: string
  location?: string
  isVerified: boolean
  isPublished: boolean
  social?: {
    linkedin?: string
    twitter?: string
    crunchbase?: string
  }
  adminUsers: string[] // User IDs who have admin access
  teamMembers: TeamMember[]
  createdAt: string
  updatedAt: string
  claimedAt?: string
  claimedBy?: string // User ID who claimed
}

export interface TeamMember {
  userId?: string // Optional - may not have an account yet
  email: string
  name: string
  role: string
  title?: string
  isAdmin: boolean
  invitedAt: string
  joinedAt?: string
  status: "invited" | "active" | "removed"
}

export interface ClaimRequest {
  id: string
  companyId: string
  userId: string
  email: string
  domainProof: string // Email with domain matching company
  additionalProof?: string // Optional additional verification
  status: "pending" | "approved" | "rejected"
  createdAt: string
  reviewedAt?: string
  reviewedBy?: string
}

// For startup-specific data
export interface StartupProfile extends CompanyProfile {
  type: "startup"
  stage?: "pre-seed" | "seed" | "series-a" | "series-b" | "series-c" | "growth" | "public"
  industry?: string[]
  totalFunding?: number
  lastFundingAmount?: number
  lastFundingDate?: string
  lastFundingType?: string
  employees?: string // Range like "1-10", "11-50", etc.
  businessModel?: string
  targetMarket?: string
}

// For investor-specific data
export interface InvestorProfile extends CompanyProfile {
  type: "investor"
  investorType?: "vc" | "angel" | "corporate" | "accelerator" | "family-office" | "pe"
  aum?: number // Assets under management
  investmentStages?: string[]
  investmentSizes?: {
    min?: number
    max?: number
  }
  focusIndustries?: string[]
  focusRegions?: string[]
  portfolioSize?: number
  notableInvestments?: string[]
}
