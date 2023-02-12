import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Your route here:

  {
    path: 'demo',
    loadChildren: () => import('admin/Module').then((m) => m.DemoModule),
  },
];
