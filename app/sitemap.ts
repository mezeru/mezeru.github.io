import type { MetadataRoute } from "next";
import { person } from "@/content/portfolio";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: person.url, changeFrequency: "monthly", priority: 1 }];
}
