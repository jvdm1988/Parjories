import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import  { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  selectTag : any;

  newItem = {
  group: "",
  image: "",
  name: "",
  price: ""
}

  Macarons;
  Pies;
  Cupcakes;

  constructor(
  private products: ProductsService,
  private routerThang: Router
  ) { }

  ngOnInit() {
  }


  addNewItem(){
    console.log(this.newItem.group);
  this.products.addNewItem(this.newItem).subscribe((response)=>{
console.log(response);
    this.newItem = {
      group: "",
      image: "",
      name: "",
      price: ""
    }
    this.routerThang.navigate(['/']);
  });
}

}
