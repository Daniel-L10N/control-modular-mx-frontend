import { Metadata } from "next";
import Link from "next/link";

// 1. Manejo nativo de SEO en Next.js (Sustituye a react-helmet)
export const metadata: Metadata = {
  title: "Servicios | Internet Fibra Óptica FibraYa, Electricidad, Cámaras | Control Modular MX",
  description: "Internet de fibra óptica FibraYa, instalaciones eléctricas, cámaras de seguridad y cualquier chambita técnica en Atenco y Ejidos de Tequisistlán, Estado de México.",
};

// 2. Nuestra base de datos de servicios
const internetServices = [
  {
    title: 'Internet Fibra Óptica Fibraya',
    description: 'Instalación de internet de alta velocidad con fibra óptica real a través de Fibraya. Planes desde $249/mes sin contrato. Cobertura en Ejidos de Tequisistlán y zonas aledañas.',
    icon: '🌐',
  },
  {
    title: 'Extensores de Señal AP',
    description: 'Ampliamos la cobertura de tu red WiFi con extensores de acceso para eliminar zonas muertas en tu hogar o negocio.',
    icon: '📡',
  },
  {
    title: 'Configuración de Red',
    description: 'Configuración de routers, redes mesh, segregación de redes WiFi y optimización de velocidad para dispositivos múltiples.',
    icon: '🔗',
  },
];

const electricidadServices = [
  {
    title: 'Instalaciones Eléctricas Domiciliarias',
    description: 'Instalación completa de cableado eléctrico, tableros, tomas de corriente, interruptores y sistemas de iluminación para casas y departamentos nuevos o en remodelación.',
    icon: '⚡',
  },
  {
    title: 'Reparaciones Eléctricas',
    description: 'Diagnóstico y reparación de cortocircuitos, fallas en tableros, cableado dañado, apagones intermitentes y problemas eléctricos en general.',
    icon: '🔧',
  },
  {
    title: 'Tableros y Cableado',
    description: 'Instalación y actualización de tableros eléctricos con protecciones termomagnéticas, GFCI y cableado de alta calidad certificado.',
    icon: '🔌',
  },
];

const seguridadServices = [
  {
    title: 'Cámaras de Seguridad CCTV',
    description: 'Instalación de sistemas de videovigilancia para hogares y negocios con cámaras HD, IP y analógicas. Monitoreo remoto desde tu celular.',
    icon: '📹',
  },
  {
    title: 'Sistemas de Monitoreo',
    description: 'Configuración de sistemas de grabación DVR/NVR, almacenamiento en la nube y acceso remoto para vigilancia 24/7.',
    icon: '🖥️',
  },
  {
    title: 'Alarmas y Sensores',
    description: 'Instalación de alarmas inalámbricas, sensores de movimiento, apertura de puertas y alertas automáticas por WhatsApp.',
    icon: '🚨',
  },
];

const pantallasServices = [
  {
    title: 'Instalación de Pantallas',
    description: 'Montaje profesional de pantallas, televisores, displays industriales y equipamiento audiovisual en paredes, soportes y estructuras.',
    icon: '📺',
  },
  {
    title: 'Pantallas Industriales',
    description: 'Instalación de displays para punto de venta, señalización digital, menús electrónicos y pantallas interactivas para negocios.',
    icon: '🖥️',
  },
  {
    title: 'Equipamiento Audiovisual',
    description: 'Instalación de proyectores, sistemas de sonido, barras de sonido y configuración de entretenimiento en hogares y salas de juntas.',
    icon: '🔊',
  },
];

const ingenieriaServices = [
  {
    title: 'Tarjetas PCB Bizerba',
    description: 'Diseño, ruteo y fabricación de tarjetas de control a la medida para maquinaria industrial Bizerba y otros equipos especializados.',
    icon: '🔧',
  },
  {
    title: 'Automatización Industrial',
    description: 'Desarrollo de soluciones de automatización para procesos industriales, control de maquinaria y sistemas de monitoreo.',
    icon: '⚙️',
  },
  {
    title: 'Soporte Técnico en Sitio',
    description: 'Ubicados en Atenco, Estado de México, ofrecemos soporte técnico directo en tus instalaciones para resolver cualquier problema.',
    icon: '🛠️',
  },
];

// 3. Componente de Tarjeta (Sustituye a ServiceCard.js)
function ServiceCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="w-full relative p-8 bg-white border border-gray-200 rounded-xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out group">
      <div className="w-full">
        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-base font-normal text-gray-500 mt-4 leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100">
        <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-500 flex items-center gap-2">
          Solicitar información
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

// 4. La Página Principal de Servicios
export default function ServiciosPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* HEADER DE SERVICIOS */}
      <div className="bg-slate-900 text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Conectando a las Familias de Nuestra Comunidad
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Internet de fibra óptica FibraYa, instalaciones eléctricas, cámaras de seguridad y cualquier chambita técnica que se ofrezca. Vamos creciendo poco a poco, junto a ustedes.
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN 1: Internet Fibra Óptica (Fibraya) */}
      <div className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Internet Fibra Óptica (Fibraya)</h2>
            <p className="mt-4 text-lg text-gray-600">Conexión de alta velocidad sin contrato con Fibraya. Planes desde $249/mes.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {internetServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://fibraya.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              Ver planes completos y contratar →
            </a>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: Electricidad */}
      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Electricidad</h2>
            <p className="mt-4 text-lg text-gray-600">Instalaciones eléctricas domiciliarias, reparaciones y tableros de alta calidad.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {electricidadServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: Seguridad */}
      <div className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Seguridad y Videovigilancia</h2>
            <p className="mt-4 text-gray-600">Cámaras CCTV, sistemas de monitoreo y alarmas para proteger tu hogar o negocio.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {seguridadServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: Pantallas */}
      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pantallas y Audiovisual</h2>
            <p className="mt-4 text-lg text-gray-600">Instalación de pantallas, displays industriales y equipamiento audiovisual.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {pantallasServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN 5: Ingeniería (Herencia) */}
      <div className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro Origen: Electrónica Industrial</h2>
            <p className="mt-4 text-lg text-gray-600">De ahí venimos. Seguimos disponibles para quien lo necesite, aunque hoy nuestro enfoque principal es la comunidad. Tarjetas PCB Bizerba, automatización industrial y soporte técnico especializado.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {ingenieriaServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Necesitas una instalación o servicio?</span>
            <span className="block text-indigo-600">Hablemos de tu proyecto hoy mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contacto" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">
                Contactar a un Ingeniero
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
