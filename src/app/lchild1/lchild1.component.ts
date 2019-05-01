import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'lchild1',
  templateUrl: './lchild1.component.html',
  styleUrls: ['./lchild1.component.css']
})
export class Lchild1Component implements OnInit, OnDestroy {

  constructor() {
    console.log('lchild1:Constructor');
  }
 
  ngOnInit() {
    console.log('lchild1:OnInit');
  }
 
  ngOnDestroy() {
    console.log('lchild1:OnDestroy');
  }

}
