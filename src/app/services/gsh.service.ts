import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WsResponse} from '../classes/ws-response';
import {RangoActivos} from '../classes/rango-activos';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GshService {

  constructor(private httpClient: HttpClient) {
  }

  public cargaInicial(periodo: string): Observable<WsResponse<null>> {
    let url = environment.gsh_api + '/cargainicial';
    url += '?fecPeriodo=' + periodo;
    console.log('URL:'.concat(url));
    return this.httpClient.get<WsResponse<null>>(url, httpOptions);
  }

  public cargaPeriodica(periodo: string): Observable<WsResponse<null>> {
    let url = environment.gsh_api + '/cargaperiodica';
    url.concat('?fecPeriodo=', periodo);
    console.log('URL:'.concat(url));
    return this.httpClient.get<WsResponse<null>>(url, httpOptions);
  }
}
