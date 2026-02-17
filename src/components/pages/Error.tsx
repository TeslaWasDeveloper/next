import Link from "next/link"

import { TriangleAlertIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function ErrorPageContent({ reset }: { reset: () => void }) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TriangleAlertIcon />
        </EmptyMedia>
        <EmptyTitle>Oops! Something went wrong</EmptyTitle>
        <EmptyDescription>
          There was an unexpected error while loading this page. You can try to
          reload or go back to safety.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button className="cursor-pointer" onClick={reset}>
          Retry
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </EmptyContent>
    </Empty>
  )
}
