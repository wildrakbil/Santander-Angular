import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

// rutas
import {PAGES_ROUTES} from "./pages.routes";

// Modulos
import {PaginationModule} from "ngx-bootstrap";
import {SharedModule} from "../shared/shared.module";

// Componenetes
import {HomeComponent} from "./home/home.component";
import {ReprocesosComponent} from "./reprocesos/reprocesos.component";
import {ConsultarComponent} from "./consultas-y-reportes/consultar/consultar.component";
import {ReportesComponent} from "./consultas-y-reportes/reportes/reportes.component";
import {LogEjecucionesComponent} from "./parametria/log-ejecuciones/log-ejecuciones.component";
import {UsuariosComponent} from "./parametria/usuarios/usuarios.component";
import {LogETLComponent} from "./parametria/log-ejecuciones/log-etl/log-etl.component";
import {CarteraConsumoVencidaComponent} from "./consultas-y-reportes/reportes/cartera-consumo-vencida/cartera-consumo-vencida.component";
import {PagesComponent} from "./pages.component";

@NgModule({
  declarations: [
    HomeComponent,
    ReprocesosComponent,
    ConsultarComponent,
    ReportesComponent,
    LogEjecucionesComponent,
    UsuariosComponent,
    LogETLComponent,
    CarteraConsumoVencidaComponent,
    PagesComponent
  ],
  exports: [
    HomeComponent,
    ReprocesosComponent,
    ConsultarComponent,
    ReportesComponent,
    LogEjecucionesComponent,
    UsuariosComponent,
    LogETLComponent,
    CarteraConsumoVencidaComponent,
    PagesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
