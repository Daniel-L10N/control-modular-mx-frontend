// src/app/page.tsx
import React from 'react';

/* Componentes comentados temporalmente para el estado de desarrollo
  import Header from "./components/Inicio/Header";
  import Incentives from "./components/Inicio/Incentives";
  import UseWorks from "./components/Inicio/UseWorks";
  import Features from "./components/Inicio/Features";
  import CTA from "./components/Inicio/CTA";
  import LogoCloud from "./components/Inicio/LogoCloud";
*/

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 overflow-hidden relative">
      
      {/* Elementos decorativos animados de fondo */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="z-10 text-center">
        {/* Icono animado */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg animate-bounce shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Texto de estado */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Sitio en <span className="text-blue-500">Construcción</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          Estamos trabajando para ofrecerte las mejores soluciones en ingeniería y desarrollo de software. 
        </p>

        {/* Barra de progreso animada (Corregida con Tailwind puro) */}
        <div className="mt-10 w-full max-w-xs mx-auto bg-slate-800 h-2 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full w-2/3 animate-pulse rounded-full mx-auto"></div>
        </div>
        
        <p className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
          Control Modular MX • 2026
        </p>
      </div>

      {/* El contenido original se mantiene aquí abajo comentado 
        para que no afecte el renderizado actual:

        <main data-scroll-section className="pt-28">
          <Header />
          <Incentives />
          <UseWorks />
          <Features />
          <CTA />
          <LogoCloud />
        </main>
      */}
    </main>
  );
}