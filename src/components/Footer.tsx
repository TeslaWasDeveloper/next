import Link from "next/link"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/site.config"

interface FooterLink {
  text: string
  href: string
}

interface FooterProps {
  name?: string
  copyright?: string
  policies?: FooterLink[]
  className?: string
}

export function Footer({
  copyright = `© ${new Date().getFullYear()} ${siteConfig.author.name}. All rights reserved.`,
  policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("w-full px-6", className)}>
      <div className="container mx-auto border-t px-6">
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 py-4 text-xs sm:flex-row">
          <p>{copyright}</p>
          <div className="flex items-center gap-3">
            {policies.map((policy, index) => (
              <Link key={index} href={policy.href}>
                {policy.text}
              </Link>
            ))}
            <button
              type="button"
              className="cursor-pointer"
              data-cc="show-preferencesModal"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
