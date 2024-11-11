import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, ],
  template: `
    <app-menu/>
    <router-outlet />
  `

})
export class AppComponent {
  title = 'angularstandalone';
}
