import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProductsComponent } from '../pages/products/products.component';
import { BillingComponent } from '../pages/products/billing/billing.component';
import { InventoryComponent } from '../pages/products/inventory/inventory.component';
import { AnalyticsComponent } from '../pages/products/analytics/analytics.component';
import { OrdersComponent } from '../pages/orders/orders.component';
import { OrdersBillingComponent } from '../pages/orders/orders-billing/orders-billing.component';
import { OrdersInventoryComponent } from '../pages/orders/orders-inventory/orders-inventory.component';
import { InboxComponent } from '../pages/inbox/inbox.component';
import { UsersComponent } from '../pages/users/users.component';
import { InboxIdComponent } from '../pages/inbox/inbox-id/inbox-id.component';

export const protectedRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/billing', component: BillingComponent },
      { path: 'products/inventory', component: InventoryComponent },
      { path: 'products/analytics', component: AnalyticsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/billing', component: OrdersBillingComponent },
      { path: 'orders/inventory', component: OrdersInventoryComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'inbox/:id', component: InboxIdComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
