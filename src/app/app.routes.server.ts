import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'payment-dashboard',
    renderMode: RenderMode.Server
  },
  
  // Keep existing routes unchanged
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
