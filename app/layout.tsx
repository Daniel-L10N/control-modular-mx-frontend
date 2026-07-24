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
  description: "Instalaciones eléctricas domiciliarias, reparaciones eléctricas, internet fibra óptica Fibraya, cámaras de seguridad, extensores AP y soluciones industriales en Atenco y Estado de México.",
  keywords: ["instalaciones eléctricas", "reparaciones eléctricas", "fibra óptica", "internet Fibraya", "cámaras de seguridad", "extensores AP", "instalación de pantallas", "ingeniería eléctrica", "Control Modular MX", "Tarjeta Bizerba", "Diseño PCB", "Atenco Estado de México"],
  verification: {
    google: "Unsax41OkawvIslWNHGKUNDEXo4iQH6VQE8Yzeo5yi4",
  },
  openGraph: {
    title: 'Control Modular MX | Ingeniería Eléctrica, Internet y Soluciones Industriales',
    description: 'Instalaciones eléctricas, internet fibra óptica Fibraya, cámaras de seguridad y soluciones industriales en México.',
    url: 'https://controlmodularmx.com',
    siteName: 'Control Modular MX',
    images: [
      {
        url: '/bizerba.png',
        width: 1200,
        height: 630,
        alt: 'Control Modular MX - Ingeniería Eléctrica y Soluciones Industriales',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control Modular MX | Ingeniería Eléctrica, Internet y Soluciones Industriales',
    description: 'Instalaciones eléctricas, internet fibra óptica, cámaras de seguridad y soluciones industriales en México.',
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
