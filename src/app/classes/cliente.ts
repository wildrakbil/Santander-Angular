import { Identificacion } from './identificacion';
import { Segmento } from './segmento';
import { TipoEmpresa } from './tipo-empresa';
import { CIIU } from './ciiu';

export class Cliente {
  id?: number;
  razonSocial?: string;
  identificacion?: Identificacion;
  segmento?: Segmento;
  tipo?: string;
  tipoEmpresa?: TipoEmpresa;
  ciiu?: CIIU;
  activos?: number;
  fechaActivos?: Date;
}
