import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdermanageService } from './../../services/ordermanage.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
 addadressform!:FormGroup;
 submitted:boolean = false;
  constructor(
    private Omservice:OrdermanageService,
    private route:Router,
    private fb:FormBuilder,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.addadressform = this.fb.group({     
      userId:['',[Validators.required]],
      contactNo:['',[Validators.required,Validators.minLength(10)]],
      contactPerson:['',[Validators.required]],
      pinCode :['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      address:['',[Validators.required]],
      addressType:['',[Validators.required]],
    });
  }

  OnSave(){
    this.submitted=true;

    if(this.addadressform.invalid){
      return;
    }
    else{
      this.Omservice.addAddress(this.addadressform.value).subscribe({      
        next:(res)=>{
          if(res.status==true){
             this.toastr.success("Add Address Successfully....");
             this.addadressform.reset();
          }
          
           
        },
        error:(err)=>{
         console.log(err);
        }
  
      });
    }
        
  }

  get formsValidation(){
    return this.addadressform.controls;
  }
}
