import { Metadata } from "next";
import Link from "next/link";

// 1. Manejo nativo de SEO en Next.js (Sustituye a react-helmet)
export const metadata: Metadata = {
  title: "Servicios y Soluciones | Control Modular MX",
  description: "Desarrollo de tarjetas electrónicas PCB, automatización de software industrial, diseño 3D y domótica en Atenco y el Estado de México.",
};

// 2. Nuestra base de datos de servicios (Sustituye a tus arrays viejos)
const hardwareServices = [
  {
    title: 'Tarjetas PCB a la Medida',
    description: 'Diseño, ruteo y fabricación de circuitos impresos (PCB) industriales. No dependas de proveedores extranjeros.',
    icon: '⚡', // Puedes cambiar esto por imágenes SVG de Heroicons o tus propios assets
  },
  {
    title: 'Retrofitting de Maquinaria',
    description: 'Actualización de electrónica en maquinaria obsoleta o extranjera (ej. Bizerba) para devolverles la vida útil cumpliendo normativas.',
    icon: '⚙️',
  },
  {
    title: 'Interfaces HMI / Pantallas',
    description: 'Implementación de pantallas táctiles robustas para que los operadores controlen la maquinaria de forma intuitiva.',
    icon: '🖥️',
  },
];

const softwareServices = [
  {
    title: 'Automatización de Bitácoras',
    description: 'Sistemas que reducen el trabajo administrativo de 2 horas a 5 minutos. Creación de reportes y cotizaciones con un clic.',
    icon: '📊',
  },
  {
    title: 'Nube Industrial Privada',
    description: 'Tus datos operativos, inventarios y reportes almacenados de forma segura bajo tus propias reglas y servidores.',
    icon: '☁️',
  },
  {
    title: 'Software de Jerarquías',
    description: 'Plataformas de gestión donde cada usuario (operador, gerente, director) tiene accesos y paneles de control específicos.',
    icon: '🔐',
  },
];

const integralServices = [
  {
    title: 'Control de Accesos y Domótica',
    description: 'Automatización de luces inteligentes, cámaras de seguridad y portones manejados desde una aplicación central.',
    icon: '🏢',
  },
  {
    title: 'Diseño e Impresión 3D',
    description: 'Modelado CAD e impresión en materiales de alta resistencia mecánica para carcasas de circuitos o refacciones plásticas.',
    icon: '🖨️',
  },
  {
    title: 'Mantenimiento y Soporte en Sitio',
    description: 'Pólizas de soporte técnico directo en planta para garantizar que tu hardware y software nunca se detengan.',
    icon: '🛠️',
  },
];

// 3. Componente de Tarjeta (Sustituye a ServiceCard.js)
function ServiceCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="w-full relative p-8 bg-white border border-slate-100 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 ease-in-out group">
      <div className="w-full">
        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-base font-normal text-slate-500 mt-4 leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-50">
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
    <main className="bg-slate-50 min-h-screen">
      
      {/* HEADER DE SERVICIOS (Sustituye a tu Header.js) */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        {/* Patrón de fondo tecnológico sutil */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Ingeniería a la Medida
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Desde el circuito impreso hasta la nube. Desarrollamos la infraestructura física y digital que tu industria necesita para operar sin interrupciones ni dependencias externas.
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN 1: Hardware y PCB */}
      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Hardware y Electrónica</h2>
            <p className="mt-4 text-lg text-slate-600">Fabricación y retrofitting de tarjetas de control industrial.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {hardwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: Software Industrial */}
      <div className="py-20 sm:py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Software y Nube</h2>
            <p className="mt-4 text-lg text-slate-600">Sistemas que automatizan horas de trabajo administrativo en segundos.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {softwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: Domótica y 3D */}
      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Sistemas Integrales</h2>
            <p className="mt-4 text-lg text-slate-600">Modelado, impresión 3D y control de edificios inteligentes.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {integralServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* CALL TO ACTION PEQUEÑO */}
      <div className="bg-indigo-600">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Necesitas una solución específica?</span>
            <span className="block text-indigo-200">Hablemos de tu proyecto hoy mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contacto" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">
                Contactar a un Ingeniero
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}