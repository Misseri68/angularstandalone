import { Component, OnInit } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { Coche } from '../../models/coche';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-coches',
  standalone: true,
  imports: [NgFor, NgIf],
  providers: [CocheService],
  templateUrl: './coches.component.html',
})
export class CochesComponent implements OnInit{
  public coches!: Array<Coche>;
  constructor(private _cocheService: CocheService){

  }

  ngOnInit(): void {
    this._cocheService.getCoches().subscribe(Response => {
      console.log("leyendo");
      this.coches = Response;
    })
  }
}