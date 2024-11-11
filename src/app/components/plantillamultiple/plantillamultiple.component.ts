import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PlantillasimpleService } from '../../services/plantillasimple.service';
import { Plantilla } from '../../models/plantilla';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantillamultiple',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  providers: [PlantillasimpleService],
  templateUrl: './plantillamultiple.component.html',
})
export class PlantillamultipleComponent {
  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public empleados: Array<Plantilla>;
  public funciones!: Array<string>;
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service: PlantillasimpleService) {
    this.empleados = new Array<Plantilla>();
    this.funcionesSeleccionadas = new Array<string>();
  }

  mostrarPlantilla(): void {
    
    let aux = new Array<string>();
    for (var option of this.selectFunciones.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe(response => {
      this.empleados = response;
      console.log(response)
    })
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.funciones = response;
    })
  }
}
