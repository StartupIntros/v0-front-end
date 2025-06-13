import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types based on your schema
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          password_hash: string
          full_name: string | null
          role: 'user' | 'admin' | 'investor' | 'founder'
          profile_image_url: string | null
          bio: string | null
          location: string | null
          website_url: string | null
          linkedin_url: string | null
          twitter_url: string | null
          is_verified: boolean
          is_active: boolean
          last_login_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          full_name?: string | null
          role?: 'user' | 'admin' | 'investor' | 'founder'
          profile_image_url?: string | null
          bio?: string | null
          location?: string | null
          website_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          is_verified?: boolean
          is_active?: boolean
          last_login_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          full_name?: string | null
          role?: 'user' | 'admin' | 'investor' | 'founder'
          profile_image_url?: string | null
          bio?: string | null
          location?: string | null
          website_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          is_verified?: boolean
          is_active?: boolean
          last_login_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      investment_firms: {
        Row: {
          id: number
          name: string
          short_name: string | null
          description: string | null
          full_description: string | null
          firm_type: 'Venture Capital' | 'Angel Investor' | 'Accelerator' | 'Corporate VC' | 'Family Office' | 'Private Equity' | 'Government Fund'
          location: string | null
          founded_year: number | null
          aum_amount: string | null
          website_url: string | null
          linkedin_url: string | null
          twitter_url: string | null
          logo_url: string | null
          investment_stages: string[] | null
          focus_industries: string[] | null
          geographic_focus: string[] | null
          check_size_min: number | null
          check_size_max: number | null
          check_size_sweet_spot: number | null
          portfolio_count: number
          active_deals_count: number
          investment_firm_id: string | null
          source_url: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          short_name?: string | null
          description?: string | null
          full_description?: string | null
          firm_type?: 'Venture Capital' | 'Angel Investor' | 'Accelerator' | 'Corporate VC' | 'Family Office' | 'Private Equity' | 'Government Fund'
          location?: string | null
          founded_year?: number | null
          aum_amount?: string | null
          website_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          logo_url?: string | null
          investment_stages?: string[] | null
          focus_industries?: string[] | null
          geographic_focus?: string[] | null
          check_size_min?: number | null
          check_size_max?: number | null
          check_size_sweet_spot?: number | null
          portfolio_count?: number
          active_deals_count?: number
          investment_firm_id?: string | null
          source_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          short_name?: string | null
          description?: string | null
          full_description?: string | null
          firm_type?: 'Venture Capital' | 'Angel Investor' | 'Accelerator' | 'Corporate VC' | 'Family Office' | 'Private Equity' | 'Government Fund'
          location?: string | null
          founded_year?: number | null
          aum_amount?: string | null
          website_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          logo_url?: string | null
          investment_stages?: string[] | null
          focus_industries?: string[] | null
          geographic_focus?: string[] | null
          check_size_min?: number | null
          check_size_max?: number | null
          check_size_sweet_spot?: number | null
          portfolio_count?: number
          active_deals_count?: number
          investment_firm_id?: string | null
          source_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      startups: {
        Row: {
          id: number
          name: string
          tagline: string | null
          description: string | null
          industry: string | null
          stage: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Series D+' | 'Growth' | 'Late Stage'
          location: string | null
          founded_year: number | null
          employee_count: number | null
          website_url: string | null
          linkedin_url: string | null
          twitter_url: string | null
          logo_url: string | null
          pitch_deck_url: string | null
          pitch_video_url: string | null
          business_model: string | null
          target_market: string | null
          competitive_advantage: string | null
          current_revenue: number | null
          revenue_model: string | null
          customer_count: number | null
          monthly_growth_rate: number | null
          traction_score: number | null
          valuation_amount: number | null
          total_funding_raised: number | null
          is_public_profile: boolean
          profile_slug: string | null
          founder_user_id: string | null
          key_metrics: any | null
          materials: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          tagline?: string | null
          description?: string | null
          industry?: string | null
          stage?: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Series D+' | 'Growth' | 'Late Stage'
          location?: string | null
          founded_year?: number | null
          employee_count?: number | null
          website_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          logo_url?: string | null
          pitch_deck_url?: string | null
          pitch_video_url?: string | null
          business_model?: string | null
          target_market?: string | null
          competitive_advantage?: string | null
          current_revenue?: number | null
          revenue_model?: string | null
          customer_count?: number | null
          monthly_growth_rate?: number | null
          traction_score?: number | null
          valuation_amount?: number | null
          total_funding_raised?: number | null
          is_public_profile?: boolean
          profile_slug?: string | null
          founder_user_id?: string | null
          key_metrics?: any | null
          materials?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          tagline?: string | null
          description?: string | null
          industry?: string | null
          stage?: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Series D+' | 'Growth' | 'Late Stage'
          location?: string | null
          founded_year?: number | null
          employee_count?: number | null
          website_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          logo_url?: string | null
          pitch_deck_url?: string | null
          pitch_video_url?: string | null
          business_model?: string | null
          target_market?: string | null
          competitive_advantage?: string | null
          current_revenue?: number | null
          revenue_model?: string | null
          customer_count?: number | null
          monthly_growth_rate?: number | null
          traction_score?: number | null
          valuation_amount?: number | null
          total_funding_raised?: number | null
          is_public_profile?: boolean
          profile_slug?: string | null
          founder_user_id?: string | null
          key_metrics?: any | null
          materials?: any | null
          created_at?: string
          updated_at?: string
        }
      }
      funding_rounds: {
        Row: {
          id: number
          startup_id: number
          round_name: string
          round_stage: string | null
          funding_amount: number | null
          currency: string
          valuation_pre: number | null
          valuation_post: number | null
          round_type: 'Equity' | 'Debt' | 'Convertible' | 'SAFE' | 'Grant' | 'Revenue-Based'
          announcement_date: string | null
          closing_date: string | null
          lead_investor_id: number | null
          use_of_funds: string[] | null
          round_status: 'Announced' | 'Completed' | 'Ongoing' | 'Cancelled'
          investor_count: number | null
          press_release_url: string | null
          sec_filing_url: string | null
          round_description: string | null
          terms_and_conditions: string | null
          fund_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          startup_id: number
          round_name: string
          round_stage?: string | null
          funding_amount?: number | null
          currency?: string
          valuation_pre?: number | null
          valuation_post?: number | null
          round_type?: 'Equity' | 'Debt' | 'Convertible' | 'SAFE' | 'Grant' | 'Revenue-Based'
          announcement_date?: string | null
          closing_date?: string | null
          lead_investor_id?: number | null
          use_of_funds?: string[] | null
          round_status?: 'Announced' | 'Completed' | 'Ongoing' | 'Cancelled'
          investor_count?: number | null
          press_release_url?: string | null
          sec_filing_url?: string | null
          round_description?: string | null
          terms_and_conditions?: string | null
          fund_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          startup_id?: number
          round_name?: string
          round_stage?: string | null
          funding_amount?: number | null
          currency?: string
          valuation_pre?: number | null
          valuation_post?: number | null
          round_type?: 'Equity' | 'Debt' | 'Convertible' | 'SAFE' | 'Grant' | 'Revenue-Based'
          announcement_date?: string | null
          closing_date?: string | null
          lead_investor_id?: number | null
          use_of_funds?: string[] | null
          round_status?: 'Announced' | 'Completed' | 'Ongoing' | 'Cancelled'
          investor_count?: number | null
          press_release_url?: string | null
          sec_filing_url?: string | null
          round_description?: string | null
          terms_and_conditions?: string | null
          fund_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      people: {
        Row: {
          id: number
          full_name: string
          first_name: string | null
          last_name: string | null
          title: string | null
          current_company_id: number | null
          current_company_type: 'startup' | 'investment_firm' | 'other' | null
          role_type: 'founder' | 'investor' | 'employee' | 'advisor' | 'board_member'
          bio: string | null
          location: string | null
          avatar_url: string | null
          linkedin_url: string | null
          twitter_url: string | null
          personal_website_url: string | null
          email: string | null
          experience_years: number | null
          specialties: string[] | null
          education: any | null
          work_experience: any | null
          achievements: string[] | null
          board_positions: any | null
          investments_count: number
          successful_exits_count: number
          is_verified: boolean
          is_public: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          full_name: string
          first_name?: string | null
          last_name?: string | null
          title?: string | null
          current_company_id?: number | null
          current_company_type?: 'startup' | 'investment_firm' | 'other' | null
          role_type?: 'founder' | 'investor' | 'employee' | 'advisor' | 'board_member'
          bio?: string | null
          location?: string | null
          avatar_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          personal_website_url?: string | null
          email?: string | null
          experience_years?: number | null
          specialties?: string[] | null
          education?: any | null
          work_experience?: any | null
          achievements?: string[] | null
          board_positions?: any | null
          investments_count?: number
          successful_exits_count?: number
          is_verified?: boolean
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          full_name?: string
          first_name?: string | null
          last_name?: string | null
          title?: string | null
          current_company_id?: number | null
          current_company_type?: 'startup' | 'investment_firm' | 'other' | null
          role_type?: 'founder' | 'investor' | 'employee' | 'advisor' | 'board_member'
          bio?: string | null
          location?: string | null
          avatar_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          personal_website_url?: string | null
          email?: string | null
          experience_years?: number | null
          specialties?: string[] | null
          education?: any | null
          work_experience?: any | null
          achievements?: string[] | null
          board_positions?: any | null
          investments_count?: number
          successful_exits_count?: number
          is_verified?: boolean
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      news: {
        Row: {
          id: number
          title: string
          excerpt: string | null
          content: string | null
          news_url: string
          source_name: string | null
          author_name: string | null
          category: string | null
          news_type: 'funding' | 'acquisition' | 'product_launch' | 'partnership' | 'hiring' | 'general'
          published_at: string | null
          image_url: string | null
          read_time_minutes: number | null
          sentiment_score: number | null
          tags: string[] | null
          trending_score: number
          view_count: number
          is_featured: boolean
          is_breaking: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          excerpt?: string | null
          content?: string | null
          news_url: string
          source_name?: string | null
          author_name?: string | null
          category?: string | null
          news_type?: 'funding' | 'acquisition' | 'product_launch' | 'partnership' | 'hiring' | 'general'
          published_at?: string | null
          image_url?: string | null
          read_time_minutes?: number | null
          sentiment_score?: number | null
          tags?: string[] | null
          trending_score?: number
          view_count?: number
          is_featured?: boolean
          is_breaking?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          excerpt?: string | null
          content?: string | null
          news_url?: string
          source_name?: string | null
          author_name?: string | null
          category?: string | null
          news_type?: 'funding' | 'acquisition' | 'product_launch' | 'partnership' | 'hiring' | 'general'
          published_at?: string | null
          image_url?: string | null
          read_time_minutes?: number | null
          sentiment_score?: number | null
          tags?: string[] | null
          trending_score?: number
          view_count?: number
          is_featured?: boolean
          is_breaking?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      startup_funding_summary: {
        Row: {
          startup_id: number | null
          startup_name: string | null
          total_funding: number | null
          rounds_count: number | null
          latest_round: string | null
          latest_amount: number | null
        }
      }
      investor_portfolio_summary: {
        Row: {
          firm_id: number | null
          firm_name: string | null
          portfolio_count: number | null
          total_invested: number | null
          active_deals: number | null
        }
      }
      news_with_startups: {
        Row: {
          news_id: number | null
          news_title: string | null
          startup_id: number | null
          startup_name: string | null
          relation_type: string | null
        }
      }
    }
    Functions: {
      get_startup_with_team: {
        Args: {
          startup_id_param: number
        }
        Returns: any
      }
      get_funding_round_participants: {
        Args: {
          round_id_param: number
        }
        Returns: any
      }
    }
  }
}

// Helper functions for common database operations
export const db = {
  // Startups
  startups: {
    getAll: () => supabase.from('startups').select('*').order('created_at', { ascending: false }),
    getById: (id: number) => supabase.from('startups').select('*').eq('id', id).single(),
    getBySlug: (slug: string) => supabase.from('startups').select('*').eq('profile_slug', slug).single(),
    getPublic: () => supabase.from('startups').select('*').eq('is_public_profile', true).order('created_at', { ascending: false }),
    search: (query: string) => supabase.from('startups').select('*').or(`name.ilike.%${query}%,description.ilike.%${query}%`),
    getByIndustry: (industry: string) => supabase.from('startups').select('*').eq('industry', industry),
    getByStage: (stage: string) => supabase.from('startups').select('*').eq('stage', stage),
  },
  
  // Investment Firms
  investmentFirms: {
    getAll: () => supabase.from('investment_firms').select('*').order('name'),
    getById: (id: number) => supabase.from('investment_firms').select('*').eq('id', id).single(),
    getByType: (type: string) => supabase.from('investment_firms').select('*').eq('firm_type', type),
    search: (query: string) => supabase.from('investment_firms').select('*').or(`name.ilike.%${query}%,description.ilike.%${query}%`),
  },
  
  // Funding Rounds
  fundingRounds: {
    getAll: () => supabase.from('funding_rounds').select('*').order('announcement_date', { ascending: false }),
    getByStartup: (startupId: number) => supabase.from('funding_rounds').select('*').eq('startup_id', startupId).order('announcement_date', { ascending: false }),
    getRecent: () => supabase.from('funding_rounds').select('*').order('announcement_date', { ascending: false }).limit(10),
  },
  
  // People
  people: {
    getAll: () => supabase.from('people').select('*').order('full_name'),
    getById: (id: number) => supabase.from('people').select('*').eq('id', id).single(),
    getByRole: (role: string) => supabase.from('people').select('*').eq('role_type', role),
    search: (query: string) => supabase.from('people').select('*').or(`full_name.ilike.%${query}%,title.ilike.%${query}%`),
  },
  
  // News
  news: {
    getAll: () => supabase.from('news').select('*').order('published_at', { ascending: false }),
    getFeatured: () => supabase.from('news').select('*').eq('is_featured', true).order('published_at', { ascending: false }),
    getByType: (type: string) => supabase.from('news').select('*').eq('news_type', type).order('published_at', { ascending: false }),
    getRecent: () => supabase.from('news').select('*').order('published_at', { ascending: false }).limit(10),
  },
  
  // Views
  views: {
    getStartupFundingSummary: () => supabase.from('startup_funding_summary').select('*'),
    getInvestorPortfolioSummary: () => supabase.from('investor_portfolio_summary').select('*'),
    getNewsWithStartups: () => supabase.from('news_with_startups').select('*'),
  }
} 