import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navegacion/Navbar";
import Footer from "@/app/components/Navegacion/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Control Modular MX | Tarjeta Rebanadora Bizerba e Ingeniería Industrial",
  description: "Especialistas en Tarjeta Bizerba y refacciones electrónicas. Diseño de tarjetas PCB, automatización de procesos y software industrial en México.",
  keywords: ["Tarjeta Bizerba", "Tarjeta Rebanadora Bizerba", "Bizerba México", "Refacciones Bizerba", "Control Modular MX", "Diseño PCB", "Automatización Industrial"],
  metadataBase: new URL('https://controlmodularmx.com'),
  alternates: {
    canonical: 'https://controlmodularmx.com',
  },
  verification: {
    google: 'GSC-verification-code', // Reemplazar con código real de GSC
  },
  openGraph: {
    title: 'Control Modular MX | Tarjeta Rebanadora Bizerba',
    description: 'Especialistas en Tarjeta Bizerba y refacciones electrónicas industriales.',
    url: 'https://controlmodularmx.com',
    siteName: 'Control Modular MX',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Tarjeta Rebanadora Bizerba - Control Modular MX',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control Modular MX | Tarjeta Rebanadora Bizerba',
    description: 'Especialistas en Tarjeta Bizerba y refacciones electrónicas industriales.',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80'],
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
