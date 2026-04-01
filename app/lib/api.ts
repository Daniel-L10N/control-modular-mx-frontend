/**
 * API utilities for fetching products and categories from Django backend
 * Uses fetch API with proper error handling and TypeScript types
 */

import { API_URL } from './config';
import type {
  Product,
  ProductListItem,
  ProductFilters,
  Category,
  CategoryListItem,
  PaginatedResponse,
} from '@/app/types/product';

/**
 * Default fetch options for API requests
 */
const defaultFetchOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Handle API errors consistently
 */
class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Generic fetch wrapper with error handling
 */
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Ensure endpoint starts with /
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_URL}${normalizedEndpoint}`;
  
  try {
    const response = await fetch(url, {
      ...defaultFetchOptions,
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(
        response.status,
        `API Error: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    // Network error or JSON parse error
    throw new ApiError(0, `Network error: ${(error as Error).message}`);
  }
}

/**
 * Fetch all products with optional filters
 * @param filters - Optional filters for query
 * @returns Paginated response with products
 */
export async function getProducts(
  filters: ProductFilters = {}
): Promise<PaginatedResponse<ProductListItem>> {
  const params = new URLSearchParams();
  
  if (filters.categoria) params.append('categoria', filters.categoria);
  if (filters.disponible !== undefined) {
    params.append('disponible', String(filters.disponible));
  }
  if (filters.search) params.append('search', filters.search);
  if (filters.precio_min) params.append('precio_min', String(filters.precio_min));
  if (filters.precio_max) params.append('precio_max', String(filters.precio_max));
  if (filters.ordering) params.append('ordering', filters.ordering);

  const queryString = params.toString();
  const endpoint = queryString ? `/catalogo/productos/?${queryString}` : '/catalogo/productos/';
  
  return fetchApi<PaginatedResponse<ProductListItem>>(endpoint);
}

/**
 * Fetch a single product by slug
 * @param slug - Product slug
 * @returns Full product details
 */
export async function getProductBySlug(slug: string): Promise<Product> {
  return fetchApi<Product>(`/catalogo/productos/${slug}/`);
}

/**
 * Fetch a single product by ID
 * @param id - Product ID
 * @returns Full product details
 */
export async function getProductById(id: number): Promise<Product> {
  return fetchApi<Product>(`/catalogo/productos/${id}/`);
}

/**
 * Fetch featured/active products for homepage
 * @param limit - Maximum number of products to fetch
 * @returns Array of active products
 */
export async function getFeaturedProducts(limit: number = 6): Promise<ProductListItem[]> {
  const response = await fetchApi<PaginatedResponse<ProductListItem>>(
    `/catalogo/productos/?disponible=true&ordering=-fecha_actualizacion&limit=${limit}`
  );
  return response.results;
}

/**
 * Fetch all categories
 * @returns Array of categories
 */
export async function getCategories(): Promise<CategoryListItem[]> {
  return fetchApi<CategoryListItem[]>('/catalogo/categorias/');
}

/**
 * Fetch a single category by slug
 * @param slug - Category slug
 * @returns Category details
 */
export async function getCategoryBySlug(slug: string): Promise<Category> {
  return fetchApi<Category>(`/catalogo/categorias/${slug}/`);
}

/**
 * Fetch products by category slug
 * @param categorySlug - Category slug
 * @param filters - Additional filters
 * @returns Paginated response with products
 */
export async function getProductsByCategory(
  categorySlug: string,
  filters: Omit<ProductFilters, 'categoria'> = {}
): Promise<PaginatedResponse<ProductListItem>> {
  const params = new URLSearchParams({ categoria: categorySlug });
  
  if (filters.disponible !== undefined) {
    params.append('disponible', String(filters.disponible));
  }
  if (filters.search) params.append('search', filters.search);
  if (filters.precio_min) params.append('precio_min', String(filters.precio_min));
  if (filters.precio_max) params.append('precio_max', String(filters.precio_max));
  if (filters.ordering) params.append('ordering', filters.ordering);

  return fetchApi<PaginatedResponse<ProductListItem>>(
    `/catalogo/productos/?${params.toString()}`
  );
}

/**
 * Search products by query
 * @param query - Search query
 * @param limit - Maximum results
 * @returns Array of matching products
 */
export async function searchProducts(
  query: string,
  limit: number = 20
): Promise<ProductListItem[]> {
  const response = await fetchApi<PaginatedResponse<ProductListItem>>(
    `/catalogo/productos/?search=${encodeURIComponent(query)}&limit=${limit}`
  );
  return response.results;
}

/**
 * Fetch all product slugs for static generation (sitemap, ISR)
 * @returns Array of product slugs
 */
export async function getAllProductSlugs(): Promise<string[]> {
  const response = await fetchApi<PaginatedResponse<ProductListItem>>(
    '/catalogo/productos/?fields=slug&limit=1000'
  );
  return response.results.map(p => p.slug);
}

/**
 * Fetch all category slugs for static generation
 * @returns Array of category slugs
 */
export async function getAllCategorySlugs(): Promise<string[]> {
  const response = await fetchApi<PaginatedResponse<CategoryListItem>>(
    '/catalogo/categorias/?fields=slug'
  );
  return response.results.map(c => c.slug);
}

/**
 * API Error class for type checking
 */
export { ApiError };