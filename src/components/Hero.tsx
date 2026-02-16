import * as React from "react"

import { BadgeCheck } from "lucide-react"

import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { Code } from "@/components/typography/Code"
import { H1 } from "@/components/typography/H1"
import { Lead } from "@/components/typography/Lead"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

export function Hero({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <Section className="fade-bottom">
      <Container>
        <Badge variant="outline">
          <BadgeCheck data-icon="inline-start" /> Badge lorem ipsum sit dolor
        </Badge>
        <H1 className="text-7xl">Hero</H1>
        <Lead>Lead</Lead>
        <Code>@radix-ui/react-alert-dialog</Code>
        <HoverCard openDelay={10} closeDelay={100}>
          <HoverCardTrigger asChild>
            <AvatarGroup>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-64 flex-col gap-0.5">
            <div className="font-semibold">@nextjs</div>
            <div>The React Framework – created and maintained by @vercel.</div>
            <div className="text-muted-foreground mt-1 text-xs">
              Joined December 2021
            </div>
          </HoverCardContent>
        </HoverCard>

        <section className={cn("flex flex-1 flex-col", className)} {...props}>
          {children}
        </section>
      </Container>
    </Section>
  )
}
