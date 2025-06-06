import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, ServiceComponent, CustomerRegisterComponent, CommonModule, RouterOutlet, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  constructor(){ console.log("constructor"); }

  ngOnInit(): void {
    console.log('ngoninit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (let change in changes)
    {
      let cur = changes[change]
      console.log(cur.currentValue)
    }
    console.log('ngonchanges')
  }

  ngOnDestroy(): void {
    console.log('ngondestroy')
  }
}
