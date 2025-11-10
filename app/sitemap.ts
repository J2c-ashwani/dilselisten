import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dilsenlisten.com"

  const routes = [
    "",
    "/listeners",
    "/pricing",
    "/how-it-works",
    "/about",
    "/contact",
    "/privacy",
    "/resources",
    "/resources/breakup-recovery",
    "/resources/relationship-stress",
    "/resources/loneliness",
    "/resources/anxiety-stress",
    "/resources/overthinking",
    "/resources/pre-marriage",
    "/blog",
    "/auth/login",
    "/auth/signup",
    "/dashboard",
    "/account",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
