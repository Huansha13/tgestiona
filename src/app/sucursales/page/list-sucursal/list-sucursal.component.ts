import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateSucursalComponent} from "../update-sucursal/update-sucursal.component";
import {SucursalesService} from "../../service/sucursales.service";
import {SucursalesI} from "../../../model/sucursales.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-sucursal',
  templateUrl: './list-sucursal.component.html',
  styleUrls: ['./list-sucursal.component.scss']
})
export class ListSucursalComponent implements OnInit {

  imgPort = 'https://res.cloudinary.com/yfr/image/upload/v1623130879/portafolio/static/sucursal_stamyt.jpg'
  data: SucursalesI[] = [];

  constructor(public dialog: MatDialog,
              private sucurServ: SucursalesService,) { }

  ngOnInit(): void {
    this.getAllSuc();
  }


  dialogSucursal():void {
    const dialogRef = this.dialog.open(UpdateSucursalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getAllSuc():void {
    this.sucurServ.getAllSucursales().subscribe(
      (data) => {
        this.data = data
        console.log(data)
      }
    )
  }
  deleteSucursal(id: SucursalesI) {
    this.sucurServ.deleteSucursal(id.cod_sucursal).subscribe(
      () => {
        this.getAllSuc();
      }
    );
  }

}
