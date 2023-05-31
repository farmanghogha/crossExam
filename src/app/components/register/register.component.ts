import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regsdata!:FormGroup;
  submitted:boolean = false;
  constructor(
    private authservice:AuthService,
    private router:Router,
    private fb:FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.regsdata = this.fb.group({
      userName :['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      password:['',[Validators.required,Validators.minLength(6)]],
    });
  }

onRegister(){
  this.submitted=true;
  if(this.regsdata.invalid){
    return;
  }
  else{
    this.authservice.registerUser(this.regsdata.value).subscribe({
      next:(res)=>{
        if(res.status==true){
          this.toastr.success('Registration Successfully......', ''); 
          this.router.navigate(['/login']);
        }
        
      },
      error:(err)=>{
        console.log(err);      
      }
    });
  }

}

get formsValidation(){
  return this.regsdata.controls;
}


}
