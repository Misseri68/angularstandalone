import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "../../environments/environment";

@Injectable()
export class ServicePersonas{
    constructor(private _http: HttpClient){}

    getPersonas(): Observable<any>{
        let urlApiPersonas = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApiPersonas);
    }

    getPersonasPromesa(): Promise<any> {
        let urlApiPersonas = environment.urlApiPersonas + "api/personas";
        let promise = new Promise((resolve) => {
            this._http.get(urlApiPersonas).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }
}