import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const customerRoutes: Routes = [
  { path: "register", component: CustomerRegisterComponent }
]

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "services", component: ServiceComponent },
  { path: "customers/register", component: CustomerRegisterComponent, pathMatch: 'full' },
  { path: "customers", component: CustomerComponent },
  { path: "orders", component: OrderListComponent }
];
