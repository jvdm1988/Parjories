import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import  { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  BakeryArray = [];
  isAdmin: boolean = false;

  constructor(
    private products: ProductsService,
    private authThang: AuthService
  ) { }

  ngOnInit() {
    this.authThang.checklogin();
    this.authThang.loggedIn$.subscribe((userStatus) =>{
      if (userStatus && userStatus.isAdmin === true) {
        this.isAdmin = true;
      }
    })
  }

  getBakery(groupName) {
    this.products.getBakery(groupName)
      .then((result) => {
        this.BakeryArray = result;
      })
  }

  addToCart(id) {
    this.products.addToCart(id)
      .then((result) => {
        console.log(result);
      })
  }

  deleteItem(id, group) {
    this.products.deleteItem(id)
      .then(() => {
        console.log("Deleted");
        this.getBakery(group);
      });
}



}
