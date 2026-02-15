import { AlignHorizontalSpaceAroundIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useLayoutStore } from "@/store/layoutStore"

export function LayoutToggle() {
  const toggleContainer = useLayoutStore((state) => state.toggleContainer)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:inline-flex"
          onClick={toggleContainer}
        >
          <AlignHorizontalSpaceAroundIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Layout</p>
      </TooltipContent>
    </Tooltip>
  )
}
