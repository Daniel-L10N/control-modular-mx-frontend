import Link from 'next/link';

const projects = [
  {
    title: 'Retrofitting para Rebanadoras Bizerba',
    category: { name: 'Hardware PCB', color: 'text-indigo-600 bg-indigo-50' },
    description:
      'Desarrollo de tarjeta de control electrónica a la medida para maquinaria alemana Bizerba. Eliminamos la dependencia de refacciones de importación lentas y costosas, permitiendo a empresas de mantenimiento dar servicio ágil a gigantes como Soriana, Grupo Bafar y CarneMart, manteniendo intactas las normas de seguridad de fábrica.',
    impact: 'Cero tiempos de espera en importación.',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80', // Placa electrónica / tecnología
    href: '#',
  },
  {
    title: 'Automatización de Bitácoras y Cotizaciones',
    category: { name: 'Software Industrial', color: 'text-cyan-600 bg-cyan-50' },
    description:
      'Desarrollo de plataforma estructurada por jerarquías para la gestión de tareas. Digitalizamos la creación de reportes de servicio técnico y cotizaciones. Un proceso administrativo manual que antes tomaba 2 horas, ahora se genera en solo 5 minutos con presionar un botón. Menos papel, cero errores humanos.',
    impact: 'Reducción del 95% en tiempos administrativos.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80', // Pantalla con gráficas/dashboard
    href: '#',
  },
  {
    title: 'Control de Accesos e Instalaciones Inteligentes',
    category: { name: 'Domótica / IoT', color: 'text-emerald-600 bg-emerald-50' },
    description:
      'Implementación de sistemas de automatización integral para la gestión de infraestructura. Centralizamos el control inteligente de luces, monitoreo de cámaras de seguridad, portones y puertas de acceso. Todo operado desde una interfaz unificada para maximizar la seguridad y la eficiencia energética.',
    impact: 'Monitoreo total en tiempo real.',
    imageUrl:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80', // Automatización / Domótica
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Casos de Éxito en Ingeniería</h2>
          <p className="mt-4 text-xl text-gray-500">
            Desde el diseño de tarjetas electrónicas hasta la automatización de procesos gerenciales. Así resolvemos problemas reales en la industria.
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