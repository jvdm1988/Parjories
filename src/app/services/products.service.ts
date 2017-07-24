import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  baseUrl = 'http://localhost:3000/'

  constructor(
    private http: Http
  ) { }

  getBakery() {
    return this.http.get(
      this.baseUrl + 'api/menu'
    )
    .toPromise()
    .then( result => result.json());
  }
}
