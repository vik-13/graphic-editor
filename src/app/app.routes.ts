import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthZoneComponent } from './zones/auth-zone';
import { SignInComponent } from './auth/sign-in';
import { SignUpComponent } from './auth/sign-up';
import { InternalZoneComponent } from './zones/internal-zone';
import { DashboardComponent } from './dashboard';
import { InternalZoneGuard } from './zones/internal-zone/internal-zone.guard';
import { AuthZoneGuard } from './zones/auth-zone/auth-zone.guard';
import { DrawComponent } from './draw';

const routesList: Routes = [
  {
    path: '',
    component: AuthZoneComponent,
    canActivate: [AuthZoneGuard],
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  },
  {
    path: '',
    component: InternalZoneComponent,
    canActivate: [InternalZoneGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'draw',
        component: DrawComponent
      }
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(routesList);
