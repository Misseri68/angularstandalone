import { Routes } from '@angular/router';
import { CochesComponent } from './components/coches/coches.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PlantillasimpleComponent } from './components/plantillasimple/plantillasimple.component';
import { PlantillamultipleComponent } from './components/plantillamultiple/plantillamultiple.component';

export const routes: Routes = [
    {path: "coches", component: CochesComponent},
    {path: "personas", component: PersonasapiComponent},
    {path: "plantillas", component: PlantillasimpleComponent},
    {path: "plantillamultiple", component: PlantillamultipleComponent},
];
