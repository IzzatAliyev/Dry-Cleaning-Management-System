import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../app.const';
import { OrderRes } from '../models/OrderRes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl: string = AppConst.ordersUrl;

  constructor(private httpclient: HttpClient) { }

  getOrders(): Observable<OrderRes[]> {
    return this.httpclient.get<OrderRes[]>(this.apiUrl);
  }
}
