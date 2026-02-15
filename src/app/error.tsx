"use client"

import { ErrorPageContent } from "@/components/pages/Error"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  if (process.env.NODE_ENV === "development") {
    console.error(error)
  }

  return <ErrorPageContent reset={reset} />
}
