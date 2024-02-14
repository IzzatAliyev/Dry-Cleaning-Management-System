import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { OrderReq } from '../../models/OrderReq';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/Service';
import { FilialRes } from '../../models/FilialRes';
import { FilialService } from '../../services/filial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-new',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatSnackBarModule],
  templateUrl: './order-new.component.html',
  styleUrl: './order-new.component.scss'
})
export class OrderNewComponent implements OnInit {
  customerId: number = 0;
  services: Service[] = []
  filials: FilialRes[] = []
  myForm = new FormGroup({
    "customerId": new FormControl(this.customerId, [Validators.required, Validators.pattern(/^\d+$/)]),
    "serviceId": new FormControl(0, [Validators.required, Validators.pattern(/^\d+$/)]),
    "filialId": new FormControl(0, [Validators.required, Validators.pattern(/^\d+$/)]),
    "receiveDate": new FormControl('', Validators.required),
    "returnDate": new FormControl('', Validators.required)
  });

  constructor(private orderService: OrderService, private serviceService: ServiceService, private filialService: FilialService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params['id'];
    this.myForm.controls['customerId'].setValue(this.customerId);
    this.serviceService.getServices().subscribe(data => this.services = data);
    this.filialService.getFilials().subscribe(data => this.filials = data);
  }

  submit() {
    var body = this.myForm.value as OrderReq;
    this.orderService.addOrder(body).subscribe(
      (response: string) => {
        console.log('Request successful', response);
        this.router.navigateByUrl('orders')
        this.alertSuccess();
      },
      (error) => {
        console.error('Error submitting request', error);
        this.handleError();
      }
    );;
  }

  alertSuccess() {
    this.snackBar.open('Замовлення успішно створено', 'Close', {
      duration: 5000,
      panelClass: ['success-snackbar'],
    });
  }

  handleError() {
    this.snackBar.open('Щось пішло не так!', 'Close', {
      duration: 5000,
      panelClass: ['error-snackbar'],
    });
  }
}
