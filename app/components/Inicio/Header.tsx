"use client";

import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

const navigation = {
  solutions: [
    { name: 'Hardware PCB', href: '/servicios#hardware' },
    { name: 'Nube Privada', href: '/servicios#nube' },
    { name: 'Apps a Medida', href: '/servicios#software' },
    { name: 'Pantallas HMI', href: '/servicios#pantallas' }
  ],
};

export default function Header() {
  return (
    <header className="relative bg-[#0B1014] text-white min-h-[90vh] flex items-center border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 lg:py-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: MENSAJE CLARO Y PROFESIONAL */}
          <div className="z-10 flex flex-col text-center lg:text-left">
            
            <p className="text-sm font-semibold tracking-widest text-indigo-500 uppercase mb-4">
              Control Modular MX
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Ingeniería Integral <br />
              <span className="text-indigo-400 min-h-[60px] sm:min-h-[72px] lg:min-h-[80px] block mt-2">
                <Typewriter
                  words={[
                    'con talento internacional.', 
                    'a tu medida.', 
                    'y digitalización industrial.'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2500}
                />
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Empresa 50% mexicana y 50% extranjera. Optimizamos y automatizamos los procesos críticos de tu industria con tecnología de punta.
            </p>

            {/* Navegación limpia estilo menú corporativo */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {navigation.solutions.map((service) => (
                <Link 
                  key={service.name} 
                  href={service.href}
                  className="text-slate-300 hover:text-white font-medium text-lg border-b border-transparent hover:border-indigo-500 transition-all duration-300 pb-1"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: ANIMACIÓN DEL CUBO 3D */}
          <div className="relative flex justify-center items-center h-[400px] w-full">
            <div className="flex md:min-h-full sm:min-h-screen sm:mb-20 sm:mt-28 sm:mr-60 md:mb--20 mb-60">
              <div className="container">
                <div className="box md:ml-96 md:mt-60 mt-56">
                  <div className="cube"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}