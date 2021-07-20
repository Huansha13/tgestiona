import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ListProductComponent } from './page/list-product/list-product.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';
import {MaterialModule} from "../material.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [

    AddProductComponent,
       ListProductComponent,
       UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
