import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-analytics',
  imports: [ChartModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent implements OnInit {
  salesChartData: any;
  salesChartOptions: any;
  stockChartData: any;
  stockChartOptions: any;

  ngOnInit(): void {
    this.salesChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Sales ($)',
          data: [1200, 1900, 3000, 2500, 3200],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };

    this.salesChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Sales',
        },
      },
    };

    this.stockChartData = {
      labels: ['Laptops', 'Phones', 'Accessories'],
      datasets: [
        {
          label: 'Stock',
          backgroundColor: ['#66BB6A', '#FFA726', '#42A5F5'],
          data: [80, 150, 200],
        },
      ],
    };

    this.stockChartOptions = {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Stock Levels',
        },
      },
    };
  }
}
