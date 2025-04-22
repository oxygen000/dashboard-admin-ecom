import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-orders-inventory',
  imports: [ChartModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './orders-inventory.component.html',
  styleUrl: './orders-inventory.component.css',
})
export class OrdersInventoryComponent implements OnInit {
  orders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      amount: 120.5,
      paymentStatus: 'Paid',
      invoiceDate: new Date('2024-03-01'),
      shippingAddress: '123 Main St, Springfield, IL',
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      amount: 75.0,
      paymentStatus: 'Pending',
      invoiceDate: new Date('2024-03-05'),
      shippingAddress: '456 Oak Ave, Chicago, IL',
    },
    {
      id: 'ORD003',
      customer: 'David Johnson',
      amount: 200.0,
      paymentStatus: 'Failed',
      invoiceDate: new Date('2024-03-10'),
      shippingAddress: '789 Pine Rd, Houston, TX',
    },
    {
      id: 'ORD004',
      customer: 'Emily Brown',
      amount: 150.75,
      paymentStatus: 'Paid',
      invoiceDate: new Date('2024-03-12'),
      shippingAddress: '101 Maple Dr, San Francisco, CA',
    },
    {
      id: 'ORD005',
      customer: 'Michael Davis',
      amount: 50.0,
      paymentStatus: 'Pending',
      invoiceDate: new Date('2024-03-15'),
      shippingAddress: '202 Birch Blvd, Austin, TX',
    },
  ];

  stockPieData: any;
  stockPieOptions: any;

  ngOnInit(): void {
    const paymentStatusMap: { [key: string]: number } = {
      Paid: 0,
      Pending: 0,
      Failed: 0,
    };

    this.orders.forEach((order) => {
      if (paymentStatusMap.hasOwnProperty(order.paymentStatus)) {
        paymentStatusMap[order.paymentStatus]++;
      }
    });

    const labels = Object.keys(paymentStatusMap);
    const data = Object.values(paymentStatusMap);

    this.stockPieData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#4CAF50', '#FFEB3B', '#F44336'],
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
          text: 'Order Payment Status Distribution',
        },
      },
    };
  }

  public chartData: any;

  constructor() {
    this.chartData = {
      labels: ['Paid', 'Pending', 'Failed'],
      datasets: [
        {
          data: [45, 30, 25],
          backgroundColor: ['#4CAF50', '#FFEB3B', '#F44336'],
        },
      ],
    };
  }
}
