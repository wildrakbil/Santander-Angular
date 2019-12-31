import {Component, OnInit, Injectable} from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import  {ActivatedRoute} from "@angular/router";
// Servicios
import {GshService} from "../../services/gsh.service";

// View
import {CommonView} from "../../shared/common-view";
import {WsResponse} from "../../classes/ws-response";
import {RangoActivos} from "../../classes/rango-activos";


@Component({
  selector: 'app-reprocesos',
  templateUrl: './reprocesos.component.html',
  styleUrls: ['./reprocesos.component.css']
})

@Injectable()
export class ReprocesosComponent extends CommonView implements OnInit {

  private intervalHandle: any;
  public periodo: string;
  public inicial: boolean;

  constructor(private bsModalService: BsModalService,
              private gshService: GshService,
              private _route: ActivatedRoute) {
    super(bsModalService);
  }

  ngOnInit() {
    const periodo = +this._route.snapshot.params['periodo'];
  }

  public ejecutar() {
    if (this.periodo == null || this.periodo === '') {
      this.mostrarMensaje('Alerta', 'Seleccione un fecha para ejecutar la carga', 'Continuar');
    } else {
      if (this.inicial) {
        this.cargaInicial();
      } else {
        this.cargaPeriodica();
      }
    }
  }

  public cargaInicial() {
    this.mostrarProgres('Procesando información...', 'Cerrar');
    this.bsModalRef.content.actual = 10;
    this.gshService.cargaInicial(this.periodo)
      .subscribe((response: WsResponse<RangoActivos[]>) => {
          console.log(response);
          this.bsModalRef.content.actual = 100;
        },
        error => {
          this.bsModalRef.hide();
          this.procesaErrorHttp(error);
        });
  }

  public cargaMaestra(){
    this.gshService.cargaInicial(this.periodo)
      .subscribe((response: WsResponse<RangoActivos[]>) => {
          console.log(response);
          this.bsModalRef.content.actual = 100;
        },
        error => {
          this.bsModalRef.hide();
          this.procesaErrorHttp(error);
        });
  }


  public cargaPeriodica() {
    this.gshService.cargaPeriodica(this.periodo)
      .subscribe((response: WsResponse<RangoActivos[]>) => {
          console.log(response);
          this.mostrarMensaje('Aviso', 'Carga ejecutada exitosamente', 'Continuar');
        },
        error => {
          this.procesaErrorHttp(error);
        });
  }

  private prepararModal() {
    this.intervalHandle = window.setInterval(() => {
      if (this.bsModalRef.content.actual === 100) {
        window.clearInterval(this.intervalHandle);
        this.bsModalRef.hide();
      }
      this.bsModalRef.content.actual += 20;
    }, 2000);
    this.bsModalRef.content.onClose.subscribe((result) => {
      this.bsModalRef.hide();
    });
  }
}
