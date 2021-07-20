import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./page/list-product/list-product.component";
import {AddProductComponent} from "./page/add-product/add-product.component";
import {UpdateProductComponent} from "./page/update-product/update-product.component";

const routes: Routes = [
  {path: 'list-product', component: ListProductComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
