"use client"; // Necesario para detectar el scroll y el menú móvil

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Soluciones', href: '/' },
  { name: 'Casos de Éxito', href: '/' },
  { name: 'Nosotros', href: '/' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto elegante para cambiar el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="logo-danit text-2xl font-bold tracking-tighter text-white">
              CONTROL<span className="text-indigo-500 font-black">MODULAR</span>
            </Link>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white font-medium text-sm lg:text-base border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="/contacto"
              className="ml-8 inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all duration-300"
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Botón Móvil */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
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
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full top-full left-0 shadow-xl">
          <div className="space-y-1 px-4 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-4 rounded-md bg-indigo-600 px-3 py-3 text-base font-medium text-white hover:bg-indigo-500"
            >
              Cotizar Proyecto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}