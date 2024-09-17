import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { actividad1Gateway } from '../../../domain/model/antividad_1/gateway/actividad_1-gateway';
import { Observable } from 'rxjs';
import { Actividad1Model } from '../../../domain/model/antividad_1/actividad_1.model';
import { respuestaActividad_1 } from '../../../domain/model/antividad_1/respuestaActividad_1.model';

@Injectable({
  providedIn: 'root'
})
export class Actividad1Service extends actividad1Gateway{

  private url = environment.api

  constructor(private http: HttpClient) { super();}

  override getActividadesPorNivel(nivel: number): Observable<Actividad1Model[]> {
    return this.http.get<Actividad1Model[]>(`${this.url}/MostrarClaseActividad1PorNivel/${nivel}`)
  }

  // override getAllClase2(): Observable<Array<Actividad1Model>> {
  //   return this.http.get<Actividad1Model[]>(`${this.url}/MostrarRespuestasActividad1`)
  // }

  // override saveClase2(actividad1: respuestaActividad_1): Observable<Object> {
  //   return this.http.post(`${this.url}/InsertarRespuestasClaseActividad1`,actividad1)
  // }

  // override saveClase2reg(actividad1: Actividad1Model): Observable<Object> {
  //   return this.http.post(`${this.url}/InsertarRespuestasClaseActividad1`,actividad1)
  // }
}
