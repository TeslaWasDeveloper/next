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

import { metadata } from "./metadata"

import "@/app/globals.css"

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html id="next" lang="en" dir="ltr" suppressHydrationWarning>
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
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
