"use client"; // Necesario para detectar el scroll y el menú móvil

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Trabajos', href: '/trabajos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para cambiar el fondo al hacer scroll (estilo company_portfolio)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-navbar py-4' 
          : 'bg-slate-900/90 backdrop-blur-sm py-6 border-b border-slate-800'
      }`}
    >
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          {/* LOGO */}
          <Link href="/" className="ml-4 mt-2 logo-danit text-2xl font-bold tracking-tighter">
            <span className={isScrolled ? 'text-slate-900' : 'text-white'}>
              CONTROL<span className="text-indigo-500 font-black">MODULAR</span>
            </span>
          </Link>

          {/* Menú de Escritorio */}
          <div id="menu" className={`ml-4 mt-2 flex-shrink-0 flex items-center ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg inline-flex font-medium leading-6 border-b-2 border-transparent hover:border-indigo-500 transition duration-300 ease-in-out mx-4"
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="/contacto"
              className="inline-flex ml-8 items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              Solicitar
            </Link>
          </div>
        </div>

        {/* Menú Móvil */}
        <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link href="/" className="ml-4 mt-2">
            <span className={`logo-danit text-xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              CONTROL<span className="text-indigo-500 font-black">MODULAR</span>
            </span>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? 'text-slate-900 p-2' : 'text-white p-2'}
            >
              <span className="sr-only">Abrir menú</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full top-full left-0 shadow-xl">
          <div className="space-y-1 px-4 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-slate-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-4 rounded-md bg-indigo-600 px-3 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Solicitar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}