import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/productos/*", "/", "/contacto"],
        disallow: ["/admin/", "/api/", "/debug"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://controlmodularmx.com/sitemap.xml",
  };
}