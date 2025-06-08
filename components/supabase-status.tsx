"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { testSupabaseConnection } from "@/lib/supabase"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export function SupabaseStatus() {
  const [status, setStatus] = useState<{
    success: boolean
    message: string
    url: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const checkConnection = async () => {
    setIsLoading(true)
    try {
      const result = await testSupabaseConnection()
      setStatus(result)
    } catch (error) {
      setStatus({
        success: false,
        message: `Test failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || "Not configured",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkConnection()
  }, [])

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Supabase Connection Status
          {status &&
            (status.success ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            ))}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Testing connection...</span>
          </div>
        ) : status ? (
          <>
            <Badge variant={status.success ? "default" : "destructive"}>
              {status.success ? "Connected" : "Failed"}
            </Badge>
            <p className="text-sm text-muted-foreground">{status.message}</p>
            <div className="text-xs text-muted-foreground">
              <strong>URL:</strong> {status.url}
            </div>
          </>
        ) : null}

        <Button onClick={checkConnection} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Testing...
            </>
          ) : (
            "Test Connection"
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
