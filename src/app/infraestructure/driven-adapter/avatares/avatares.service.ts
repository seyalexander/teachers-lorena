import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { avatarModel } from '../../../domain/model/avatares/avatar.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvataresService {

  private url = environment.api
  constructor(private http: HttpClient) { }

  listAvatares(): Observable<avatarModel[]>{
    return this.http.get<avatarModel[]>(`${this.url}/MostrarAvatar`)
  }
}
