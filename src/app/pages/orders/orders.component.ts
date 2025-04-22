import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-orders',
  imports: [RouterModule, CommonModule, ChartModule],
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  orders = [
    {
      id: 'ORD12345',
      customer: 'Ahmed Ali',
      totalAmount: 150.75,
      status: 'Completed',
      date: new Date('2024-04-15'),
      shippingAddress: '123 Main St, Cityville',
    },
    {
      id: 'ORD12346',
      customer: 'Mohamed Tarek',
      totalAmount: 200.0,
      status: 'Pending',
      date: new Date('2024-04-14'),
      shippingAddress: '456 Oak St, Townsville',
    },
    {
      id: 'ORD12347',
      customer: 'Muhammad Nour',
      totalAmount: 50.99,
      status: 'Shipped',
      date: new Date('2024-04-13'),
      shippingAddress: '789 Pine St, Villageplace',
    },
  ];

  chartData: any;

  constructor() {}

  ngOnInit(): void {
    this.initializeChartData();
  }

  initializeChartData() {
    const statusCounts = this.orders.reduce(
      (acc: Record<string, number>, order) => {
        acc[order.status] = (acc[order.status] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    this.chartData = {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          data: Object.values(statusCounts),
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };
  }
}
