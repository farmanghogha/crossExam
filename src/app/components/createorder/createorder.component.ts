import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/interface/IProduct';
import { OrdermanageService } from 'src/app/services/ordermanage.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

  productlist:IProduct[]=[];
  localproductlist:IProduct[]=[];
  cartcheck:boolean=true;
  constructor(
    private omService:OrdermanageService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.omService.GetProductList().subscribe({
      next:(res)=>{
        debugger;
        this.productlist=res.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  addtocart(product:IProduct){

   var data=JSON.parse(localStorage.getItem('productList'));
   var counter=0;
   if(data!=null){
    data.forEach(element => {
      if(element.productid==product.productid){
        this.toastr.error("All Ready Added.....");
        counter++;
      }
     
   });
   }
  
  if(localStorage.getItem('productList')!=null && counter==0){
    this.localproductlist=JSON.parse(localStorage.getItem('productList'));
    this.localproductlist.push(product);
    this.toastr.success("Add to cart successfully....");
  }else{  
    if(counter==0){
      this.localproductlist.push(product)
      this.toastr.success("Add to cart successfully....");
    }  
     
  }
  if(counter==0){
    this.localproductlist.forEach(element => {
      element.quantity=1;
    });
    localStorage.setItem("productList",JSON.stringify(this.localproductlist));
  }
}

}
