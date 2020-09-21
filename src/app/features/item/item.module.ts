import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditCartComponent } from 'src/app/shared/edit-cart/edit-cart.component';



@NgModule({
  declarations: [ProductComponent,EditCartComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ProductComponent]
})
export class ItemModule { }
