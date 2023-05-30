import { IProduct } from './../../interface/IProduct';
import { Route, Router } from '@angular/router';
import { OrdermanageService } from 'src/app/services/ordermanage.service';
import { Component, OnInit } from '@angular/core';

import { ICreateOrder } from 'src/app/interface/ICreateOrder';
import { IAddress } from 'src/app/interface/IAdress';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gotocart',
  templateUrl: './gotocart.component.html',
  styleUrls: ['./gotocart.component.css']
})
export class GotocartComponent implements OnInit {
  
   productlist:IProduct[]=[];
   addressList:IAddress[]=[];
   order:ICreateOrder={
    email: '',
    productList:'',
    addressId:''
   };
   selectedValue:'';
   chooesvalue:any=0;
   totalprice:number=0;
   erromessage='';

   id = Number(localStorage.getItem("id"));
  constructor(
    private OmService:OrdermanageService,
    private Route:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.totalprice=0;
    var as =JSON.parse(JSON.stringify(localStorage.getItem('productList')));
    var checkdata=JSON.parse(as);
    this.productlist=checkdata;

    this.productlist.forEach(element => {
      debugger;
      this.totalprice += element.price * element.quantity;
    });

    this.OmService.getAddresslist(this.id).subscribe({
      next:(res)=>{
        debugger;
        console.log(res);
        this.addressList=res.data;
      }
    });
  }

 // place order...
  Orderrequest(){
  
    debugger
   
   this.order.email=String(localStorage.getItem("user"));
   this.order.productList=this.productlist;
   this.order.addressId=this.chooesvalue;
   
   if(this.chooesvalue==0) {
    this.erromessage="Must select Address.....";
    return; 
   } 


   if(localStorage.getItem("user")==null){
    this.Route.navigate(['/login']);
   }
   else{
    this.OmService.createOrder(this.order).subscribe({
      next:(res)=>{
         if(res.status==true){
          localStorage.removeItem("productList");
          this.toastr.success("Order place successfully......");
          this.Route.navigate(['/createorder']);
         }
      },
      error:(err)=>{
        console.log(err);
      }
     });
   }
   
  }
  // chooes Address for order
  onselect(value:any){
    this.chooesvalue=value;
  }

  // Delete product from cart
  deletecart(id:any){   
    this.productlist.forEach((element,index)=>{
      if(element.productid==id) {
        this.productlist.splice(index, 1);
        localStorage.setItem("productList",JSON.stringify(this.productlist));
        this.ngOnInit();
      }
   });

  }

  // Incress Quantity of product
  plusQnt(id:any){
     debugger;
    this.productlist.forEach(element => {
      if(element.productid==id){
        if(element.quantity<10){
          element.quantity +=1;        
        }
      }
    });
    localStorage.setItem("productList",JSON.stringify(this.productlist));
    this.ngOnInit();
  }

  // Decress Quantity of product
  minusQnt(id:any){
    debugger
    this.productlist.forEach(element => {
      if(element.productid==id){
        if(element.quantity>1){
          element.quantity -=1;
        }
      }
    });
    localStorage.setItem("productList",JSON.stringify(this.productlist));
    this.ngOnInit();
  }
}
