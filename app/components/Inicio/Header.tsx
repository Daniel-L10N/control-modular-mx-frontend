"use client";

import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

const navigation = {
  solutions: [
    { name: 'Marketing ', href: '/servicios/marketing' },
    { name: 'Analytics ', href: '/servicios/analytics' },
    { name: 'Commerce ', href: '/servicios/commerce' },
    { name: 'Insights', href: '/servicios/insights' }
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1EPnMYsVsd/',
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
      href: 'https://x.com/Control_Modular',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ControlModularMX/',
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
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-6xl text-indigo-500 leading-tight">
              Control Modular MX <br />
              <span className='text-white'>
                <Typewriter
                  words={['Transforma ideas en productos digitales.', 'Al servicio de usted y de su empresa.', 'Soluciones que tu industria necesita.']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            
            {/* Replaced <p> with <div> to fix hydration error (no <div> inside <p>) */}
            <div className="mt-8 text-white text-xl md:text-2xl max-w-2xl leading-relaxed">
              <p>Para empezar hoy nuestros servicios varían entre:</p>
              <div className="mt-4 flex flex-wrap gap-x-4">
                {navigation.solutions.map((service) => (
                  <span key={service.name} className='lg:text-xl text-md font-medium text-gray-400 hover:text-indigo-400 transition duration-300 border-b-2 border-transparent hover:border-indigo-400'>
                    <Link href={service.href}>{service.name}</Link>
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex gap-6">
              {navigation.social.map((item) => (
                <a key={item.name} target='_blank' href={item.href} className="text-gray-400 hover:text-white transition duration-300">
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
