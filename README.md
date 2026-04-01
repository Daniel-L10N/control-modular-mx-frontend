# Control Modular MX - Frontend

Sitio web oficial y plataforma de gestión para **Control Modular MX**, empresa especializada en diseño de tarjetas electrónicas (PCB), desarrollo de software industrial y domótica.

## 🛠 Stack Tecnológico

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend / API:** Django / Django REST Framework
- **Iconos y UI:** Heroicons

## 🚀 Configuración de API

El frontend consume datos del backend. Configura la URL de la API:

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Desarrollo local (backend en localhost)
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Producción (Servidor Tailscale)
NEXT_PUBLIC_API_URL=https://cmxserver.curlew-vector.ts.net/cmx/api
```

### Despliegue en Vercel

En el dashboard de Vercel, añade la variable de entorno:

```
NEXT_PUBLIC_API_URL=https://cmxserver.curlew-vector.ts.net/cmx/api
```

## 📡 Endpoints del Backend

| Recurso | Endpoint |
|---------|----------|
| Productos | `/api/catalogo/productos/` |
| Categorías | `/api/catalogo/categorias/` |
| Producto específico | `/api/catalogo/productos/{slug}/` |
| Productos relacionados | `/api/catalogo/productos/relacionados/{categoria}/` |
| Info empresa | `/api/empresa/info/` |

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar producción local
npm start
```

## 🔗 Dominios

- **Frontend:** https://controlmodularmx.com
- **Backend API:** https://cmxserver.curlew-vector.ts.net/cmx/api

## 📁 Estructura

```
app/
├── lib/config.ts          # Configuración de API
├── page.tsx              # Página principal
├── productos/            # Catálogo de productos
│   ├── page.tsx          # Listado
│   └── tarjeta-rebanadora-bizerba/  # Detalle producto
├── nosotros/page.tsx      # Página nosotros (datos desde API)
└── contacto/page.tsx     # Página de contacto
```

## 🔒 Seguridad

- CORS configurado para permitir peticiones desde dominios específicos
- Tokens CSRF en formularios del admin
- Variables de entorno para configuración sensible
