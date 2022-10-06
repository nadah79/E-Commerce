import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import {CheckoutComponent} from'./checkout/checkout/checkout.component';

const routes: Routes = [
  {path:'Checkout', component:CheckoutComponent},
  // {path:'login', component:login},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
