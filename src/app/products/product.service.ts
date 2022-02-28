import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private $http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.$http.get<Product[]>('http://localhost:8080/products?_page=1&_limit=10')
  }
}
