import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { CartComponent } from './order/cart/cart.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';

import { CartService } from './services/cart.service';
import { MessageService } from './services/message.service';
import { HoldOrderComponent } from './order/hold-order/hold-order.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { InvoiceComponent } from './payment/invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderFormComponent,
    CartComponent,
    MessagesComponent,
    HoldOrderComponent,
    PaymentFormComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CartService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
