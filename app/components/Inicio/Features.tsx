import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Instalaciones Eléctricas Domiciliarias',
    description: 'Instalación completa de cableado eléctrico, tableros, tomas de corriente y sistemas de iluminación para tu hogar o negocio.',
  },
  {
    name: 'Reparaciones Eléctricas',
    description: 'Diagnóstico y reparación de cortocircuitos, fallas en tableros, cableado dañado y problemas eléctricos en general.',
  },
  {
    name: 'Internet Fibra Óptica (Fibraya)',
    description: 'Instalación de internet de alta velocidad con fibra óptica real a través de Fibraya. Planes desde $249/mes sin contrato.',
  },
  {
    name: 'Extensadores de Señal AP',
    description: 'Ampliamos la cobertura de tu red WiFi con extensores de acceso para eliminar zonas muertas en tu propiedad.',
  },
  {
    name: 'Instalación de Cámaras de Seguridad',
    description: 'Instalación de sistemas de videovigilancia CCTV para hogares y negocios con monitoreo remoto.',
  },
  {
    name: 'Instalación de Pantallas/Displays',
    description: 'Montaje e instalación de pantallas, televisores, displays industriales y equipamiento audiovisual.',
  },
  {
    name: 'Tarjetas PCB Bizerba (Herencia)',
    description: 'Diseño y fabricación de tarjetas de control a la medida para maquinaria industrial Bizerba. Nuestro legado de ingeniería electrónica.',
  },
  {
    name: 'Soporte Técnico en Sitio',
    description: 'Ubicados en Atenco, Estado de México, garantizamos un tiempo de respuesta rápido y presencia física en tus instalaciones.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">Soluciones</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Ingeniería Integral</p>
          <p className="mt-4 text-lg text-gray-500">
            Instalaciones eléctricas, internet fibra óptica, cámaras de seguridad y soluciones industriales. Todo lo que tu hogar o negocio necesita en un solo lugar.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Socio tecnológico de CMX
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}