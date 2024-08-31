import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home-page/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard],
  },
  {
    path: 'receipt/:id',
    loadComponent: () => import('./home/receipt/receipt.component').then((m) => m.ReceiptComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
