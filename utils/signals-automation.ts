// Automation utilities for collecting public signals

interface NewsSignals {
  news_mentions_count: number
  news_mentions_30d_change: number
  news_sentiment_avg: number
  news_mentions_sources: string[]
  top_headlines_sample: string[]
  news_mentions_url: string
  last_news_mention_date: string
}

interface WebsiteSignals {
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

interface SocialSignals {
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

interface HiringSignals {
  open_positions_count: number
  open_positions_30d_change: number
  team_size_estimate: number
  team_growth_3m: number
  engineering_roles_percentage: number
  recent_job_postings: {
    title: string
    department: string
    posted_date: string
    location: string
    seniority_level: string
  }[]
  glassdoor_rating: number
}

interface TechnologySignals {
  tech_stack: string[]
  github_commits_30d: number
  github_stars: number
  api_endpoints_count: number
  product_updates_30d: number
  mobile_app_downloads: number
  mobile_app_rating: number
}

interface StartupSignals {
  news: NewsSignals
  website: WebsiteSignals
  social: SocialSignals
  hiring: HiringSignals
  technology: TechnologySignals
  last_updated: string
  signals_score: number
}

export class SignalsCollector {
  // Google News Alerts automation
  static async collectNewsSignals(companyName: string): Promise<NewsSignals> {
    // Implementation would use SerpAPI, NewsCatcher API, or similar
    // to collect structured news data

    const searchQuery = `"${companyName}" startup OR funding OR investment`

    // Example structure for API integration:
    return {
      news_mentions_count: 47,
      news_mentions_30d_change: 12,
      news_sentiment_avg: 0.72,
      news_mentions_sources: ["TechCrunch", "VentureBeat", "Forbes"],
      top_headlines_sample: [
        "TechFlow AI Raises $15M Series A",
        "AI Startup Lands Major Enterprise Clients",
        "The Future of Workflow Automation",
      ],
      news_mentions_url: `https://news.google.com/search?q=${encodeURIComponent(searchQuery)}`,
      last_news_mention_date: new Date().toISOString(),
    }
  }

  // Website & SEO signals via Ahrefs API
  static async collectWebsiteSignals(domain: string): Promise<WebsiteSignals> {
    // Implementation would integrate with Ahrefs, SEMrush, or SimilarWeb APIs
    return {
      monthly_visits: 45000,
      monthly_visits_change: 23,
      domain_authority: 67,
      backlinks_count: 1200,
      backlinks_30d_change: 45,
      ranking_keywords_count: 234,
      top_keywords: ["workflow automation", "enterprise AI", "process optimization"],
      bounce_rate: 0.32,
      avg_session_duration: 180,
    }
  }

  // Social media signals
  static async collectSocialSignals(companyName: string): Promise<SocialSignals> {
    // Implementation would use LinkedIn API, Twitter API, Product Hunt API
    return {
      linkedin_followers: 12500,
      twitter_followers: 8200,
      linkedin_engagement_rate: 0.042,
      twitter_engagement_rate: 0.028,
      product_hunt_upvotes: 1247,
      g2_rating: 4.6,
      g2_reviews_count: 89,
      capterra_rating: 4.5,
      capterra_reviews_count: 67,
    }
  }

  // Job postings and hiring signals
  static async collectHiringSignals(companyName: string): Promise<HiringSignals> {
    // Implementation would scrape LinkedIn Jobs, Indeed, or use job board APIs
    return {
      open_positions_count: 12,
      open_positions_30d_change: 5,
      team_size_estimate: 45,
      team_growth_3m: 8,
      engineering_roles_percentage: 0.67,
      recent_job_postings: [
        {
          title: "Senior AI Engineer",
          department: "Engineering",
          posted_date: "2024-01-15",
          location: "San Francisco, CA",
          seniority_level: "Senior",
        },
      ],
      glassdoor_rating: 4.3,
    }
  }

  // Technology stack and product signals
  static async collectTechnologySignals(companyName: string, githubUrl?: string): Promise<TechnologySignals> {
    // Implementation would use GitHub API, BuiltWith, Wappalyzer
    return {
      tech_stack: ["React", "Node.js", "Python", "AWS", "PostgreSQL"],
      github_commits_30d: 247,
      github_stars: 1500,
      api_endpoints_count: 45,
      product_updates_30d: 3,
      mobile_app_downloads: 50000,
      mobile_app_rating: 4.4,
    }
  }

  // Aggregate all signals
  static async collectAllSignals(companyName: string, domain: string): Promise<StartupSignals> {
    const [news, website, social, hiring, technology] = await Promise.all([
      this.collectNewsSignals(companyName),
      this.collectWebsiteSignals(domain),
      this.collectSocialSignals(companyName),
      this.collectHiringSignals(companyName),
      this.collectTechnologySignals(companyName),
    ])

    // Calculate overall signals score
    const signals_score = this.calculateSignalsScore({
      news,
      website,
      social,
      hiring,
      technology,
    })

    return {
      news,
      website,
      social,
      hiring,
      technology,
      last_updated: new Date().toISOString(),
      signals_score,
    }
  }

  private static calculateSignalsScore(signals: Omit<StartupSignals, "last_updated" | "signals_score">): number {
    // Weighted scoring algorithm based on different signal types
    const weights = {
      news_activity: 0.25,
      website_growth: 0.2,
      social_engagement: 0.15,
      hiring_momentum: 0.25,
      tech_activity: 0.15,
    }

    // Calculate individual scores (0-100)
    const newsScore = Math.min(100, (signals.news.news_mentions_count / 50) * 100)
    const websiteScore = Math.min(100, (signals.website.monthly_visits / 100000) * 100)
    const socialScore = Math.min(100, (signals.social.linkedin_followers / 20000) * 100)
    const hiringScore = Math.min(100, (signals.hiring.open_positions_count / 20) * 100)
    const techScore = Math.min(100, (signals.technology.github_commits_30d / 300) * 100)

    return Math.round(
      newsScore * weights.news_activity +
        websiteScore * weights.website_growth +
        socialScore * weights.social_engagement +
        hiringScore * weights.hiring_momentum +
        techScore * weights.tech_activity,
    )
  }
}

// Automation setup examples
export const automationSetup = {
  // Google Alerts setup
  googleAlerts: {
    setup: "Create Google Alerts for company names and founders",
    automation: "Use Zapier to parse alert emails into database",
    frequency: "Daily",
  },

  // API integrations
  apis: {
    serpApi: "For Google News structured data",
    ahrefs: "For SEO and backlink data",
    similarWeb: "For website traffic data",
    linkedinApi: "For social media metrics",
    githubApi: "For technical activity",
  },

  // Scraping setup
  scraping: {
    jobBoards: "LinkedIn Jobs, Indeed, AngelList",
    reviewSites: "G2, Capterra, Glassdoor",
    socialMedia: "LinkedIn, Twitter engagement metrics",
  },
}
