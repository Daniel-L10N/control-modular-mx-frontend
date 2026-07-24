import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/productos/*", "/", "/contacto", "/nosotros", "/servicios", "/trabajos", "/blog"],
        disallow: ["/admin/", "/api/", "/debug", "/_next/"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://controlmodularmx.com/sitemap.xml",
  };
}