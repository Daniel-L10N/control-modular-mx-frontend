/**
 * SEO Utilities for Next.js App Router
 * Reusable library for generating metadata and structured data
 */

import { Metadata } from 'next';

/**
 * Configuration interface for SEO metadata
 */
export interface SEOConfig {
  /** Page title (recommended: 50-60 characters) */
  title: string;
  /** Meta description (recommended: 150-160 characters) */
  description: string;
  /** Canonical URL for the page */
  canonical?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Open Graph type (default: 'website') */
  ogType?: string;
  /** Whether to prevent indexing (default: false) */
  noIndex?: boolean;
  /** Additional keywords for meta tags */
  keywords?: string[];
  /** Open Graph locale (default: 'es_MX') */
  locale?: string;
  /** Site name for Open Graph */
  siteName?: string;
}

/**
 * Generate Next.js Metadata object from SEO configuration
 * @param config - SEO configuration object
 * @returns Metadata object for Next.js App Router
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    canonical,
    ogImage,
    ogType = 'website',
    noIndex = false,
    keywords = [],
    locale = 'es_MX',
    siteName = 'Control Modular MX',
  } = config;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: canonical
      ? {
          canonical: canonical,
        }
      : undefined,
    openGraph: {
      title,
      description,
      type: ogType as any,
      locale,
      siteName,
      url: canonical,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };

  return metadata;
}

/**
 * Generate JSON-LD structured data for any type
 * @param type - Schema.org type (e.g., 'Product', 'Organization', 'BreadcrumbList')
 * @param data - Structured data object
 * @returns JSON-LD script string
 */
export function generateJSONLD(type: string, data: object): string {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(jsonLd);
}

/**
 * Product-specific JSON-LD for rich snippets in Google
 */
export interface ProductJSONLD {
  /** Product name */
  name: string;
  /** Product description */
  description: string;
  /** Product SKU */
  sku?: string;
  /** Product URL */
  url?: string;
  /** Image URLs */
  image?: string | string[];
  /** Price details */
  offers?: {
    '@type': 'Offer';
    price: number | string;
    priceCurrency: string;
    availability?: string;
    url?: string;
  };
  /** Brand information */
  brand?: {
    '@type': string;
    name: string;
  };
}

/**
 * Generate Product schema.org JSON-LD for rich snippets
 * @param product - Product data
 * @returns JSON-LD script string
 */
export function generateProductJSONLD(product: ProductJSONLD): string {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    ...(product.sku && { sku: product.sku }),
    ...(product.image && { image: product.image }),
    ...(product.brand && { brand: product.brand }),
    ...(product.offers && { offers: product.offers }),
  };

  return JSON.stringify(jsonLd);
}

/**
 * Generate Organization schema.org JSON-LD
 */
export interface OrganizationJSONLD {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
  };
}

/**
 * Generate Organization schema.org JSON-LD for rich snippets
 * @param org - Organization data
 * @returns JSON-LD script string
 */
export function generateOrganizationJSONLD(org: OrganizationJSONLD): string {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    ...(org.logo && { logo: org.logo }),
    ...(org.description && { description: org.description }),
    ...(org.address && { address: org.address }),
    ...(org.contactPoint && { contactPoint: org.contactPoint }),
  };

  return JSON.stringify(jsonLd);
}

/**
 * Generate BreadcrumbList schema.org JSON-LD
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate BreadcrumbList schema.org JSON-LD for navigation
 * @param items - Breadcrumb items (home first, current page last)
 * @returns JSON-LD script string
 */
export function generateBreadcrumbJSONLD(items: BreadcrumbItem[]): string {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(jsonLd);
}