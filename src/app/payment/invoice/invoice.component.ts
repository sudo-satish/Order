import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit() {
  }

  getCartItems() {
    return this.cart.getCartItems();
  }

  getTotalQuantity() {
    return this.cart.getTotalQuantity();
  }

  getTotalAmount() {
    let totalAmount;
    this.cart.getTotalAmount().subscribe(amount => totalAmount = amount);
    return totalAmount;
  }
}

