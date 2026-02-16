import * as React from "react"

import { cn } from "@/lib/utils"

export function Lead({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)} {...props}>
      {children}
    </p>
  )
}
