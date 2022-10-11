import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartcompoComponent } from './cartcompo/cartcompo.component';
import {  FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartcompoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
