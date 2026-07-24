import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navegacion/Navbar";
import Footer from "@/app/components/Navegacion/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL('https://controlmodularmx.com'),
  alternates: {
    canonical: 'https://controlmodularmx.com',
  },
  title: "Control Modular MX | Ingeniería Eléctrica, Internet y Soluciones Industriales",
  description: "Control Modular MX — Conectando a las familias de Ejidos de Tequisistlán y Atenco. Internet de fibra óptica FibraYa desde $249/mes, instalaciones eléctricas, cámaras de seguridad y cualquier chambita técnica que se ofrezca.",
  keywords: ["instalaciones eléctricas", "reparaciones eléctricas", "fibra óptica", "internet Fibraya", "cámaras de seguridad", "extensores AP", "instalación de pantallas", "ingeniería eléctrica", "Control Modular MX", "Tarjeta Bizerba", "Diseño PCB", "Atenco Estado de México"],
  verification: {
    google: "Unsax41OkawvIslWNHGKUNDEXo4iQH6VQE8Yzeo5yi4",
  },
  openGraph: {
    title: 'Control Modular MX | Conectando a las familias',
    description: 'Control Modular MX — Conectando a las familias de Ejidos de Tequisistlán y Atenco. Internet de fibra óptica FibraYa, instalaciones eléctricas, cámaras de seguridad.',
    url: 'https://controlmodularmx.com',
    siteName: 'Control Modular MX',
    images: [
      {
        url: '/bizerba.png',
        width: 1200,
        height: 630,
        alt: 'Control Modular MX - Conectando a las familias',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control Modular MX | Conectando a las familias',
    description: 'Control Modular MX — Conectando a las familias de Ejidos de Tequisistlán y Atenco. Internet de fibra óptica FibraYa, instalaciones eléctricas, cámaras de seguridad.',
    images: ['/bizerba.png'],
  },
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
