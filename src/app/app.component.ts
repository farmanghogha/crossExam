import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crossExam';

constructor(
  private authservice:AuthService,
  public router:Router
 ){

}
OnInit(){
  
}

isauthonticate(){
  
   if(this.authservice.users.value!=null ||localStorage.getItem("user")){
     return true;
   }
   else{
     return false;
   }
 }
 
 logout(){ 
 this.authservice.logoutUser();

 }

}
