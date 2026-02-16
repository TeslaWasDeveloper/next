import * as React from "react"

import { cn } from "@/lib/utils"

export function Small({
  className,
  children,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      className={cn("text-sm leading-none font-medium", className)}
      {...props}
    >
      {children}
    </small>
  )
}
