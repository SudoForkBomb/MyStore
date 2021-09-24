import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  quantity: any = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Input() productItem!: ProductItem;
  @Output() addToCart: EventEmitter<ProductItem> = new EventEmitter();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  submitAddToCart(data: ProductItem): void {
    data.quantity = this.quantity;
    this.addToCart.emit(data);
    alert(
      `Added to your cart: ${this.productItem.quantity} x ${this.productItem.name}`
    );
    this.quantity = 1;
  }
}
