import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {Subject} from "rxjs";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public titulo: string;
  public mensaje: string;
  public onClose: Subject<boolean>;

  constructor() { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  public aceptar(): void {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  public cancelar(): void {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }

}
