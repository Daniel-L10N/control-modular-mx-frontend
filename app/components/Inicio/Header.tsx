"use client";

import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

const navigation = {
  solutions: [
    { name: 'Electricidad', href: '/servicios' },
    { name: 'Internet (Fibraya)', href: 'https://fibraya.vercel.app', external: true },
    { name: 'Cámaras', href: '/servicios' },
    { name: 'Domótica', href: '/servicios' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Header() {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-slate-900 text-white overflow-hidden relative">
      {/* Background Cube - Absolute Positioned to not affect flow */}
      <div className='hidden lg:flex absolute right-10 xl:right-40 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-50 xl:opacity-100'>
        <div className="cube-container">
          <div className="cube-box">
            <div className="cube"></div>
          </div>
        </div>
      </div>

      <div className="relative px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-full xl:mx-12 py-20 sm:py-32 lg:py-48">
          <div className="max-w-4xl">
            {/* Superior Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                🔆 Fibra óptica local · Ejidos de Tequisistlán, Atenco
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-6xl text-white leading-tight">
              Control Modular MX
            </h1>

            {/* Immediate Subtitle */}
            <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-400">
              Conectando a las familias
            </p>

            {/* Explanatory Text */}
            <p className="mt-6 text-white text-lg md:text-xl max-w-2xl leading-relaxed">
              Empezamos llevando internet de fibra óptica real a nuestra comunidad con FibraYa. Y para lo que se ofrezca en tu casa — una instalación eléctrica, cámaras, una lámpara que no prende — aquí estamos también.
            </p>

            {/* Typewriter */}
            <div className="mt-8 text-white text-xl md:text-2xl max-w-2xl leading-relaxed">
              <Typewriter
                words={[
                  'Internet de fibra óptica FibraYa.',
                  'Instalaciones y reparaciones eléctricas.',
                  'Cámaras de seguridad.',
                  'Cualquier chambita técnica que se ofrezca.'
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>

            {/* Featured FibraYa Card */}
            <div className="mt-10 max-w-2xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔆</span>
                <h3 className="text-xl font-bold text-white">FibraYa — Internet de Fibra Óptica</h3>
              </div>
              <p className="text-lg text-slate-300 mb-6">
                Desde $249/mes · Instalación $200 · Sin contrato
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://fibraya.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors"
                >
                  Ver planes de internet →
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-medium text-white border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Cotizar otro servicio →
                </Link>
              </div>
            </div>
            
            {/* Small Links */}
            <div className="mt-10 flex flex-wrap gap-x-6">
              {navigation.solutions.map((service) => (
                service.external ? (
                  <a
                    key={service.name}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-md font-medium text-gray-400 hover:text-indigo-400 transition duration-300 border-b-2 border-transparent hover:border-indigo-400'
                  >
                    {service.name}
                  </a>
                ) : (
                  <span key={service.name} className='text-md font-medium text-gray-400 hover:text-indigo-400 transition duration-300 border-b-2 border-transparent hover:border-indigo-400'>
                    <Link href={service.href}>{service.name}</Link>
                  </span>
                )
              ))}
            </div>
            
            {/* Social Media */}
            <div className="mt-8 flex gap-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition duration-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
