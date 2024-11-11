import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlantillasimpleService {

  constructor(private _http: HttpClient) { }

  getFunciones(): Observable<any>{
    let url = environment.urlApiPlantillas + "api/plantilla/funciones";
    return this._http.get(url);
  }
  
  getPlantillaFuncion(funcion: String): Observable<any>{
    let url = environment.urlApiPlantillas + "api/plantilla/plantillafuncion/" + funcion;
    return this._http.get(url)
  }

  getPlantillaFunciones(funciones: Array<String>) : Observable<any>{
    let data = "";
    for(let funcion of funciones){
      data += "funcion=" + funcion + "&";
    }
    data = data.substring(0, data.length - 1);
    console.log(data)
    let request = "api/plantilla/plantillafunciones?" + data;
    let url = environment.urlApiPlantillas + request;
    console.log(url)
    return this._http.get(url)
  }

}
