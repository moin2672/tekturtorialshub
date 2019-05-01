import { Component } from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation
  title = 'My App';
  color = 'red';
  bcolor='yellow';
  getTitle(): string{
    return this.title;
  }
  count:number =0;
  buttonClicked(): void{
    this.count=this.count+1;
    console.log("Button Clicked");
  }


  Counter = 5;
 
  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }

}
