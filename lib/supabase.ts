import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test connection function
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("_supabase_migrations").select("*").limit(1)

    if (error && error.code !== "PGRST116") {
      // PGRST116 is "relation does not exist" which is fine for testing
      throw error
    }

    return {
      success: true,
      message: "Supabase connection successful",
      url: supabaseUrl,
    }
  } catch (error) {
    return {
      success: false,
      message: `Connection failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      url: supabaseUrl,
    }
  }
}
