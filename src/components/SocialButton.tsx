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

export function SocialButton({ href }: { href: string }) {
  const socialMap: Record<string, { icon: React.ReactNode; label: string }> = {
    "discord.com": { icon: <SiDiscord />, label: "Discord" },
    "facebook.com": { icon: <SiFacebook />, label: "Facebook" },
    "github.com": { icon: <SiGithub />, label: "GitHub" },
    "instagram.com": { icon: <SiInstagram />, label: "Instagram" },
    "linkedin.com": { icon: <SiLinkedin />, label: "LinkedIn" },
    "messenger.com": { icon: <SiMessenger />, label: "Messenger" },
    "threads.com": { icon: <SiThreads />, label: "Threads" },
    "tiktok.com": { icon: <SiTiktok />, label: "TikTok" },
    "twitter.com": { icon: <SiX />, label: "Twitter" },
    "whatsapp.com": { icon: <SiWhatsapp />, label: "WhatsApp" },
    "youtube.com": { icon: <SiYoutube />, label: "YouTube" },
  }

  const domain = href.replace(/^https?:\/\//, "").split("/")[0]

  const social = socialMap[domain]

  if (!social) return null

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild variant="ghost" size="icon">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{social.label}</p>
      </TooltipContent>
    </Tooltip>
  )
}
