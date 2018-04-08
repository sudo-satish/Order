import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Cart } from './Cart';
import { Item } from './Item';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class CartService {

  holdId:number = 0;
  totalQuantity = 0;
  totalAmount = 0;
  items: Item[];

  cartItems: Cart[] = [
   // { _id: 0, name: 'Total', code: 'total001', rate: '', totalAmount:0, totalQuantity:0, desc: 'Total Amount', offers: [{}] },
  ];
  holdQueue = [

  ];

  constructor(
          private messageService: MessageService,
          private httpClient: HttpClient,
          private router: Router
        ) { }

  getItems() {
    return this.httpClient.get('/product/item');
  }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(itemId) {
    var id = parseInt(itemId);
    var quantity = 1;

    var item = _.find(this.items, {_id:id});
    if (_.isEmpty(item)) {
      console.error('Could not find Item with ID => '+ id);
      return false;
    }

    if (_.isEmpty(this.cartItems)) {
      item.quantity = quantity;
      var amount = parseInt(item.rate) * parseInt(item.quantity);
      item.total = amount;
      this.cartItems.push(item);

      this.totalQuantity = this.calculateTotalQuantity();
      this.totalAmount = this.calculateTotalAmount();
      return true;
    }
    
    var cartItem = _.find(this.cartItems, {_id:id});

    if(_.isEmpty(cartItem)) {
      item.quantity = quantity;
      item.total = parseInt(item.rate) * parseInt(item.quantity);
      this.cartItems.push(item);
      this.totalQuantity = this.calculateTotalQuantity();
      this.totalAmount = this.calculateTotalAmount();
      return true;
    } else {
      item.quantity += quantity;
      item.total = parseInt(item.rate) * parseInt(item.quantity);
      this.totalQuantity = this.calculateTotalQuantity();
      this.totalAmount = this.calculateTotalAmount();
      return true;
    }
  }

  addOneToCart(itemId) {
    
    this.messageService.add('Item added in cart!!');
    var id = parseInt(itemId);
    var quantity = 1;

    var item = _.find(this.items, {_id:id});
    if (_.isEmpty(item)) {
      console.error('Could not find Item with ID => '+ id);
      return false;
    }

    if (_.isEmpty(this.cartItems)) {
      item.quantity = quantity;
      var amount = parseInt(item.rate) * parseInt(item.quantity);
      item.total = amount;
      this.cartItems.push(item);

      this.totalQuantity = this.calculateTotalQuantity();
      this.totalAmount = this.calculateTotalAmount();
      return true;
    }
    
    var cartItem = _.find(this.cartItems, {_id:id});

    if(_.isEmpty(cartItem)) {
      item.quantity = quantity;
      item.total = parseInt(item.rate) * parseInt(item.quantity);
      this.cartItems.push(item);
      this.totalQuantity = this.calculateTotalQuantity();
      this.totalAmount = this.calculateTotalAmount();
      return true;
    } else {
      item.quantity += quantity;
      item.total = parseInt(item.rate) * parseInt(item.quantity);
      this.totalQuantity = this.calculateTotalQuantity();
      this.totalAmount = this.calculateTotalAmount();
      return true;
    }
  }

  removeOneFromCart(itemId) {
    var id = parseInt(itemId);
    var quantity = 1;

    var item = _.find(this.items, { _id: id });
    if (_.isEmpty(item)) {
      console.error('Could not find Item with ID => ' + id);
      return false;
    }

    if (_.isEmpty(this.cartItems)) {
      console.warn('How is it possible that the cart is empty, But you got access to remove the item from cart, It smells like BUG.');
      return true;
    }

    var cartItem = _.find(this.cartItems, { _id: id });

    if (_.isEmpty(cartItem)) {
      console.warn('Cart in not empty but it don\'t have the item which your are looking for, But you got access to remove the item from cart, It smells like BUG.');
      return true;
    } else {
      item.quantity -= quantity;
      item.total = parseInt(item.rate) * parseInt(item.quantity);
      this.totalQuantity = this.calculateTotalQuantity();
      this.totalAmount = this.calculateTotalAmount();

      if(item.quantity == 0) {
        _.pullAllWith(this.cartItems, [item], _.isEqual)
      }
      return true;
    }
  }
  calculateTotalAmount() {
    let returnVal = _.sumBy(this.cartItems, 'total');
    return returnVal;
  }
  calculateTotalQuantity() {
    let returnVal = _.sumBy(this.cartItems, 'quantity');
    return returnVal;
  }
  getTotalAmount(): Observable<number> { // ============ Implemeting Observable ========
    return of(this.totalAmount);
  }
  getTotalQuantity() {
    return this.totalQuantity;
  }
  
  resetCart() {
    
  //  _.remove(this.cartItems, () => { return true;});

   this.cartItems = [];

   this.totalAmount = 0;
   this.totalQuantity = 0;
    return true;
  }

  placeOrder() {
    this.messageService.add('Order Placed, Order Details => '+ JSON.stringify(this.cartItems));
    console.log('Order  => ',this.cartItems);
    this.router.navigate(['/order']);
    
    return this.resetCart();
  }
  holdOrder() {

    if (_.isEmpty(this.cartItems)) {
      return false;
    }
    // let id = this.holdQueue.length;
    // let idStr = Math.random(); // Make an unique n 
    // let unique = _.random();
    
    this.holdQueue.push({ _id: _.uniqueId('HOLD_'), items:this.cartItems, totalAmount:this.totalAmount, totalQuantity: this.totalQuantity});
    // this.messageService.add('Order Hold, Order Details => ' + JSON.stringify(this.holdQueue));
    this.resetCart();

    // console.log(this.holdQueue);
    
    return true;
  }

  getHoldQueue() {
    return this.holdQueue;
  }

  populateOrder(id) {
    
    let cartItem = _.find(this.holdQueue, {_id:id});
    
    this.cartItems = cartItem.items;
    this.totalAmount = cartItem.totalAmount;
    this.totalQuantity = cartItem.totalQuantity;

    _.remove(this.holdQueue, {_id:id});
    // console.log(cartItems);

    console.log(cartItem.items);
    
    return true;
  }
}
