import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
<<<<<<< HEAD
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
=======
import { AuthGuard } from './guards/auth.guard';
import { PaymentComponent } from './payment/payment.component';



>>>>>>> 29eb380b867d6d687e6399f2efc34763aab80e7d

const routes: Routes = [
  {path:'auth/register',component:RegisterComponent},
  {path:'auth/login',component:LoginComponent},
<<<<<<< HEAD
  {path:'products/product',component:ProductComponent},
  {path:'products/:id',component:ProductListComponent},
  {path:'products/product-list',component:ProductListComponent}
=======
  {path:'payment', component:PaymentComponent, canActivate: [AuthGuard]},
>>>>>>> 29eb380b867d6d687e6399f2efc34763aab80e7d

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
