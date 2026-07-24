// src/components/home/Incentives.tsx

const incentives = [
  {
    title: 'Instalación Rápida (24-48 hrs)',
    imageSrc: '/icons/icon-shipping-simple.svg',
    description: "Conectamos tu hogar en 24-48 horas con internet FibraYa. Para electricidad y cámaras, coordinamos contigo el tiempo que tu proyecto necesite.",
  },
  {
    title: 'Soporte Directo por WhatsApp',
    imageSrc: '/icons/icon-warranty-simple.svg',
    description: "Sin intermediarios. Habla directamente con un ingeniero por WhatsApp para resolver cualquier duda, cotización o problema técnico de forma inmediata.",
  },
  {
    title: 'Creciendo con la Comunidad',
    imageSrc: '/icons/icon-exchange-simple.svg',
    description: "Internet, electricidad, cámaras y lo que se ofrezca. Conforme crecemos, sumamos más formas de ayudar a nuestros vecinos.",
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
              Somos de aquí, de Ejidos de Tequisistlán. No prometemos más de lo que podemos cumplir — empezamos con internet de fibra óptica y vamos creciendo poco a poco, atendiendo lo que la comunidad necesite.
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
