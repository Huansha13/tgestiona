import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {UsuariosService} from "../../service/usuarios.service";
import {SucursalesService} from "../../../sucursales/service/sucursales.service";
import {SucursalesI} from "../../../model/sucursales.interface";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioI} from "../../../model/usuario.interface";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  form: FormGroup;
  suc: SucursalesI[] = [];

  constructor(private userService:UsuariosService,
              private suServ: SucursalesService,
              private router:Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getSucursales();
    this.formulario();
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
    this.suServ.getAllSucursales().subscribe((data) => {
      this.suc = data;
    })
  }

  saveUser(data: UsuarioI) {
    let us =  this.userService.addUser(data).subscribe(
      () => {
        console.log('Dato: ', us)
        this.router.navigate(['list-user'])
      }
    )
  }

}
