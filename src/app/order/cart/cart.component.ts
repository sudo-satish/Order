import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Object[] = [];
  
  totalAmount;
  totalQuantity;

  constructor(private cart: CartService )  { }

  ngOnInit() {
    // this.cartItems = this.cart.getCartItems();
    // this.totalQuantity = _.sumBy(this.cartItems, 'quantity');
    // this.totalAmount = _.sumBy(this.cartItems, 'amount');
    
    // this.cart.getTotalAmount().subscribe(amount => this.totalAmount = amount);
    
      // console.log(this.totalAmount);
      
    // this.totalQuantity = this.cart.getTotalQuantity();
    //this.totalAmount = this.cart.getTotalAmount();
    //console.log(this.cartItems);
  }

  getCartItems() {
    return this.cart.getCartItems();
  }

  addOneItem(itemId) {
    return this.cart.addOneToCart(itemId);
  }

  removeOneItem(itemId) {
    return this.cart.removeOneFromCart(itemId);
  }

  resetCart() {
    return this.cart.resetCart();
  }

  getTotalAmount() {
    let totalAmount;
    this.cart.getTotalAmount().subscribe(amount => totalAmount = amount);
    return totalAmount;
  }

  getTotalQuantity(){
    return this.cart.getTotalQuantity();
  }

  placeOrder() {
    // return this.cart.placeOrder();
  }

  holdOrder() {
    return this.cart.holdOrder();
  }
}
