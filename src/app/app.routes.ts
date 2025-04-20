import { Routes } from '@angular/router';

// Layouts
import { LayoutComponent } from './layout/layout.component';
import { LayoutLoginComponent } from './pages/auth/layout.component';

// Pages
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotPasswordComponent } from './pages/auth/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Public Routes (Auth)
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      {path: '404', component: NotFoundComponent},
    ],
  },

  // Protected Routes (requires login)
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  // Fallback
  {
    path: '**',
    redirectTo: '404',
  },
];
