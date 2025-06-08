import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Users, DollarSign, Search } from "lucide-react"

export default function BookmarksLoading() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col space-y-6">
        <div>
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-96 mt-2" />
        </div>

        <Tabs defaultValue="startups" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="startups" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span className="hidden sm:inline">Startups</span>
              <span className="inline sm:hidden">Startups</span>
            </TabsTrigger>
            <TabsTrigger value="investors" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Investors</span>
              <span className="inline sm:hidden">Investors</span>
            </TabsTrigger>
            <TabsTrigger value="funding" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Funding Rounds</span>
              <span className="inline sm:hidden">Funding</span>
            </TabsTrigger>
            <TabsTrigger value="searches" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Saved Searches</span>
              <span className="inline sm:hidden">Searches</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="startups" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i}>
                      <CardHeader className="pb-3">
                        <Skeleton className="h-6 w-36 mb-2" />
                        <Skeleton className="h-4 w-48" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full mb-4" />
                        <div className="flex justify-between items-center">
                          <Skeleton className="h-9 w-28" />
                          <Skeleton className="h-8 w-8 rounded-md" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
