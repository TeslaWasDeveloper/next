"use client"

import { useEffect, useState } from "react"

type Heading = {
  id: string
  text: string
  level: number
}

export function useTableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const container = document.getElementById("main-content")
    if (!container) return

    const elements = Array.from(
      container.querySelectorAll("h2, h3"),
    ) as HTMLHeadingElement[]

    const mapped = elements.map((el) => {
      if (!el.id) {
        el.id = el
          .textContent!.toLowerCase()
          // Normalize accented characters (e.g. "ě" -> "e")
          .normalize("NFD")
          // Remove diacritic marks created by normalization
          .replace(/[\u0300-\u036f]/g, "")
          // Replace spaces with dashes
          .replace(/\s+/g, "-")
          // Remove all non-word characters except dashes
          .replace(/[^\w-]+/g, "")
      }

      return {
        id: el.id,
        text: el.textContent || "",
        level: Number(el.tagName.replace("H", "")),
      }
    })

    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setHeadings(mapped))
    } else {
      setTimeout(() => setHeadings(mapped), 0)
    }
  }, [])

  return headings
}
