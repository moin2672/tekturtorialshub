import { Component, Input, OnInit, OnChanges, DoCheck, SimpleChanges, SimpleChange,ChangeDetectionStrategy } from '@angular/core';
import {Customer1} from '../customer1';
@Component({
  selector: 'lchild2',
  templateUrl: './lchild2.component.html',
  styleUrls: ['./lchild2.component.css']
})
export class Lchild2Component implements OnChanges, DoCheck, OnInit {

  @Input() message: string;
  @Input() customer: Customer1;
  changelog: string[] = [];
  oldCustomer: Customer1= new Customer1();
  DocheckCount = 0;
  differ: any;
  
  ngOnInit() {
      console.log('OnInit');
  }
  ngDoCheck() {
    console.log('Docheck');
    this.DocheckCount++;
    if (this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code ) {
        const to  = JSON.stringify(this.customer);
        const from = JSON.stringify(this.oldCustomer);
        const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
        this.changelog.push(changeLog);

        this.oldCustomer = Object.assign({}, this.customer);
    }
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
