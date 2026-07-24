// src/components/home/Incentives.tsx

const incentives = [
  {
    title: 'Instalación Rápida (24-48 hrs)',
    imageSrc: '/icons/icon-shipping-simple.svg',
    description: "Conectamos tu hogar o negocio en 24-48 horas. Internet fibra óptica Fibraya, instalaciones eléctricas y sistemas de cámaras listos en tiempo récord.",
  },
  {
    title: 'Soporte Directo por WhatsApp',
    imageSrc: '/icons/icon-warranty-simple.svg',
    description: "Sin intermediarios. Habla directamente con un ingeniero por WhatsApp para resolver cualquier duda, cotización o problema técnico de forma inmediata.",
  },
  {
    title: 'Soluciones Integrales',
    imageSrc: '/icons/icon-exchange-simple.svg',
    description: "Electricidad + internet + seguridad + pantallas. Un solo proveedor para todas las necesidades técnicas de tu hogar o negocio. Sin complicaciones.",
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              ¿Por qué elegir Control Modular MX?
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              No somos solo vendedores, somos ingenieros que instalan, reparan y dan soporte directo. Desde instalaciones eléctricas hasta internet fibra óptica, tu proyecto está en buenas manos.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.title} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-lg font-medium text-gray-900">{incentive.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}