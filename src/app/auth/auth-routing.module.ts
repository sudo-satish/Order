import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'client', component: ClientSignupComponent },
  // {
  //   path: 'client', component: ClientSignupComponent, children: [
  //     { path: '', component: ClientSignupComponent },
  //     // { path: 'new', component: ItemEditComponent, canActivate: [AuthGuard] },
  //     // { path: ':id', component: ItemDetailComponent },
  //     // { path: ':id/edit', component: ItemEditComponent, canActivate: [AuthGuard] },
  //     // { path: ':id/edit', component: ItemEditComponent },
  //   ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
