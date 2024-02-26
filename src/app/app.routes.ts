import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./core/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'defer-block',
    loadComponent: () =>
      import('./defer-block/user-profile/user-profile.component').then(
        (c) => c.UserProfileComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
