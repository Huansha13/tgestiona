import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SucursalesI} from "../../model/sucursales.interface";

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  private url: string = 'http://localhost:4060/api/sucursal';

  constructor(private http: HttpClient) { }

  getAllSucursales(): Observable<SucursalesI[]> {
    return this.http.get<SucursalesI[]>(`${this.url}/listar`);
  }
  addSucursal(sucursal: SucursalesI): Observable<SucursalesI> {
    return this.http.post<SucursalesI>(`${this.url}/guardar`, sucursal);
  }
  updateSucursal(suc: SucursalesI, cod_sucursal:any): Observable<SucursalesI> {
    return this.http.put<SucursalesI>(`${this.url}/modificar/${cod_sucursal}`, suc);
  }

  deleteSucursal(cod_sucursal: string): Observable<SucursalesI> {
   return  this.http.delete<SucursalesI>(`${this.url}/eliminar/${cod_sucursal}`);
  }
  searchByIdSucursal(id: SucursalesI): Observable<SucursalesI>  {
    return this.http.get<SucursalesI>(`${this.url}/buscar/${id}`)
  }
}
