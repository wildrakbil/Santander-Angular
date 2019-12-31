import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public titulo: string;
  public mensaje: string;
  public botonCerrar: string;

  constructor() {}

  ngOnInit() {
  }

}
