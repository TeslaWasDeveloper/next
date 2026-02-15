import type { Metadata } from "next"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { BreadcrumbInit } from "@/components/Breadcrumb"
import { SearchCommand } from "@/components/Command"
import QueryProvider from "@/components/contexts/QueryProvider"
import { ThemeProvider } from "@/components/contexts/ThemeProvider"
import { CookieConsentInit } from "@/components/CookieConsent"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { LayoutLines } from "@/components/LayoutLines"
import { MainLayout } from "@/components/MainLayout"
import { TooltipProvider } from "@/components/ui/tooltip"
import SelfXSSWarning from "@/components/utils/SelfXSSWarning"
import { inter } from "@/lib/fonts"
import { siteConfig } from "@/site.config"

import "@/app/globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
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
    title: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@mikolajdobrucki",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      id="next"
      lang="en"
      dir="ltr"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider>
              <LayoutLines />
              <Header />
              <MainLayout>
                <BreadcrumbInit />
                {children}
              </MainLayout>
              <Footer />
              <SearchCommand />
              <CookieConsentInit />
              <SelfXSSWarning />
              <ReactQueryDevtools initialIsOpen={false} />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
