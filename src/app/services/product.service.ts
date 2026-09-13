// import { Injectable } from '@angular/core';
// import { Product } from '../models/product';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   products: Product[] = [
//     {
//       id: 1,
//       name: 'iPhone 15',
//       price: 59999
//     },
//     {
//       id: 2,
//       name: 'MacBook Air',
//       price: 89999
//     },
//     {
//       id: 3,
//       name: 'AirPods Pro',
//       price: 24999
//     }
//   ];

//   getProducts(): Product[] {
//     return this.products;
//   }
// }
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
