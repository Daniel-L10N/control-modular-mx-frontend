import { Metadata } from "next";
import Link from "next/link";
import { API_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "Nosotros | Control Modular MX",
  description: "Conoce al equipo de ingenieros detrás de Control Modular MX.",
};

async function getNosotros() {
  try {
    const res = await fetch(`${API_URL}/api/nosotros/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching nosotros data:", error);
    return null;
  }
}

async function getEquipo() {
  try {
    const res = await fetch(`${API_URL}/api/nosotros/equipo/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching equipo:", error);
    return [];
  }
}

async function getValores() {
  try {
    const res = await fetch(`${API_URL}/api/nosotros/valores/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching valores:", error);
    return [];
  }
}

export default async function NosotrosPage() {
  const [nosotros, equipo, valores] = await Promise.all([
    getNosotros(),
    getEquipo(),
    getValores(),
  ]);

  if (!nosotros) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-400 animate-pulse font-mono">Cargando información...</p>
      </div>
    );
  }

  return (
    <main className="bg-white">
      
      {/* 1. HERO */}
      <div className="relative px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            {nosotros.hero_titulo}
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-300 max-w-2xl mx-auto">
            {nosotros.hero_descripcion}
          </p>
        </div>
      </div>

      {/* 2. HISTORIA */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 px-6">
          
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[600px] bg-slate-100">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={nosotros.historia_imagen || "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80"}
                alt="Nuestra historia en Control Modular MX"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white font-bold text-lg border-l-4 border-indigo-500 pl-4">
                  Socio tecnológico estratégico en México.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md sm:max-w-3xl lg:max-w-none py-12 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {nosotros.historia_titulo}
            </h2>
            <div className="mt-6 space-y-6 text-slate-600 text-lg leading-relaxed whitespace-pre-line">
              {nosotros.historia_cuerpo}
            </div>

            {(nosotros.mision || nosotros.vision) && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 pt-10">
                {nosotros.mision && (
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Misión</h3>
                    <p className="text-slate-600">{nosotros.mision}</p>
                  </div>
                )}
                {nosotros.vision && (
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Visión</h3>
                    <p className="text-slate-600">{nosotros.vision}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. VALORES */}
      {valores.length > 0 && (
        <div className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Nuestros Valores</h2>
              <p className="mt-4 text-lg text-slate-600">
                La base técnica y ética de cada proyecto que entregamos.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {valores.map((value: any) => (
                <div key={value.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  {value.icono && <div className="text-3xl mb-3">{value.icono}</div>}
                  <dt className="font-bold text-gray-900 text-lg">{value.titulo}</dt>
                  <dd className="mt-4 text-base text-slate-600">{value.descripcion}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}

      {/* 4. EQUIPO */}
      {equipo.length > 0 && (
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Quienes lo hacen posible</h2>
              <p className="mt-4 text-lg text-slate-600">
                Especialistas dedicados a resolver problemas técnicos complejos.
              </p>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {equipo.map((person: any) => (
                <li key={person.id} className="group">
                  <div className="relative overflow-hidden rounded-xl h-80 w-full mb-6 bg-slate-100">
                    <img 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={person.foto_url || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800'} 
                      alt={person.nombre} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{person.nombre}</h3>
                  <p className="text-indigo-600 font-medium mt-1 mb-3">{person.rol}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{person.biografia}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 5. CTA */}
      <div className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Necesitas electricidad, internet o cámaras?</span>
            <span className="block text-indigo-400 mt-2">Hablemos de tu proyecto hoy.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
            <Link href="/contacto" className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600 transition-colors font-bold">
              Contactar
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
