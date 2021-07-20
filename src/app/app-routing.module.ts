import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '',
    loadChildren: () => import('./sucursales/sucursales.module').then(m=>m.SucursalesModule)
  },
  {
    path: '',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
