import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup;
  submitted:boolean = false;
  constructor( 
    private authservice:AuthService,
    private router:Router,
    private fb:FormBuilder,
    private toastr:ToastrService) { 
   
  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email:['',[Validators.required,Validators.email]],      
      password:['',[Validators.required,Validators.minLength(6)]],
    });
  }


  onLogin(){
    this.submitted=true;
    if(this.loginform.invalid){
      return
    }
    else{
      this.authservice.LoginUser(this.loginform.value).subscribe({
        next:(res)=>{
          if(res){
            if(res.status==true){
              this.toastr.success("login successfully.....");
              this.authservice.users.next(res.data.email);
              localStorage.setItem("user",res.data.email);
              localStorage.setItem("id",res.data.userId);
              this.router.navigate(['/home']);

            }
            else{
              this.toastr.error("Invalid Username & password....");
           }
          }
        },
        error:(err)=>{
          console.log(err);
        }
  
      });
    }
   
    
  }



  get formsValidation(){
    return this.loginform.controls;
  }
}
