import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderRes } from '../../models/OrderRes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  orders: OrderRes[] = []
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      if (Array.isArray(orders)) {
        console.log(orders);
        this.orders= orders;
      } else {
        console.error('Unexpected data format:', orders);
      }
    });
  }

}
