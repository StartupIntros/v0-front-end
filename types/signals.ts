// Data types for public signals tracking

export interface NewsSignals {
  news_mentions_count: number
  news_mentions_30d_change: number
  news_sentiment_avg: number // -1 to +1 scale
  news_mentions_sources: string[]
  top_headlines_sample: string[]
  news_mentions_url: string
  last_news_mention_date: string
}

export interface WebsiteSignals {
  monthly_visits: number
  monthly_visits_change: number
  domain_authority: number
  backlinks_count: number
  backlinks_30d_change: number
  ranking_keywords_count: number
  top_keywords: string[]
  bounce_rate: number
  avg_session_duration: number
}

export interface SocialSignals {
  linkedin_followers: number
  twitter_followers: number
  linkedin_engagement_rate: number
  twitter_engagement_rate: number
  product_hunt_upvotes: number
  g2_rating: number
  g2_reviews_count: number
  capterra_rating: number
  capterra_reviews_count: number
}

export interface HiringSignals {
  open_positions_count: number
  open_positions_30d_change: number
  team_size_estimate: number
  team_growth_3m: number
  engineering_roles_percentage: number
  recent_job_postings: JobPosting[]
  glassdoor_rating: number
}

export interface TechnologySignals {
  tech_stack: string[]
  github_commits_30d: number
  github_stars: number
  api_endpoints_count: number
  product_updates_30d: number
  mobile_app_downloads: number
  mobile_app_rating: number
}

export interface JobPosting {
  title: string
  department: string
  posted_date: string
  location: string
  seniority_level: string
}

export interface StartupSignals {
  news: NewsSignals
  website: WebsiteSignals
  social: SocialSignals
  hiring: HiringSignals
  technology: TechnologySignals
  last_updated: string
  signals_score: number // Overall score based on all signals
}
