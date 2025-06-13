-- ========================================
-- COMPLETE CLEANUP SCRIPT FOR SUPABASE
-- ========================================
-- WARNING: This will delete ALL data and tables!
-- Run this if you want to start completely fresh

-- ========================================
-- 1. DROP ALL POLICIES FIRST
-- ========================================
-- Drop RLS policies before dropping tables
DROP POLICY IF EXISTS "Public startups are viewable by everyone" ON startups;
DROP POLICY IF EXISTS "Users can view their own startups" ON startups;
DROP POLICY IF EXISTS "Funding rounds viewable for public startups" ON funding_rounds;
DROP POLICY IF EXISTS "Public people profiles are viewable" ON people;
DROP POLICY IF EXISTS "investment_firms_public" ON investment_firms;
DROP POLICY IF EXISTS "verified_users_only" ON startups;

-- ========================================
-- 2. DROP ALL FUNCTIONS
-- ========================================
DROP FUNCTION IF EXISTS get_startup_with_team(BIGINT);
DROP FUNCTION IF EXISTS get_funding_round_participants(BIGINT);

-- ========================================
-- 3. DROP ALL VIEWS
-- ========================================
DROP VIEW IF EXISTS startup_funding_summary;
DROP VIEW IF EXISTS investor_portfolio_summary;
DROP VIEW IF EXISTS news_with_startups;
DROP VIEW IF EXISTS news_with_relations;
DROP VIEW IF EXISTS platform_summary;

-- ========================================
-- 4. DROP ALL INDEXES (if they exist independently)
-- ========================================
-- Note: Most indexes will be dropped automatically with tables
-- But if you created any custom indexes, add them here
-- DROP INDEX IF EXISTS custom_index_name;

-- ========================================
-- 5. DROP JUNCTION TABLES FIRST (to avoid foreign key constraints)
-- ========================================
-- Drop junction tables first due to foreign key dependencies
DROP TABLE IF EXISTS news_startup_relations CASCADE;
DROP TABLE IF EXISTS startup_team_members CASCADE;
DROP TABLE IF EXISTS funding_round_participants CASCADE;

-- If you used the full junction approach, also drop these:
DROP TABLE IF EXISTS news_firm_relations CASCADE;
DROP TABLE IF EXISTS news_people_relations CASCADE;
DROP TABLE IF EXISTS firm_team_members CASCADE;
DROP TABLE IF EXISTS firm_focus_industries CASCADE;
DROP TABLE IF EXISTS firm_investment_stages CASCADE;
DROP TABLE IF EXISTS firm_geographic_focus CASCADE;
DROP TABLE IF EXISTS fund_focus_areas CASCADE;
DROP TABLE IF EXISTS funding_round_use_of_funds CASCADE;
DROP TABLE IF EXISTS news_tags CASCADE;
DROP TABLE IF EXISTS startup_metrics CASCADE;
DROP TABLE IF EXISTS startup_materials CASCADE;

-- ========================================
-- 6. DROP CORE TABLES (in dependency order)
-- ========================================
-- Drop tables in reverse dependency order to avoid foreign key errors

-- Tables that reference other tables
DROP TABLE IF EXISTS funding_rounds CASCADE;
DROP TABLE IF EXISTS people CASCADE;
DROP TABLE IF EXISTS investment_funds CASCADE;

-- Tables that are referenced by others
DROP TABLE IF EXISTS news CASCADE;
DROP TABLE IF EXISTS startups CASCADE;
DROP TABLE IF EXISTS investment_firms CASCADE;

-- User table last (if you want to keep Supabase auth, don't drop this)
-- DROP TABLE IF EXISTS users CASCADE;

-- ========================================
-- 7. DROP ANY CUSTOM TYPES/ENUMS
-- ========================================
-- If you created any custom types, drop them here
-- DROP TYPE IF EXISTS investment_stage_enum CASCADE;
-- DROP TYPE IF EXISTS firm_type_enum CASCADE;

-- ========================================
-- 8. RESET SEQUENCES (if needed)
-- ========================================
-- This resets auto-increment counters to 1
-- Only run if you want IDs to start from 1 again

-- Reset sequences for BIGSERIAL columns
SELECT setval(pg_get_serial_sequence('investment_firms', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('investment_funds', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('startups', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('funding_rounds', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('people', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('news', 'id'), 1, false);

-- Reset junction table sequences too
SELECT setval(pg_get_serial_sequence('funding_round_participants', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('startup_team_members', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('news_startup_relations', 'id'), 1, false);

-- ========================================
-- 9. CLEAR SUPABASE STORAGE (if you used file uploads)
-- ========================================
-- If you stored files in Supabase Storage, you might want to clean those too
-- This requires using the Supabase dashboard or API calls, not SQL

-- ========================================
-- 10. VERIFICATION QUERIES
-- ========================================
-- Run these to verify everything is cleaned up

-- Check remaining tables (should be mostly empty or system tables)
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE'
ORDER BY table_name;

-- Check remaining views
SELECT table_name 
FROM information_schema.views 
WHERE table_schema = 'public'
ORDER BY table_name;

-- Check remaining functions
SELECT routine_name 
FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_type = 'FUNCTION'
ORDER BY routine_name;

-- Check remaining policies
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- ========================================
-- 11. ALTERNATIVE: SCHEMA-SPECIFIC CLEANUP
-- ========================================
-- If you want to be extra thorough, you can drop the entire public schema
-- WARNING: This will delete EVERYTHING in your database!

-- Uncomment the lines below ONLY if you want to nuke everything:
-- DROP SCHEMA public CASCADE;
-- CREATE SCHEMA public;
-- GRANT ALL ON SCHEMA public TO postgres;
-- GRANT ALL ON SCHEMA public TO public;

-- ========================================
-- 12. KEEP SUPABASE AUTH TABLES
-- ========================================
-- Important: Don't touch these Supabase system tables:
-- - auth.users
-- - auth.sessions  
-- - auth.refresh_tokens
-- - storage.objects
-- - storage.buckets
-- These are managed by Supabase automatically

-- ========================================
-- USAGE INSTRUCTIONS:
-- ========================================
-- 1. Copy this entire script
-- 2. Go to Supabase Dashboard → SQL Editor
-- 3. Paste the script
-- 4. Review what you're about to delete
-- 5. Click "Run" to execute
-- 6. Verify cleanup with the verification queries
-- 7. Now you can run the fresh schema creation script

-- ========================================
-- ALTERNATIVE: STEP-BY-STEP CLEANUP
-- ========================================
-- If you prefer to clean up piece by piece, uncomment sections as needed:

/*
-- Just clean up junction tables:
DROP TABLE IF EXISTS news_startup_relations CASCADE;
DROP TABLE IF EXISTS startup_team_members CASCADE; 
DROP TABLE IF EXISTS funding_round_participants CASCADE;

-- Just clean up sample data (keeps structure):
TRUNCATE TABLE news_startup_relations RESTART IDENTITY CASCADE;
TRUNCATE TABLE startup_team_members RESTART IDENTITY CASCADE;
TRUNCATE TABLE funding_round_participants RESTART IDENTITY CASCADE;
TRUNCATE TABLE news RESTART IDENTITY CASCADE;
TRUNCATE TABLE funding_rounds RESTART IDENTITY CASCADE;
TRUNCATE TABLE people RESTART IDENTITY CASCADE;
TRUNCATE TABLE startups RESTART IDENTITY CASCADE;
TRUNCATE TABLE investment_funds RESTART IDENTITY CASCADE;
TRUNCATE TABLE investment_firms RESTART IDENTITY CASCADE;

-- Just clean up views and functions:
DROP VIEW IF EXISTS startup_funding_summary;
DROP VIEW IF EXISTS investor_portfolio_summary;
DROP FUNCTION IF EXISTS get_startup_with_team(BIGINT);
*/

-- ========================================
-- FINAL NOTE
-- ========================================
-- After running this cleanup script, you'll have a completely clean database
-- You can then run the 10-table schema creation script to start fresh
-- Make sure to also update any application connections/configs if needed