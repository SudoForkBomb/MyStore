import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart: ProductItem[] = [];

  constructor() {}

  addToCart(productItem: ProductItem) {
    const cartProduct = this.productsInCart.find(
      (item) => item.id == productItem.id
    );
    if (cartProduct?.quantity && productItem?.quantity) {
      cartProduct.quantity += productItem.quantity;
    } else {
      this.productsInCart.push(productItem);
    }
  }

  getCart() {
    return this.productsInCart;
  }
}
