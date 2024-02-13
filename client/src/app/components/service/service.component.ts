import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/Service';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  services: Service[] = [
    { id: 1, name: 'Dry Cleaning', type: 'Regular', cost: 10 },
    { id: 2, name: 'Dry Cleaning', type: 'Express', cost: 15 },
    { id: 3, name: 'Laundry', type: 'Regular', cost: 8 },
    { id: 4, name: 'Laundry', type: 'Express', cost: 12 },
];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    // this.service.getServices().subscribe(services => {
    //   if (Array.isArray(services)) {
    //     console.log(services);
    //     this.services = services;
    //   } else {
    //     console.error('Unexpected data format:', services);
    //   }
    // });
  }
}
