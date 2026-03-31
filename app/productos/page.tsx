"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: 'Tarjeta Rebanadora Bizerba (Control Maestro)',
    href: '/contacto',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
    imageAlt: "Tarjeta de control para rebanadora Bizerba alemana",
    price: '$ Contactar para cotización',
    description: 'Nuestra solución estrella para rebanadoras industriales Bizerba. Elimina el tiempo de espera por refacciones de importación con nuestra tarjeta 100% compatible y mejorada.',
    features: [
      'Compatibilidad total con modelos alemanes',
      'Protección contra picos de voltaje integrada',
      'Instalación plug & play',
      'Garantía directa en México'
    ]
  },
];

export default function ProductosPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Nuestros <span className="text-indigo-600">Productos</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Refacciones electrónicas de alta precisión y tarjetas de control para la industria.
        </p>

        <div className="mt-16 space-y-24">
          {products.map((product) => (
            <div key={product.id} className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
              {/* Product Image */}
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Product Details */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{product.name}</h2>
                
                <div className="mt-3">
                  <h3 className="sr-only">Descripción</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Características principales</h3>
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href={product.href}
                    className="flex flex-1 items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cotizar Ahora
                  </Link>
                  <div className="flex items-center justify-center px-4 py-2 text-indigo-600 font-bold">
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* SEO Text Section */}
        <div className="mt-32 border-t border-gray-200 pt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">Especialistas en Tarjetas Bizerba</h2>
            <p className="mt-4 text-gray-600 leading-7">
              Si buscas una **tarjeta Bizerba** o **tarjeta rebanadora Bizerba**, has llegado al lugar correcto. En Control Modular MX entendemos que el tiempo es dinero. Por eso, hemos desarrollado soluciones electrónicas que superan la calidad original, permitiéndote reactivar tu maquinaria en tiempo récord sin depender de refacciones del extranjero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
