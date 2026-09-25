import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes = ["/", "/about", "/services", "/products", "/contact", "/faq", "/legal"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
