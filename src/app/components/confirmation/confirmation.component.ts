import { Component, Input, OnInit } from '@angular/core';
import { OrderInfo } from 'src/app/models/orderInfo';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  orderInfo!: OrderInfo;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.orderInfo = this.cartService.getOrderInfo();
  }

  ngOnDestroy(): void {
    this.cartService.setOrderInfo(new OrderInfo());
  }
}
