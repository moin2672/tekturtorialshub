import { Component, OnInit } from '@angular/core';
import { Customer1} from '../customer1';


@Component({
  selector: 'lparent2',
  templateUrl: './lparent2.component.html',
  styleUrls: ['./lparent2.component.css']
})
export class Lparent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'ngOnChanges';
  message = '';
  customer: Customer1 = new Customer1();
  name= '';
  code= 0;

  updateCustomer() {
    this.customer= new Customer1();
    this.customer.name = this.name;
    this.customer.code = this.code;
  }


}
