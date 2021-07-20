import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListSucursalComponent} from "./page/list-sucursal/list-sucursal.component";
import {AddSucursalComponent} from "./page/add-sucursal/add-sucursal.component";
import {UpdateSucursalComponent} from "./page/update-sucursal/update-sucursal.component";

const routes: Routes = [
  {path: 'list-sucursal', component: ListSucursalComponent},
  {path: 'add-sucursal', component: AddSucursalComponent},
  {path: 'update-sucursal/:id', component: UpdateSucursalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
