import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { cn } from "@/lib/utils"
import { useCommandStore } from "@/store/commandStore"

interface SearchInputProps {
  text?: string
  size?: "default" | "xs" | "sm" | "lg"
  forceVisible?: boolean
}

export function SearchButton({
  text = "Search...",
  size = "default",
  forceVisible = false,
}: SearchInputProps) {
  const setOpen = useCommandStore((state) => state.setOpen)

  return (
    <Button
      variant="outline"
      size={size}
      className={cn(
        "justify-between sm:inline-flex sm:w-48 lg:w-56 xl:w-64",
        forceVisible ? "inline-flex" : "hidden",
      )}
      onClick={() => setOpen(true)}
    >
      <div className="text-muted-foreground flex items-center gap-2 text-sm font-normal">
        <SearchIcon /> {text}
      </div>
      <Kbd>/</Kbd>
    </Button>
  )
}
