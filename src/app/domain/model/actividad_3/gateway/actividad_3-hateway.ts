
import { audioModel } from '../../audio/audio.model';
import { Observable } from "rxjs";
import { actividad3Model } from '../actividad_3.model';

export abstract class Actividad3Gateway {
  abstract audios(nivel: number): Observable<audioModel[]>;
  // abstract saveClase4(clase4: clase4Model): Observable<Object>;
  // abstract audios(): Observable<audioModel[]>
}
