import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    RouterModule.forChild([
    // {path:'Checkout', component:CheckoutComponent},
  ]),
    CommonModule

  ]
})
export class CheckoutModule { }
