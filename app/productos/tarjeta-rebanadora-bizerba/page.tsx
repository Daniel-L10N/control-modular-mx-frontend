import { Metadata } from 'next';
import Link from 'next/link';
import { WrenchScrewdriverIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';

// --- SEO TÉCNICO: METADATA DINÁMICA ---
// Nota: En producción, esto debería hacer un fetch rápido para obtener los metatítulos de la DB
export async function generateMetadata(): Promise<Metadata> {
  const product = await getProductData();
  if (!product) return { title: 'Producto no encontrado' };

  return {
    title: `${product.meta_titulo || product.nombre} | Control Modular MX`,
    description: product.meta_descripcion || product.descripcion_corta,
    openGraph: {
      title: product.nombre,
      description: product.descripcion_corta,
      images: product.imagenes?.[0]?.imagen ? [product.imagenes[0].imagen] : [],
    }
  };
}

// --- CONSUMO DE API REAL (DJANGO) ---
async function getProductData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  try {
    const res = await fetch(`${apiUrl}/catalogo/productos/tarjeta-rebanadora-bizerba/`, {
      next: { revalidate: 3600 } // Cache por 1 hora (ISR)
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

async function getRelatedProducts(categoriaSlug: string, currentSlug: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  try {
    const res = await fetch(`${apiUrl}/catalogo/productos/relacionados/${categoriaSlug}/?exclude=${currentSlug}`);
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function ProductoDetallePage() {
  const product = await getProductData();
  
  if (!product) {
    notFound();
  }

  const related = await getRelatedProducts(product.categoria.slug, product.slug);

  // --- TÉCNICO SEO: JSON-LD SCHEMA DINÁMICO ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.nombre,
    "image": product.imagenes?.[0]?.imagen || '',
    "description": product.meta_descripcion || product.descripcion_detallada,
    "sku": product.sku,
    "mpn": product.numeros_parte_oem?.[0] || '',
    "brand": {
      "@type": "Brand",
      "name": "Control Modular MX"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://controlmodularmx.com/productos/${product.slug}`,
      "priceCurrency": product.moneda,
      "price": product.price,
      "availability": product.estado_stock === 'disponible' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Control Modular MX"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
            {/* Galería de Imágenes Dinámica */}
            <div className="flex flex-col-reverse">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl border border-gray-100">
                <img
                  src={product.imagenes?.[0]?.imagen || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800'}
                  alt={product.imagenes?.[0]?.alt_text || product.nombre}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Datos del Producto desde API */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <li><Link href="/productos" className="hover:text-indigo-600">Productos</Link></li>
                  <li><svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" className="h-5 w-4 text-gray-300"><path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" /></svg></li>
                  <li className="font-medium text-gray-900 truncate">{product.categoria.nombre}</li>
                </ol>
              </nav>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                {product.nombre}
              </h1>

              <div className="mt-3">
                <p className="text-3xl tracking-tight text-indigo-600 font-bold">
                  ${product.precio} <span className="text-sm text-gray-400 font-normal">{product.moneda}</span>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Ingeniería Superior</h3>
                <div className="mt-4 space-y-6 text-base text-gray-600 leading-relaxed">
                  {product.descripcion_detallada}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="flex flex-1 items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-700 transition-all shadow-lg"
                >
                  Cotizar / Comprar Ahora
                </Link>
                <div className="flex items-center justify-center px-6 py-4 rounded-xl border-2 border-gray-100 text-green-600 font-bold uppercase text-xs tracking-widest">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  {product.estado_stock.replace('_', ' ')}
                </div>
              </div>

              {/* Especificaciones Técnicas Dinámicas */}
              <section className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Especificaciones Técnicas
                </h2>
                <div className="mt-6">
                  <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                    {product.especificaciones?.map((spec: any) => (
                      <div key={spec.clave} className="border-l-4 border-indigo-500 pl-4 py-1">
                        <dt className="text-xs font-bold text-gray-500 uppercase">{spec.clave}</dt>
                        <dd className="mt-1 text-sm font-semibold text-gray-900">{spec.valor}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            </div>
          </div>

          {/* Guía de Compatibilidad Dinámica */}
          <section className="mt-24 bg-slate-900 rounded-3xl p-8 lg:p-12 text-white">
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-black tracking-tight">Guía de <span className="text-indigo-400">Compatibilidad</span></h2>
                <p className="mt-4 text-gray-400">
                  Validado para integración técnica inmediata.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-indigo-400 font-bold mb-3 flex items-center">
                    <CpuChipIcon className="h-5 w-5 mr-2" /> Modelos Bizerba
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.modelos_compatibles?.map((m: string) => (
                      <span key={m} className="bg-slate-700 px-3 py-1 rounded-md text-sm font-mono">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-indigo-400 font-bold mb-3 flex items-center">
                    <WrenchScrewdriverIcon className="h-5 w-5 mr-2" /> Números de Parte (OEM)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.numeros_parte_oem?.map((pn: string) => (
                      <span key={pn} className="bg-indigo-900/30 text-indigo-200 px-3 py-1 rounded-md text-sm font-mono border border-indigo-500/20">{pn}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Productos Relacionados Dinámicos */}
          {related.length > 0 && (
            <section className="mt-24">
              <h2 className="text-2xl font-black text-slate-900 mb-8">Productos <span className="text-indigo-600">Relacionados</span></h2>
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {related.map((item: any) => (
                  <div key={item.id} className="group relative bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:h-48">
                      <img src={item.imagen_principal || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300'} className="h-full w-full object-cover object-center group-hover:opacity-75" alt={item.nombre} />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm font-bold text-gray-900">
                        <Link href={`/productos/${item.slug}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {item.nombre}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-indigo-600 font-bold">${item.precio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
