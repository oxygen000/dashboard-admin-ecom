import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, RouterModule, ChartModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent implements OnInit {
  inventoryData = [
    { product: 'Laptop', category: 'Electronics', stock: 50, location: 'Warehouse A' },
    { product: 'Headphones', category: 'Accessories', stock: 120, location: 'Warehouse B' },
    { product: 'Keyboard', category: 'Accessories', stock: 75, location: 'Warehouse A' },
    { product: 'Monitor', category: 'Electronics', stock: 30, location: 'Warehouse C' },
    { product: 'Chair', category: 'Furniture', stock: 45, location: 'Warehouse B' },
  ];

  stockPieData: any;
  stockPieOptions: any;

  ngOnInit(): void {
    const categoryMap: { [key: string]: number } = {};

    // تجميع المخزون حسب الفئة
    this.inventoryData.forEach((item) => {
      categoryMap[item.category] = (categoryMap[item.category] || 0) + item.stock;
    });

    const labels = Object.keys(categoryMap);
    const data = Object.values(categoryMap);

    this.stockPieData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'],
        },
      ],
    };

    this.stockPieOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Stock Distribution by Category',
        },
      },
    };
  }
}
