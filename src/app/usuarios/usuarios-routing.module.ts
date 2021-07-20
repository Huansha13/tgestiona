import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./page/list-user/list-user.component";
import {AddUserComponent} from "./page/add-user/add-user.component";
import {UpdateUserComponent} from "./page/update-user/update-user.component";

const routes: Routes = [
  {path: 'list-user', component: ListUserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: '**', redirectTo: 'list-user', pathMatch: 'full'},
  {path: '', redirectTo: 'list-user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
