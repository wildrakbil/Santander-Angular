import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit{

  public bsModalRef: BsModalRef;
  public titulo: string;
  public actual = 0;
  public onClose: Subject<boolean>;
  public botonCerrar: string;

  constructor() {
  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  public cancelar() {
    this.onClose.next(true);
  }
}
