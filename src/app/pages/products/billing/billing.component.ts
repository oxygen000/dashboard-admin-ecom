import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-billing',
  imports: [CommonModule, RouterModule, ChartModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export class BillingComponent {
  billingData = [
    { product: 'Laptop', price: 1200, quantity: 2, date: new Date('2025-04-01') },
    { product: 'Headphones', price: 150, quantity: 4, date: new Date('2025-04-03') },
    { product: 'Monitor', price: 300, quantity: 3, date: new Date('2025-04-05') },
    { product: 'Keyboard', price: 90, quantity: 5, date: new Date('2025-04-07') },
    { product: 'Mouse', price: 60, quantity: 6, date: new Date('2025-04-09') },
    { product: 'Webcam', price: 130, quantity: 2, date: new Date('2025-04-10') },
    { product: 'Chair', price: 250, quantity: 1, date: new Date('2025-04-12') },
  ];

  chartData: any;
  chartOptions: any;

  ngOnInit() {
    this.setupChart();
  }

  setupChart() {
    const labels = this.billingData.map((item) => item.product);
    const data = this.billingData.map((item) => item.price * item.quantity);

    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Total per Product',
          data: data,
          backgroundColor: '#3b82f6',
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#fff', // dark mode support
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#fff',
          },
          grid: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
        y: {
          ticks: {
            color: '#fff',
          },
          grid: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
      },
    };
  }

  getTotalAmount(): number {
    return this.billingData.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
