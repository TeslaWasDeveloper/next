"use client"

import { ReactNode, useEffect, useState } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [DevTools, setDevTools] = useState<React.ComponentType<{
    initialIsOpen?: boolean
  }> | null>(null)

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@tanstack/react-query-devtools").then((mod) => {
        setDevTools(() => mod.ReactQueryDevtools)
      })
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {DevTools && <DevTools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
