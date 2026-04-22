import Link from 'next/link';

const projects = [
  {
    title: 'Real-Time Logistics Insight Platform',
    category: { name: 'Data Analytics / Full-Stack', color: 'text-indigo-600 bg-indigo-50' },
    description:
      'We developed a custom SaaS dashboard for a regional logistics provider. The platform aggregates data from fleet GPS and warehouse inventory, converting raw numbers into actionable "Insights" for decision-makers.',
    impact: '30% reduction in fuel costs through route optimization.',
    imageUrl:
      '/icons/Logistics_platform.png', // Placa electrónica / tecnología
    href: '#',
  },
  {
    title: 'Full-Stack E-Commerce / Digital Transformation',
    category: { name: 'Category: Full-Stack E-Commerce / Digital Transformation', color: 'text-cyan-600 bg-cyan-50' },
    description:
      'A high-performance digital storefront engineered for maximum speed and conversion. It features a proprietary Real-Time Management System that achieves millisecond-level synchronization between physical branch inventory and the web platform. Additionally, it integrates an Automated Sales Logistics module that streamlines the entire fulfillment cycle—from checkout to final delivery—eliminating manual errors and bottlenecks.',
    impact: 'Seamless omnichannel operations with 100% stock accuracy and a significantly reduced order processing time.',
    imageUrl:
      '/img/e-commerce.png', // E-commerce / Digitalización
    href: '#',
  },
  {
    title: 'Industrial Retrofitting & Logic Control',
    category: { name: 'Hardware Engineering / Industrial IoT', color: 'text-emerald-600 bg-emerald-50' },
    description:
      'We designed a custom logic board for Bizerba industrial cutters, replacing obsolete German components with a locally manufactured, high-performance solution. This project involved reverse-engineering complex industrial logic to maintain 100% operational accuracy.',
    impact: ' Extended equipment lifespan by 10+ years while providing the market with high-quality logic boards at only 1/4 of the original manufacturer s cost.',
    imageUrl:
      '/bizerba.png', // Automatización / Domótica
    href: 'https://bizerba-refacciones.vercel.app/',
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
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  <img className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" src={project.imageUrl} alt={project.title} />
                  </a>
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