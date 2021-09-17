import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsOnPage: ProductItem[] = [];
  productsInCart: ProductItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
