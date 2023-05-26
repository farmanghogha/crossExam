import { AppComponent } from './app.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddresslistComponent } from './components/addresslist/addresslist.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { CreateorderComponent } from './components/createorder/createorder.component';
import { GotocartComponent } from './components/gotocart/gotocart.component';

const routes: Routes = [
  {path:"",component:LoginComponent},  
  {path:"addadress",component:AddAddressComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"addresslist",component:AddresslistComponent},
  {path:"orderlist",component:OrderlistComponent},
  {path:"createorder",component:CreateorderComponent},
  {path:"gotocart",component:GotocartComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
