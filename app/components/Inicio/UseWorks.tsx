import Link from 'next/link';

const projects = [
  {
    title: 'Red de Internet Fibra Óptica Fibraya',
    category: { name: 'Internet Fibra Óptica', color: 'text-blue-600 bg-blue-50' },
    description:
      'Instalación de fibra óptica real con Fibraya en la zona de Ejidos de Tequisistlán. Plan Hogar de 329/mes para familia de 4 personas con Netflix, YouTube y videollamadas. Conexión estable y rápida sin contrato.',
    impact: 'Velocidad simétrica garantizada.',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
    href: '#',
  },
  {
    title: 'Instalación Eléctrica Domiciliaria Completa',
    category: { name: 'Electricidad', color: 'text-amber-600 bg-amber-50' },
    description:
      'Instalación eléctrica completa para una casa nueva en Ejidos de Tequisistlán. Cableado de alta calidad, tablero con protecciones, tomas de corriente en todas las habitaciones y sistema de iluminación LED eficiente.',
    impact: 'Casa lista para habitar en 3 días.',
    imageUrl:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
    href: '#',
  },
  {
    title: 'Sistema de Cámaras de Seguridad',
    category: { name: 'Seguridad / CCTV', color: 'text-emerald-600 bg-emerald-50' },
    description:
      'Instalación de sistema de videovigilancia con 8 cámaras HD para un negocio en Atenco. Cobertura completa del local, acceso remoto desde celular y grabación continua con almacenamiento en la nube.',
    impact: 'Monitoreo 24/7 desde tu celular.',
    imageUrl:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
    href: '#',
  },
];

export default function UseWorks() {
  return (
    <div className="relative bg-slate-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 border-t border-gray-200">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      
      <div className="relative mx-auto lg:mx-12 max-w-full">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Casos de Éxito</h2>
          <p className="mt-4 text-xl text-gray-500">
            Instalaciones eléctricas, internet fibra óptica y sistemas de seguridad para hogares y negocios. Así resolvemos problemas reales.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              
              {/* Imagen del Proyecto con efecto zoom suave */}
              <div className="flex-shrink-0 overflow-hidden">
                <img className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" src={project.imageUrl} alt={project.title} />
              </div>
              
              {/* Contenido Técnico */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div className="flex-1">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${project.category.color}`}>
                    {project.category.name}
                  </span>
                  
                  <div className="mt-4 block">
                    <p className="text-xl font-bold text-gray-900 leading-tight">{project.title}</p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                </div>
                
                {/* Métricas de Impacto (Sustituye al viejo "perfil de autor") */}
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Impacto Operativo</p>
                      <p className="text-sm font-semibold text-gray-900">{project.impact}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}