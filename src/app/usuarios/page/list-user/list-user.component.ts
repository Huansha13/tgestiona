import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UsuariosService} from "../../service/usuarios.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SucursalesI} from "../../../model/sucursales.interface";
import {UsuarioI} from "../../../model/usuario.interface";


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['nombre', 'usuario', 'clave', 'sucursal', 'actions'];
  dataSource = new MatTableDataSource();
  isLoading = true;
  constructor(private userService: UsuariosService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getAllUser().subscribe( prods => {
      (this.dataSource.data = prods);
      this.isLoading = false;
      console.log(prods)
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditProd(e):void {}

  onDeleteProd(id: UsuarioI): void {
    this.userService.deleteUser(id.cod_usuario).subscribe(
      () => {
        this.getUser()
      }
    )
  }

}
