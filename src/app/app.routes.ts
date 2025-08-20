import { Routes } from '@angular/router';
import { Marks } from './marks/marks';
import { Percent } from './percent/percent';
import { ChartDemo } from './chart-demo/chart-demo';
import { SelfService } from './self-service/self-service';
import { PaymentDashboard } from './payment-dashboard/payment-dashboard';
import { Analytics } from './analytics/analytics';

export const routes: Routes = [
  { path: 'marks', component: Marks },
  { path: 'percent', component: Percent },
  { path: 'charts', component: ChartDemo },
  { path: 'self-service', component: SelfService },
  { path: 'payment-dashboard', component: PaymentDashboard },
  { path: 'analytics', component: Analytics },
  { path: '', redirectTo: 'marks', pathMatch: 'full' }
]