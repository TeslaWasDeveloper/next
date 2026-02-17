export const siteConfig = {
  name: "Next",
  url: "http://localhost:3000",
  ogImage: "/og.jpg",
  description:
    "Landing page components built with React, Shadcn/ui and Tailwind that will make your website feel premium.",
  author: {
    name: "Nikola Tesla",
    url: "https://example.com",
    nickname: "nikolatesla",
  },
  links: {
    email: "mailto:contact@nikolatesla.com",
    social: [
      "https://github.com/user/repo",
      "https://facebook.com",
      "https://instagram.com",
      "https://twitter.com",
      "https://youtube.com/user",
      "https://linkedin.com/user",
      "https://discord.com/user",
      "https://threads.com/user",
      "https://tiktok.com/user",
      "https://messenger.com/user",
      "https://whatsapp.com/user",
    ],
  },
}

export type SiteConfig = typeof siteConfig
