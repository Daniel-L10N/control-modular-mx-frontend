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
  title: "Control Modular MX | Tarjeta Rebanadora Bizerba e Ingeniería Industrial",
  description: "Especialistas en Tarjeta Bizerba y refacciones electrónicas. Diseño de tarjetas PCB, automatización de procesos y software industrial en México.",
  keywords: ["Tarjeta Bizerba", "Tarjeta Rebanadora Bizerba", "Bizerba México", "Refacciones Bizerba", "Control Modular MX", "Diseño PCB", "Automatización Industrial"],
  verification: {
    google: "Unsax41OkawvIslWNHGKUNDEXo4iQH6VQE8Yzeo5yi4",
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Control Modular MX | Tarjeta Rebanadora Bizerba',
    description: 'Especialistas en Tarjeta Bizerba y refacciones electrónicas industriales.',
    url: 'https://controlmodularmx.com',
    siteName: 'Control Modular MX',
      images: [
      {
        url: '/bizerba.png',
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
