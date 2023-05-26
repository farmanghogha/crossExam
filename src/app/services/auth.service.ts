import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/IUser';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ilogin } from '../interface/Ilogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users=new BehaviorSubject<any>(null);
  rootapipath=environment.rootpath;
  constructor(private http:HttpClient, private route:Router) { }

  registerUser(user:IUser): Observable<any>{
    debugger;
    return this.http.post(this.rootapipath + 'api/Register',user);
  }

  LoginUser(logindata:Ilogin): Observable<any>{
    debugger;   
    return this.http.post(this.rootapipath + 'api/Login',logindata);
  }

  logoutUser(){
    localStorage.removeItem("user"); 
    localStorage.removeItem("id");   

    this.route.navigate(['/login']);
  }
}
