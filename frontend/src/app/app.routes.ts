import { Routes } from '@angular/router';
import { OrderComponent } from './components/order.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/order.component').then(m => m.OrderComponent) },
];
