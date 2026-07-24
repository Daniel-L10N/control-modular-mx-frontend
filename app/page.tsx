// src/app/page.tsx
import Header from "./components/Inicio/Header";
import Incentives from "./components/Inicio/Incentives";
import UseWorks from "./components/Inicio/UseWorks";
import Features from "./components/Inicio/Features";
import CTA from "./components/Inicio/CTA";
import LogoCloud from "./components/Inicio/LogoCloud";


export default function Home() {
  return (
    <main data-scroll-section>
      {/* Hero principal: Instalaciones eléctricas, internet fibra óptica y soluciones */}
      <Header />
      
      {/* Por qué elegirnos: Instalación rápida, soporte directo, soluciones integrales */}
      <Incentives />
      
      {/* Casos de éxito: Instalaciones eléctricas, Fibraya, cámaras */}
      <UseWorks />
      
      {/* Nuestros servicios: Electricidad, internet, cámaras, pantallas, ingeniería */}
      <Features />
      
      {/* Llamado a la acción */}
      <CTA />
      
      {/* Aliados y marcas: CMX, Bizerba, Fibraya */}
      <LogoCloud />
      
     
    </main>
  );
}