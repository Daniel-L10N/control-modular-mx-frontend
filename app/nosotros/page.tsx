import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros | Control Modular MX",
  description: "Conoce al equipo de ingenieros detrás de Control Modular MX. Especialistas en automatización, diseño PCB y software industrial en Atenco.",
};

// --- DATOS ESTÁTICOS ---

const stats = [
  { label: 'Proyectos Industriales', value: '+50' },
  { label: 'Tarjetas Fabricadas (PCB)', value: '+500' },
  { label: 'Años de Experiencia', value: '+8' },
  { label: 'Soporte Local', value: '24/7' },
];

const values = [
  {
    name: 'Independencia Tecnológica',
    description: 'Creamos soluciones propietarias para que no dependas de refacciones extranjeras costosas ni licencias abusivas.',
  },
  {
    name: 'Precisión Milimétrica',
    description: 'Desde el diseño de un circuito hasta la impresión 3D de una pieza mecánica, trabajamos con tolerancias industriales.',
  },
  {
    name: 'Soporte en Sitio',
    description: 'Nuestra ubicación en Atenco nos permite estar en tu planta físicamente cuando las máquinas lo requieran.',
  },
  {
    name: 'Integración Total',
    description: 'No hacemos parches. Hacemos que tu hardware, tus sensores y tu software hablen el mismo idioma.',
  },
];

const team = [
  {
    name: 'Ing. Daniel',
    role: 'Director de Ingeniería y Hardware',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80', // Cambia por tu foto
  },
  {
    name: 'Equipo de Software',
    role: 'Desarrollo Cloud y Automatización',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Área de Manufactura',
    role: 'Impresión 3D y Ensamblaje',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-white">
      
      {/* 1. HEADER / HERO SECTION */}
      <div className="relative px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Ingeniería real para <span className="text-indigo-500">problemas reales.</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-300">
            No somos una agencia de marketing ni vendedores de plantillas. Somos ingenieros dedicados a modernizar la industria mediante el diseño de circuitos, fabricación 3D y software de automatización.
          </p>
        </div>
      </div>

      {/* 2. MISIÓN Y ESTADÍSTICAS (Sustituye a TestStats.js) */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 px-6">
          
          {/* Imagen de Ingeniería (Lado Izquierdo) */}
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[600px]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80"
                alt="Ingeniero trabajando en componentes electrónicos"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <img className="h-10 mb-4" src="https://tailwindui.com/img/logos/workcation.svg?color=indigo&shade=400" alt="Socio de CMX" />
                <p className="text-gray-300 italic">
                  "Socio tecnológico estratégico para la modernización de infraestructuras industriales en México."
                </p>

              </div>
            </div>
          </div>

          {/* Textos y Stats (Lado Derecho) */}
          <div className="relative mx-auto max-w-md sm:max-w-3xl lg:max-w-none py-12 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Nuestra misión en la planta
            </h2>
            <div className="mt-6 space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Todo comenzó al ver cómo las empresas perdían millones por tener maquinaria detenida, esperando refacciones extranjeras, o cómo los gerentes perdían horas en bitácoras manuales que no aportaban valor.
              </p>
              <p>
                En <strong>Control Modular MX</strong> decidimos cambiar eso. Fusionamos la ingeniería electrónica (PCB) con el desarrollo de software y la manufactura aditiva (Impresión 3D) para darle a las empresas control total sobre sus operaciones operativas y mecánicas.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-slate-100 pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-base font-medium text-slate-500">{stat.label}</dt>
                    <dd className="text-4xl font-extrabold tracking-tight text-indigo-600 mt-1">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NUESTRO ADN TÉCNICO / VALORES (Sustituye a Features.js) */}
      <div className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">El ADN de Control Modular</h2>
            <p className="mt-4 text-lg text-slate-600">
              No somos teóricos. Entendemos la grasa, el ruido y la urgencia de una línea de producción.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <dt className="font-bold text-slate-900 text-lg">{value.name}</dt>
                <dd className="mt-4 text-base text-slate-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* 4. EQUIPO DE TRABAJO (Sustituye a Team.js) */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Quienes lo hacen posible</h2>
              <p className="mt-4 text-lg text-slate-600">
                Detrás de cada tarjeta impresa y cada línea de código hay un equipo de especialistas apasionados por resolver problemas complejos.
              </p>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((person) => (
                <li key={person.name} className="group">
                  <div className="relative overflow-hidden rounded-xl h-72 w-full mb-6">
                    <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src={person.imageUrl} alt={person.name} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                  <p className="text-indigo-600 font-medium mt-1">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 5. CALL TO ACTION FINAL */}
      <div className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Listo para modernizar tus equipos?</span>
            <span className="block text-indigo-400 mt-2">Hablemos de tus necesidades técnicas.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
            <Link href="/contacto" className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600 transition-colors">
              Cotizar Proyecto
            </Link>
            <Link href="/servicios" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent px-6 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 transition-colors">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}