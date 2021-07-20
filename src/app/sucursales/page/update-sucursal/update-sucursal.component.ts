import {Component, Input, OnInit} from '@angular/core';
import {ProductoI} from "../../../model/producto.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SucursalesService} from "../../service/sucursales.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SucursalesI} from "../../../model/sucursales.interface";

@Component({
  selector: 'app-update-sucursal',
  templateUrl: './update-sucursal.component.html',
  styleUrls: ['./update-sucursal.component.scss']
})
export class UpdateSucursalComponent implements OnInit {
  @Input() sucursal: ProductoI;
  constructor( private sucursalServ: SucursalesService,
               private activatedRouter: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.cargarSucursal();
  }

  public form = new FormGroup({
    cod_sucursal: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required)
  })

  cargarSucursal() {
    this.activatedRouter.params.subscribe(p => {
      let id = p['id']
      if (id) {
        this.sucursalServ.searchByIdSucursal(id).subscribe(
          data => {
            this.initValueForm(data);
          }
        )
      }
    })
  }

  private initValueForm(suc: SucursalesI): void {
    this.form.patchValue({
      cod_sucursal: suc.cod_sucursal,
      nombre: suc.nombre
    })
  }
  updateSucursal(data: SucursalesI) :void {
    this.sucursalServ.updateSucursal(data, data.cod_sucursal).subscribe(
      () => {
        this.router.navigate(['list-sucursal']);
      }
    );
  }
}
