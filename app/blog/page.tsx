import { Metadata } from "next";
import Link from "next/link";
import { API_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "Blog | Control Modular MX",
  description: "Artículos sobre instalaciones eléctricas, internet fibra óptica, seguridad y tecnología.",
};

async function getBlogPosts() {
  try {
    const res = await fetch(`${API_URL}/api/blog/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

const categoriaColors: Record<string, string> = {
  electricidad: "bg-yellow-50 text-yellow-700",
  internet: "bg-cyan-50 text-cyan-700",
  seguridad: "bg-red-50 text-red-700",
  ingenieria: "bg-indigo-50 text-indigo-700",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Artículos sobre instalaciones eléctricas, internet fibra óptica, seguridad y tecnología.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg italic">Próximamente publicaremos artículos útiles.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {posts.map((post: any) => (
              <article
                key={post.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {post.imagen_url && (
                  <div className="overflow-hidden">
                    <img
                      src={post.imagen_url}
                      alt={post.titulo}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${categoriaColors[post.categoria] || 'bg-gray-50 text-gray-700'}`}>
                      {post.categoria}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(post.fecha_creacion).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 leading-tight">{post.titulo}</h2>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed flex-1">{post.resumen}</p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-500 flex items-center gap-2">
                      Leer más
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
