import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userInfo = {};
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
        this.userInfo = userInfo;
        this.usersCart = userInfo.cartArray;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteFromCart(blh) {
    console.log(blh);

    this.usersCart.forEach((item, i) => {
      if (blh === item) {
      this.usersCart.splice(i, 1);
      }

    });

  // this.item.delete();
}


}
