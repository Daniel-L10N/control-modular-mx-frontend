/**
 * Dynamic Product Page - Phase 4: SEO Improvements
 * Displays individual product details with full SEO optimization
 * Uses SSG with generateStaticParams and ISR for known products
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getAllProductSlugs } from '@/app/lib/api';
import { generateProductJSONLD, generateBreadcrumbJSONLD, generateMetadata as generateSeoMetadata } from '@/app/lib/seo';
import type { Product } from '@/app/types/product';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static generation params for known products
export async function generateStaticParams() {
  try {
    const slugs = await getAllProductSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Error fetching product slugs:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const product = await getProductBySlug(slug);
    
    const title = product.meta_titulo 
      ? `${product.meta_titulo} | Control Modular MX` 
      : `${product.nombre} | Control Modular MX`;
    
    const description = product.meta_descripcion 
      ? product.meta_descripcion.substring(0, 160) 
      : product.descripcion_corta.substring(0, 160);
    
    const canonicalUrl = `https://controlmodularmx.com/productos/${slug}/`;
    
    // Get primary image for Open Graph
    const primaryImage = product.imagenes?.find(img => img.es_principal)?.imagen 
      || product.imagenes?.[0]?.imagen 
      || 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80';
    
    return generateSeoMetadata({
      title,
      description,
      canonical: canonicalUrl,
      ogImage: primaryImage,
      ogType: 'product',
      keywords: product.modelos_compatibles?.concat(product.numeros_parte_oem || []),
    });
  } catch (error) {
    // Return default metadata if product not found
    return {
      title: 'Producto no encontrado | Control Modular MX',
      description: 'El producto que buscas no está disponible.',
    };
  }
}

// Get product data with error handling
async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await getProductBySlug(slug);
    return product;
  } catch (error) {
    console.error(`Error fetching product ${slug}:`, error);
    return null;
  }
}

// Format price with currency
function formatPrice(price: number, currency: string = 'MXN'): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Get stock status text
function getStockStatusText(status: string): { text: string; class: string } {
  switch (status) {
    case 'disponible':
      return { text: 'Disponible', class: 'bg-green-100 text-green-800' };
    case 'bajo_pedido':
      return { text: 'Bajo Pedido', class: 'bg-yellow-100 text-yellow-800' };
    case 'agotado':
      return { text: 'Agotado', class: 'bg-red-100 text-red-800' };
    default:
      return { text: 'Consultar', class: 'bg-gray-100 text-gray-800' };
  }
}

// Breadcrumb component
function Breadcrumbs({ 
  productName, 
  categorySlug, 
  categoryName 
}: { 
  productName: string; 
  categorySlug?: string; 
  categoryName?: string;
}) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-indigo-600 transition-colors">
        Inicio
      </Link>
      <span className="text-gray-400">/</span>
      <Link href="/productos" className="hover:text-indigo-600 transition-colors">
        Productos
      </Link>
      {categorySlug && (
        <>
          <span className="text-gray-400">/</span>
          <Link 
            href={`/productos?categoria=${categorySlug}`} 
            className="hover:text-indigo-600 transition-colors"
          >
            {categoryName || categorySlug}
          </Link>
        </>
      )}
      <span className="text-gray-400">/</span>
      <span className="text-gray-900 font-medium truncate max-w-[200px]">{productName}</span>
    </nav>
  );
}

// Product gallery component
function ProductGallery({ images, productName }: { images: Product['imagenes']; productName: string }) {
  if (!images || images.length === 0) {
    return (
      <div className="aspect-w-4 aspect-h-3 rounded-3xl bg-gray-100 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt={productName}
          width={800}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    );
  }

  const primaryImage = images.find(img => img.es_principal) || images[0];
  const otherImages = images.filter(img => img !== primaryImage);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-w-4 aspect-h-3 rounded-3xl bg-gray-100 overflow-hidden shadow-2xl">
        <Image
          src={primaryImage.imagen}
          alt={primaryImage.alt_text || productName}
          width={800}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      
      {/* Thumbnail gallery */}
      {otherImages.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {otherImages.slice(0, 4).map((img, idx) => (
            <div key={idx} className="aspect-w-1 aspect-h-1 rounded-xl bg-gray-100 overflow-hidden shadow-md">
              <Image
                src={img.imagen}
                alt={img.alt_text || `${productName} - imagen ${idx + 2}`}
                width={200}
                height={200}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Specifications table component
function ProductSpecifications({ specifications }: { specifications: Product['especificaciones'] }) {
  if (!specifications || specifications.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-6 mt-8">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Especificaciones Técnicas</h3>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
        {specifications.map((spec, idx) => (
          <div key={idx} className="flex border-b border-gray-200 pb-2">
            <dt className="text-sm font-medium text-gray-500 w-1/3">{spec.clave}</dt>
            <dd className="text-sm text-slate-900 font-semibold flex-1">{spec.valor}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// Compatible models component
function CompatibleModels({ models }: { models: string[] }) {
  if (!models || models.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
        Modelos Compatibles
      </h4>
      <div className="flex flex-wrap gap-2">
        {models.map((model, idx) => (
          <span 
            key={idx}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
          >
            {model}
          </span>
        ))}
      </div>
    </div>
  );
}

// OEM Part numbers component
function OEMNumbers({ oemNumbers }: { oemNumbers: string[] }) {
  if (!oemNumbers || oemNumbers.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
        Números de Parte OEM
      </h4>
      <div className="flex flex-wrap gap-2">
        {oemNumbers.map((num, idx) => (
          <span 
            key={idx}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 font-mono"
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}

// Main Product Page Component
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Fetch product data
  const product = await getProduct(slug);
  
  // Handle product not found
  if (!product) {
    notFound();
  }
  
  // Get category info
  const category = typeof product.categoria === 'object' ? product.categoria : null;
  const categoryName = category?.nombre;
  const categorySlug = category?.slug;
  
  // Prepare JSON-LD structured data
  const productJsonLd = generateProductJSONLD({
    name: product.nombre,
    description: product.descripcion_detallada || product.descripcion_corta,
    sku: product.sku,
    image: product.imagenes?.map(img => img.imagen) || [],
    offers: {
      '@type': 'Offer',
      price: product.precio,
      priceCurrency: product.moneda || 'MXN',
      availability: product.estado_stock === 'disponible' 
        ? 'https://schema.org/InStock' 
        : product.estado_stock === 'agotado'
        ? 'https://schema.org/OutOfStock'
        : 'https://schema.org/PreOrder',
      url: `https://controlmodularmx.com/productos/${slug}/`,
    },
  });
  
  // Prepare breadcrumb JSON-LD
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://controlmodularmx.com/' },
    { name: 'Productos', url: 'https://controlmodularmx.com/productos' },
  ];
  
  if (categoryName) {
    breadcrumbItems.push({ 
      name: categoryName, 
      url: `https://controlmodularmx.com/productos?categoria=${categorySlug}` 
    });
  }
  
  breadcrumbItems.push({ 
    name: product.nombre, 
    url: `https://controlmodularmx.com/productos/${slug}/` 
  });
  
  const breadcrumbJsonLd = generateBreadcrumbJSONLD(breadcrumbItems);
  
  // Get stock status
  const stockStatus = getStockStatusText(product.estado_stock);
  
  // Get primary image for fallback
  const primaryImageUrl = product.imagenes?.find(img => img.es_principal)?.imagen 
    || product.imagenes?.[0]?.imagen 
    || 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: productJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      
      <div className="bg-white min-h-screen pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            productName={product.nombre}
            categorySlug={categorySlug}
            categoryName={categoryName}
          />
          
          {/* Main Product Section */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
            {/* Product Gallery */}
            <ProductGallery 
              images={product.imagenes}
              productName={product.nombre}
            />
            
            {/* Product Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* SKU */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600 uppercase tracking-widest">
                  SKU: {product.sku}
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${stockStatus.class}`}>
                  {stockStatus.text}
                </span>
              </div>
              
              {/* Product Name */}
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mt-4">
                {product.nombre}
              </h1>
              
              {/* Price */}
              <div className="mt-6">
                <p className="text-4xl font-black text-indigo-600">
                  {formatPrice(product.precio, product.moneda)}
                </p>
              </div>
              
              {/* Short Description */}
              <div className="mt-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.descripcion_corta}
                </p>
              </div>
              
              {/* Compatible Models */}
              <CompatibleModels models={product.modelos_compatibles} />
              
              {/* OEM Numbers */}
              <OEMNumbers oemNumbers={product.numeros_parte_oem} />
              
              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/525541227797?text=Hola,%20me%20interesa%20el%20producto:%20{product.nombre}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 sm:w-auto"
                >
                  Contactar por WhatsApp
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Detailed Description */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Descripción Detallada</h2>
            <div 
              className="prose prose-lg max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: product.descripcion_detallada || product.descripcion_corta }}
            />
          </div>
          
          {/* Technical Specifications */}
          <ProductSpecifications specifications={product.especificaciones} />
          
          {/* SEO Content Section */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900">Expertos en Refacciones Electrónicas Industriales</h2>
              <p className="mt-4 text-gray-600 leading-7">
                En Control Modular MX somos especialistas en la reparación y fabricación de tarjetas electrónicas 
                industriales. Nuestro equipo de ingenieros altamente capacitados utiliza tecnología de punta 
                para garantizar que cada refacción cumpla con los estándares de calidad más rigurosos.
              </p>
              <p className="mt-4 text-gray-600 leading-7">
                Si necesitas asistencia técnica o deseas cotizar refacciones específicas, no dudes en 
                contactarnos. Estamos comprometidos con la excelencia y la satisfacción total de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}