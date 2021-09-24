import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productItem!: ProductItem;
  quantity: any = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    try {
      this.route.params.subscribe((params) => {
        this.productsService.getProducts().subscribe((res) => {
          this.productItem = res.find(
            (item) => item.id == params.id
          ) as ProductItem;
          if (this.productItem) {
            this.productItem.quantity = 1;
          }
        });
      });
    } catch (error) {
      throw new Error('Unable to find product');
    }
  }

  submitAddToCart(item: ProductItem): void {
    item.quantity = this.quantity;
    this.cartService.addToCart(item);
    alert(
      `Added to your cart: ${this.productItem.quantity} x ${this.productItem.name}`
    );
    this.quantity = 1;
  }
}
