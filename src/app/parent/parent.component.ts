import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter: number=0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  constructor() { }

  ngOnInit() {
  }

}
