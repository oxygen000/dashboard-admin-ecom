import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  stats = {
    users: 1204,
    tasks: 312,
    notifications: 27,
    revenue: 12300,
  };

  activityLogs = [
    { user: 'John Doe', action: 'Added new task', time: '2 min ago' },
    { user: 'Sarah', action: 'Completed project', time: '10 min ago' },
    { user: 'Admin', action: 'Deleted user', time: '1 hour ago' },
  ];

  basicData: any;

  constructor() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
  }

  basicOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Chart',
      },
    },
  };
}
