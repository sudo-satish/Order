import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Since we don't use any component in this module.
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'payment', component: PaymentFormComponent },
];
@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule { }
