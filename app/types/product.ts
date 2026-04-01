/**
 * TypeScript types for Product data from Django backend API
 * These types mirror the Django models defined in cmx-site-backend
 */

/**
 * Category interface matching Django's Categoria model
 */
export interface Category {
  /** Unique identifier */
  id: number;
  /** Category name */
  nombre: string;
  /** URL-friendly slug for routing */
  slug: string;
  /** SEO meta description */
  descripcion_seo?: string;
  /** Cover image URL */
  imagen_portada?: string;
}

/**
 * Product specification key-value pair
 */
export interface Specification {
  /** Specification key (e.g., 'Voltaje', 'Material') */
  clave: string;
  /** Specification value (e.g., '110V', 'FR4 Militar') */
  valor: string;
}

/**
 * Product image with alt text for SEO
 */
export interface ProductImage {
  /** Image URL */
  imagen: string;
  /** Alt text for accessibility and SEO */
  alt_text: string;
  /** Whether this is the main product image */
  es_principal: boolean;
}

/**
 * Stock status options
 */
export type StockStatus = 'disponible' | 'bajo_pedido' | 'agotado';

/**
 * Product interface matching Django's Producto model
 */
export interface Product {
  /** Unique identifier */
  id: number;
  /** Category relationship */
  categoria: Category | number;
  /** Product name */
  nombre: string;
  /** URL-friendly slug for product pages */
  slug: string;
  /** SKU or internal code */
  sku: string;
  /** Price in MXN */
  precio: number;
  /** Currency code (default: 'MXN') */
  moneda: string;
  /** Stock status */
  estado_stock: StockStatus;
  /** Whether product is active on site */
  disponible: boolean;
  /** SEO meta title (max 70 chars) */
  meta_titulo?: string;
  /** SEO meta description (max 160 chars) */
  meta_descripcion?: string;
  /** Short description for listings */
  descripcion_corta: string;
  /** Detailed technical description */
  descripcion_detallada: string;
  /** Compatible models (e.g., ['GSP H', 'H33']) */
  modelos_compatibles: string[];
  /** OEM part numbers */
  numeros_parte_oem: string[];
  /** Product specifications */
  especificaciones?: Specification[];
  /** Product images */
  imagenes?: ProductImage[];
  /** Creation timestamp */
  fecha_creacion: string;
  /** Last update timestamp */
  fecha_actualizacion: string;
}

/**
 * API response wrapper for paginated results
 */
export interface PaginatedResponse<T> {
  /** Array of results */
  results: T[];
  /** Total count */
  count: number;
  /** Next page URL */
  next?: string;
  /** Previous page URL */
  previous?: string;
}

/**
 * Product list item (simplified version for listings)
 */
export interface ProductListItem {
  id: number;
  nombre: string;
  slug: string;
  sku: string;
  precio: number;
  moneda: string;
  estado_stock: StockStatus;
  disponible: boolean;
  descripcion_corta: string;
  meta_titulo?: string;
  meta_descripcion?: string;
  imagen_principal?: string;
  categoria?: {
    id: number;
    nombre: string;
    slug: string;
  };
}

/**
 * Filter options for product queries
 */
export interface ProductFilters {
  /** Filter by category slug */
  categoria?: string;
  /** Filter by stock availability */
  disponible?: boolean;
  /** Search query (searches in nombre, sku, descripcion_corta) */
  search?: string;
  /** Minimum price */
  precio_min?: number;
  /** Maximum price */
  precio_max?: number;
  /** Sort field */
  ordering?: string;
}

/**
 * Category list item for navigation
 */
export interface CategoryListItem {
  id: number;
  nombre: string;
  slug: string;
  descripcion_seo?: string;
  /** Number of active products in category */
  productos_count?: number;
}