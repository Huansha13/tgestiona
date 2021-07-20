import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductoI} from "../../model/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url:string = 'http://localhost:4060/api/producto'

  constructor( private http: HttpClient) { }

  getAllProduct(): Observable<ProductoI[]> {
    return this.http.get<ProductoI[]>(`${this.url}/listar`);
  }

  addProduct(product: ProductoI): Observable<ProductoI> {
    return this.http.post<ProductoI>(`${this.url}/guardar`, product);
  }

  deleteProduct(cod_producto: any): Observable<ProductoI> {
    return this.http.delete<ProductoI>(`${this.url}/eliminar/${cod_producto}`)
  }
  shearProductById(id: ProductoI): Observable<ProductoI> {
    return this.http.get<ProductoI>(`${this.url}/buscar/${id}`);
  }
  updateProduct(pro: ProductoI, cod_producto:any): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.url}/modificar/${cod_producto}`, pro)
  }
}
