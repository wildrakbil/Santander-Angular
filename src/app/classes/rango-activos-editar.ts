import { RangoActivos } from "./rango-activos";


export class RangoActivosEditar extends RangoActivos{
    constructor(rangoActivos: RangoActivos) {
        super();
        this.id = rangoActivos.id;
        this.desde=rangoActivos.desde;
        this.hasta=rangoActivos.hasta;
        this.tipoempresaId=rangoActivos.tipoempresaId;
        this.nombre=rangoActivos.nombre;
       
      }
      
      public static convertirLista(lista: RangoActivos[] ){
        let res: RangoActivosEditar[] = [];
          for (let l of lista) {
               res.push(new RangoActivosEditar(l));
          }
          return res;
      }
}
