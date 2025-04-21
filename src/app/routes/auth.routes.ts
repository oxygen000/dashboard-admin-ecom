import { Routes } from '@angular/router';
import { LayoutLoginComponent } from '../pages/auth/layout.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { ForgotPasswordComponent } from '../pages/auth/forgotpassword/forgotpassword.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: '404', component: NotFoundComponent },
    ],
  },
];
