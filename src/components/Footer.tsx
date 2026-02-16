import Link from "next/link"

import { Container } from "@/components/Container"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/site.config"

const copyright = `© ${new Date().getFullYear()} ${siteConfig.author.name}. All rights reserved.`

const policies: { text: string; href: string }[] = [
  { text: "Privacy Policy", href: "/privacy" },
  { text: "Terms of Service", href: "/terms" },
]

export function Footer({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer className={cn("w-full px-6", className)} {...props}>
      <Container className="border-t">
        <div className="text-muted-foreground flex w-full flex-col items-center justify-between gap-4 py-4 text-xs sm:flex-row">
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
      </Container>
    </footer>
  )
}
