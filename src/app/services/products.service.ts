import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from "../../environments/environment"


@Injectable()
export class ProductsService {

  baseUrl: string = environment.apiBase

  constructor(
    private http: Http
  ) { }

  getBakery(groupName) {

    return this.http.get(
      this.baseUrl + '/api/menu/'+groupName
    )
    .toPromise()
    .then( result => result.json());
  }

  addToCart(id) {
    console.log(id);
    return this.http.post(
      this.baseUrl + '/api/addToCart/',
      { idToAdd: id},
      { withCredentials: true }
    )
    .toPromise()
    .then (result => result.json());

  }

  displayCart() {
    return this.http.get(
      this.baseUrl + '/api/displayCart',
      { withCredentials: true }
    )
    .toPromise()
    .then( res => res.json());
  }

  removeItem(item){

  }

  deleteItem(id) {
    console.log(id);
    return this.http.get(
      this.baseUrl + '/api/menu/delete/' + id,
    )
    .toPromise()
    .then (result => result.json());

  }

}
