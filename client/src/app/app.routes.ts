import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "services", component: ServiceComponent }
];
