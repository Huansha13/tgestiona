import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductosService} from "../../service/productos.service";
import {ProductoI} from "../../../model/producto.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  // public form: FormGroup;
  @Input() product: ProductoI;

  constructor( private activeRoute: ActivatedRoute,
               private productServ: ProductosService,
               private router: Router,
               private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cargarProduct();
  }

  public form = new FormGroup({
    cod_producto: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required)
  })

  cargarProduct(): void {
    this.activeRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.productServ.shearProductById(id).subscribe(data => {
          // this.product = data;
          this.initValuesForm(data);
        })
      }
    })
  }

  private initValuesForm(prod: ProductoI): void {
    this.form.patchValue({
      cod_producto: prod.cod_producto,
      nombre: prod.nombre,
      precio: prod.precio
    })
  }
  update(data: ProductoI):void {
    this.productServ.updateProduct(data, data.cod_producto).subscribe(
      () => {
        this.router.navigate(['list-product']);
      }
    );
  }

}
