import * as React from "react"

import { cn } from "@/lib/utils"

export function LayoutLines({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "pointer-events-none fixed inset-0 top-0 hidden sm:block",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto flex h-full flex-col border-x border-dashed"></div>
    </section>
  )
}
