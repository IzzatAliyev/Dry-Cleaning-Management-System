import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { OrderReq } from '../../models/OrderReq';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FilialRes } from '../../models/FilialRes';
import { Service } from '../../models/Service';
import { FilialService } from '../../services/filial.service';
import { ServiceService } from '../../services/service.service';
import { OrderRes } from '../../models/OrderRes';
import { OrderDiffAndUrg } from '../../models/OrderDiffAndUrg';

@Component({
  selector: 'app-order-update',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatSnackBarModule],
  templateUrl: './order-update.component.html',
  styleUrl: './order-update.component.scss'
})
export class OrderUpdateComponent implements OnInit {
  orderId: number = 0
  oldOrder: OrderRes | undefined;
  services: Service[] = []
  filials: FilialRes[] = []
  difficultyOrUrgency: OrderDiffAndUrg[] = [
    new OrderDiffAndUrg(1, 'Низький'),
    new OrderDiffAndUrg(2, 'Середньо-низький'),
    new OrderDiffAndUrg(3, 'Середній'),
    new OrderDiffAndUrg(4, 'Середньо-високий'),
    new OrderDiffAndUrg(5, 'Високий')]
  statuses: OrderDiffAndUrg[] = [
    new OrderDiffAndUrg(1, 'Прийнято'),
    new OrderDiffAndUrg(2, 'В процесі'),
    new OrderDiffAndUrg(3, 'Готовий до видачі'),
    new OrderDiffAndUrg(4, 'Видано')]

  constructor(private orderService: OrderService, private serviceService: ServiceService, private filialService: FilialService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params['id'];
    this.orderService.getOrder(this.orderId).subscribe(data => {
      this.oldOrder = data;
      this.myForm.patchValue({
        "serviceId": this.oldOrder.service.id,
        "filialId": this.oldOrder.filial.id,
        "urgency": this.findDifficultyAndUrgencyNumber(this.oldOrder.urgency),
        "difficulty": this.findDifficultyAndUrgencyNumber(this.oldOrder.difficulty),
        "ordStatus": this.findStatusNumber(this.oldOrder.ordStatus),
        "receiveDate": this.oldOrder.receiveDate,
        "returnDate": this.oldOrder.returnDate
      });
    });
    this.serviceService.getServices().subscribe(data => this.services = data);
    this.filialService.getFilials().subscribe(data => this.filials = data);
  }

  findStatusNumber(searchString: string): number | null {
    const foundStatus = this.statuses.find(status => status.value === searchString);

    return foundStatus ? foundStatus.id : null;
  }

  findDifficultyAndUrgencyNumber(searchString: string): number | null {
    const foundStatus = this.difficultyOrUrgency.find(status => status.value === searchString);

    return foundStatus ? foundStatus.id : null;
  }

  myForm = new FormGroup({
    "serviceId": new FormControl(0, [Validators.required, Validators.pattern(/^\d+$/)]),
    "filialId": new FormControl(0, [Validators.required, Validators.pattern(/^\d+$/)]),
    "urgency": new FormControl(0, [Validators.required, Validators.pattern(/^\d+$/)]),
    "difficulty": new FormControl(0, [Validators.required, Validators.pattern(/^\d+$/)]),
    "ordStatus": new FormControl(0, [Validators.required, Validators.pattern(/^\d+$/)]),
    "receiveDate": new FormControl('', Validators.required),
    "returnDate": new FormControl('', Validators.required)
  })

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
    );
  }

  alertSuccess() {
    this.snackBar.open('Замовлення успішно оновлено', 'Close', {
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
