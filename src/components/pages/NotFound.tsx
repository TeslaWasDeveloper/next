import Link from "next/link"

import { SearchButton } from "@/components/SearchButton"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

export function NotFoundPageContent() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <SearchButton text="Try searching for pages..." forceVisible />
        <EmptyDescription>
          Lost? <Link href="/">Back to Homepage</Link>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
