import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      price: 59999
    },
    {
      id: 2,
      name: 'MacBook Air',
      price: 89999
    },
    {
      id: 3,
      name: 'AirPods Pro',
      price: 24999
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
