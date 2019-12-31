export class WsResponse<T> {
  mensaje?: string;
  data?: T;
  paginaActual?: number;
  totalPaginas?: number;
}
