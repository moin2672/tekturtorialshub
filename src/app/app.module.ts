import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { PipeTutrlComponent } from './pipe-tutrl/pipe-tutrl.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { LchildComponent } from './lchild/lchild.component';
import { Lchild1Component } from './lchild1/lchild1.component';
import { Lparent1Component } from './lparent1/lparent1.component';
import { Lparent2Component } from './lparent2/lparent2.component';
import { Lchild2Component } from './lchild2/lchild2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    MovieAppComponent,
    PipeTutrlComponent,
    TempConverterPipe,
    ChildComponent,
    ParentComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    LchildComponent,
    Lchild1Component,
    Lparent1Component,
    Lparent2Component,
    Lchild2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
