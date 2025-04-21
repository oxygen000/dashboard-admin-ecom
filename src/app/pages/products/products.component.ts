import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    { name: 'Laptop', category: 'Electronics', price: 1200, stock: 10 },
    { name: 'T-Shirt', category: 'Clothing', price: 25, stock: 100 },
    { name: 'Watch', category: 'Accessories', price: 150, stock: 30 },
  ];
}
