import type { Metadata } from "next"

import { Faq } from "@/components/Faq"
import { Hero } from "@/components/Hero"
import { siteConfig } from "@/site.config"

export const generateMetadata = (): Metadata => ({
  title: `${siteConfig.name} | Home`,
  description: siteConfig.description,
  keywords: [
    "Landing page template",
    "Components",
    "Shadcn",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
  ],
  authors: [
    {
      name: "Mikolaj Dobrucki",
      url: "https://mikolajdobrucki.com",
    },
  ],
  creator: "mikolajdobrucki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: `Home - ${siteConfig.name}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Home`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@mikolajdobrucki",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
})

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
