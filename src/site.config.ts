export const siteConfig = {
  name: "Next",
  url: "localhost:3000",
  getStartedUrl: "localhost:3000/docs/getting-started/introduction",
  ogImage: "localhost:3000/og.jpg",
  description:
    "Landing page components built with React, Shadcn/ui and Tailwind that will make your website feel premium.",
  author: {
    name: "Rucilos",
  },
  links: {
    github: "https://github.com/launch-ui/launch-ui",
    email: "mailto:contact@mikolajdobrucki.com",
  },
}

export type SiteConfig = typeof siteConfig
