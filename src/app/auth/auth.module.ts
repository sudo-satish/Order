import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ClientSignupComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
