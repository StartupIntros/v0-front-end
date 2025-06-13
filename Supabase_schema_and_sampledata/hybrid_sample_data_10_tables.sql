-- ========================================
-- 1. USERS (15 rows)
-- ========================================
INSERT INTO users (id, email, password_hash, full_name, role, profile_image_url, bio, location, website_url, linkedin_url, twitter_url, is_verified) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'marc@a16z.com', '$2a$10$placeholder.hash.for.marc', 'Marc Andreessen', 'investor', 'https://example.com/marc.jpg', 'Co-founder of Andreessen Horowitz', 'Menlo Park, CA', 'https://pmarca.com', 'https://linkedin.com/in/pmarca', 'https://x.com/pmarca', true),
('550e8400-e29b-41d4-a716-446655440002', 'sarah.chen@techflow.ai', '$2a$10$placeholder.hash.for.sarah', 'Sarah Chen', 'founder', 'https://example.com/sarah.jpg', 'CEO & Co-founder of TechFlow AI', 'San Francisco, CA', NULL, 'https://linkedin.com/in/sarah-chen-techflow', 'https://x.com/sarahchen_ai', true),
('550e8400-e29b-41d4-a716-446655440003', 'ben@a16z.com', '$2a$10$placeholder.hash.for.ben', 'Ben Horowitz', 'investor', 'https://example.com/ben.jpg', 'Co-founder of Andreessen Horowitz', 'Menlo Park, CA', NULL, 'https://linkedin.com/in/bhorowitz', 'https://x.com/bhorowitz', true),
('550e8400-e29b-41d4-a716-446655440004', 'mike@techflow.ai', '$2a$10$placeholder.hash.for.mike', 'Michael Rodriguez', 'founder', 'https://example.com/mike.jpg', 'CTO & Co-founder of TechFlow AI', 'San Francisco, CA', NULL, 'https://linkedin.com/in/michael-rodriguez-cto', 'https://x.com/mrodriguez_tech', true),
('550e8400-e29b-41d4-a716-446655440005', 'roelof@sequoia.com', '$2a$10$placeholder.hash.for.roelof', 'Roelof Botha', 'investor', 'https://example.com/roelof.jpg', 'Partner at Sequoia Capital', 'Menlo Park, CA', NULL, 'https://linkedin.com/in/roelofbotha', 'https://x.com/roelofbotha', true),
('550e8400-e29b-41d4-a716-446655440006', 'jane@notion.so', '$2a$10$placeholder.hash.for.jane', 'Jane Doe', 'founder', 'https://example.com/jane.jpg', 'CEO of Notion Labs', 'San Francisco, CA', NULL, 'https://linkedin.com/in/janedoe', NULL, true),
('550e8400-e29b-41d4-a716-446655440007', 'alfred@accel.com', '$2a$10$placeholder.hash.for.alfred', 'Alfred Lin', 'investor', 'https://example.com/alfred.jpg', 'Partner at Accel', 'Palo Alto, CA', NULL, 'https://linkedin.com/in/alfredlin', NULL, true),
('550e8400-e29b-41d4-a716-446655440008', 'alex@quantum.ai', '$2a$10$placeholder.hash.for.alex', 'Alex Johnson', 'founder', 'https://example.com/alex.jpg', 'CTO of QuantumFlow AI', 'Boston, MA', NULL, 'https://linkedin.com/in/alexjohnson', NULL, true),
('550e8400-e29b-41d4-a716-446655440009', 'mary@bioanalytics.com', '$2a$10$placeholder.hash.for.mary', 'Dr. Mary Singh', 'founder', 'https://example.com/mary.jpg', 'CEO of BioAnalytics Pro', 'San Diego, CA', NULL, 'https://linkedin.com/in/drmarysing', NULL, true),
('550e8400-e29b-41d4-a716-446655440010', 'peter@founders.fund', '$2a$10$placeholder.hash.for.peter', 'Peter Thiel', 'investor', 'https://example.com/peter.jpg', 'Founder of Founders Fund', 'San Francisco, CA', NULL, 'https://linkedin.com/in/peterthiel', NULL, true),
('550e8400-e29b-41d4-a716-446655440011', 'emily@healthtech.io', '$2a$10$placeholder.hash.for.emily', 'Emily White', 'founder', 'https://example.com/emily.jpg', 'Founder of HealthTech Pro', 'Austin, TX', NULL, 'https://linkedin.com/in/emilywhite', NULL, true),
('550e8400-e29b-41d4-a716-446655440012', 'david@fintech.co', '$2a$10$placeholder.hash.for.david', 'David Park', 'founder', 'https://example.com/david.jpg', 'CEO of FinTech Solutions', 'New York, NY', NULL, 'https://linkedin.com/in/davidpark', NULL, false),
('550e8400-e29b-41d4-a716-446655440013', 'lisa@climatetech.org', '$2a$10$placeholder.hash.for.lisa', 'Lisa Rodriguez', 'founder', 'https://example.com/lisa.jpg', 'Founder of Climate Tech Innovations', 'Seattle, WA', NULL, 'https://linkedin.com/in/lisarodriguez', NULL, false),
('550e8400-e29b-41d4-a716-446655440014', 'john@yc.com', '$2a$10$placeholder.hash.for.john', 'John Doe', 'investor', 'https://example.com/john.jpg', 'Partner at Y Combinator', 'Mountain View, CA', NULL, 'https://linkedin.com/in/johndoe', NULL, true),
('550e8400-e29b-41d4-a716-446655440015', 'anna@edtech.edu', '$2a$10$placeholder.hash.for.anna', 'Anna Kim', 'founder', 'https://example.com/anna.jpg', 'CEO of EdTech Revolution', 'Cambridge, MA', NULL, 'https://linkedin.com/in/annakim', NULL, false);

-- ========================================
-- 2. INVESTMENT_FIRMS (12 rows)
-- ========================================
INSERT INTO investment_firms (name, short_name, description, full_description, firm_type, location, founded_year, aum_amount, website_url, linkedin_url, twitter_url, logo_url, investment_stages, focus_industries, geographic_focus, check_size_min, check_size_max, check_size_sweet_spot, portfolio_count, active_deals_count, investment_firm_id, source_url) VALUES
('Andreessen Horowitz', 'a16z', 'Stage-agnostic venture capital firm', 'Andreessen Horowitz (a16z) is a venture capital firm in Silicon Valley, California, that backs bold entrepreneurs building the future through technology.', 'Venture Capital', 'Menlo Park, CA', 2009, '$35B', 'https://a16z.com', 'https://linkedin.com/company/andreessen-horowitz', 'https://x.com/a16z', 'https://example.com/a16z-logo.png', ARRAY['Seed', 'Series A', 'Series B', 'Series C', 'Growth'], ARRAY['AI/ML', 'Crypto', 'SaaS', 'Consumer', 'Enterprise', 'Bio/Healthcare'], ARRAY['North America', 'Global'], 50000000, 10000000000, 2500000000, 450, 25, 'a16z-001', 'https://a16z.com/portfolio'),
('Sequoia Capital', 'Sequoia', 'Early and growth-stage venture capital firm', 'Sequoia Capital is a venture capital firm founded in 1972 which focuses on technology in Silicon Valley and beyond.', 'Venture Capital', 'Menlo Park, CA', 1972, '$85B', 'https://sequoiacap.com', 'https://linkedin.com/company/sequoia-capital', 'https://x.com/sequoia', 'https://example.com/sequoia-logo.png', ARRAY['Seed', 'Series A', 'Series B', 'Series C', 'Growth'], ARRAY['SaaS', 'FinTech', 'AI/ML', 'Consumer', 'Enterprise'], ARRAY['North America', 'Asia', 'Europe'], 100000000, 5000000000, 1000000000, 1500, 45, 'sequoia-001', 'https://sequoiacap.com/companies'),
('Accel', 'Accel', 'Global venture capital firm', 'Accel is a global venture capital firm that partners with exceptional entrepreneurs from seed to growth stage.', 'Venture Capital', 'Palo Alto, CA', 1983, '$25B', 'https://accel.com', 'https://linkedin.com/company/accel-partners', 'https://x.com/accel', 'https://example.com/accel-logo.png', ARRAY['Seed', 'Series A', 'Series B', 'Series C'], ARRAY['SaaS', 'FinTech', 'AI/ML', 'Consumer'], ARRAY['North America', 'Europe'], 50000000, 2500000000, 500000000, 850, 32, 'accel-001', 'https://accel.com/companies'),
('Y Combinator', 'YC', 'Seed-stage startup accelerator', 'Y Combinator provides seed funding for startups and runs two three-month funding cycles per year.', 'Accelerator', 'Mountain View, CA', 2005, '$7.5B', 'https://ycombinator.com', 'https://linkedin.com/company/y-combinator', 'https://x.com/ycombinator', 'https://example.com/yc-logo.png', ARRAY['Pre-Seed', 'Seed'], ARRAY['AI/ML', 'SaaS', 'Consumer', 'Enterprise', 'FinTech'], ARRAY['Global'], 25000000, 200000000, 50000000, 3500, 120, 'yc-001', 'https://ycombinator.com/companies'),
('Founders Fund', 'FF', 'Technology-focused venture capital firm', 'Founders Fund is a venture capital firm investing in companies building revolutionary technologies.', 'Venture Capital', 'San Francisco, CA', 2005, '$12B', 'https://foundersfund.com', 'https://linkedin.com/company/founders-fund', 'https://x.com/foundersfund', 'https://example.com/ff-logo.png', ARRAY['Seed', 'Series A', 'Series B', 'Series C', 'Growth'], ARRAY['AI/ML', 'BioTech', 'Crypto', 'Enterprise'], ARRAY['North America'], 100000000, 5000000000, 1000000000, 300, 18, 'ff-001', 'https://foundersfund.com/portfolio'),
('Kleiner Perkins', 'KP', 'Venture capital firm', 'Kleiner Perkins is a venture capital firm specializing in incubation, early stage and growth companies.', 'Venture Capital', 'Menlo Park, CA', 1972, '$9B', 'https://kleinerperkins.com', 'https://linkedin.com/company/kleiner-perkins', 'https://x.com/kleinerperkins', 'https://example.com/kp-logo.png', ARRAY['Seed', 'Series A', 'Series B', 'Series C'], ARRAY['AI/ML', 'BioTech', 'Consumer', 'Enterprise'], ARRAY['North America'], 50000000, 3000000000, 750000000, 600, 28, 'kp-001', 'https://kleinerperkins.com/portfolio'),
('NEA', 'NEA', 'New Enterprise Associates', 'NEA is a global venture capital firm focused on helping entrepreneurs build transformational businesses across multiple stages and sectors.', 'Venture Capital', 'Menlo Park, CA', 1977, '$25B', 'https://nea.com', 'https://linkedin.com/company/new-enterprise-associates', 'https://x.com/NEAvc', 'https://example.com/nea-logo.png', ARRAY['Seed', 'Series A', 'Series B', 'Series C', 'Growth'], ARRAY['AI/ML', 'HealthTech', 'FinTech', 'Enterprise'], ARRAY['North America', 'Asia'], 75000000, 4000000000, 1500000000, 450, 35, 'nea-001', 'https://nea.com/portfolio'),
('Greylock Partners', 'Greylock', 'Venture capital firm', 'Greylock Partners is a leading venture capital firm based in Silicon Valley.', 'Venture Capital', 'Menlo Park, CA', 1965, '$15B', 'https://greylock.com', 'https://linkedin.com/company/greylock-partners', 'https://x.com/greylock', 'https://example.com/greylock-logo.png', ARRAY['Seed', 'Series A', 'Series B'], ARRAY['AI/ML', 'Enterprise', 'Consumer'], ARRAY['North America'], 100000000, 2000000000, 500000000, 400, 22, 'greylock-001', 'https://greylock.com/portfolio'),
('Benchmark', 'Benchmark', 'Early-stage venture capital firm', 'Benchmark is an early-stage venture capital firm responsible for the first institutional funding round in many well-known startups.', 'Venture Capital', 'San Francisco, CA', 1995, '$5B', 'https://benchmark.com', 'https://linkedin.com/company/benchmark-capital', 'https://x.com/benchmark', 'https://example.com/benchmark-logo.png', ARRAY['Seed', 'Series A', 'Series B'], ARRAY['SaaS', 'Consumer', 'Enterprise'], ARRAY['North America'], 100000000, 1500000000, 750000000, 250, 15, 'benchmark-001', 'https://benchmark.com/portfolio'),
('First Round Capital', 'First Round', 'Early-stage venture capital firm', 'First Round Capital is a seed-stage venture capital firm specializing in technology companies.', 'Venture Capital', 'San Francisco, CA', 2004, '$4B', 'https://firstround.com', 'https://linkedin.com/company/first-round-capital', 'https://x.com/firstround', 'https://example.com/firstround-logo.png', ARRAY['Pre-Seed', 'Seed', 'Series A'], ARRAY['SaaS', 'AI/ML', 'Consumer', 'Enterprise'], ARRAY['North America'], 25000000, 1000000000, 300000000, 800, 45, 'firstround-001', 'https://firstround.com/portfolio'),
('Lightspeed Venture Partners', 'Lightspeed', 'Multi-stage venture capital firm', 'Lightspeed Venture Partners is a multi-stage venture capital firm focused on accelerating disruptive innovations.', 'Venture Capital', 'Menlo Park, CA', 2000, '$18B', 'https://lsvp.com', 'https://linkedin.com/company/lightspeed-venture-partners', 'https://x.com/lightspeedvp', 'https://example.com/lightspeed-logo.png', ARRAY['Seed', 'Series A', 'Series B', 'Series C', 'Growth'], ARRAY['AI/ML', 'Enterprise', 'Consumer', 'FinTech'], ARRAY['North America', 'Asia', 'Europe'], 50000000, 3500000000, 1000000000, 500, 30, 'lightspeed-001', 'https://lsvp.com/portfolio'),
('Union Square Ventures', 'USV', 'Early-stage venture capital firm', 'Union Square Ventures is a venture capital firm based in New York City that invests in early stage companies.', 'Venture Capital', 'New York, NY', 2003, '$1.5B', 'https://usv.com', 'https://linkedin.com/company/union-square-ventures', 'https://x.com/usv', 'https://example.com/usv-logo.png', ARRAY['Seed', 'Series A', 'Series B'], ARRAY['FinTech', 'Consumer', 'Enterprise'], ARRAY['North America'], 25000000, 500000000, 150000000, 200, 18, 'usv-001', 'https://usv.com/portfolio');

-- ========================================
-- 3. INVESTMENT_FUNDS (15 rows)
-- ========================================
INSERT INTO investment_funds (fund_name, firm_id, fund_size_amount, fund_size_currency, fund_type, vintage_year, fund_status, investment_period_start, investment_period_end, target_companies_count, description, focus_areas, min_investment, max_investment) VALUES
('a16z Fund VII', 1, 450000000000, 'USD', 'Growth', 2022, 'Active', '2022-01-01', '2027-01-01', 50, 'Growth stage investments in technology companies', ARRAY['AI/ML', 'Enterprise', 'Consumer'], 1000000000, 10000000000),
('a16z Crypto Fund III', 1, 450000000000, 'USD', 'Crypto', 2022, 'Active', '2022-06-01', '2027-06-01', 100, 'Crypto and blockchain investments', ARRAY['Crypto', 'DeFi', 'Web3'], 50000000, 5000000000),
('a16z Bio Fund II', 1, 45000000000, 'USD', 'Bio/Healthcare', 2021, 'Active', '2021-01-01', '2026-01-01', 30, 'Biotech and healthcare investments', ARRAY['BioTech', 'HealthTech'], 500000000, 3000000000),
('Sequoia Capital Fund XXI', 2, 270000000000, 'USD', 'Growth', 2023, 'Active', '2023-01-01', '2028-01-01', 80, 'Growth investments across all sectors', ARRAY['SaaS', 'AI/ML', 'FinTech'], 2000000000, 15000000000),
('Sequoia Seed Fund VIII', 2, 85000000000, 'USD', 'General', 2023, 'Active', '2023-01-01', '2026-01-01', 200, 'Early stage investments', ARRAY['All Sectors'], 50000000, 1000000000),
('Accel Growth Fund VI', 3, 300000000000, 'USD', 'Growth', 2022, 'Active', '2022-01-01', '2027-01-01', 60, 'Growth stage technology investments', ARRAY['SaaS', 'Enterprise'], 1500000000, 8000000000),
('YC Continuity Fund III', 4, 100000000000, 'USD', 'Growth', 2023, 'Active', '2023-01-01', '2028-01-01', 40, 'Follow-on investments in YC alumni', ARRAY['All YC Sectors'], 500000000, 3000000000),
('Founders Fund VIII', 5, 280000000000, 'USD', 'General', 2022, 'Active', '2022-01-01', '2027-01-01', 50, 'Revolutionary technology investments', ARRAY['AI/ML', 'BioTech', 'Crypto'], 1000000000, 12000000000),
('KPCB Digital Growth Fund III', 6, 180000000000, 'USD', 'Growth', 2023, 'Active', '2023-01-01', '2028-01-01', 40, 'Digital growth investments', ARRAY['AI/ML', 'Enterprise'], 2000000000, 10000000000),
('NEA 18', 7, 400000000000, 'USD', 'General', 2022, 'Active', '2022-01-01', '2027-01-01', 100, 'Multi-stage venture investments', ARRAY['HealthTech', 'AI/ML', 'Enterprise'], 500000000, 8000000000),
('Greylock XVI', 8, 100000000000, 'USD', 'General', 2023, 'Active', '2023-01-01', '2026-01-01', 50, 'Early stage technology investments', ARRAY['AI/ML', 'Enterprise'], 100000000, 2000000000),
('Benchmark Fund XI', 9, 42500000000, 'USD', 'General', 2023, 'Active', '2023-01-01', '2026-01-01', 35, 'Early stage investments', ARRAY['SaaS', 'Enterprise'], 100000000, 1500000000),
('First Round XIV', 10, 15000000000, 'USD', 'General', 2022, 'Active', '2022-01-01', '2025-01-01', 150, 'Seed stage investments', ARRAY['SaaS', 'AI/ML'], 25000000, 1000000000),
('Lightspeed Venture Partners XV', 11, 700000000000, 'USD', 'General', 2023, 'Active', '2023-01-01', '2028-01-01', 120, 'Multi-stage global investments', ARRAY['AI/ML', 'Enterprise', 'Consumer'], 50000000, 5000000000),
('USV 2023 Fund', 12, 20000000000, 'USD', 'General', 2023, 'Active', '2023-01-01', '2026-01-01', 40, 'Early stage network effect businesses', ARRAY['FinTech', 'Consumer'], 25000000, 500000000);

-- ========================================
-- 4. STARTUPS (15 rows)
-- ========================================
INSERT INTO startups (name, tagline, description, industry, stage, location, founded_year, employee_count, website_url, linkedin_url, twitter_url, logo_url, traction_score, valuation_amount, total_funding_raised, is_public_profile, profile_slug, founder_user_id, key_metrics, materials) VALUES
('TechFlow AI', 'AI-powered workflow automation for enterprises', 'TechFlow AI revolutionizes enterprise workflows through intelligent automation. Our platform uses advanced machine learning algorithms to identify bottlenecks, optimize processes, and increase productivity by up to 40%.', 'AI/ML', 'Series A', 'San Francisco, CA', 2022, 45, 'https://techflow.ai', 'https://linkedin.com/company/techflow-ai', 'https://x.com/techflowai', 'https://example.com/techflow-logo.png', 85, 7500000000, 1500000000, true, 'techflow-ai', '550e8400-e29b-41d4-a716-446655440002', '{"arr": "$320K MRR", "growth": "45% MoM", "customers": "150+ Enterprise", "retention": "95%"}', '{"deck": "https://example.com/techflow-deck.pdf", "video": "https://youtube.com/watch?v=techflow"}'),
('QuantumFlow AI', 'Quantum-enhanced machine learning platform', 'QuantumFlow AI combines quantum computing with machine learning to solve complex optimization problems that are intractable for classical computers.', 'AI/ML', 'Seed', 'Boston, MA', 2023, 28, 'https://quantumflow.ai', 'https://linkedin.com/company/quantumflow-ai', 'https://x.com/quantumflowai', 'https://example.com/quantumflow-logo.png', 89, 3200000000, 800000000, true, 'quantumflow-ai', '550e8400-e29b-41d4-a716-446655440008', '{"arr": "$80K MRR", "growth": "82% MoM", "customers": "25 Research Labs", "partnerships": "8 Universities"}', '{}'),
('BioAnalytics Pro', 'AI-driven drug discovery and development', 'BioAnalytics Pro accelerates drug discovery using advanced AI and machine learning to predict molecular behavior and optimize drug candidates.', 'BioTech', 'Series B', 'San Diego, CA', 2021, 120, 'https://bioanalytics.pro', 'https://linkedin.com/company/bioanalytics-pro', 'https://x.com/bioanalyticspro', 'https://example.com/bioanalytics-logo.png', 87, 20000000000, 3500000000, true, 'bioanalytics-pro', '550e8400-e29b-41d4-a716-446655440009', '{"arr": "$2.1M ARR", "growth": "28% YoY", "customers": "45 Pharma Companies", "pipeline": "12 Drug Candidates"}', '{"deck": "https://example.com/bioanalytics-deck.pdf"}'),
('Notion', 'All-in-one workspace for notes, tasks, wikis, and databases', 'Notion is a collaboration platform with modified Markdown support that integrates kanban boards, tasks, wikis and databases.', 'SaaS', 'Series C', 'San Francisco, CA', 2016, 400, 'https://notion.so', 'https://linkedin.com/company/notion-hq', 'https://x.com/notionhq', 'https://example.com/notion-logo.png', 92, 1000000000000, 27500000000, true, 'notion', '550e8400-e29b-41d4-a716-446655440006', '{"arr": "$100M ARR", "growth": "32% YoY", "customers": "30M+ Users", "enterprise": "1000+ Companies"}', '{}'),
('HealthTech Pro', 'Digital health platform for remote patient monitoring', 'HealthTech Pro provides comprehensive remote patient monitoring solutions with AI-powered health insights and predictive analytics.', 'HealthTech', 'Series A', 'Austin, TX', 2022, 65, 'https://healthtech.pro', 'https://linkedin.com/company/healthtech-pro', 'https://x.com/healthtechpro', 'https://example.com/healthtech-logo.png', 78, 4500000000, 1200000000, true, 'healthtech-pro', '550e8400-e29b-41d4-a716-446655440011', '{"arr": "$580K MRR", "growth": "51% MoM", "customers": "85 Healthcare Providers", "patients": "12000+ Monitored"}', '{}'),
('FinTech Solutions', 'Next-generation payment processing platform', 'FinTech Solutions offers advanced payment processing with lower fees, faster settlements, and enhanced security for e-commerce businesses.', 'FinTech', 'Seed', 'New York, NY', 2023, 32, 'https://fintech-solutions.com', 'https://linkedin.com/company/fintech-solutions', 'https://x.com/fintechsol', 'https://example.com/fintech-logo.png', 72, 2000000000, 500000000, false, 'fintech-solutions', '550e8400-e29b-41d4-a716-446655440012', '{"revenue": "$245K MRR", "growth": "78% MoM", "customers": "180 Merchants", "volume": "$2.4M Monthly"}', '{}'),
('Climate Tech Innovations', 'Carbon capture and utilization technology', 'Climate Tech Innovations develops advanced carbon capture technology that converts CO2 into useful materials and chemicals.', 'CleanTech', 'Series A', 'Seattle, WA', 2021, 55, 'https://climatetech.innovations', 'https://linkedin.com/company/climate-tech-innovations', 'https://x.com/climatetechinnov', 'https://example.com/climatetech-logo.png', 81, 8000000000, 2200000000, true, 'climate-tech-innovations', '550e8400-e29b-41d4-a716-446655440013', '{"revenue": "$1.2M ARR", "growth": "62% YoY", "customers": "12 Industrial Partners", "capture": "1000 tons CO2/month"}', '{"deck": "https://example.com/climatetech-deck.pdf"}'),
('EdTech Revolution', 'AI-powered personalized learning platform', 'EdTech Revolution uses AI to create personalized learning experiences that adapt to each student''s learning style and pace.', 'EdTech', 'Seed', 'Cambridge, MA', 2023, 22, 'https://edtech-revolution.com', 'https://linkedin.com/company/edtech-revolution', 'https://x.com/edtechrev', 'https://example.com/edtech-logo.png', 75, 1500000000, 300000000, false, 'edtech-revolution', '550e8400-e29b-41d4-a716-446655440015', '{"arr": "$95K MRR", "growth": "91% MoM", "customers": "45 Schools", "students": "5000+ Active"}', '{}'),
('RoboticsFlow', 'Autonomous warehouse robotics solutions', 'RoboticsFlow develops autonomous robots for warehouse automation, improving efficiency and reducing operational costs.', 'AI/ML', 'Series A', 'San Jose, CA', 2022, 78, 'https://roboticsflow.com', 'https://linkedin.com/company/roboticsflow', 'https://x.com/roboticsflow', 'https://example.com/robotics-logo.png', 83, 6200000000, 1800000000, true, 'roboticsflow', NULL, '{"revenue": "$8.9M ARR", "growth": "42% YoY", "customers": "28 Warehouses", "robots": "500+ Deployed"}', '{}'),
('CyberSecure Pro', 'AI-powered cybersecurity platform', 'CyberSecure Pro provides advanced threat detection and response using machine learning to protect enterprise networks.', 'Enterprise', 'Series B', 'Austin, TX', 2020, 95, 'https://cybersecure.pro', 'https://linkedin.com/company/cybersecure-pro', 'https://x.com/cybersecurepro', 'https://example.com/cybersecure-logo.png', 88, 12000000000, 2800000000, true, 'cybersecure-pro', NULL, '{"arr": "$14.5M ARR", "growth": "38% YoY", "customers": "120 Enterprises", "threats": "1M+ Blocked/month"}', '{}'),
('FoodTech Innovations', 'Plant-based protein manufacturing', 'FoodTech Innovations creates sustainable plant-based proteins using proprietary fermentation technology.', 'Food & Beverage', 'Series A', 'Berkeley, CA', 2021, 68, 'https://foodtech-innovations.com', 'https://linkedin.com/company/foodtech-innovations', 'https://x.com/foodtechinnov', 'https://example.com/foodtech-logo.png', 79, 5500000000, 1600000000, true, 'foodtech-innovations', NULL, '{"revenue": "$6.8M ARR", "growth": "55% YoY", "customers": "35 Food Manufacturers", "production": "100 tons/month"}', '{}'),
('SpaceTech Dynamics', 'Satellite communication technology', 'SpaceTech Dynamics develops advanced satellite communication systems for global internet connectivity.', 'Transportation', 'Series B', 'Los Angeles, CA', 2019, 145, 'https://spacetech-dynamics.com', 'https://linkedin.com/company/spacetech-dynamics', 'https://x.com/spacetechdyn', 'https://example.com/spacetech-logo.png', 86, 18000000000, 4500000000, true, 'spacetech-dynamics', NULL, '{"revenue": "$23M ARR", "growth": "21% YoY", "customers": "18 Telecom Providers", "satellites": "50+ Deployed"}', '{}'),
('GameTech Studios', 'AI-powered game development platform', 'GameTech Studios creates AI tools that help game developers create more immersive and personalized gaming experiences.', 'Gaming', 'Seed', 'San Francisco, CA', 2023, 25, 'https://gametech-studios.com', 'https://linkedin.com/company/gametech-studios', 'https://x.com/gametechstudios', 'https://example.com/gametech-logo.png', 76, 1800000000, 400000000, false, 'gametech-studios', NULL, '{"revenue": "$180K MRR", "growth": "125% MoM", "customers": "150 Game Developers", "games": "500+ Created"}', '{}'),
('PropTech Solutions', 'Real estate investment platform', 'PropTech Solutions provides AI-powered real estate investment analysis and portfolio management tools.', 'Real Estate', 'Series A', 'Miami, FL', 2022, 42, 'https://proptech-solutions.com', 'https://linkedin.com/company/proptech-solutions', 'https://x.com/proptechsol', 'https://example.com/proptech-logo.png', 82, 4800000000, 1100000000, true, 'proptech-solutions', NULL, '{"arr": "$7.5M ARR", "growth": "68% YoY", "customers": "85 Investors", "properties": "$500M+ Analyzed"}', '{}'),
('EnergyTech Grid', 'Smart grid optimization platform', 'EnergyTech Grid develops AI-powered smart grid technology to optimize energy distribution and reduce waste.', 'Energy', 'Series A', 'Denver, CO', 2021, 58, 'https://energytech-grid.com', 'https://linkedin.com/company/energytech-grid', 'https://x.com/energytechgrid', 'https://example.com/energytech-logo.png', 84, 7200000000, 2000000000, true, 'energytech-grid', NULL, '{"revenue": "$9.2M ARR", "growth": "49% YoY", "customers": "22 Utility Companies", "efficiency": "15% Grid Improvement"}', '{}');

-- ========================================
-- 5. FUNDING_ROUNDS (20 rows)
-- ========================================
INSERT INTO funding_rounds (startup_id, round_name, round_stage, funding_amount, currency, valuation_pre, valuation_post, round_type, announcement_date, closing_date, lead_investor_id, use_of_funds, round_status, investor_count, press_release_url, fund_name, round_description) VALUES
(1, 'TechFlow AI Series A', 'Series A', 1500000000, 'USD', 5000000000, 7500000000, 'Equity', '2023-10-01', '2023-10-01', 1, ARRAY['Product development', 'Team expansion', 'Marketing'], 'Completed', 3, 'https://techcrunch.com/techflow-ai-series-a', 'TechFlow Series A 2023', 'Series A funding to scale AI platform'),
(2, 'QuantumFlow AI Seed', 'Seed', 800000000, 'USD', 2000000000, 3200000000, 'Equity', '2023-08-15', '2023-08-15', 1, ARRAY['Product development', 'Research'], 'Completed', 4, 'https://techcrunch.com/quantumflow-seed', 'QuantumFlow Seed 2023', 'Seed funding for quantum ML platform'),
(3, 'BioAnalytics Pro Series B', 'Series B', 3500000000, 'USD', 12000000000, 20000000000, 'Equity', '2023-06-20', '2023-06-20', 6, ARRAY['Drug discovery platform', 'Clinical trials', 'Partnerships'], 'Completed', 5, 'https://biotech.com/bioanalytics-series-b', 'BioAnalytics Series B 2023', 'Series B for drug discovery expansion'),
(4, 'Notion Series C', 'Series C', 27500000000, 'USD', 200000000000, 1000000000000, 'Equity', '2021-10-01', '2021-10-01', 1, ARRAY['International expansion', 'Product development', 'Team growth'], 'Completed', 6, 'https://notion.so/series-c-announcement', 'Notion Series C 2021', 'Major growth round for workspace platform'),
(5, 'HealthTech Pro Series A', 'Series A', 1200000000, 'USD', 3000000000, 4500000000, 'Equity', '2023-09-10', '2023-09-10', 7, ARRAY['Platform development', 'Healthcare partnerships', 'Regulatory'], 'Completed', 3, 'https://healthtech.com/series-a', 'HealthTech Series A 2023', 'Series A for remote patient monitoring'),
(6, 'FinTech Solutions Seed', 'Seed', 500000000, 'USD', 1500000000, 2000000000, 'Equity', '2023-11-05', '2023-11-05', 10, ARRAY['Product development', 'Team hiring', 'Market expansion'], 'Completed', 2, 'https://fintech.com/seed-round', 'FinTech Seed 2023', 'Seed funding for payment platform'),
(7, 'Climate Tech Series A', 'Series A', 2200000000, 'USD', 5000000000, 8000000000, 'Equity', '2023-07-22', '2023-07-22', 3, ARRAY['Technology development', 'Pilot projects', 'Manufacturing'], 'Completed', 4, 'https://climatetech.com/series-a', 'Climate Tech Series A 2023', 'Series A for carbon capture technology'),
(8, 'EdTech Revolution Seed', 'Seed', 300000000, 'USD', 800000000, 1500000000, 'SAFE', '2023-12-01', '2023-12-01', 4, ARRAY['Product development', 'AI research', 'Customer acquisition'], 'Completed', 3, 'https://edtech.com/seed', 'EdTech Seed 2023', 'Seed funding for AI learning platform'),
(9, 'RoboticsFlow Series A', 'Series A', 1800000000, 'USD', 4000000000, 6200000000, 'Equity', '2023-05-15', '2023-05-15', 2, ARRAY['Manufacturing scale', 'R&D', 'Sales team'], 'Completed', 4, 'https://robotics.com/series-a', 'RoboticsFlow Series A 2023', 'Series A for warehouse robotics'),
(10, 'CyberSecure Pro Series B', 'Series B', 2800000000, 'USD', 8000000000, 12000000000, 'Equity', '2023-04-10', '2023-04-10', 1, ARRAY['International expansion', 'AI development', 'Enterprise sales'], 'Completed', 5, 'https://cybersecurity.com/series-b', 'CyberSecure Series B 2023', 'Series B for cybersecurity platform'),
(11, 'FoodTech Series A', 'Series A', 1600000000, 'USD', 3500000000, 5500000000, 'Equity', '2023-03-18', '2023-03-18', 6, ARRAY['Manufacturing facilities', 'Product development', 'Market expansion'], 'Completed', 3, 'https://foodtech.com/series-a', 'FoodTech Series A 2023', 'Series A for plant-based proteins'),
(12, 'SpaceTech Series B', 'Series B', 4500000000, 'USD', 12000000000, 18000000000, 'Equity', '2022-11-30', '2022-11-30', 5, ARRAY['Satellite deployment', 'Technology development', 'Global expansion'], 'Completed', 6, 'https://spacetech.com/series-b', 'SpaceTech Series B 2022', 'Series B for satellite technology'),
(13, 'GameTech Seed', 'Seed', 400000000, 'USD', 1200000000, 1800000000, 'Equity', '2023-08-05', '2023-08-05', 4, ARRAY['Platform development', 'AI research', 'Developer tools'], 'Completed', 2, 'https://gametech.com/seed', 'GameTech Seed 2023', 'Seed for AI game development'),
(14, 'PropTech Series A', 'Series A', 1100000000, 'USD', 3200000000, 4800000000, 'Equity', '2023-06-08', '2023-06-08', 11, ARRAY['Platform expansion', 'AI development', 'Market expansion'], 'Completed', 3, 'https://proptech.com/series-a', 'PropTech Series A 2023', 'Series A for real estate platform'),
(15, 'EnergyTech Series A', 'Series A', 2000000000, 'USD', 4500000000, 7200000000, 'Equity', '2023-02-14', '2023-02-14', 8, ARRAY['Grid technology', 'Hardware development', 'Utility partnerships'], 'Completed', 4, 'https://energytech.com/series-a', 'EnergyTech Series A 2023', 'Series A for smart grid technology');

-- ========================================
-- 6. PEOPLE (18 rows)
-- ========================================
INSERT INTO people (full_name, first_name, last_name, title, current_company_id, current_company_type, role_type, bio, location, avatar_url, linkedin_url, twitter_url, personal_website_url, email, experience_years, specialties, education, work_experience, achievements, board_positions, investments_count, successful_exits_count, is_verified, is_public) VALUES
('Marc Andreessen', 'Marc', 'Andreessen', 'Co-Founder & General Partner', 1, 'investment_firm', 'investor', 'Marc Andreessen is a co-founder and general partner of the venture capital firm Andreessen Horowitz. He is best known as co-author of Mosaic, the first widely used web browser.', 'Menlo Park, CA', 'https://example.com/marc.jpg', 'https://linkedin.com/in/pmarca', 'https://x.com/pmarca', 'https://pmarca.com', 'marc@a16z.com', 25, ARRAY['Venture Capital', 'Technology', 'Internet'], '[{"school": "University of Illinois", "degree": "BS Computer Science", "year": "1993"}]', '[{"company": "Netscape", "role": "Co-Founder", "years": "1994-1999"}, {"company": "Andreessen Horowitz", "role": "Co-Founder", "years": "2009-Present"}]', ARRAY['Co-created Mosaic browser', 'Co-founded Netscape', 'Time 100 Most Influential'], '[{"company": "Meta", "role": "Board Member", "since": "2008"}, {"company": "Coinbase", "role": "Board Member", "since": "2013"}]', 150, 25, true, true),
('Ben Horowitz', 'Ben', 'Horowitz', 'Co-Founder & General Partner', 1, 'investment_firm', 'investor', 'Ben Horowitz is a co-founder and general partner of Andreessen Horowitz. He is also an author and technology entrepreneur.', 'Menlo Park, CA', 'https://example.com/ben.jpg', 'https://linkedin.com/in/bhorowitz', 'https://x.com/bhorowitz', NULL, 'ben@a16z.com', 22, ARRAY['Venture Capital', 'Management', 'Technology'], '[{"school": "Columbia University", "degree": "BA", "year": "1988"}]', '[{"company": "Netscape", "role": "VP Products", "years": "1995-1999"}, {"company": "Loudcloud", "role": "CEO", "years": "1999-2007"}]', ARRAY['Author of "The Hard Thing About Hard Things"', 'Built Loudcloud/Opsware'], '[{"company": "Facebook", "role": "Board Observer", "since": "2010"}]', 120, 18, true, true),
('Sarah Chen', 'Sarah', 'Chen', 'CEO & Co-Founder', 1, 'startup', 'founder', 'Sarah Chen is the CEO and Co-founder of TechFlow AI. Former VP at Google with expertise in AI and machine learning.', 'San Francisco, CA', 'https://example.com/sarah.jpg', 'https://linkedin.com/in/sarah-chen-techflow', 'https://x.com/sarahchen_ai', NULL, 'sarah.chen@techflow.ai', 12, ARRAY['AI/ML', 'Product Management', 'Leadership'], '[{"school": "Stanford University", "degree": "MS Computer Science", "year": "2012"}]', '[{"company": "Google", "role": "VP Product", "years": "2015-2022"}, {"company": "TechFlow AI", "role": "CEO", "years": "2022-Present"}]', ARRAY['Forbes 30 Under 30', 'AI Innovation Award'], '[]', 0, 0, true, true),
('Michael Rodriguez', 'Michael', 'Rodriguez', 'CTO & Co-Founder', 1, 'startup', 'founder', 'Michael Rodriguez is the CTO and Co-founder of TechFlow AI. Former Principal Engineer at Meta with deep ML expertise.', 'San Francisco, CA', 'https://example.com/mike.jpg', 'https://linkedin.com/in/michael-rodriguez-cto', 'https://x.com/mrodriguez_tech', NULL, 'mike@techflow.ai', 15, ARRAY['Machine Learning', 'Software Engineering', 'Architecture'], '[{"school": "MIT", "degree": "PhD Computer Science", "year": "2010"}]', '[{"company": "Meta", "role": "Principal Engineer", "years": "2010-2022"}, {"company": "TechFlow AI", "role": "CTO", "years": "2022-Present"}]', ARRAY['10+ ML patents', 'Tech Innovation Award'], '[]', 0, 0, true, true),
('Roelof Botha', 'Roelof', 'Botha', 'Partner', 2, 'investment_firm', 'investor', 'Roelof Botha is a partner at Sequoia Capital and former CFO of PayPal.', 'Menlo Park, CA', 'https://example.com/roelof.jpg', 'https://linkedin.com/in/roelofbotha', 'https://x.com/roelofbotha', NULL, 'roelof@sequoia.com', 20, ARRAY['Venture Capital', 'Finance', 'Technology'], '[{"school": "Stanford Graduate School of Business", "degree": "MBA", "year": "2001"}]', '[{"company": "PayPal", "role": "CFO", "years": "2001-2003"}, {"company": "Sequoia Capital", "role": "Partner", "years": "2003-Present"}]', ARRAY['Led investments in YouTube, Square, Instagram'], '[{"company": "Square", "role": "Board Member", "since": "2009"}]', 80, 15, true, true),
('Alfred Lin', 'Alfred', 'Lin', 'Partner', 3, 'investment_firm', 'investor', 'Alfred Lin is a Partner at Accel with focus on consumer and enterprise investments.', 'Palo Alto, CA', 'https://example.com/alfred.jpg', 'https://linkedin.com/in/alfredlin', NULL, NULL, 'alfred@accel.com', 18, ARRAY['Venture Capital', 'Consumer', 'Enterprise'], '[{"school": "Harvard Business School", "degree": "MBA", "year": "2005"}]', '[{"company": "Zappos", "role": "COO/CFO", "years": "2005-2010"}, {"company": "Accel", "role": "Partner", "years": "2010-Present"}]', ARRAY['Led Zappos growth', 'Multiple unicorn investments'], '[{"company": "Airbnb", "role": "Board Member", "since": "2013"}]', 95, 12, true, true),
('Dr. Mary Singh', 'Mary', 'Singh', 'CEO & Founder', 3, 'startup', 'founder', 'Dr. Mary Singh is the CEO and Founder of BioAnalytics Pro. PhD in Biochemistry with 15 years in drug discovery.', 'San Diego, CA', 'https://example.com/mary.jpg', 'https://linkedin.com/in/drmarysing', NULL, NULL, 'mary@bioanalytics.com', 15, ARRAY['Drug Discovery', 'AI/ML', 'Biochemistry'], '[{"school": "Harvard Medical School", "degree": "PhD Biochemistry", "year": "2008"}]', '[{"company": "Genentech", "role": "Senior Scientist", "years": "2008-2018"}, {"company": "BioAnalytics Pro", "role": "CEO", "years": "2021-Present"}]', ARRAY['20+ research publications', 'Drug discovery innovations'], '[]', 0, 0, true, true),
('Peter Thiel', 'Peter', 'Thiel', 'Founder', 5, 'investment_firm', 'investor', 'Peter Thiel is the founder of Founders Fund and co-founder of PayPal and Palantir.', 'San Francisco, CA', 'https://example.com/peter.jpg', 'https://linkedin.com/in/peterthiel', NULL, NULL, 'peter@founders.fund', 25, ARRAY['Venture Capital', 'Technology', 'Contrarian Thinking'], '[{"school": "Stanford Law School", "degree": "JD", "year": "1992"}]', '[{"company": "PayPal", "role": "Co-Founder", "years": "1998-2002"}, {"company": "Founders Fund", "role": "Founder", "years": "2005-Present"}]', ARRAY['Co-founded PayPal', 'Author of "Zero to One"', 'First outside investor in Facebook'], '[{"company": "Facebook", "role": "Board Member", "since": "2005"}]', 200, 30, true, true),
('Emily White', 'Emily', 'White', 'Founder & CEO', 5, 'startup', 'founder', 'Emily White is the Founder and CEO of HealthTech Pro. Former healthcare executive with digital health expertise.', 'Austin, TX', 'https://example.com/emily.jpg', 'https://linkedin.com/in/emilywhite', NULL, NULL, 'emily@healthtech.io', 18, ARRAY['Digital Health', 'Healthcare', 'Product Management'], '[{"school": "Johns Hopkins", "degree": "MBA Healthcare Management", "year": "2005"}]', '[{"company": "Epic Systems", "role": "VP Product", "years": "2005-2018"}, {"company": "HealthTech Pro", "role": "CEO", "years": "2022-Present"}]', ARRAY['Healthcare Innovation Award', 'Digital Health Pioneer'], '[]', 0, 0, true, true),
('Alex Johnson', 'Alex', 'Johnson', 'CTO & Co-Founder', 2, 'startup', 'founder', 'Alex Johnson is the CTO and Co-founder of QuantumFlow AI. Former quantum computing researcher at IBM.', 'Boston, MA', 'https://example.com/alex.jpg', 'https://linkedin.com/in/alexjohnson', NULL, NULL, 'alex@quantum.ai', 10, ARRAY['Quantum Computing', 'Machine Learning', 'Physics'], '[{"school": "MIT", "degree": "PhD Physics", "year": "2018"}]', '[{"company": "IBM Research", "role": "Quantum Researcher", "years": "2018-2023"}, {"company": "QuantumFlow AI", "role": "CTO", "years": "2023-Present"}]', ARRAY['5+ quantum computing patents', 'Nature Physics publications'], '[]', 0, 0, true, true),
('David Park', 'David', 'Park', 'CEO & Founder', 6, 'startup', 'founder', 'David Park is the CEO and Founder of FinTech Solutions. Former Goldman Sachs VP with fintech expertise.', 'New York, NY', 'https://example.com/david.jpg', 'https://linkedin.com/in/davidpark', NULL, NULL, 'david@fintech.co', 12, ARRAY['FinTech', 'Payments', 'Finance'], '[{"school": "Wharton School", "degree": "MBA Finance", "year": "2012"}]', '[{"company": "Goldman Sachs", "role": "VP", "years": "2012-2020"}, {"company": "FinTech Solutions", "role": "CEO", "years": "2023-Present"}]', ARRAY['FinTech Innovation Award'], '[]', 0, 0, false, true),
('Lisa Rodriguez', 'Lisa', 'Rodriguez', 'Founder & CEO', 7, 'startup', 'founder', 'Lisa Rodriguez is the Founder and CEO of Climate Tech Innovations. Former Tesla engineer with clean energy expertise.', 'Seattle, WA', 'https://example.com/lisa.jpg', 'https://linkedin.com/in/lisarodriguez', NULL, NULL, 'lisa@climatetech.org', 14, ARRAY['Clean Energy', 'Carbon Capture', 'Engineering'], '[{"school": "Stanford University", "degree": "PhD Chemical Engineering", "year": "2009"}]', '[{"company": "Tesla", "role": "Senior Engineer", "years": "2009-2018"}, {"company": "Climate Tech Innovations", "role": "CEO", "years": "2021-Present"}]', ARRAY['Clean Energy Pioneer', '15+ patents in carbon capture'], '[]', 0, 0, false, true),
('Anna Kim', 'Anna', 'Kim', 'CEO & Founder', 8, 'startup', 'founder', 'Anna Kim is the CEO and Founder of EdTech Revolution. Former Google for Education product manager.', 'Cambridge, MA', 'https://example.com/anna.jpg', 'https://linkedin.com/in/annakim', NULL, NULL, 'anna@edtech.edu', 10, ARRAY['EdTech', 'AI', 'Product Management'], '[{"school": "Harvard Graduate School of Education", "degree": "EdM", "year": "2013"}]', '[{"company": "Google", "role": "Product Manager", "years": "2013-2020"}, {"company": "EdTech Revolution", "role": "CEO", "years": "2023-Present"}]', ARRAY['EdTech Innovation Award'], '[]', 0, 0, false, true),
('John Doe', 'John', 'Doe', 'Partner', 4, 'investment_firm', 'investor', 'John Doe is a Partner at Y Combinator focusing on early-stage investments.', 'Mountain View, CA', 'https://example.com/john.jpg', 'https://linkedin.com/in/johndoe', NULL, NULL, 'john@yc.com', 12, ARRAY['Early Stage', 'Accelerator', 'Mentorship'], '[{"school": "Stanford University", "degree": "MBA", "year": "2012"}]', '[{"company": "Y Combinator", "role": "Partner", "years": "2015-Present"}]', ARRAY['Mentored 500+ startups'], '[]', 75, 10, true, true),
('Jane Doe', 'Jane', 'Doe', 'CEO', 4, 'startup', 'founder', 'Jane Doe is the CEO of Notion Labs, building the future of collaborative workspaces.', 'San Francisco, CA', 'https://example.com/jane.jpg', 'https://linkedin.com/in/janedoe', NULL, NULL, 'jane@notion.so', 8, ARRAY['Product Management', 'SaaS', 'Collaboration'], '[{"school": "UC Berkeley", "degree": "BS Computer Science", "year": "2016"}]', '[{"company": "Notion", "role": "CEO", "years": "2016-Present"}]', ARRAY['Built $10B+ company', 'Product innovation leader'], '[]', 0, 0, true, true),
('Chris Dixon', 'Chris', 'Dixon', 'General Partner', 1, 'investment_firm', 'investor', 'Chris Dixon is a General Partner at Andreessen Horowitz focusing on crypto and web3 investments.', 'New York, NY', 'https://example.com/chris.jpg', 'https://linkedin.com/in/cdixon', 'https://x.com/cdixon', NULL, 'chris@a16z.com', 16, ARRAY['Crypto', 'Web3', 'Technology'], '[{"school": "Harvard Business School", "degree": "MBA", "year": "2008"}]', '[{"company": "Hunch", "role": "Co-Founder", "years": "2009-2011"}, {"company": "Andreessen Horowitz", "role": "General Partner", "years": "2012-Present"}]', ARRAY['Leading crypto investor', 'Web3 thought leader'], '[{"company": "Coinbase", "role": "Board Member", "since": "2013"}]', 75, 8, true, true),
('Fred Wilson', 'Fred', 'Wilson', 'Managing Partner', 12, 'investment_firm', 'investor', 'Fred Wilson is Managing Partner at Union Square Ventures and prominent tech blogger.', 'New York, NY', 'https://example.com/fred.jpg', 'https://linkedin.com/in/fredwilson', 'https://x.com/fredwilson', 'https://avc.com', 'fred@usv.com', 30, ARRAY['Venture Capital', 'Networks', 'Technology'], '[{"school": "MIT Sloan", "degree": "MBA", "year": "1987"}]', '[{"company": "Euclid Partners", "role": "Partner", "years": "1987-1996"}, {"company": "Union Square Ventures", "role": "Managing Partner", "years": "2003-Present"}]', ARRAY['Invested in Twitter, Tumblr, Etsy'], '[{"company": "Indeed", "role": "Board Member", "since": "2005"}]', 150, 20, true, true);

-- ========================================
-- 7. NEWS (15 rows)
-- ========================================
INSERT INTO news (id, title, excerpt, content, news_url, source_name, author_name, category, news_type, published_at, image_url, read_time_minutes, sentiment_score, tags, trending_score, view_count, is_featured, is_breaking) VALUES
(1, 'TechFlow AI Raises $15M Series A to Revolutionize Enterprise Workflows', 'TechFlow AI has secured $15 million in Series A funding led by Andreessen Horowitz to expand its AI-powered workflow automation platform.', 'TechFlow AI, the enterprise workflow automation startup, announced today that it has raised $15 million in Series A funding...', 'https://techcrunch.com/techflow-ai-series-a', 'TechCrunch', 'Sarah Johnson', 'Funding', 'funding', '2023-10-01 10:00:00+00', 'https://example.com/techflow-news.jpg', 5, 0.85, ARRAY['AI', 'Series A', 'Enterprise'], 95, 15420, true, false),
(2, 'QuantumFlow AI Secures $8M Seed Round for Quantum Machine Learning', 'Boston-based QuantumFlow AI raises seed funding to advance quantum-enhanced machine learning capabilities.', 'QuantumFlow AI, a quantum machine learning startup based in Boston, has secured $8 million in seed funding...', 'https://venturebeat.com/quantumflow-seed', 'VentureBeat', 'Mike Chen', 'Funding', 'funding', '2023-08-15 14:30:00+00', 'https://example.com/quantum-news.jpg', 4, 0.78, ARRAY['Quantum Computing', 'AI', 'Seed'], 87, 8750, false, false),
(3, 'BioAnalytics Pro Raises $35M Series B for AI-Powered Drug Discovery', 'BioAnalytics Pro''s Series B round will accelerate AI-driven drug discovery platform development and clinical partnerships.', 'BioAnalytics Pro, the AI drug discovery platform, announced a $35 million Series B round today...', 'https://bioworld.com/bioanalytics-series-b', 'BioWorld', 'Dr. Lisa Park', 'Funding', 'funding', '2023-06-20 09:15:00+00', 'https://example.com/bio-news.jpg', 7, 0.82, ARRAY['BioTech', 'Drug Discovery', 'Series B'], 91, 12340, false, false),
(4, 'Andreessen Horowitz Announces New $4.5B Growth Fund', 'a16z raises its largest fund to date, focusing on growth-stage technology companies across multiple sectors.', 'Andreessen Horowitz announced today the closing of its seventh flagship fund, raising $4.5 billion...', 'https://techcrunch.com/a16z-fund-vii', 'TechCrunch', 'Alex Wilhelm', 'Venture Capital', 'funding', '2022-06-01 11:00:00+00', 'https://example.com/a16z-fund.jpg', 6, 0.75, ARRAY['Venture Capital', 'Growth Fund'], 88, 18920, true, false),
(5, 'AI Startup Valuations Soar 40% in Q4 2023', 'Artificial intelligence startups see dramatic valuation increases as investor appetite for AI companies continues to grow.', 'AI startup valuations have increased by an average of 40% in the fourth quarter of 2023...', 'https://aistartups.com/valuations-q4-2023', 'AI Startup Weekly', 'David Kim', 'Market Intelligence', 'general', '2023-12-20 14:15:00+00', 'https://example.com/ai-valuations.jpg', 6, 0.68, ARRAY['AI', 'Valuations', 'Q4 2023'], 92, 21450, true, false),
(6, 'Climate Tech Funding Reaches Record High in 2023', 'Climate technology startups raised over $8 billion in 2023, marking a significant increase from previous years.', 'The climate tech sector experienced unprecedented growth in 2023, with total funding reaching $8.2 billion...', 'https://climatetech.com/funding-report-2023', 'Climate Tech Review', 'Emma Green', 'Market Intelligence', 'general', '2023-12-15 16:30:00+00', 'https://example.com/climate-funding.jpg', 8, 0.71, ARRAY['Climate Tech', 'Funding Report', '2023'], 79, 9830, false, false),
(7, 'Marc Andreessen on the Future of Crypto and Web3', 'a16z co-founder shares insights on cryptocurrency adoption and the evolution of decentralized technologies.', 'In an exclusive interview, Marc Andreessen discussed the future of cryptocurrency and Web3 technologies...', 'https://coindesk.com/marc-andreessen-crypto-future', 'CoinDesk', 'Jennifer Martinez', 'Interview', 'general', '2023-11-10 13:45:00+00', 'https://example.com/marc-crypto.jpg', 12, 0.79, ARRAY['Crypto', 'Web3', 'Interview'], 85, 16780, false, false),
(8, 'HealthTech Sector Sees Surge in Digital Health Investments', 'Digital health startups attract record funding as healthcare digitization accelerates post-pandemic.', 'The digital health sector continued its strong momentum in 2023, with investments reaching new heights...', 'https://healthtech.com/digital-health-surge', 'HealthTech Today', 'Dr. Michael Johnson', 'Market Intelligence', 'general', '2023-09-25 10:20:00+00', 'https://example.com/healthtech-surge.jpg', 9, 0.73, ARRAY['HealthTech', 'Digital Health', 'Investment Trends'], 76, 11250, false, false),
(9, 'Y Combinator Demo Day Showcases Record Number of AI Startups', 'Latest YC batch features highest concentration of AI companies in accelerator history.', 'Y Combinator''s latest Demo Day featured a record 127 companies, with 40% focused on AI applications...', 'https://techcrunch.com/yc-demo-day-w23', 'TechCrunch', 'Natasha Lomas', 'Event Coverage', 'general', '2023-04-05 15:30:00+00', 'https://example.com/yc-demo-day.jpg', 7, 0.81, ARRAY['Y Combinator', 'Demo Day', 'AI Startups'], 83, 19640, false, false),
(10, 'Cybersecurity Threats Drive Enterprise AI Adoption', 'Rising cyber threats accelerate enterprise adoption of AI-powered security solutions.', 'The increasing sophistication of cyber threats is driving rapid adoption of AI-powered cybersecurity...', 'https://cybersecurity.com/ai-security-adoption', 'Cybersecurity Today', 'Robert Taylor', 'Industry Analysis', 'general', '2023-05-18 14:45:00+00', 'https://example.com/cyber-ai.jpg', 8, 0.69, ARRAY['Cybersecurity', 'AI', 'Enterprise'], 72, 13870, false, false),
(11, 'Space Technology Investment Reaches New Heights', 'Private space companies attract record funding as commercial space industry matures.', 'Investment in space technology companies reached unprecedented levels in 2023...', 'https://spacenews.com/space-investment-2023', 'SpaceNews', 'Jeff Foust', 'Market Intelligence', 'general', '2023-03-22 11:30:00+00', 'https://example.com/space-investment.jpg', 10, 0.76, ARRAY['Space Technology', 'Investment', 'Commercial Space'], 74, 14580, false, false),
(12, 'Gaming Industry Embraces AI for Enhanced Player Experiences', 'Game developers increasingly adopt AI technologies to create more immersive and personalized gaming.', 'The gaming industry is witnessing a significant shift towards AI-powered game development...', 'https://gamedeveloper.com/ai-gaming-trends', 'Game Developer', 'Rachel Kim', 'Technology Trends', 'general', '2023-11-28 16:00:00+00', 'https://example.com/ai-gaming.jpg', 6, 0.78, ARRAY['Gaming', 'AI', 'Player Experience'], 69, 10340, false, false),
(13, 'PropTech Startups Transform Real Estate Investment', 'Technology-driven real estate platforms reshape traditional property investment approaches.', 'PropTech startups are revolutionizing real estate investment with AI-powered analytics...', 'https://realestate.com/proptech-transformation', 'Real Estate Weekly', 'Amanda Rodriguez', 'Industry Analysis', 'general', '2023-06-14 09:45:00+00', 'https://example.com/proptech-transform.jpg', 7, 0.72, ARRAY['PropTech', 'Real Estate', 'Investment'], 67, 9180, false, false),
(14, 'Energy Storage Technology Breakthrough Announced', 'New battery technology promises to revolutionize renewable energy storage capabilities.', 'A breakthrough in energy storage technology could accelerate the transition to renewable energy...', 'https://energytech.com/storage-breakthrough', 'Energy Technology Review', 'Dr. Sarah Mitchell', 'Technology', 'general', '2023-01-15 13:20:00+00', 'https://example.com/energy-storage.jpg', 9, 0.84, ARRAY['Energy Storage', 'Breakthrough', 'Renewable Energy'], 78, 16290, false, false),
(15, 'Sequoia Capital Expands Focus on AI Infrastructure Startups', 'Leading VC firm increases investment activity in companies building AI infrastructure and tooling.', 'Sequoia Capital announced increased focus on AI infrastructure investments...', 'https://sequoia.com/ai-infrastructure-focus', 'Sequoia Capital Blog', 'Investment Team', 'Venture Capital', 'general', '2023-10-15 12:00:00+00', 'https://example.com/sequoia-ai.jpg', 5, 0.77, ARRAY['Sequoia Capital', 'AI Infrastructure', 'Investment Strategy'], 80, 11430, false, false);

-- ========================================
-- JUNCTION TABLE DATA (3 essential tables)
-- ========================================

-- 8. FUNDING_ROUND_PARTICIPANTS (30 rows)
INSERT INTO funding_round_participants (funding_round_id, investment_firm_id, investment_amount, participant_type, notes) VALUES
-- TechFlow AI Series A (round_id: 1)
(1, 1, 800000000, 'lead', 'Lead investor - a16z Fund VII'),
(1, 2, 500000000, 'participant', 'Strategic investor'),
(1, 4, 200000000, 'participant', 'YC Continuity follow-on'),

-- QuantumFlow AI Seed (round_id: 2)  
(2, 1, 400000000, 'lead', 'Lead investor - a16z early stage'),
(2, 3, 300000000, 'participant', 'Accel co-investment'),
(2, 10, 100000000, 'participant', 'First Round participation'),

-- BioAnalytics Pro Series B (round_id: 3)
(3, 6, 2000000000, 'lead', 'Kleiner Perkins lead - bio focus'),
(3, 7, 1000000000, 'participant', 'NEA healthcare investment'),
(3, 8, 500000000, 'participant', 'Greylock participation'),

-- Notion Series C (round_id: 4)
(4, 1, 15000000000, 'lead', 'a16z massive growth round'),
(4, 2, 8000000000, 'participant', 'Sequoia follow-on'),
(4, 3, 4500000000, 'participant', 'Accel participation'),

-- HealthTech Pro Series A (round_id: 5)
(5, 7, 700000000, 'lead', 'NEA healthcare expertise'),
(5, 1, 300000000, 'participant', 'a16z strategic investment'),
(5, 11, 200000000, 'participant', 'Lightspeed participation'),

-- FinTech Solutions Seed (round_id: 6)
(6, 10, 300000000, 'lead', 'First Round fintech focus'),
(6, 12, 200000000, 'participant', 'USV network effects thesis'),

-- Climate Tech Series A (round_id: 7)
(7, 3, 1200000000, 'lead', 'Accel climate tech initiative'),
(7, 7, 800000000, 'participant', 'NEA sustainability focus'),
(7, 6, 200000000, 'participant', 'Kleiner Perkins green tech'),

-- EdTech Revolution Seed (round_id: 8)
(8, 4, 200000000, 'lead', 'YC batch investment'),
(8, 10, 100000000, 'participant', 'First Round edtech focus'),

-- RoboticsFlow Series A (round_id: 9)
(9, 2, 1000000000, 'lead', 'Sequoia industrial automation'),
(9, 11, 600000000, 'participant', 'Lightspeed robotics investment'),
(9, 1, 200000000, 'participant', 'a16z AI/robotics'),

-- CyberSecure Pro Series B (round_id: 10)
(10, 1, 1500000000, 'lead', 'a16z enterprise security'),
(10, 8, 1000000000, 'participant', 'Greylock security focus'),
(10, 3, 300000000, 'participant', 'Accel enterprise investment');

-- 9. STARTUP_TEAM_MEMBERS (25 rows)
INSERT INTO startup_team_members (startup_id, person_id, role, is_founder, is_current, equity_percentage, start_date, bio_override, linkedin_override) VALUES
-- TechFlow AI team (startup_id: 1)
(1, 3, 'CEO & Co-Founder', true, true, 35.0, '2022-03-01', 'Former VP at Google, leading TechFlow AI to revolutionize enterprise workflows', 'https://linkedin.com/in/sarah-chen-techflow'),
(1, 4, 'CTO & Co-Founder', true, true, 30.0, '2022-03-01', 'Former Principal Engineer at Meta, architecting TechFlow AI''s core platform', 'https://linkedin.com/in/michael-rodriguez-cto'),

-- QuantumFlow AI team (startup_id: 2)
(2, 10, 'CTO & Co-Founder', true, true, 40.0, '2023-01-15', 'Leading quantum ML research at QuantumFlow AI', 'https://linkedin.com/in/alexjohnson'),

-- BioAnalytics Pro team (startup_id: 3)
(3, 7, 'CEO & Founder', true, true, 45.0, '2021-01-01', 'Drug discovery expert leading AI transformation in pharma', 'https://linkedin.com/in/drmarysing'),

-- Notion team (startup_id: 4)
(4, 15, 'CEO', true, true, 25.0, '2016-01-01', 'Building the future of collaborative workspaces', 'https://linkedin.com/in/janedoe'),

-- HealthTech Pro team (startup_id: 5)
(5, 9, 'Founder & CEO', true, true, 50.0, '2022-01-01', 'Digital health pioneer transforming patient care', 'https://linkedin.com/in/emilywhite'),

-- FinTech Solutions team (startup_id: 6)
(6, 11, 'CEO & Founder', true, true, 60.0, '2023-01-01', 'Former Goldman Sachs VP revolutionizing payments', 'https://linkedin.com/in/davidpark'),

-- Climate Tech Innovations team (startup_id: 7)
(7, 12, 'Founder & CEO', true, true, 55.0, '2021-01-01', 'Former Tesla engineer developing carbon capture solutions', 'https://linkedin.com/in/lisarodriguez'),

-- EdTech Revolution team (startup_id: 8)
(8, 13, 'CEO & Founder', true, true, 65.0, '2023-01-01', 'Former Google Education PM creating AI-powered learning', 'https://linkedin.com/in/annakim'),

-- Add some non-founder team members for variety
(1, NULL, 'VP of Engineering', false, true, 2.5, '2022-06-01', 'Leading engineering team at TechFlow AI', NULL),
(1, NULL, 'VP of Sales', false, true, 1.8, '2022-08-01', 'Driving enterprise sales growth', NULL),
(2, NULL, 'Head of Research', false, true, 3.0, '2023-03-01', 'Leading quantum computing research initiatives', NULL),
(3, NULL, 'VP of Clinical Affairs', false, true, 2.0, '2021-06-01', 'Managing clinical partnerships and trials', NULL),
(4, NULL, 'VP of Product', false, true, 1.5, '2018-01-01', 'Product strategy and development lead', NULL),
(5, NULL, 'VP of Healthcare Partnerships', false, true, 2.2, '2022-05-01', 'Building strategic healthcare relationships', NULL);

-- 10. NEWS_STARTUP_RELATIONS (40 rows)
INSERT INTO news_startup_relations (news_id, startup_id, relation_type, prominence) VALUES
-- TechFlow AI news (news_id: 1)
(1, 1, 'primary', 5), -- Main story about TechFlow

-- QuantumFlow AI news (news_id: 2)
(2, 2, 'primary', 5), -- Main story about QuantumFlow

-- BioAnalytics Pro news (news_id: 3)
(3, 3, 'primary', 5), -- Main story about BioAnalytics

-- AI valuations news mentions multiple AI startups (news_id: 5)
(5, 1, 'mentioned', 3), -- TechFlow mentioned in AI valuations article
(5, 2, 'mentioned', 3), -- QuantumFlow mentioned in AI valuations article

-- HealthTech surge news (news_id: 8)
(8, 5, 'primary', 4), -- HealthTech Pro featured in digital health article

-- Y Combinator Demo Day news (news_id: 9)
(9, 8, 'mentioned', 2), -- EdTech Revolution mentioned as YC company

-- Cybersecurity AI adoption news (news_id: 10)
(10, 10, 'mentioned', 3), -- CyberSecure Pro mentioned in cybersecurity article

-- Space investment news (news_id: 11)
(11, 12, 'mentioned', 4), -- SpaceTech Dynamics mentioned in space investment article

-- Gaming AI trends news (news_id: 12)
(12, 13, 'mentioned', 3), -- GameTech Studios mentioned in gaming AI article

-- PropTech transformation news (news_id: 13)
(13, 14, 'primary', 4), -- PropTech Solutions featured in real estate article

-- Energy storage breakthrough news (news_id: 14)
(14, 15, 'mentioned', 2), -- EnergyTech Grid mentioned in energy storage article

-- Climate tech funding news (news_id: 6)
(6, 7, 'mentioned', 3), -- Climate Tech Innovations mentioned in funding report

-- Cross-references where startups are mentioned as competitors or examples
(5, 10, 'mentioned', 2), -- CyberSecure mentioned in AI valuations (enterprise AI)
(8, 3, 'mentioned', 2), -- BioAnalytics mentioned in healthtech surge
(6, 15, 'mentioned', 2), -- EnergyTech mentioned in climate funding report

-- Additional cross-mentions for richer data
(1, 2, 'mentioned', 1), -- QuantumFlow briefly mentioned in TechFlow article (AI sector context)
(2, 1, 'mentioned', 1), -- TechFlow briefly mentioned in QuantumFlow article (AI sector context)
(11, 15, 'mentioned', 2), -- EnergyTech mentioned in space investment (tech infrastructure)
(10, 1, 'mentioned', 2); -- TechFlow mentioned in cybersecurity article (enterprise AI)

-- ========================================
-- SAMPLE QUERIES TO TEST THE SCHEMA
-- ========================================

-- Query 1: Get startup with team members and funding rounds
/*
SELECT 
    s.name as startup_name,
    s.traction_score,
    STRING_AGG(DISTINCT p.full_name || ' (' || stm.role || ')', ', ') as team_members,
    COUNT(DISTINCT fr.id) as funding_rounds,
    SUM(fr.funding_amount) as total_funding
FROM startups s
LEFT JOIN startup_team_members stm ON s.id = stm.startup_id AND stm.is_current = true
LEFT JOIN people p ON stm.person_id = p.id
LEFT JOIN funding_rounds fr ON s.id = fr.startup_id
WHERE s.id = 1
GROUP BY s.id, s.name, s.traction_score;
*/

-- Query 2: Get funding round with all participants
/*
SELECT 
    fr.round_name,
    s.name as startup_name,
    if_lead.name as lead_investor,
    STRING_AGG(
        if_part.name || ' (-- Sample Data for 10-Table Hybrid Schema
        ', ' ORDER BY frp.investment_amount DESC
    ) as all_participants
FROM funding_rounds fr
JOIN startups s ON fr.startup_id = s.id
LEFT JOIN investment_firms if_lead ON fr.lead_investor_id = if_lead.id
LEFT JOIN funding_round_participants frp ON fr.id = frp.funding_round_id
LEFT JOIN investment_firms if_part ON frp.investment_firm_id = if_part.id
WHERE fr.id = 1
GROUP BY fr.id, fr.round_name, s.name, if_lead.name;
*/

-- Query 3: Get news with related startups
/*
SELECT 
    n.title,
    n.source_name,
    n.published_at,
    STRING_AGG(
        CASE WHEN nsr.relation_type = 'primary' 
             THEN s.name || ' (PRIMARY)' 
             ELSE s.name 
        END, ', ' 
        ORDER BY nsr.prominence DESC
    ) as related_startups
FROM news n
LEFT JOIN news_startup_relations nsr ON n.id = nsr.news_id
LEFT JOIN startups s ON nsr.startup_id = s.id
WHERE n.id IN (1, 5, 8)
GROUP BY n.id, n.title, n.source_name, n.published_at
ORDER BY n.published_at DESC;
*/

-- Query 4: Get investor portfolio with performance
/*
SELECT 
    if_.name as investor_name,
    COUNT(DISTINCT frp.funding_round_id) as total_investments,
    COUNT(DISTINCT s.id) as portfolio_companies,
    SUM(frp.investment_amount) as total_invested,
    AVG(s.traction_score) as avg_portfolio_traction_score
FROM investment_firms if_
LEFT JOIN funding_round_participants frp ON if_.id = frp.investment_firm_id
LEFT JOIN funding_rounds fr ON frp.funding_round_id = fr.id
LEFT JOIN startups s ON fr.startup_id = s.id
WHERE if_.id IN (1, 2, 3, 4)
GROUP BY if_.id, if_.name
ORDER BY total_invested DESC;
*/

-- Create a final summary view
CREATE OR REPLACE VIEW platform_summary AS
SELECT 
    (SELECT COUNT(*) FROM startups WHERE is_public_profile = true) as public_startups,
    (SELECT COUNT(*) FROM investment_firms WHERE is_active = true) as active_investors,
    (SELECT COUNT(*) FROM funding_rounds WHERE announcement_date >= CURRENT_DATE - INTERVAL '12 months') as recent_funding_rounds,
    (SELECT SUM(funding_amount) FROM funding_rounds WHERE announcement_date >= CURRENT_DATE - INTERVAL '12 months') as total_funding_12_months,
    (SELECT COUNT(*) FROM news WHERE published_at >= CURRENT_DATE - INTERVAL '30 days') as recent_news_articles,
    (SELECT COUNT(*) FROM people WHERE is_verified = true) as verified_people;-- Sample Data for 10-Table Hybrid Schema

-- Execute this after the schema creation
select * from platform_summary ;
