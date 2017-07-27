import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

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

  constructor(
  private products: ProductsService,
  ) { }

  ngOnInit() {
  }


  addNewItem(){
  this.products.addNewItem(this.newItem).subscribe((response)=>{

    this.newItem = {
      group: "",
      image: "",
      name: "",
      price: ""
    }
  });
}

}
