-- 10-Table Hybrid Schema for Supabase
-- 7 Core Tables + 3 Essential Junction Tables

-- ========================================
-- CORE 7 TABLES (Original with JSON fields)
-- ========================================

-- 1. USERS Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'investor', 'founder')),
    profile_image_url TEXT,
    bio TEXT,
    location TEXT,
    website_url TEXT,
    linkedin_url TEXT UNIQUE,
    twitter_url TEXT,
    is_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. INVESTMENT_FIRMS Table
CREATE TABLE investment_firms (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    short_name TEXT,
    description TEXT,
    full_description TEXT,
    firm_type TEXT CHECK (firm_type IN ('Venture Capital', 'Angel Investor', 'Accelerator', 'Corporate VC', 'Family Office', 'Private Equity', 'Government Fund')),
    location TEXT,
    founded_year INTEGER,
    aum_amount TEXT, -- Assets Under Management
    website_url TEXT,
    linkedin_url TEXT UNIQUE,
    twitter_url TEXT,
    logo_url TEXT,
    investment_stages TEXT[], -- Array: ['Seed', 'Series A', 'Series B']
    focus_industries TEXT[], -- Array: ['AI/ML', 'FinTech', 'SaaS']
    geographic_focus TEXT[], -- Array: ['North America', 'Europe']
    check_size_min BIGINT, -- in cents
    check_size_max BIGINT,
    check_size_sweet_spot BIGINT,
    portfolio_count INTEGER DEFAULT 0,
    active_deals_count INTEGER DEFAULT 0,
    investment_firm_id TEXT UNIQUE, -- Custom identifier
    source_url TEXT UNIQUE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. INVESTMENT_FUNDS Table
CREATE TABLE investment_funds (
    id BIGSERIAL PRIMARY KEY,
    fund_name TEXT NOT NULL UNIQUE,
    firm_id BIGINT REFERENCES investment_firms(id) ON DELETE CASCADE,
    fund_size_amount BIGINT, -- in cents
    fund_size_currency TEXT DEFAULT 'USD',
    fund_type TEXT CHECK (fund_type IN ('Growth', 'Crypto', 'Bio/Healthcare', 'Sector Specific', 'General')),
    vintage_year INTEGER,
    fund_status TEXT CHECK (fund_status IN ('Active', 'Closed', 'Fundraising')),
    investment_period_start DATE,
    investment_period_end DATE,
    target_companies_count INTEGER,
    description TEXT,
    focus_areas TEXT[], -- Array: ['AI/ML', 'Enterprise', 'Consumer']
    min_investment BIGINT,
    max_investment BIGINT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. STARTUPS Table
CREATE TABLE startups (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    industry TEXT,
    stage TEXT CHECK (stage IN ('Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D+', 'Growth', 'Late Stage')),
    location TEXT,
    founded_year INTEGER,
    employee_count INTEGER,
    website_url TEXT,
    linkedin_url TEXT UNIQUE,
    twitter_url TEXT,
    logo_url TEXT,
    pitch_deck_url TEXT,
    pitch_video_url TEXT,
    business_model TEXT,
    target_market TEXT,
    competitive_advantage TEXT,
    current_revenue BIGINT, -- in cents
    revenue_model TEXT,
    customer_count INTEGER,
    monthly_growth_rate DECIMAL(5,2),
    traction_score INTEGER CHECK (traction_score >= 0 AND traction_score <= 100),
    valuation_amount BIGINT,
    total_funding_raised BIGINT,
    is_public_profile BOOLEAN DEFAULT false,
    profile_slug TEXT UNIQUE,
    founder_user_id UUID REFERENCES users(id),
    key_metrics JSONB, -- Flexible metrics: {"arr": "$320K", "growth": "45%"}
    materials JSONB, -- Flexible materials: {"deck": "url", "video": "url"}
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. FUNDING_ROUNDS Table
CREATE TABLE funding_rounds (
    id BIGSERIAL PRIMARY KEY,
    startup_id BIGINT REFERENCES startups(id) ON DELETE CASCADE,
    round_name TEXT NOT NULL, -- e.g., "Series A", "Seed Round"
    round_stage TEXT,
    funding_amount BIGINT, -- in cents
    currency TEXT DEFAULT 'USD',
    valuation_pre BIGINT,
    valuation_post BIGINT,
    round_type TEXT CHECK (round_type IN ('Equity', 'Debt', 'Convertible', 'SAFE', 'Grant', 'Revenue-Based')),
    announcement_date DATE,
    closing_date DATE,
    lead_investor_id BIGINT REFERENCES investment_firms(id),
    use_of_funds TEXT[], -- Array: ['Product development', 'Team expansion']
    round_status TEXT CHECK (round_status IN ('Announced', 'Completed', 'Ongoing', 'Cancelled')),
    investor_count INTEGER,
    press_release_url TEXT,
    sec_filing_url TEXT,
    round_description TEXT,
    terms_and_conditions TEXT,
    fund_name TEXT, -- For uniqueness
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(startup_id, round_name, closing_date)
);

-- 6. PEOPLE Table
CREATE TABLE people (
    id BIGSERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    title TEXT,
    current_company_id BIGINT, -- Can reference startups or investment_firms
    current_company_type TEXT CHECK (current_company_type IN ('startup', 'investment_firm', 'other')),
    role_type TEXT CHECK (role_type IN ('founder', 'investor', 'employee', 'advisor', 'board_member')),
    bio TEXT,
    location TEXT,
    avatar_url TEXT,
    linkedin_url TEXT UNIQUE,
    twitter_url TEXT,
    personal_website_url TEXT,
    email TEXT UNIQUE,
    experience_years INTEGER,
    specialties TEXT[], -- Array: ['AI/ML', 'Product Management']
    education JSONB, -- Flexible: [{"school": "MIT", "degree": "PhD", "year": "2010"}]
    work_experience JSONB, -- Flexible work history
    achievements TEXT[], -- Array: ['Forbes 30 Under 30', 'AI Innovation Award']
    board_positions JSONB, -- Flexible: [{"company": "Meta", "role": "Board Member"}]
    investments_count INTEGER DEFAULT 0,
    successful_exits_count INTEGER DEFAULT 0,
    is_verified BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. NEWS Table
CREATE TABLE news (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT,
    news_url TEXT UNIQUE NOT NULL,
    source_name TEXT,
    author_name TEXT,
    category TEXT,
    news_type TEXT CHECK (news_type IN ('funding', 'acquisition', 'product_launch', 'partnership', 'hiring', 'general')),
    published_at TIMESTAMP WITH TIME ZONE,
    image_url TEXT,
    read_time_minutes INTEGER,
    sentiment_score DECIMAL(3,2), -- -1.0 to 1.0
    tags TEXT[], -- Array: ['AI', 'Series A', 'Enterprise']
    trending_score INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    is_breaking BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- 3 ESSENTIAL JUNCTION TABLES
-- ========================================

-- 8. FUNDING_ROUND_PARTICIPANTS (Most Important)
-- Replaces: funding_rounds.participating_investors JSONB
CREATE TABLE funding_round_participants (
    id BIGSERIAL PRIMARY KEY,
    funding_round_id BIGINT REFERENCES funding_rounds(id) ON DELETE CASCADE,
    investment_firm_id BIGINT REFERENCES investment_firms(id) ON DELETE CASCADE,
    investment_amount BIGINT, -- in cents
    participant_type TEXT CHECK (participant_type IN ('lead', 'participant', 'strategic')) DEFAULT 'participant',
    notes TEXT, -- Additional context about the investment
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(funding_round_id, investment_firm_id)
);

-- 9. STARTUP_TEAM_MEMBERS (Very Important)
-- Enables proper team queries and relationships
CREATE TABLE startup_team_members (
    id BIGSERIAL PRIMARY KEY,
    startup_id BIGINT REFERENCES startups(id) ON DELETE CASCADE,
    person_id BIGINT REFERENCES people(id) ON DELETE CASCADE,
    role TEXT NOT NULL,
    is_founder BOOLEAN DEFAULT false,
    is_current BOOLEAN DEFAULT true,
    equity_percentage DECIMAL(5,2), -- Optional equity info
    start_date DATE,
    end_date DATE,
    bio_override TEXT, -- Override person's bio for this specific role
    linkedin_override TEXT, -- Override LinkedIn for this role
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(startup_id, person_id, role)
);

-- 10. NEWS_STARTUP_RELATIONS (Important for News)
-- Enables: "Show news about this startup" and "Which startups mentioned in this news"
CREATE TABLE news_startup_relations (
    id BIGSERIAL PRIMARY KEY,
    news_id BIGINT REFERENCES news(id) ON DELETE CASCADE,
    startup_id BIGINT REFERENCES startups(id) ON DELETE CASCADE,
    relation_type TEXT DEFAULT 'mentioned' CHECK (relation_type IN ('primary', 'mentioned', 'competitor', 'partner')),
    prominence INTEGER DEFAULT 1 CHECK (prominence >= 1 AND prominence <= 5), -- How prominently mentioned (1=brief, 5=main story)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(news_id, startup_id)
);

-- ========================================
-- INDEXES FOR PERFORMANCE
-- ========================================

-- Core table indexes
CREATE INDEX idx_startups_industry ON startups(industry);
CREATE INDEX idx_startups_stage ON startups(stage);
CREATE INDEX idx_startups_location ON startups(location);
CREATE INDEX idx_startups_traction_score ON startups(traction_score DESC);
CREATE INDEX idx_startups_founded_year ON startups(founded_year);
CREATE INDEX idx_startups_is_public ON startups(is_public_profile) WHERE is_public_profile = true;

CREATE INDEX idx_investment_firms_type ON investment_firms(firm_type);
CREATE INDEX idx_investment_firms_location ON investment_firms(location);
CREATE INDEX idx_investment_firms_focus_industries ON investment_firms USING GIN(focus_industries);
CREATE INDEX idx_investment_firms_investment_stages ON investment_firms USING GIN(investment_stages);

CREATE INDEX idx_funding_rounds_startup_id ON funding_rounds(startup_id);
CREATE INDEX idx_funding_rounds_round_stage ON funding_rounds(round_stage);
CREATE INDEX idx_funding_rounds_announcement_date ON funding_rounds(announcement_date DESC);
CREATE INDEX idx_funding_rounds_funding_amount ON funding_rounds(funding_amount DESC);
CREATE INDEX idx_funding_rounds_lead_investor ON funding_rounds(lead_investor_id);

CREATE INDEX idx_people_role_type ON people(role_type);
CREATE INDEX idx_people_location ON people(location);
CREATE INDEX idx_people_current_company ON people(current_company_id, current_company_type);
CREATE INDEX idx_people_linkedin ON people(linkedin_url) WHERE linkedin_url IS NOT NULL;

CREATE INDEX idx_news_published_at ON news(published_at DESC);
CREATE INDEX idx_news_category ON news(category);
CREATE INDEX idx_news_type ON news(news_type);
CREATE INDEX idx_news_tags ON news USING GIN(tags);
CREATE INDEX idx_news_featured ON news(is_featured) WHERE is_featured = true;

-- Junction table indexes
CREATE INDEX idx_funding_participants_round ON funding_round_participants(funding_round_id);
CREATE INDEX idx_funding_participants_firm ON funding_round_participants(investment_firm_id);
CREATE INDEX idx_funding_participants_amount ON funding_round_participants(investment_amount DESC);

CREATE INDEX idx_team_startup ON startup_team_members(startup_id);
CREATE INDEX idx_team_person ON startup_team_members(person_id);
CREATE INDEX idx_team_current ON startup_team_members(is_current) WHERE is_current = true;
CREATE INDEX idx_team_founders ON startup_team_members(is_founder) WHERE is_founder = true;

CREATE INDEX idx_news_relations_news ON news_startup_relations(news_id);
CREATE INDEX idx_news_relations_startup ON news_startup_relations(startup_id);
CREATE INDEX idx_news_relations_type ON news_startup_relations(relation_type);

-- ========================================
-- USEFUL VIEWS FOR COMMON QUERIES
-- ========================================

-- View: Startup funding summary
CREATE OR REPLACE VIEW startup_funding_summary AS
SELECT 
    s.id,
    s.name,
    s.stage,
    s.industry,
    s.traction_score,
    s.valuation_amount as current_valuation,
    COUNT(fr.id) as funding_rounds_count,
    COALESCE(SUM(fr.funding_amount), 0) as total_funding_raised,
    MAX(fr.announcement_date) as latest_funding_date,
    STRING_AGG(DISTINCT if_.name, ', ' ORDER BY if_.name) as lead_investors
FROM startups s
LEFT JOIN funding_rounds fr ON s.id = fr.startup_id
LEFT JOIN investment_firms if_ ON fr.lead_investor_id = if_.id
GROUP BY s.id, s.name, s.stage, s.industry, s.traction_score, s.valuation_amount;

-- View: Investment firm portfolio
CREATE OR REPLACE VIEW investor_portfolio_summary AS
SELECT 
    if_.id,
    if_.name,
    if_.firm_type,
    if_.check_size_sweet_spot,
    COUNT(DISTINCT fr.startup_id) as portfolio_companies,
    COUNT(DISTINCT frp.funding_round_id) as total_investments,
    COALESCE(SUM(frp.investment_amount), 0) as total_invested,
    COALESCE(AVG(frp.investment_amount), 0) as avg_investment_size
FROM investment_firms if_
LEFT JOIN funding_round_participants frp ON if_.id = frp.investment_firm_id
LEFT JOIN funding_rounds fr ON frp.funding_round_id = fr.id
GROUP BY if_.id, if_.name, if_.firm_type, if_.check_size_sweet_spot;

-- View: News with startup relations
CREATE OR REPLACE VIEW news_with_startups AS
SELECT 
    n.*,
    STRING_AGG(
        CASE WHEN nsr.relation_type = 'primary' THEN s.name || ' (PRIMARY)'
             ELSE s.name 
        END, ', ' 
        ORDER BY nsr.prominence DESC, s.name
    ) as related_startups,
    COUNT(nsr.startup_id) as startup_count
FROM news n
LEFT JOIN news_startup_relations nsr ON n.id = nsr.news_id
LEFT JOIN startups s ON nsr.startup_id = s.id
GROUP BY n.id;

-- ========================================
-- ROW LEVEL SECURITY (RLS) SETUP
-- ========================================

-- Enable RLS on sensitive tables
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;
ALTER TABLE funding_rounds ENABLE ROW LEVEL SECURITY;
ALTER TABLE people ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see public startup profiles OR their own
CREATE POLICY "Public startups are viewable by everyone" ON startups
    FOR SELECT USING (is_public_profile = true);

CREATE POLICY "Users can view their own startups" ON startups
    FOR ALL USING (auth.uid() = founder_user_id);

-- Policy: Funding rounds are viewable if startup is public
CREATE POLICY "Funding rounds viewable for public startups" ON funding_rounds
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM startups s 
            WHERE s.id = funding_rounds.startup_id 
            AND s.is_public_profile = true
        )
    );

-- Policy: People profiles based on privacy settings
CREATE POLICY "Public people profiles are viewable" ON people
    FOR SELECT USING (is_public = true);

-- ========================================
-- FUNCTIONS FOR COMMON OPERATIONS
-- ========================================

-- Function: Get startup with team members
CREATE OR REPLACE FUNCTION get_startup_with_team(startup_id_param BIGINT)
RETURNS TABLE (
    startup_name TEXT,
    startup_description TEXT,
    team_member_name TEXT,
    team_member_role TEXT,
    is_founder BOOLEAN,
    member_linkedin TEXT
)
LANGUAGE sql
STABLE
AS $$
    SELECT 
        s.name,
        s.description,
        p.full_name,
        stm.role,
        stm.is_founder,
        COALESCE(stm.linkedin_override, p.linkedin_url)
    FROM startups s
    LEFT JOIN startup_team_members stm ON s.id = stm.startup_id AND stm.is_current = true
    LEFT JOIN people p ON stm.person_id = p.id
    WHERE s.id = startup_id_param;
$$;

-- Function: Get funding round with participants
CREATE OR REPLACE FUNCTION get_funding_round_participants(round_id_param BIGINT)
RETURNS TABLE (
    round_name TEXT,
    startup_name TEXT,
    lead_investor TEXT,
    participant_name TEXT,
    investment_amount BIGINT,
    participant_type TEXT
)
LANGUAGE sql
STABLE
AS $$
    SELECT 
        fr.round_name,
        s.name,
        if_lead.name,
        if_part.name,
        frp.investment_amount,
        frp.participant_type
    FROM funding_rounds fr
    JOIN startups s ON fr.startup_id = s.id
    LEFT JOIN investment_firms if_lead ON fr.lead_investor_id = if_lead.id
    LEFT JOIN funding_round_participants frp ON fr.id = frp.funding_round_id
    LEFT JOIN investment_firms if_part ON frp.investment_firm_id = if_part.id
    WHERE fr.id = round_id_param;
$$;