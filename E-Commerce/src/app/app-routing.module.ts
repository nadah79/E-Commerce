import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PaymentComponent } from './payment/payment.component';





const routes: Routes = [
  {path:'auth/register',component:RegisterComponent},
  {path:'auth/login',component:LoginComponent},
  {path:'payment', component:PaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
