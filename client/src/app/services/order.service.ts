import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../app.const';
import { OrderRes } from '../models/OrderRes';
import { Observable, catchError, map } from 'rxjs';
import { OrderReq } from '../models/OrderReq';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl: string = AppConst.ordersUrl;

  constructor(private httpclient: HttpClient) { }

  getOrders(): Observable<OrderRes[]> {
    return this.httpclient.get<OrderRes[]>(this.apiUrl);
  }

  addOrder(orderReq: OrderReq): Observable<string> {
    console.log(orderReq)
    return this.httpclient.post<OrderReq>(this.apiUrl, orderReq).pipe(
      map((res: any) => {
        return res
      }),
      catchError(error => {
        let data = {};
        if (error.error == null && error.status == 403) {
          data = {
            error: "",
            message: 'you have not permission for this operation',
            status: error.status
          };
        } else {
          data = {
            error: error.error.error,
            message: error.error.message,
            status: error.status
          };
        }
        // @ts-ignore
        throw this.errorDialogService.openDialog(data);
      })
    );
  }
}
