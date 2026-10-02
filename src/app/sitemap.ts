import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/site";

const pages = ["/", "/projects", "/contact", ...services.map((service) => service.href)];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: new URL(path, siteUrl).href,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.6 : 0.8,
  }));
}
