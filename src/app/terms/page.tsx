import type { Metadata } from "next"

import { TermsPageContent } from "@/components/pages/Terms"
import { siteConfig } from "@/site.config"

export const generateMetadata = (): Metadata => ({
  title: `${siteConfig.name} | Terms of Service`,
  description: "Our privacy policy description",
})

export default function TermsPage() {
  return <TermsPageContent />
}
