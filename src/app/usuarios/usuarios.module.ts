import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListUserComponent } from './page/list-user/list-user.component';
import {MaterialModule} from "../material.module";
import { AddUserComponent } from './page/add-user/add-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateUserComponent } from './page/update-user/update-user.component';


@NgModule({
  declarations: [
    ListUserComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
