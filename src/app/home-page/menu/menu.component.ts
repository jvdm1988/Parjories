import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  BakeryArray = [];

  constructor(
    private products: ProductsService
  ) { }

  ngOnInit() {

  }

  getBakery() {
    this.products.getBakery()
      .then((result) => {
        this.BakeryArray = result;
      })
  }

}
