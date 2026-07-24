import { Metadata } from "next";
import Link from "next/link";
import { API_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "Trabajos Realizados | Control Modular MX",
  description: "Instalaciones eléctricas, internet fibra óptica y sistemas de seguridad para hogares y negocios.",
};

async function getTrabajos() {
  try {
    const res = await fetch(`${API_URL}/api/trabajos/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching trabajos:", error);
    return [];
  }
}

const categoriaColors: Record<string, string> = {
  electrical: "bg-yellow-50 text-yellow-700",
  internet: "bg-cyan-50 text-cyan-700",
  cameras: "bg-red-50 text-red-700",
  industrial: "bg-indigo-50 text-indigo-700",
};

export default async function TrabajosPage() {
  const trabajos = await getTrabajos();

  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Trabajos Realizados
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Instalaciones eléctricas, internet fibra óptica y sistemas de seguridad para hogares y negocios.
          </p>
        </div>

        {/* Trabajos Grid */}
        {trabajos.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg italic">Próximamente mostraremos nuestros proyectos realizados.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {trabajos.map((trabajo: any) => (
              <div
                key={trabajo.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {trabajo.imagen_url && (
                  <div className="overflow-hidden">
                    <img
                      src={trabajo.imagen_url}
                      alt={trabajo.titulo}
                      className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${categoriaColors[trabajo.categoria] || 'bg-gray-50 text-gray-700'}`}>
                      {trabajo.categoria}
                    </span>
                    {trabajo.destacado && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                        ⭐ Destacado
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">{trabajo.titulo}</h2>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">{trabajo.descripcion_corta}</p>
                  {trabajo.tecnologias && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {trabajo.tecnologias.split(',').map((tech: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  {trabajo.fecha_proyecto && (
                    <p className="mt-4 text-sm text-gray-400">
                      {new Date(trabajo.fecha_proyecto).toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
