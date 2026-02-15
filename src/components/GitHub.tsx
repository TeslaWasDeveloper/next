import GithubLogo from "@/components/GitHubLogo"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function GitHub() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo />
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>GitHub</p>
      </TooltipContent>
    </Tooltip>
  )
}
