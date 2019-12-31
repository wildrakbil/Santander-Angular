import { Component, OnInit } from '@angular/core';
import {LogETL} from "../../../../classes/log-etl";


@Component({
  selector: 'app-log-etl',
  templateUrl: './log-etl.component.html',
  styleUrls: ['./log-etl.component.css']
})
export class LogETLComponent implements OnInit {

  public logETL: LogETL[]=[];

  constructor() { }

  ngOnInit() {
  }

}
