import type { Metadata } from "next"

import { PrivacyPageContent } from "@/components/pages/Privacy"

export const generateMetadata = (): Metadata => ({
  title: `Privacy Policy`,
  description: "Our privacy policy description",
})

export default function PrivacyPage() {
  return <PrivacyPageContent />
}
