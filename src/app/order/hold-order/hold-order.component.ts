import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-hold-order',
  templateUrl: './hold-order.component.html',
  styleUrls: ['./hold-order.component.css']
})
export class HoldOrderComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  getHoldItem() {
    return this.cart.getHoldQueue();
  }

  populateHoldItem(id) {
    return this.cart.populateOrder(id);
  }
}
