import { Component, OnInit } from '@angular/core';
import { IAddress } from 'src/app/interface/IAdress';
import { OrdermanageService } from 'src/app/services/ordermanage.service';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.component.html',
  styleUrls: ['./addresslist.component.css']
})
export class AddresslistComponent implements OnInit {
  addressData:IAddress[] = []; 
  displayedColumns: string[] = ['addressType', 'contactPerson', 'contactNo', 'address'];
   id = Number(localStorage.getItem("id"));
  constructor(
    private omService:OrdermanageService,
  ) { }
   
  ngOnInit(): void {
    
    debugger;
  
    this.omService.getAddresslist(this.id).subscribe({
      next:(res)=>{
        debugger;
        this.addressData=res.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  

}
