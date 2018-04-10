import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as _ from "lodash";
import { Item } from '../../services/Item';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  items: Object[] = [];

  constructor(private cart: CartService) { }
  
  ngOnInit() {
    this.items = this.cart.getItems();
  }

  add(item: String) {

    return this.cart.addOneToCart(item);
    // alert('Going to add Item ' + item);
    // Logic to add to Service.
  }

}
