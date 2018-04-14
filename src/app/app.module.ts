import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XHRBackend, RequestOptions } from '@angular/http';

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
// import { HttpServiceService } from './services/http-service.service';
import { PlaygroundComponent } from './playground/playground/playground.component';
import { AuthModule } from './auth/auth.module';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RemarkComponent } from './playground/remark/remark.component';
// import { ItemComponent } from './product/item/item.component';
// import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderFormComponent,
    CartComponent,
    MessagesComponent,
    HoldOrderComponent,
    PaymentFormComponent,
    InvoiceComponent,
    PlaygroundComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    RemarkComponent,
    // ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    AuthModule,
    ProductModule,
    HttpClientModule
  ],
  providers: [
    CartService, 
    MessageService,
    DataStorageService,
    AuthService,
    ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
    // ,
    // {
    //   provide: HttpServiceService,
    //   useFactory: httpServiceFactory,
    //   deps: [XHRBackend, RequestOptions]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
