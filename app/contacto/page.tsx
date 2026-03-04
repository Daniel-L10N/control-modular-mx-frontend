"use client";

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  // Aquí prepararemos la función para el Backend más adelante
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío al backend (Aquí conectaremos tu API)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      // e.currentTarget.reset(); // Limpiar formulario
    }, 1500);
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      
      {/* HEADER DE CONTACTO */}
      <div className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Diseñemos el futuro de tu planta
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            ¿Tienes un problema de automatización, requieres desarrollo de hardware a la medida o necesitas digitalizar tus procesos? Hablemos de ingeniería.
          </p>
        </div>
      </div>

      {/* SECCIÓN PRINCIPAL: Info y Formulario */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN DIRECTA */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Información de Contacto
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nuestro equipo de ingeniería binacional está listo para analizar tus requerimientos técnicos y ofrecerte una solución escalable.
            </p>

            <dl className="mt-10 space-y-8">
              {/* WhatsApp (Botón de Acción Directa) */}
              <div className="flex gap-x-4 items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
                <dt className="flex-none">
                  <span className="sr-only">WhatsApp</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                    <PhoneIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                </dt>
                <dd>
                  <p className="text-sm font-semibold text-slate-900">Soporte y Ventas Inmediatas</p>
                  <a 
                    href="https://wa.me/525525686595?text=Hola%20ingenieros%20de%20Control%20Modular,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-green-600 hover:text-green-500 mt-1 block"
                  >
                    +52 552 568 6595
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Lunes a Viernes de 9:00am a 6:00pm</p>
                </dd>
              </div>

              {/* Correo Electrónico */}
              <div className="flex gap-x-4 items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <dt className="flex-none">
                  <span className="sr-only">Correo electrónico</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                </dt>
                <dd>
                  <p className="text-sm font-semibold text-slate-900">Envíanos tus especificaciones</p>
                  <a href="mailto:controlmodularmx@gmail.com" className="text-lg font-bold text-indigo-600 hover:text-indigo-500 mt-1 block">
                    controlmodularmx@gmail.com
                  </a>
                </dd>
              </div>

              {/* Ubicación */}
              <div className="flex gap-x-4 items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <dt className="flex-none">
                  <span className="sr-only">Ubicación</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                    <MapPinIcon className="h-6 w-6 text-slate-600" aria-hidden="true" />
                  </div>
                </dt>
                <dd>
                  <p className="text-sm font-semibold text-slate-900">Oficinas Centrales</p>
                  <p className="text-lg font-medium text-slate-700 mt-1">Atenco, Estado de México</p>
                  <p className="text-sm text-slate-500 mt-1">Cobertura nacional e internacional</p>
                </dd>
              </div>
            </dl>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DE PROYECTO */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Recibido!</h3>
                <p className="text-slate-600">
                  Un ingeniero de nuestro equipo analizará tu solicitud y se pondrá en contacto contigo a la brevedad.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 px-6 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-900">Nombre completo</label>
                    <input type="text" id="nombre" name="nombre" required
                      className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                      placeholder="Ej. Ing. Daniel"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-slate-900">Empresa / Industria</label>
                    <input type="text" id="empresa" name="empresa" required
                      className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900">Correo electrónico</label>
                    <input type="email" id="email" name="email" required
                      className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-slate-900">Teléfono (WhatsApp)</label>
                    <input type="tel" id="telefono" name="telefono"
                      className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                      placeholder="+52 55..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-slate-900">Tipo de Servicio Requerido</label>
                  <select id="servicio" name="servicio" className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white">
                    <option>Desarrollo de Hardware (PCB)</option>
                    <option>Software Industrial / Nube</option>
                    <option>Domótica y Control de Accesos</option>
                    <option>Diseño e Impresión 3D</option>
                    <option>Mantenimiento o Soporte</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-900">Detalles técnicos del proyecto</label>
                  <textarea id="mensaje" name="mensaje" rows={4} required
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    placeholder="Describe el problema a resolver o las especificaciones técnicas..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-indigo-600 px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-70 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : 'Enviar Solicitud'}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
}