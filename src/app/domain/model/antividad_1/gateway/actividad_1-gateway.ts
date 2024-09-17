import { Observable } from "rxjs";
import { Actividad1Model } from "../actividad_1.model";
import { respuestaActividad_1 } from "../respuestaActividad_1.model";

export abstract class actividad1Gateway {
  // abstract getAllClase2(): Observable<Actividad1Model[]>;
  // abstract saveClase2(actividad1: respuestaActividad_1): Observable<Object>;
  // abstract saveClase2reg(actividad1: Actividad1Model): Observable<Object>;

  abstract getActividadesPorNivel(nivel: number): Observable<Actividad1Model[]>;
}
