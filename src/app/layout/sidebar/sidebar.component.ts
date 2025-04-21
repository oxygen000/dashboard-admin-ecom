import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servers/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  isProductsOpen = false;
  isOrdersOpen = false;
  @Input() isSidebarOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  onCloseSidebar() {
    this.closeSidebar.emit();
  }
  toggleProducts() {
    this.isProductsOpen = !this.isProductsOpen;
  }
  toggleOrders() {
    this.isOrdersOpen = !this.isOrdersOpen;
  }

  logout() {
    this.authService.logout();
  }
}
