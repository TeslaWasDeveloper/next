import * as React from "react"

import { cn } from "@/lib/utils"

export function Paragraph({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("leading-7 not-first:mt-6", className)} {...props}>
      {children}
    </p>
  )
}
