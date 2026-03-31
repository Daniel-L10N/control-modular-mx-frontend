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
      {/* El "Hero" principal donde hablaremos de la dualidad México/Cuba */}
      <Header />
      
      {/* Por qué elegirnos: Soporte técnico robusto y equipo internacional */}
      <Incentives />
      
      {/* Nuestra metodología de trabajo */}
      <UseWorks />
      
      {/* El núcleo: Tarjetas a la medida, Nube, Apps e Interfaces HMI */}
      <Features />
      
      {/* Llamado a la acción: "Solicita una auditoría para tu planta" */}
      <CTA />
      
      {/* Clientes y aliados (Aquí podemos poner a MFS Ingeniería) */}
      <LogoCloud />
      
     
    </main>
  );
}