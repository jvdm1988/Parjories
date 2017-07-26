import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  usersCart = [];

  constructor(
    private product: ProductsService
  ) { }

  ngOnInit() {
    this.displayUserItems()
  }

  displayUserItems() {
    this.product.displayCart()
      .then((userInfo) => {
        console.log(userInfo);
        this.usersCart = userInfo.cartArray;
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
