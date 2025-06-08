"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <Skeleton className="w-20 h-20 rounded-lg bg-gray-200" />
          <div>
            <Skeleton className="h-10 w-64 mb-2 bg-gray-200" />
            <Skeleton className="h-6 w-96 bg-gray-200" />
            <div className="flex gap-2 mt-2">
              <Skeleton className="h-6 w-24 rounded-full bg-gray-200" />
              <Skeleton className="h-6 w-24 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-32 rounded-md bg-gray-200" />
          <Skeleton className="h-10 w-24 rounded-md bg-gray-200" />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-48 bg-gray-200" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full bg-gray-200" />
          <Skeleton className="h-4 w-5/6 bg-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton className="h-4 w-40 bg-gray-200" />
            <Skeleton className="h-4 w-40 bg-gray-200" />
            <Skeleton className="h-4 w-40 bg-gray-200" />
            <Skeleton className="h-4 w-40 bg-gray-200" />
            <Skeleton className="h-4 w-40 bg-gray-200" />
            <Skeleton className="h-4 w-40 bg-gray-200" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-48 bg-gray-200" />
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-6 w-32 bg-gray-200" />
              <Skeleton className="h-4 w-24 bg-gray-200" />
              <Skeleton className="h-4 w-full bg-gray-200" />
              <Skeleton className="h-4 w-5/6 bg-gray-200" />
              <Skeleton className="h-4 w-32 bg-gray-200" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-48 bg-gray-200" />
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1">
              <Skeleton className="h-6 w-40 bg-gray-200" />
              <Skeleton className="h-8 w-24 bg-gray-200" />
              <Skeleton className="h-4 w-32 bg-gray-200" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-48 bg-gray-200" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-48 bg-gray-200" />
          <Skeleton className="h-40 w-full bg-gray-200" />
          <Skeleton className="h-4 w-48 bg-gray-200" />
        </CardContent>
      </Card>
    </div>
  )
}
