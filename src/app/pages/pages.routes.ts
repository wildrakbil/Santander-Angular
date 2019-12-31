import {RouterModule, Routes} from "@angular/router";

import {PagesComponent} from "./pages.component";
import {HomeComponent} from "./home/home.component";
import {ReprocesosComponent} from "./reprocesos/reprocesos.component";
import {ConsultarComponent} from "./consultas-y-reportes/consultar/consultar.component";
import {ReportesComponent} from "./consultas-y-reportes/reportes/reportes.component";
import {UsuariosComponent} from "./parametria/usuarios/usuarios.component";
import {LogEjecucionesComponent} from "./parametria/log-ejecuciones/log-ejecuciones.component";
import {LogETLComponent} from "./parametria/log-ejecuciones/log-etl/log-etl.component";

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'reprocesos', component: ReprocesosComponent},
      {path: 'consultar', component: ConsultarComponent},
      {path: 'reportes', component: ReportesComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'log', component: LogEjecucionesComponent},
      {path: 'logETL', component: LogETLComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
