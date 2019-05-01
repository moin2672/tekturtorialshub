import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy } from '@angular/core';
import {Customer1} from '../customer1';
@Component({
  selector: 'lchild2',
  templateUrl: './lchild2.component.html',
  styleUrls: ['./lchild2.component.css']
})
export class Lchild2Component implements OnChanges, OnInit {

  @Input() message: string;
  @Input() customer: Customer1;
  changelog: string[] = [];

  ngOnInit() {
      console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('OnChanges');
      console.log(JSON.stringify(changes));

      // tslint:disable-next-line:forin
      for (const propName in changes) {
           const change = changes[propName];
           const to  = JSON.stringify(change.currentValue);
           const from = JSON.stringify(change.previousValue);
           const changeLog = `${propName}: changed from ${from} to ${to} `;
           this.changelog.push(changeLog);
      }
  }

}
