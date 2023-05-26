import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interface/IOrder';
import { OrdermanageService } from 'src/app/services/ordermanage.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orderlist:IOrder[]=[];
  email:any=localStorage.getItem("user");
  constructor(
    private omService:OrdermanageService
  ) { }

  ngOnInit(): void {
   
    this.omService.getorderlist(this.email).subscribe({
      next:(res)=>{
      this.orderlist=res.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
