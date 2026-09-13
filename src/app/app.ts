import { Component } from '@angular/core';

import { Counter } from './components/counter/counter';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [Counter, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

products = [
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

  selectedProduct = '';

 handleBuy(productId: number) {
  const product = this.products.find(p => p.id === productId);

  if (product) {
    this.selectedProduct = product.name;
  }
}
}
