import { BadgeCheck } from "lucide-react"

import { Faq } from "@/components/Faq"
import { Badge } from "@/components/ui/badge"

export default function FrontPage() {
  return (
    <>
      <section className="fade-bottom px-6 py-12 sm:py-24 md:py-32">
        <div className="container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <Badge variant="outline">
            {" "}
            <BadgeCheck data-icon="inline-start" /> Badge lorem ipsum sit dolor
          </Badge>
          <h1 className="max-w-[560px] text-center text-4xl leading-tight font-semibold sm:text-6xl sm:leading-tight md:text-8xl">
            Hero
          </h1>
        </div>
      </section>

      <section className="border-y px-6 py-12 sm:py-24 md:py-32">
        <div className="container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            <h1 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              Tanstack Query
            </h1>
            <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
              This demo shows how to manage and update state with Zustand.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-24 md:py-32">
        <div className="container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            <h1 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              React Hook Form + Zod
            </h1>
            <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
              This demo shows how to manage and update state with Zustand.
            </p>
          </div>
        </div>
      </section>

      <Faq />
    </>
  )
}
