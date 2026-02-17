"use client"

import { useTableOfContents } from "@/hooks/useTableOfContents"
import { cn } from "@/lib/utils"

export function TableOfContents({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  const headings = useTableOfContents()

  if (!headings.length) return null

  return (
    <aside
      className={cn("fixed top-24 right-0 w-64 space-y-4", className)}
      {...props}
    >
      <p className="text-muted-foreground text-xs font-medium">On This Page</p>

      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "hover:text-foreground text-muted-foreground block text-xs transition-colors",
              heading.level === 3 && "pl-4",
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}
