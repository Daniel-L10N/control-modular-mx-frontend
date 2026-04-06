// src/components/home/Incentives.tsx

const incentives = [
  {
    title: 'Prototipado Electrónico Ágil',
    imageSrc: '/icons/icon-shipping-simple.svg',
    description: "No dependas de refacciones genéricas. Diseñamos y fabricamos tarjetas PCB a la medida exacta de tu maquinaria, listas para pruebas funcionales en tiempo récord.",
  },
  {
    title: 'Automatización a Medida',
    imageSrc: '/icons/icon-warranty-simple.svg',
    description: "Eliminamos las libretas y los procesos manuales. Desarrollamos software que se comunica directamente con tu hardware para automatizar tareas repetitivas y generar reportes precisos.",
  },
  {
    title: 'Soporte Técnico en Planta',
    imageSrc: '/icons/icon-exchange-simple.svg',
    description: "Al estar ubicados estratégicamente en Atenco, ofrecemos tiempos de respuesta inmediatos para mantenimiento predictivo y soporte directo en tus instalaciones.",
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              ¿Por qué digitalizar tu industria con nosotros?
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Vamos más allá de la simple instalación. Analizamos tu proceso operativo para detectar cuellos de botella y creamos el hardware y software necesario para que tu personal se enfoque en lo técnico, no en lo administrativo.
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