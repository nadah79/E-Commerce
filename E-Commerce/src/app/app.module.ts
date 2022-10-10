import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { MainModule } from './main/main.module';
import { ProductsModule } from './products/products.module';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ProductsModule,
    CheckoutModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
