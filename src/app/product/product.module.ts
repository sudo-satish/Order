import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ItemComponent } from './item/item.component';
import { ProductRoutingModule } from './product-routing.module';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
// import { SignupComponent } from './signup/signup.component';
// import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    ItemComponent,
    ItemEditComponent,
    ItemDetailComponent,
    ItemListComponent,
    // SignupComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
    // AuthRoutingModule
  ]
})
export class ProductModule {}
