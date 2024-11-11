import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  standalone: true,
  imports: [NgFor, NgIf],
  providers: [ServicePersonas]
})
export class PersonasapiComponent implements OnInit {
  public personas !: Array<Persona>;
  constructor(private _service: ServicePersonas){
    this.personas = new Array<Persona>();
  }

  ngOnInit(): void{
    this._service.getPersonas().subscribe(Response => {
      console.log("leyendo");
      this.personas = Response;
    })
  }
}
