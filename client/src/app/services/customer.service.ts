import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}
