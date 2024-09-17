import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { actividad3Model } from '../../../domain/model/actividad_3/actividad_3.model';
import { Actividad3Gateway } from '../../../domain/model/actividad_3/gateway/actividad_3-hateway';
import { audioModel } from '../../../domain/model/audio/audio.model';

@Injectable({
  providedIn: 'root'
})
export class Actividad3Service extends Actividad3Gateway{

  private url = environment.api

  constructor(private http: HttpClient) { super();}

  override audios(nivel: number): Observable<audioModel[]> {
    return this.http.get<audioModel[]>(`${this.url}/MostrarAudiosActividad3PorNivel/${nivel}`)
  }
}
