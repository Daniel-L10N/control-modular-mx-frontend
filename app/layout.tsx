import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navegacion/Navbar";
import Footer from "@/app/components/Navegacion/Footer";

export const metadata: Metadata = {
  title: "Control Modular MX | Tarjeta Rebanadora Bizerba e Ingeniería Industrial",
  description: "Especialistas en Tarjeta Bizerba y refacciones electrónicas. Diseño de tarjetas PCB, automatización de procesos y software industrial en México.",
  keywords: ["Tarjeta Bizerba", "Tarjeta Rebanadora Bizerba", "Bizerba México", "Refacciones Bizerba", "Control Modular MX", "Diseño PCB", "Automatización Industrial"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-white selection:bg-indigo-500 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
