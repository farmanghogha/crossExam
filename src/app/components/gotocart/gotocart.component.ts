import { IProduct } from './../../interface/IProduct';
import { Route, Router } from '@angular/router';
import { OrdermanageService } from 'src/app/services/ordermanage.service';
import { Component, OnInit } from '@angular/core';

import { ICreateOrder } from 'src/app/interface/ICreateOrder';

@Component({
  selector: 'app-gotocart',
  templateUrl: './gotocart.component.html',
  styleUrls: ['./gotocart.component.css']
})
export class GotocartComponent implements OnInit {
  
   productlist:IProduct[]=[];
   order:ICreateOrder={
    email: '',
    productList:''
   };
  constructor(
    private OmService:OrdermanageService,
    private Route:Router
    ) { }

  ngOnInit(): void {
    var as =JSON.parse(JSON.stringify(localStorage.getItem('productList')));
    var checkdata=JSON.parse(as);
    this.productlist=checkdata;
  }


  Orderrequest(){
   this.order.email=String(localStorage.getItem("user"));
   this.order.productList=this.productlist;

   if(localStorage.getItem("user")==null){
    this.Route.navigate(['/login']);
   }
   else{
    this.OmService.createOrder(this.order).subscribe({
      next:(res)=>{
         if(res.status==true){
          localStorage.removeItem("productList");
         }
      },
      error:(err)=>{
        console.log(err);
      }
     });
   }
   
  }


  deletecart(id:any){
    

  }

  plusQnt(){
   
  }
}
