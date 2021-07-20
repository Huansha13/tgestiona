import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductosService} from "../../service/productos.service";
import {ProductoI} from "../../../model/producto.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productServ: ProductosService,
              private router: Router) { }

  ngOnInit(): void {
    this.formulario();
  }

  formulario(): void{
    this.form = this.formBuilder.group({
      cod_producto: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }
  send(data: ProductoI): void {
    let prod = this.productServ.addProduct(data).subscribe(() => {
      console.log('registrado', prod)
      this.router.navigate(['list-product'])
    })
  }
}
