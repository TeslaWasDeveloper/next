import * as React from "react"

import { cn } from "@/lib/utils"

export function List({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  )
}

export function ListItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={cn(className)} {...props} />
}
