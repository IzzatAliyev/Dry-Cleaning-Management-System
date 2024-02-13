import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.scss'
})
export class CustomerRegisterComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      "userName": new FormControl("Tom", Validators.required),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "userPhone": new FormControl("", Validators.pattern("[0-9]{11}"))
    });
  }

  submit() {
    console.log(this.myForm);
  }
}
