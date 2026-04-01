"use client";

import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/525525686595?text=Hola%20ingenieros%20de%20Control%20Modular,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <ChatBubbleLeftIcon className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}
