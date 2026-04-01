import { Metadata } from 'next';
import Link from 'next/link';
import { WrenchScrewdriverIcon, CpuChipIcon } from '@heroicons/react/24/outline';

// --- TÉCNICO SEO: METADATA DINÁMICA ---
export const metadata: Metadata = {
  title: "Tarjeta de Control para Rebanadora Bizerba | Reemplazo Premium | Control Modular MX",
  description: "Tarjeta electrónica industrial compatible con Bizerba GSP H, H33. Reemplazo de alto rendimiento (P/N: 603 85 07 51 02). Diseño robusto, entrega inmediata en México y garantía extendida.",
  keywords: ["Tarjeta Bizerba", "Refacciones Bizerba GSP H", "603 85 07 51 02", "Electrónica Industrial México", "Control Modular MX", "Reparación Rebanadora Bizerba"],
  alternates: {
    canonical: 'https://controlmodularmx.com/productos/tarjeta-rebanadora-bizerba',
  },
  openGraph: {
    title: 'Tarjeta Premium para Rebanadora Bizerba - Control Modular MX',
    description: 'Optimiza tu producción con nuestra tarjeta de control industrial. 100% compatible con modelos GSP H y H33.',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200'],
  }
};

// --- SIMULACIÓN DE API DJANGO (REST FRAMEWORK) ---
async function getProductData() {
  const productData = {
    id: 101,
    sku: "CMX-BIZ-603",
    name: "Tarjeta de Control Maestro para Rebanadora Bizerba (Serie GSP)",
    slug: "tarjeta-rebanadora-bizerba",
    price: "7499.00",
    currency: "MXN",
    stock: "Disponible",
    brand: "Control Modular MX",
    compatibility_models: ["GSP H", "GSP H33", "GSP V", "VS12"],
    part_numbers: ["603 85 07 51 02", "603.85.075.102"],
    description: "Diseño de ingeniería avanzada que supera las especificaciones del fabricante original. Nuestra tarjeta está protegida contra picos de voltaje y humedad, fallas comunes en entornos de procesamiento de alimentos.",
    specs: [
      { label: "Voltaje de Operación", value: "110V / 220V Auto-switch" },
      { label: "Material", value: "FR4 de Grado Militar (4 capas)" },
      { label: "Protección", value: "Capa Conformal Coating (Anti-corrosión)" },
      { label: "Garantía", value: "12 meses contra defectos de fábrica" }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", alt: "Vista principal tarjeta Bizerba CMX" }
    ]
  };
  
  return Promise.resolve(productData);
}

async function getRelatedProducts() {
  return Promise.resolve([
    { id: 2, name: "Fuente de Poder Industrial 24V", price: "2450.00", slug: "fuente-poder-industrial", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=300" },
    { id: 3, name: "Sensor de Seguridad Inductivo", price: "1890.00", slug: "sensor-inductivo-seguridad", img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=300" },
  ]);
}

export default async function ProductoDetallePage() {
  const product = await getProductData();
  const related = await getRelatedProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images[0].url,
    "description": product.description,
    "sku": product.sku,
    "mpn": product.part_numbers[0],
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "url": `https://controlmodularmx.com/productos/${product.slug}`,
      "priceCurrency": product.currency,
      "price": product.price,
      "availability": "https://schema.org/InStock",
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
            <div className="flex flex-col-reverse">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl border border-gray-100">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <li><Link href="/productos" className="hover:text-indigo-600">Productos</Link></li>
                  <li><svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" className="h-5 w-4 text-gray-300"><path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" /></svg></li>
                  <li className="font-medium text-gray-900 truncate">Bizerba</li>
                </ol>
              </nav>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Información del Producto</h2>
                <p className="text-3xl tracking-tight text-indigo-600 font-bold">
                  ${product.price} <span className="text-sm text-gray-400 font-normal">{product.currency}</span>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Ingeniería Superior</h3>
                <div className="mt-4 space-y-6 text-base text-gray-600 leading-relaxed">
                  {product.description}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="flex flex-1 items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
                >
                  Cotizar / Comprar Ahora
                </Link>
                <div className="flex items-center justify-center px-6 py-4 rounded-xl border-2 border-gray-100 text-green-600 font-bold">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  {product.stock}
                </div>
              </div>

              <section aria-labelledby="details-heading" className="mt-12 border-t border-gray-200 pt-8">
                <h2 id="details-heading" className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Especificaciones Técnicas
                </h2>
                <div className="mt-6">
                  <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="border-l-4 border-indigo-500 pl-4 py-1">
                        <dt className="text-xs font-bold text-gray-500 uppercase">{spec.label}</dt>
                        <dd className="mt-1 text-sm font-semibold text-gray-900">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            </div>
          </div>

          <section className="mt-24 bg-slate-900 rounded-3xl p-8 lg:p-12 text-white">
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-black tracking-tight">Guía de <span className="text-indigo-400">Compatibilidad</span></h2>
                <p className="mt-4 text-gray-400">
                  Nuestra tarjeta ha sido probada exhaustivamente en los siguientes modelos y números de parte para asegurar una integración perfecta.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-indigo-400 font-bold mb-3 flex items-center">
                    <CpuChipIcon className="h-5 w-5 mr-2" /> Modelos Bizerba
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility_models.map(m => (
                      <span key={m} className="bg-slate-700 px-3 py-1 rounded-md text-sm font-mono">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-indigo-400 font-bold mb-3 flex items-center">
                    <WrenchScrewdriverIcon className="h-5 w-5 mr-2" /> Números de Parte (OEM)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.part_numbers.map(pn => (
                      <span key={pn} className="bg-indigo-900/30 text-indigo-200 px-3 py-1 rounded-md text-sm font-mono border border-indigo-500/20">{pn}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900">Productos <span className="text-indigo-600">Relacionados</span></h2>
              <Link href="/productos" className="text-sm font-bold text-indigo-600 hover:text-indigo-500">Ver todo &rarr;</Link>
            </div>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {related.map((item) => (
                <div key={item.id} className="group relative bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:h-48">
                    <img src={item.img} className="h-full w-full object-cover object-center group-hover:opacity-75" alt={item.name} />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        <Link href={`/productos/${item.slug}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {item.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-indigo-600 font-bold">${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
