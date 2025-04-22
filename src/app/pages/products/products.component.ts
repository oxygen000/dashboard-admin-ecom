import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

interface Product {
  name: string;
  category: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, FormsModule, ChartModule],
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

  isEditMode = false;
  currentProductIndex: number | null = null;

  // form model
  newProduct: Product = {
    name: '',
    category: '',
    price: 0,
    stock: 0,
  };

  showModal = false;

  openModal(product?: Product, index?: number) {
    this.showModal = true;

    if (product && index !== undefined) {
      this.isEditMode = true;
      this.currentProductIndex = index;
      this.newProduct = { ...product };
    } else {
      this.isEditMode = false;
      this.currentProductIndex = null;
      this.newProduct = { name: '', category: '', price: 0, stock: 0 };
    }
  }

  saveProduct() {
    if (this.isEditMode && this.currentProductIndex !== null) {
      this.products[this.currentProductIndex] = { ...this.newProduct };
    } else {
      this.products.push({ ...this.newProduct });
    }
    this.showModal = false;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  closeModal() {
    this.showModal = false;
  }
  barChartData: any;
  barChartOptions: any;

  doughnutChartData: any;
  doughnutChartOptions: any;

  lineChartData: any;
  lineChartOptions: any;

  ngOnInit(): void {
    this.prepareCharts();
  }

  prepareCharts() {
    // Group stock by category
    const categoryStock: { [key: string]: number } = {};
    this.products.forEach((product) => {
      categoryStock[product.category] = (categoryStock[product.category] || 0) + product.stock;
    });

    const categories = Object.keys(categoryStock);
    const stockValues = Object.values(categoryStock);

    // Bar Chart
    this.barChartData = {
      labels: categories,
      datasets: [
        {
          label: 'Stock',
          backgroundColor: '#42A5F5',
          data: stockValues,
        },
      ],
    };

    this.barChartOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
    };

    // Doughnut Chart
    this.doughnutChartData = {
      labels: categories,
      datasets: [
        {
          data: stockValues,
          backgroundColor: ['#66BB6A', '#FFA726', '#AB47BC', '#26A69A', '#EF5350'],
        },
      ],
    };

    this.doughnutChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };

    // Line Chart (simulated data for demo)
    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Price Trend',
          data: [50, 70, 65, 80, 75],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };

    this.lineChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };
  }
}
