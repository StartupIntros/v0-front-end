import { SupabaseStatus } from "@/components/supabase-status"

export default function TestSupabasePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Supabase Connection Test</h1>
          <p className="text-muted-foreground mt-2">Check if your Supabase database connection is working properly</p>
        </div>

        <div className="flex justify-center">
          <SupabaseStatus />
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Environment Variables Check:</h3>
          <div className="space-y-1 text-sm">
            <div>
              <strong>NEXT_PUBLIC_SUPABASE_URL:</strong>{" "}
              {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing"}
            </div>
            <div>
              <strong>NEXT_PUBLIC_SUPABASE_ANON_KEY:</strong>{" "}
              {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
