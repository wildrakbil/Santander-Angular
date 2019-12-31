import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../classes/usuario";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public paginaActual = 1;
  public cantidadRegistros = 15;
  public totalRegistros: number;
  public usuarios: Usuario[] = [];

  constructor() { }

  ngOnInit() {
    this.listarUsuarios();
  }
  public listarUsuarios() {

  }

}
