import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioI} from "../../model/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = 'http://localhost:4060/api/usuario'

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<UsuarioI[]> {
    return this.http.get<UsuarioI[]>(`${this.url}/listar`);
  }
  searchByIdUser(id:UsuarioI ): Observable<UsuarioI> {
    return this.http.get<UsuarioI>(`${this.url}/buscar/${id}`);
  }
  addUser(user:UsuarioI):Observable<UsuarioI> {
    return this.http.post<UsuarioI>(`${this.url}/guardar`, user);
  }

  deleteUser(cod_usuario: string): Observable<UsuarioI> {
    return this.http.delete<UsuarioI>(`${this.url}/eliminar/${cod_usuario}`)
  }
  updateUser(user: UsuarioI, cod_usuario: string): Observable<UsuarioI> {
    return this.http.put<UsuarioI>(`${this.url}/modificar/${cod_usuario}`, user);
  }

}
