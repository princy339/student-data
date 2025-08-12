import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Note: Angular SSR uses different rendering strategies
  // Prerender = Server-side rendering (SSR)
  // Default behavior = Client-side rendering (CSR)
  
  // Section 1: Self Service (SS) - CSR (Client-Side Rendering)
  {
    path: 'self-service',
    renderMode: RenderMode.Prerender
  },
  
  // Section 2: Payment Gateway (PG) - SSR (Server-Side Rendering)
  {
    path: 'payment-gateway',
    renderMode: RenderMode.Prerender
  },
  
  // Section 3: Analytics - CSR (Client-Side Rendering)
  {
    path: 'analytics',
    renderMode: RenderMode.Prerender
  },
  
  // Keep existing routes unchanged
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
