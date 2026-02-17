import {
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMessenger,
  SiThreads,
  SiTiktok,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type SocialConfig = {
  icon: React.ReactNode
  label: string
}

const SOCIAL_MAP: Record<string, SocialConfig> = {
  "discord.com": { icon: <SiDiscord />, label: "Discord" },
  "facebook.com": { icon: <SiFacebook />, label: "Facebook" },
  "github.com": { icon: <SiGithub />, label: "GitHub" },
  "instagram.com": { icon: <SiInstagram />, label: "Instagram" },
  "linkedin.com": { icon: <SiLinkedin />, label: "LinkedIn" },
  "messenger.com": { icon: <SiMessenger />, label: "Messenger" },
  "threads.com": { icon: <SiThreads />, label: "Threads" },
  "tiktok.com": { icon: <SiTiktok />, label: "TikTok" },
  "twitter.com": { icon: <SiX />, label: "X" },
  "whatsapp.com": { icon: <SiWhatsapp />, label: "WhatsApp" },
  "youtube.com": { icon: <SiYoutube />, label: "YouTube" },
}

function getDomainKey(href: string): string | null {
  try {
    const normalized = href.startsWith("http") ? href : `https://${href}`

    const hostname = new URL(normalized).hostname.replace(/^www\./, "")

    return (
      Object.keys(SOCIAL_MAP).find((domain) => hostname.endsWith(domain)) ??
      null
    )
  } catch {
    return null
  }
}

export function SocialButton({ href }: { href: string }) {
  const domainKey = getDomainKey(href)
  if (!domainKey) return null

  const { icon, label } = SOCIAL_MAP[domainKey]

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild variant="ghost" size="icon">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}
