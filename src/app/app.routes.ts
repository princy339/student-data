import { Routes } from '@angular/router';
import { Marks } from './marks/marks';
import { Percent } from './percent/percent';

export const routes: Routes = [
  { path: 'marks', component: Marks },
  { path: 'percent', component: Percent },
  { path: '', redirectTo: 'marks', pathMatch: 'full' }
]