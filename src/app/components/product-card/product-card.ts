import { Component, input, output } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  product = input.required<Product>();

  buy = output<number>();

  buyProduct() {
    this.buy.emit(this.product().id);
  }
}
