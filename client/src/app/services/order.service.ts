import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  private orders: Order[] = [];

  placeOrder(order: Order): void {
    this.orders.push(order);
  }
}
