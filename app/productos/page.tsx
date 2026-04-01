import Link from "next/link";

// --- CONSUMO DE API REAL (DJANGO) ---
async function getProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  try {
    const res = await fetch(`${apiUrl}/catalogo/productos/`, {
      next: { revalidate: 60 } // Cache por 1 minuto para listados
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductosPage() {
  const products = await getProducts();

  return (
    <div className="bg-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Nuestros <span className="text-indigo-600">Productos</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Refacciones electrónicas de alta precisión y tarjetas de control para la industria.
        </p>

        {products.length === 0 ? (
          <div className="mt-20 text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg italic">Cargando catálogo dinámico...</p>
          </div>
        ) : (
          <div className="mt-16 space-y-24">
            {products.map((product: any) => (
              <div key={product.id} className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center p-8 rounded-3xl transition-all hover:bg-slate-50 group">
                {/* Product Image */}
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-3xl bg-gray-100 shadow-2xl transition-transform group-hover:scale-[1.02]">
                  <img
                    src={product.imagen_principal || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800'}
                    alt={product.nombre}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-10 lg:mt-0 px-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 uppercase tracking-widest mb-4">
                    {product.sku}
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{product.nombre}</h2>
                  
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {product.descripcion_corta}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Link
                      href={`/productos/${product.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
                    >
                      Ver Detalles y Ficha Técnica
                    </Link>
                    <div className="text-2xl font-black text-indigo-600">
                      ${product.precio} <span className="text-sm text-gray-400 font-normal">{product.moneda || 'MXN'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* SEO Text Section */}
        <div className="mt-32 border-t border-gray-200 pt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">Ingeniería Mexicana de Clase Mundial</h2>
            <p className="mt-4 text-gray-600 leading-7">
              En Control Modular MX nos especializamos en el desarrollo de refacciones electrónicas de alto rendimiento. Nuestra misión es reducir los tiempos de inactividad de tu planta mediante soluciones que superan los estándares de fábrica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
