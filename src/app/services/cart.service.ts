import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart: ProductItem[] = [];

  constructor() {}

  addToCart(productItem: ProductItem) {
    TODO: 'Add check to see if item is already in cart and update quantity';

    this.productsInCart.push(productItem);
  }

  getCart() {
    return this.productsInCart;
  }
}
