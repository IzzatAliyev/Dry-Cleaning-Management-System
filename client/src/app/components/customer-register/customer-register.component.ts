import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { CustomerReq } from '../../models/CustomerReq';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.scss'
})
export class CustomerRegisterComponent {
  myForm: FormGroup;
  constructor(private customerService: CustomerService) {
    this.myForm = new FormGroup({

      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "surName": new FormControl("", Validators.required)
    });
  }

  submit() {
    console.log("hi")
    var body = this.myForm.value as CustomerReq
    this.customerService.addCustomer(body);
  }
}
