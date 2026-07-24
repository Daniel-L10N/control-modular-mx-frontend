import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Internet Fibra Óptica (Fibraya)',
    description: 'Instalación de internet de alta velocidad con fibra óptica real a través de Fibraya. Planes desde $249/mes sin contrato.',
  },
  {
    name: 'Instalaciones Eléctricas Domiciliarias',
    description: 'Instalación completa de cableado eléctrico, tableros, tomas de corriente y sistemas de iluminación para tu hogar o negocio.',
  },
  {
    name: 'Reparaciones Eléctricas',
    description: 'Diagnóstico y reparación de cortocircuitos, fallas en tableros, cableado dañado y problemas eléctricos en general.',
  },
  {
    name: 'Instalación de Cámaras de Seguridad',
    description: 'Instalación de sistemas de videovigilancia CCTV para hogares y negocios con monitoreo remoto.',
  },
  {
    name: 'Extensores de Señal AP',
    description: 'Ampliamos la cobertura de tu red WiFi con extensores de acceso para eliminar zonas muertas en tu propiedad.',
  },
  {
    name: 'Instalación de Pantallas/Displays',
    description: 'Montaje e instalación de pantallas, televisores, displays industriales y equipamiento audiovisual.',
  },
  {
    name: 'Soporte Técnico en Sitio',
    description: 'Ubicados en Atenco, Estado de México, garantizamos un tiempo de respuesta rápido y presencia física en tus instalaciones.',
  },
  {
    name: 'Tarjetas PCB Bizerba (Herencia)',
    description: 'Nuestro origen: seguimos con experiencia en electrónica industrial para quien la necesite. Diseño y fabricación de tarjetas de control a la medida para maquinaria industrial Bizerba.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">Lo Que Hacemos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Lo Que Hacemos</p>
          <p className="mt-4 text-lg text-gray-500">
            Empezamos con internet de fibra óptica para la comunidad. Y para lo que se ofrezca en tu casa o negocio, aquí seguimos, creciendo poco a poco.
          </p>
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
