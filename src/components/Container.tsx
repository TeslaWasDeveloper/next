import * as React from "react"

import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "container mx-auto flex flex-col items-center gap-6 px-6 sm:gap-20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
