import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
// import { SigninComponent } from './signin/signin.component';

// const authRoutes: Routes = [
//   { path: 'item', component: ItemComponent },
//   // { path: 'signin', component: SigninComponent },
// ];

const recipesRoutes: Routes = [
  {
    path: 'item', component: ItemComponent, children: [
      { path: '', component: ItemListComponent },
      { path: 'new', component: ItemEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: ItemDetailComponent },
      { path: ':id/edit', component: ItemEditComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class ProductRoutingModule {}
