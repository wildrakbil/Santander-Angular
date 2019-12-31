import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Periodo} from "../../../classes/periodo";


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  public periodos: Periodo[] = [];

  searchForm = new FormGroup({
    periodo: new FormControl(''),
    modalidad: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    this.consultarPeriodos();
  }

  buscar(){}

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
