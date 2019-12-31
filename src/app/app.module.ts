import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ProgressbarModule} from "ngx-bootstrap";
import {HttpClientModule} from "@angular/common/http";


// Rutas
import {APP_ROUTES} from "./app-routing.module";

// Modulos
import {PagesModule} from "./pages/pages.module";
import {SharedModule} from "./shared/shared.module";

// Servicios
import {GshService} from "./services/gsh.service";

// Componenetes
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProgressbarModule.forRoot(),
    SharedModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [GshService],
  bootstrap: [AppComponent]
})
export class AppModule { }