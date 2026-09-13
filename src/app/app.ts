import { Component, inject } from '@angular/core';

import { Counter } from './components/counter/counter';
import { ProductCard } from './components/product-card/product-card';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [Counter, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private productService = inject(ProductService);

  products = this.productService.getProducts();

  selectedProduct = '';

  handleBuy(productId: number) {
    const product = this.products.find(p => p.id === productId);

    if (product) {
      this.selectedProduct = product.name;
    }
  }

}
