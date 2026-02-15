import * as React from "react"

import { cn } from "@/lib/utils"

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("px-6 py-12 sm:py-24 md:py-32", className)}
      {...props}
    ></section>
  )
}
