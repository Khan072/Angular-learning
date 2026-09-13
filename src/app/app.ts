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

  product = {
    id: 1,
    name: 'iPhone 15',
    price: 59999
  };

  selectedProduct = '';

  handleBuy(productId: number) {
    if (productId === this.product.id) {
      this.selectedProduct = this.product.name;
    }
  }
}
