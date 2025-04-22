import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-orders-billing',
  imports: [RouterModule, CommonModule, ChartModule],
  standalone: true,
  templateUrl: './orders-billing.component.html',
  styleUrl: './orders-billing.component.css',
})
export class OrdersBillingComponent implements OnInit {
  invoices = [
    {
      invoiceId: 'INV12345',
      orderId: 'ORD12345',
      amount: 150.75,
      paymentStatus: 'Paid',
      invoiceDate: new Date('2024-04-15'),
    },
    {
      invoiceId: 'INV12346',
      orderId: 'ORD12346',
      amount: 200.0,
      paymentStatus: 'Pending',
      invoiceDate: new Date('2024-04-14'),
    },
    {
      invoiceId: 'INV12347',
      orderId: 'ORD12347',
      amount: 50.99,
      paymentStatus: 'Paid',
      invoiceDate: new Date('2024-04-13'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
