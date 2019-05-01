import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickCounter1 = 5;

  countChangedHandler(count: number) {
    this.clickCounter1 = count;
    console.log(count);
  }
}
