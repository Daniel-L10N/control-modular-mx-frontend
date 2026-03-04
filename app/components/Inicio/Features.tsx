import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Ingeniería Electrónica (PCB)',
    description: 'Diseño y fabricación de tarjetas de control a la medida para maquinaria industrial y domótica.',
  },
  { 
    name: 'Diseño e Impresión 3D', 
    description: 'Modelado CAD e impresión 3D en materiales de alta resistencia para piezas mecánicas, carcasas y prototipos funcionales.' 
  },
  {
    name: 'Desarrollo de Apps a la Medida',
    description: 'Aplicaciones móviles y web enfocadas en automatizar la gestión y optimizar el flujo técnico de tu planta.',
  },
  { 
    name: 'Interfaces HMI Inteligentes', 
    description: 'Implementación de pantallas táctiles personalizadas para el monitoreo y control de procesos en tiempo real.' 
  },
  { 
    name: 'Mantenimiento Predictivo IoT', 
    description: 'Sistemas de sensores inteligentes que previenen fallas y evitan costosos paros de línea en tu maquinaria.' 
  },
  { 
    name: 'Soberanía de Datos en Nube', 
    description: 'Almacenamiento y bases de datos en servidores seguros para que tu información industrial nunca salga de tu control.' 
  },
  { 
    name: 'Seguridad Industrial Digital', 
    description: 'Cifrado de grado empresarial para proteger la propiedad intelectual, métricas y datos operativos de tu negocio.' 
  },
  { 
    name: 'Soporte Técnico en Sitio', 
    description: 'Ubicados en Atenco, Estado de México, garantizamos un tiempo de respuesta rápido y presencia física en tus instalaciones.' 
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8 border-t border-gray-100">
        
        {/* Lado Izquierdo: Presentación de la Empresa */}
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 uppercase tracking-wide">Control Modular MX</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Soluciones de Ingeniería Integral</p>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Fusionamos el desarrollo de software avanzado, la ingeniería electrónica y la fabricación 3D para digitalizar y automatizar tu industria de punta a punta.
          </p>
          
          <div className="mt-8">
            <div className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
              Socio tecnológico de MFS Ingeniería
            </div>
          </div>
        </div>

        {/* Lado Derecho: Grid de Características */}
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200 group">
                <dt>
                  {/* Icono con un ligero efecto hover para darle más vida */}
                  <CheckIcon className="absolute h-6 w-6 text-indigo-500 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500 leading-relaxed">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  )
}