"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

import {
  CalculatorIcon,
  CalendarIcon,
  ClipboardPasteIcon,
  CodeIcon,
  CopyIcon,
  FileTextIcon,
  FolderPlusIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  ScissorsIcon,
  TrashIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useCommandStore } from "@/store/commandStore"

export function SearchCommand() {
  const open = useCommandStore((state) => state.open)
  const setOpen = useCommandStore((state) => state.setOpen)
  const router = useRouter()

  // Open command menu with "/" key
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault()
        setOpen(true)
      }
    }

    window.addEventListener("keydown", down)
    return () => window.removeEventListener("keydown", down)
  }, [setOpen])

  return (
    <div className="flex flex-col gap-4">
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem
                onSelect={() => {
                  router.push("/")
                  setOpen(false)
                }}
              >
                <HomeIcon />
                <span>Home</span>
                <CommandShortcut>⌘H</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <InboxIcon />
                <span>Inbox</span>
                <CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  router.push("/privacy")
                  setOpen(false)
                }}
              >
                <FileTextIcon />
                <span>Privacy Policy</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  router.push("/terms")
                  setOpen(false)
                }}
              >
                <FileTextIcon />
                <span>Folders</span>
                <CommandShortcut>⌘F</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>
                <PlusIcon />
                <span>New File</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FolderPlusIcon />
                <span>New Folder</span>
                <CommandShortcut>⇧⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CopyIcon />
                <span>Copy</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ScissorsIcon />
                <span>Cut</span>
                <CommandShortcut>⌘X</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ClipboardPasteIcon />
                <span>Paste</span>
                <CommandShortcut>⌘V</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <TrashIcon />
                <span>Delete</span>
                <CommandShortcut>⌫</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="View">
              <CommandItem>
                <LayoutGridIcon />
                <span>Grid View</span>
              </CommandItem>
              <CommandItem>
                <ListIcon />
                <span>List View</span>
              </CommandItem>
              <CommandItem>
                <ZoomInIcon />
                <span>Zoom In</span>
                <CommandShortcut>⌘+</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ZoomOutIcon />
                <span>Zoom Out</span>
                <CommandShortcut>⌘-</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Social Media">
              <CommandItem
                onSelect={() => {
                  window.open("https://github.com", "_blank")
                  setOpen(false)
                }}
              >
                <CalculatorIcon />
                <span>GitHub</span>
              </CommandItem>
              <CommandItem>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <ImageIcon />
                <span>Image Editor</span>
              </CommandItem>
              <CommandItem>
                <CodeIcon />
                <span>Code Editor</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
