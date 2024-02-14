import { Injectable, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../app.const';
import { Observable, catchError, map } from 'rxjs';
import { CustomerReq } from '../models/CustomerReq';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl: string = AppConst.customersUrl;

  constructor(private httpclient: HttpClient) { }

  addCustomer(customerReq: CustomerReq): Observable<string> {
    console.log(customerReq)
    return this.httpclient.post<CustomerReq>(this.apiUrl, customerReq).pipe(
      map((res: any) => {
        return res
      })
    );
    ;
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpclient.get<Customer[]>(this.apiUrl);
  }
}
