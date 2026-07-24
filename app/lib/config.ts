// Configuración de API para Control Modular MX
//
// Desarrollo local:
// NEXT_PUBLIC_API_URL=http://localhost:8100/controlmodularmx
//
// Producción (Tailscale Funnel):
// NEXT_PUBLIC_API_URL=https://fibraya-server.curlew-vector.ts.net/controlmodularmx

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://fibraya-server.curlew-vector.ts.net/controlmodularmx';
export const API_TIMEOUT = 10000; // 10 segundos
