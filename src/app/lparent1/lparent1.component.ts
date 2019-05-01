import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'lparent1',
  templateUrl: './lparent1.component.html',
  styleUrls: ['./lparent1.component.css']
})
export class Lparent1Component implements OnInit, OnDestroy {

  displayChild1:boolean = true;
 
  constructor() {
    console.log('lParent1:Constructor');
  }
 
  toggle1() {
    this.displayChild1 = !this.displayChild1;
  }
 
  ngOnInit() {
    console.log('lParent1:OnInit');
  }
 
 
  ngOnDestroy() {
    console.log('lParent1:OnDestroy');
  }
}
