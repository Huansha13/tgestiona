import { Component, OnInit } from '@angular/core';
import {ProductoI} from "../../../model/producto.interface";
import {ProductosService} from "../../service/productos.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {


  pro: ProductoI[] = [];

  constructor(private productSer: ProductosService) { }

  ngOnInit(): void {
    this.getProduct()
  }


  getProduct(): void {
    this.productSer.getAllProduct().subscribe(
      data => {
        this.pro = data;
        console.log(data)
      }
    )
  }
  deleteProduct(id:ProductoI) {
    this.productSer.deleteProduct(id.cod_producto).subscribe(
      (repons) => {
        console.log('Producto eliminado', repons)
        this.getProduct()
      }
    )
  }
}
