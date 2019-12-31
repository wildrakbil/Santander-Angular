import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Provision} from '../../../classes/provision';
import {Periodo} from "../../../classes/periodo";


@Component({
  selector: 'app-maestras',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  public paginaActual = 1;
  public cantidadRegistros = 15;
  public totalRegistros: number;
  public buscado = false;
  public provisiones: Provision[] = [];
  public periodos: Periodo[] = [];
  public urlDescarga = '';


  searchForm = new FormGroup({
    periodo: new FormControl(''),
    modalidad: new FormControl('')
  });


  constructor() {
  }

  ngOnInit() {
    this.consultarPeriodos();
  }

  public consultarPeriodos() {
    this.periodos = [{periodo: "201907", descripcion: "2019-07-19"},
      {periodo: "201906", descripcion: "2019-06-13"}];
    this.setInitFormValues();
  }

  public setInitFormValues() {
    this.searchForm.setValue({
      periodo: this.periodos[0].periodo,
      modalidad: '1'
    });
  }


}
