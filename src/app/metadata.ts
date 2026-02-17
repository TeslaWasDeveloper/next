import type { Metadata } from "next"

import { siteConfig } from "@/site.config"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.author.nickname,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
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
    creator: `@${siteConfig.author.nickname}`,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
}
