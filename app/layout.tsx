import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navegacion/Navbar";
import Footer from "@/app/components/Navegacion/Footer";

export const metadata: Metadata = {
  title: "Control Modular MX | Ingeniería Industrial y Electrónica",
  description: "Diseño de tarjetas PCB, automatización de procesos y software industrial en el Estado de México.",
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