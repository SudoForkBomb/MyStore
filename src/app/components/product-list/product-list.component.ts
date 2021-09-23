import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsOnPage: ProductItem[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      for (let num = 0; num < res.length; num++) {
        const product = res[num];
        product['quantity'] = 1;
      }
      this.productsOnPage = res;
      this.productsService.setProducts(res);
    });
  }

  addToCart(productItem: ProductItem) {
    this.cartService.addToCart(productItem);
  }
}
