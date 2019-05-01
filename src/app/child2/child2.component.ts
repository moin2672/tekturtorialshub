import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

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
