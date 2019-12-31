import {BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap';
import {ModalComponent} from './modal/modal.component';
import {ConfirmComponent} from './confirm/confirm.component';


import {HttpErrorResponse} from '@angular/common/http';
import {Subject} from 'rxjs';
import {ProgressComponent} from "./progress/progress.component";

export abstract class CommonView  {

  protected bsModalRef: BsModalRef;

  constructor(protected modalService: BsModalService) {
  }

  protected Add() {
    console.log('Aumentar barra');
  }

  protected mostrarProgres(titulo: string, textoBoton: string): BsModalRef {
    const initialState = {
      titulo: titulo,
      botonCerrar: textoBoton
    };
    this.bsModalRef = this.modalService.show(ProgressComponent, <ModalOptions>{initialState});
    this.bsModalRef.content.bsModalRef = this.bsModalRef;
    return this.bsModalRef;
  }

  protected mostrarConfirmacion(titulo: string, mensaje: string): Subject<boolean> {
    const initialState = {
      titulo: titulo,
      mensaje: mensaje
    };
    this.bsModalRef = this.modalService.show(ConfirmComponent, <ModalOptions>{initialState});
    this.bsModalRef.content.bsModalRef = this.bsModalRef;
    return this.bsModalRef.content.onClose;
  }

  protected mostrarMensaje(titulo: string, mensaje: string, textoBoton: string) {
    const initialState = {
      mensaje: mensaje,
      titulo: titulo,
      botonCerrar: textoBoton
    };
    this.bsModalRef = this.modalService.show(ModalComponent, <ModalOptions>{initialState});
    this.bsModalRef.content.bsModalRef = this.bsModalRef;
  }

  protected procesaErrorHttp(error: HttpErrorResponse) {
    this.mostrarMensaje('Error '.concat(error.status.toString()), error.error.mensaje, 'Cerrar');
  }

  protected procesaErrorHttpIgnorando(error: HttpErrorResponse, ignore: number) {
    if (error.status === ignore) {
      return;
    }
    this.procesaErrorHttp(error);
  }

  protected controlKeyCode(keyCode, allowDecimalPoint: boolean) {
    return keyCode !== 69 && keyCode !== 189 && keyCode !== 109
      && keyCode !== 107 && keyCode !== 187 && keyCode !== 188
      && (allowDecimalPoint === true || keyCode !== 190);
  }
}
