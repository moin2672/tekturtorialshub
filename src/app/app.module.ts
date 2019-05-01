import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { PipeTutrlComponent } from './pipe-tutrl/pipe-tutrl.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    MovieAppComponent,
    PipeTutrlComponent
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
