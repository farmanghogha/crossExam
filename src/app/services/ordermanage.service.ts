import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAddress } from '../interface/IAdress';
import { ICreateOrder } from '../interface/ICreateOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdermanageService {
  rootapipath=environment.rootpath;
  constructor(private httpclient:HttpClient) { }

  
  addAddress(address:IAddress): Observable<any>{
    
   return this.httpclient.post(this.rootapipath + 'api/AddAddress',address);
  }

  getAddresslist(id:number):Observable<any>{
   return this.httpclient.get(this.rootapipath+'api/GetAddressList/?id='+id);
  }

  getorderlist(email:string):Observable<any>{
    return this.httpclient.get(this.rootapipath+'api/GetOrder/?email='+ email);
  }

  GetProductList():Observable<any>{
    return this.httpclient.get(this.rootapipath+'api/GetProduct');
  }
  createOrder(orderitem:ICreateOrder):Observable<any>{
    debugger;
    return this.httpclient.post(this.rootapipath+'api/CreateOrder',orderitem);
  }
}
