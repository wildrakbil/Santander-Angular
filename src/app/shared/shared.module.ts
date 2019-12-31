import {NgModule} from '@angular/core';
  import {ModalModule, ProgressbarModule} from "ngx-bootstrap";

// rutas
import {PAGES_ROUTES} from "../pages/pages.routes";

// Componenetes
import {NopagefoundComponent} from "./nopagefound/nopagefound.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import { ModalComponent } from './modal/modal.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    NopagefoundComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    ConfirmComponent,
    ProgressComponent
  ],
  exports: [
    NopagefoundComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    ConfirmComponent,
    ProgressComponent
  ],
  imports: [
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    PAGES_ROUTES
  ],
  entryComponents: [
    ModalComponent,
    ConfirmComponent,
    ProgressComponent
  ]
})
export class SharedModule{}
