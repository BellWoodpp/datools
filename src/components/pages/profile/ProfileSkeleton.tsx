import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-2">
          <Skeleton className="h-9 w-56" />
          <Skeleton className="h-5 w-[28rem] max-w-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-24" />
              </CardTitle>
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-4 w-64 max-w-full" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </div>
                <Skeleton className="h-4 w-32" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-24" />
              </CardTitle>
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <Skeleton className="h-4 w-40 max-w-[60%]" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex gap-4">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  )
}

