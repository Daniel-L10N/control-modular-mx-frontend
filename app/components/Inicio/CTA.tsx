import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-slate-900 relative overflow-hidden">
      
      {/* Elemento decorativo de fondo para darle un toque tecnológico */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-20 lg:px-8">
        
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">¿Procesos lentos o maquinaria detenida?</span>
          <span className="block text-indigo-400 mt-2">Automaticemos el núcleo de tu empresa.</span>
        </h2>
        
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-6 py-4 text-base font-medium text-white hover:bg-indigo-600 transition-colors duration-300 shadow-lg shadow-indigo-500/30"
            >
              Cotizar Proyecto
            </Link>
          </div>
          
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 px-6 py-4 text-base font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-300"
            >
              Ver Soluciones
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}