import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() count1: number;

    @Output() countChanged: EventEmitter<number> =   new EventEmitter();

    increment() {
        this.count1++;
        this.countChanged.emit(this.count1);
      }
    decrement() {
        this.count1--;
        this.countChanged.emit(this.count1);
    }

}
