import { Component } from '@angular/core';
import { PlantillasimpleService } from '../../services/plantillasimple.service';
import { NgFor, NgIf } from '@angular/common';
import { Plantilla } from '../../models/plantilla';


@Component({
  selector: 'app-plantillasimple',
  standalone: true,
  imports: [NgFor, NgIf],
  providers: [PlantillasimpleService],
  templateUrl:  './plantillasimple.component.html',
})
export class PlantillasimpleComponent {
  public funciones!: Array<String>; 
  public plantillaFuncion!: Array<Plantilla>;

  constructor(private _plantillaService: PlantillasimpleService){

  }

  seleccionarFuncion(event: any):void{
    this._plantillaService.getPlantillaFuncion(event.target.value).subscribe(response=>{
      this.plantillaFuncion = response;
    })
  }

  ngOnInit(): void {
    this._plantillaService.getFunciones().subscribe(response => {
      this.funciones = response;
    })
  }
}
