import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ListProductComponent } from './page/list-product/list-product.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';


@NgModule({
  declarations: [
  
    AddProductComponent,
       ListProductComponent,
       UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
