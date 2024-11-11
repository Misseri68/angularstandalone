import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  constructor(private _http: HttpClient) { } 

  getCoches(): Observable<any>{
    let request = "webresources/coches";
    let url = environment.urlApiCoches + request;
    return this._http.get(url);
  }

  
}
