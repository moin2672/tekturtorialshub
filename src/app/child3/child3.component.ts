import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  count = 0;
 
  increment() {
     this.count++;
   }
 decrement() {
     this.count--;
 }
}
