"use client"

import Link from "next/link"

import { PlusIcon } from "lucide-react"

import { GitHub } from "@/components/GitHub"
import { LayoutToggle } from "@/components/LayoutToggle"
import Logo from "@/components/Logo"
import { ModeToggle } from "@/components/ModeToggle"
import { Navigation } from "@/components/Navigation"
import { SearchButton } from "@/components/SearchButton"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLayoutStore } from "@/store/layoutStore"

export function Header({
  className,
  ...props
}: React.ComponentProps<"header">) {
  const containerEnabled = useLayoutStore((state) => state.containerEnabled)

  return (
    <header className={cn("sticky top-0 z-50 w-full", className)} {...props}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div
        className={`relative px-6 ${
          containerEnabled ? "container mx-auto" : ""
        }`}
      >
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center justify-start gap-2">
            <Link href="/">
              <Logo className="h-6 w-6" />
            </Link>
            <Navigation />
          </div>
          <div className="flex items-center justify-end gap-2">
            <SearchButton size="sm" />
            <GitHub />
            <LayoutToggle />
            <ModeToggle />
            <Button size="sm" className="cursor-pointer">
              <PlusIcon />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
