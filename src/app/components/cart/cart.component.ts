import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() productsInCart: ProductItem[] = [
    {
      id: 1,
      name: 'Book',
      price: 9.99,
      quantity: 1,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'You can read it!',
    },
    {
      id: 2,
      name: 'Headphones',
      price: 249.99,
      quantity: 1,
      url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Listen to stuff!',
    },
  ];

  fullName!: string;
  address!: string;
  ccNum!: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // console.log('before', this.productsInCart);
    // this.productsInCart = this.cartService.getCart();
    // console.log('after', this.productsInCart);
  }
  consoleLog(q: any) {
    console.log(q);
  }

  onSubmitOrder() {}
}
