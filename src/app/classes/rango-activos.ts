import { TipoEmpresa } from './tipo-empresa';

export class RangoActivos {
    id?: number;
    desde?: number;
    hasta?: number;
    tipoempresaId?: TipoEmpresa;
    nombre?:String;
}
