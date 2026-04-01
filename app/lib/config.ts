// Configuración de API para Control Modular MX
// 
// Desarrollo local:
// NEXT_PUBLIC_API_URL=http://localhost:8000/api
//
// Producción (Tailscale):
// NEXT_PUBLIC_API_URL=https://cmxserver.curlew-vector.ts.net/cmx/api

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://cmxserver.curlew-vector.ts.net/cmx/api';
export const API_TIMEOUT = 10000; // 10 segundos
