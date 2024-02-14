import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { CustomerReq } from '../../models/CustomerReq';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.scss'
})
export class CustomerRegisterComponent {
  myForm = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "surName": new FormControl("", Validators.required)
  });
  constructor(private customerService: CustomerService) { }

  submit() {
    console.log("hi")
    var body = this.myForm.value as CustomerReq
    this.customerService.addCustomer(body).subscribe(
      (response: string) => {
        console.log('Request successful', response);
      },
      (error) => {
        console.error('Error submitting request', error);
      }
    );;
  }
}
