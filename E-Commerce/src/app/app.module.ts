import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http'
=======
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './main/Components/header/header.component';

>>>>>>> 29eb380b867d6d687e6399f2efc34763aab80e7d
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
