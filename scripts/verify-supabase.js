// Verify Supabase connection
console.log("🔍 Verifying Supabase connection...\n")

// Check environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log("📋 Environment Variables Check:")
console.log(`NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? "✅ Set" : "❌ Missing"}`)
console.log(`NEXT_PUBLIC_SUPABASE_ANON_KEY: ${supabaseKey ? "✅ Set" : "❌ Missing"}\n`)

if (!supabaseUrl || !supabaseKey) {
  console.log("❌ Missing required environment variables. Please set:")
  console.log("- NEXT_PUBLIC_SUPABASE_URL")
  console.log("- NEXT_PUBLIC_SUPABASE_ANON_KEY")
  process.exit(1)
}

// Test connection
async function testConnection() {
  try {
    console.log("🔌 Testing Supabase connection...")

    // Create a simple fetch request to test the connection
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      console.log("✅ Supabase connection successful!")
      console.log(`📍 Connected to: ${supabaseUrl}`)
      console.log(`🔑 Using API key: ${supabaseKey.substring(0, 20)}...`)

      // Try to get basic info
      const healthResponse = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      })

      if (healthResponse.ok) {
        console.log("🏥 Database health check: ✅ Healthy")
      }
    } else {
      console.log("❌ Connection failed")
      console.log(`Status: ${response.status} ${response.statusText}`)

      if (response.status === 401) {
        console.log("🔐 Authentication failed - check your API key")
      } else if (response.status === 404) {
        console.log("🔍 URL not found - check your Supabase URL")
      }
    }
  } catch (error) {
    console.log("❌ Connection test failed:")
    console.log(error.message)

    if (error.message.includes("fetch")) {
      console.log("💡 This might be a network connectivity issue")
    }
  }
}

// Run the test
testConnection()
