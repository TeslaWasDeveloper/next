import type { Metadata } from "next"

import { TermsPageContent } from "@/components/pages/Terms"

export const generateMetadata = (): Metadata => ({
  title: `Terms of Service`,
  description: "Our terms of service description",
})

export default function TermsPage() {
  return <TermsPageContent />
}
