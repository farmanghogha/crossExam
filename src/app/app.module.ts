import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './components/home/home.component';
import { AddresslistComponent } from './components/addresslist/addresslist.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { CreateorderComponent } from './components/createorder/createorder.component';
import { GotocartComponent } from './components/gotocart/gotocart.component';
@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AddresslistComponent,
    OrderlistComponent,
    CreateorderComponent,
    GotocartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
