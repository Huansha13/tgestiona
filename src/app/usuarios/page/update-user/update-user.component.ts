import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuariosService} from "../../service/usuarios.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioI} from "../../../model/usuario.interface";
import {SucursalesI} from "../../../model/sucursales.interface";
import {SucursalesService} from "../../../sucursales/service/sucursales.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  public form: FormGroup;
  suc: SucursalesI[] = [];
  constructor( private formBuilder: FormBuilder,
               private userServ: UsuariosService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private sucursarServi: SucursalesService) { }

  ngOnInit(): void {
    this.formulario();
    this.cargaDateUser();
    this.getSucursales();
  }

  formulario(): void {
    this.form = this.formBuilder.group({
      cod_usuario: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      sucursal: this.formBuilder.group({
        cod_sucursal: ['', [Validators.required]]
      })
    })
  }
  getSucursales() {
    this.sucursarServi.getAllSucursales().subscribe((data) => {
      this.suc = data;
    })
  }
  cargaDateUser(): void {
    this.activatedRoute.params.subscribe(p => {
      let id = p['id']
      if (id) {
        this.userServ.searchByIdUser(id).subscribe(
          (data) => {
            console.log(data);
            this.initValueFrom(data);
          }
        )
      }
    })
  }

  initValueFrom(user: UsuarioI) {
    this.form.patchValue({
      cod_usuario: user.cod_usuario,
      nombre: user.nombre,
      usuario: user.usuario,
      clave: user.clave,
      sucursal: user.sucursal
    })
  }
  updateUser(user: UsuarioI){
    this.userServ.updateUser(user, user.cod_usuario).subscribe(
      () => {
      this.router.navigate(['list-user'])
    })
  }
}
