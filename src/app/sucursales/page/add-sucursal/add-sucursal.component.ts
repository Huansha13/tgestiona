import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SucursalesI} from "../../../model/sucursales.interface";
import {SucursalesService} from "../../service/sucursales.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.scss']
})
export class AddSucursalComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private sucServ: SucursalesService,
              private router: Router) { }

  ngOnInit(): void {
    this.formulario();
  }


  formulario():void {
    this.form = this.formBuilder.group({
      cod_sucursal: ['', [Validators.required]],
      nombre: ['', [Validators.required]]
    })
  }

  saveSucursal(data: SucursalesI): void {
    this.sucServ.addSucursal(data).subscribe(
      () => {
        console.log('OK')
        this.router.navigate(['list-sucursal']);
      }
    );
  }

}
