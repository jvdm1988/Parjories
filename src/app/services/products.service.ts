import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  baseUrl = 'http://localhost:3000/'

  constructor(
    private http: Http
  ) { }

  getBakery(groupName) {
    return this.http.get(
      this.baseUrl + 'api/menu/'+groupName
    )
    .toPromise()
    .then( result => result.json());
  }

  addToCart(id) {
    console.log(id);
    return this.http.post(
      this.baseUrl + 'api/addToCart/',
      { idToAdd: id},
      { withCredentials: true }
    )
    .toPromise()
    .then (result => result.json());

  }
}
