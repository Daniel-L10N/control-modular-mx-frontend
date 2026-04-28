import React from 'react';

const posts = [
  {
    id: 1,
    title: 'SEO vs. GEO: ¿Cómo aparecer en las recomendaciones de la Inteligencia Artificial?',
    href: 'https://www.linkedin.com/posts/daniel-alejandro-lazo-lemus-023a03311_seo-vs-geo-ugcPost-7453343508322590720-OtUD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9ZXFsBSx1KjzoZQVoTzKh8I2els2QhkPQ',
    description:
      '¿Sabías que la IA es la nueva herramienta de confianza para muchos usuarios? Aprende la diferencia entre las búsquedas tradicionales y las respuestas generativas para que tu negocio no sea invisible.',
    date: 'Abr 24, 2026',
    datetime: '2026-04-24',
    category: { title: 'Tecnología', href: '#' },
    author: {
      name: 'Daniel Alejandro Lazo',
      role: 'Especialista en Automatización',
      imageUrl:
        'https://avatars.githubusercontent.com/u/136534872?v=4',
      },
  },
  {
  id: 2,
  title: 'Orquestación de IA y Sistemas Embebidos: El Futuro del Control Modular',
  href: '#',
  description:
    'Explora cómo la integración de modelos de lenguaje locales y flujos de trabajo agénticos está transformando la eficiencia y autonomía en la industria del hardware.',
  date: 'Abr 27, 2026',
  datetime: '2026-04-27',
  category: { title: 'Desarrollo y Hardware', href: '#' },
  author: {
    name: 'Daniel Alejandro Lazo',
    role: 'Especialista en Automatización',
    imageUrl:
      '[https://avatars.githubusercontent.com/u/136534872?v=4](https://avatars.githubusercontent.com/u/136534872?v=4)',
  },
}
  // Puedes agregar más objetos de post aquí en el futuro
  
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Blog de Tecnología
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explora las últimas tendencias en automatización industrial, electrónica y la nueva era de la IA.
          </p>
        </div>

        {/* Sección de Posts */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between border-t border-gray-200 pt-10">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              
              {/* Contenido extraído de tu video */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
                <p><strong>Conceptos clave:</strong></p>
                <ul className="list-disc ml-5 mt-2">
                  <li><strong>SEO:</strong> Respuesta de búsqueda tradicional [1].</li>
                  <li><strong>GEO:</strong> Respuesta directa que nos entrega la IA [1].</li>
                </ul>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA - Call to Action basado en tu video */}
        <div className="mt-20 rounded-2xl bg-gray-900 px-6 py-10 sm:py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Quieres que tu negocio deje de ser invisible?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Suscríbete para aprender cómo lograr un buen SEO y un buen GEO totalmente gratis [1].
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://youtu.be/YvNKbrmgwTE"
              target="_blank"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Ver video en YouTube
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}