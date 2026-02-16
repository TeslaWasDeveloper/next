import * as React from "react"

import { cn } from "@/lib/utils"

export function Large({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </p>
  )
}
