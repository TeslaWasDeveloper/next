import * as React from "react"

import { cn } from "@/lib/utils"

export function MainLayout({
  className,
  children,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main className={cn("flex flex-1 flex-col", className)} {...props}>
      {children}
    </main>
  )
}
