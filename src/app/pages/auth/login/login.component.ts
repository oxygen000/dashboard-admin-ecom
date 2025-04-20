import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
import { AuthService } from '../../../servers/auth.service';

@Component({
  selector: 'app-login',
  imports: [ CommonModule, FormsModule],
  templateUrl: './login.components.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    title = 'Login';
    email: string = 'test@example.com';
    password: string = '123456';
    errorMessage: string = '';
    successMessage: string = '';
    loading: boolean = false;
    showPassword: boolean = false;

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }    
    constructor(private router: Router, private authService: AuthService) {}

    onSubmit() {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';
    
      const success = this.authService.login(this.email, this.password);
    
      if (success) {
        this.successMessage = 'Login successful!';
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/dashboard']);
        }, 2000);
      } else {
        this.errorMessage = 'Invalid email or password';
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    }
    
    
    
}
