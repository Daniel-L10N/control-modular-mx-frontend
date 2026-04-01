import { MetadataRoute } from "next";
import { getProducts } from "@/app/lib/api";
import type { ProductListItem } from "@/app/types/product";

const BASE_URL = "https://controlmodularmx.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all products from the Django API
  let products: ProductListItem[] = [];
  
  try {
    const response = await getProducts({ disponible: true });
    products = response.results;
  } catch (error) {
    console.error("Error fetching products for sitemap:", error);
  }

  // Static URLs
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/productos`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/trabajos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Dynamic product URLs
  const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/productos/${product.slug}`,
    lastModified: product.fecha_actualizacion ? new Date(product.fecha_actualizacion) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...productUrls];
}