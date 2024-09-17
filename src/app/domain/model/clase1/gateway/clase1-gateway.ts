import { Observable } from "rxjs";
import { Clase1Model } from "../clase1.model";

export abstract class clase1Gateway {
  abstract getAllAudio(nivel: number): Observable<Clase1Model[]>;
  abstract registrarAudios(audios: Clase1Model): Observable<Object>;
}
