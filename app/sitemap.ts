import { MetadataRoute } from "next";
import { getProducts } from "@/app/lib/api";
import type { ProductListItem } from "@/app/types/product";

const BASE_URL = "https://controlmodularmx.com";

// Fallback slugs en caso de que la API no esté disponible durante el build
// Estos se agregan dinámicamente si el fetch falla
const FALLBACK_SLUGS = [
  'tarjeta-rebanadora-bizerba',
  'tarjeta-rebanadora-bizerba-gsp',
];

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all products from the Django API
  let products: ProductListItem[] = [];
  
  try {
    const response = await getProducts({ disponible: true });
    products = response.results;
  } catch (error) {
    console.error("Error fetching products for sitemap:", error);
    // Si falla, usar fallback slugs
    products = FALLBACK_SLUGS.map((slug, index) => ({
      id: index + 1,
      nombre: slug,
      slug: slug,
      sku: `CMX-FALLBACK-${index + 1}`,
      precio: 0,
      moneda: 'MXN',
      estado_stock: 'disponible' as const,
      disponible: true,
      descripcion_corta: 'Producto de fallback',
      fecha_actualizacion: new Date().toISOString(),
    }));
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