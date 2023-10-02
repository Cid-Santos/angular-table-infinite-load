import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisesModel } from '../model/Paises.model';
import { filter, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get<PaisesModel[]>(`${environment.baseURL}paises.json`);
  }
}
