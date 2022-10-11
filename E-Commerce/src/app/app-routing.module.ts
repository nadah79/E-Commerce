import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { AuthGuard } from './guards/auth.guard';
import { PaymentComponent } from './payment/payment.component';
import { CartcompoComponent } from './cart/cartcompo/cartcompo.component';


const routes: Routes = [
  {path:'',component:ProductComponent},

  {path:'auth/register',component:RegisterComponent},
  {path:'auth/login',component:LoginComponent},
  {path:'products/product',component:ProductComponent},
  {path:'products/:id',component:ProductListComponent},
  {path:'products/product-list',component:ProductListComponent},
  {path:'cart',component:CartcompoComponent},

  {path:'payment', component:PaymentComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
