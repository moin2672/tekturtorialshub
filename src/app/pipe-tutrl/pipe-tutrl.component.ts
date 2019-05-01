import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-tutrl',
  templateUrl: './pipe-tutrl.component.html',
  styleUrls: ['./pipe-tutrl.component.css']
})
export class PipeTutrlComponent implements OnInit {

  toDate: Date = new Date(); 
  msg: string= 'Welcome to Angular 2';
  num: number= 9542.14554;
  per: number= .7414;
  cur: number= 175;
  constructor() { }

  ngOnInit() {
  }

}
