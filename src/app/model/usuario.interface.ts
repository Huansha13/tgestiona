import {SucursalesI} from "./sucursales.interface";

export interface UsuarioI{
  cod_usuario: string;
  nombre: string;
  usuario: string;
  clave:string;
  sucursal: SucursalesI[];
}
