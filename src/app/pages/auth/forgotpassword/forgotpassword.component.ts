import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css',
})
export class ForgotPasswordComponent {
  email: string = '';
  onSubmit(): void {
    console.log('Form submitted with:', { email: this.email });
  }
}
