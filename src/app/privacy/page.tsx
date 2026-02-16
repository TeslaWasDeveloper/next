import type { Metadata } from "next"

import { PrivacyPageContent } from "@/components/pages/Privacy"
import { siteConfig } from "@/site.config"

export const generateMetadata = (): Metadata => ({
  title: `${siteConfig.name} | Privacy Policy`,
  description: "Our privacy policy description",
})

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
