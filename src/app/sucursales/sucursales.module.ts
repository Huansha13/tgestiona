import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { AddSucursalComponent } from './page/add-sucursal/add-sucursal.component';
import { ListSucursalComponent } from './page/list-sucursal/list-sucursal.component';
import { UpdateSucursalComponent } from './page/update-sucursal/update-sucursal.component';


@NgModule({
  declarations: [
    AddSucursalComponent,
    ListSucursalComponent,
    UpdateSucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
