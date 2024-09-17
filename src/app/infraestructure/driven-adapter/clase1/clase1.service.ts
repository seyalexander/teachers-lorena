import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase1Model } from '../../../domain/model/clase1/clase1.model';
import { clase1Gateway } from '../../../domain/model/clase1/gateway/clase1-gateway';

@Injectable({
  providedIn: 'root'
})
export class Clase1Service extends clase1Gateway{

  private url = environment.api
  constructor(private http: HttpClient) { super()}



  override getAllAudio(nivel: number): Observable<Clase1Model[]> {
    return this.http.get<Clase1Model[]>(`${this.url}/MostrarClase1PorNivel/${nivel}`)
  }

  // listAudios(): Observable<Clase1Model[]>{
  //   return this.http.get<Clase1Model[]>(`${this.url}/MostrarClase1`)
  // }

  registrarAudios(audios: Clase1Model): Observable<object>{
    return this.http.post(`${this.url}/InsertarClase1`, audios)
  }
}
