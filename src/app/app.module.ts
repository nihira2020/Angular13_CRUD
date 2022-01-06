import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ListingComponent } from './listing/listing.component';
import { AddnewComponent } from './addnew/addnew.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ListingComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
   providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
