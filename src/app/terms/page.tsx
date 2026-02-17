import type { Metadata } from "next"

import { TermsPageContent } from "@/components/pages/Terms"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy description.",
}

export default function TermsPage() {
  return <TermsPageContent />
}
