import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getDocs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
    const updateRoutes = getDocs("updates").map((doc) => `/updates/${doc.slug}`);

    const routes = [
        "",
        "/docs/installation",
        "/docs/button",
        "/docs/loader",
        "/docs/cli",
        "/updates",
        ...updateRoutes,
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return [...routes];
}
