# Control Modular MX - Plataforma Web

Sitio web oficial y plataforma de gestión para **Control Modular MX**, empresa especializada en diseño de tarjetas electrónicas (PCB), desarrollo de software industrial y domótica, ubicada en Atenco, Estado de México.

Actualmente, el sitio público se encuentra en modo **"En Construcción"** para proteger la marca y desvincular temporalmente la imagen de socios estratégicos por motivos de derechos de autor, mientras se prepara el panel administrativo dinámico.

## 🛠 Stack Tecnológico

* **Frontend:** Next.js (App Router), React, Tailwind CSS.
* **Backend / API:** Django / Django REST Framework (Python).
* **Iconos y UI:** Heroicons, React Simple Typewriter.

## 🚀 Infraestructura y Despliegue

La arquitectura del proyecto está dividida para maximizar el rendimiento del frontend y mantener el control total sobre los datos en el backend:

* **Dominio:** Registrado y administrado a través de **Neubox**.
* **Frontend (Next.js):** Desplegado en **Vercel**. Vercel se encarga de compilar y servir la página de forma ultrarrápida utilizando su red global.
* **Backend (Django):** Alojado en un **Servidor Personal Ubuntu** (Mi PC/Servidor propio). 
  * *Dirección del servidor (IP/Dominio):* `[Escribe aquí la IP pública de tu servidor o dominio de la API, ej. 192.168.1.xxx]`
  * Las variables de entorno para conectar el Frontend con este servidor se encuentran en el archivo `.env.local` bajo la variable `NEXT_PUBLIC_API_URL`.

---

## 💻 Entorno de Desarrollo (Getting Started)

Este es un proyecto de [Next.js](https://nextjs.org) inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Para correr el servidor de desarrollo en tu máquina local:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
