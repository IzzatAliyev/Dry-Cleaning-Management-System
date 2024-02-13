import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    // this.router.navigate(['register'], {relativeTo: this.activatedRoute})
  }
}
