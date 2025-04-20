import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    


  private readonly TOKEN_KEY = 'token';

  constructor(private router: Router) {}

  

  login(email: string, password: string): boolean {
    if (email === 'test@example.com' && password === '123456') {
      localStorage.setItem(this.TOKEN_KEY, 'fake-token');
      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
