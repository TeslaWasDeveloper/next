import { Faq } from "@/components/Faq"
import { Hero } from "@/components/Hero"

export default function Homepage() {
  return (
    <div>
      <Hero />
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
    </div>
  )
}
