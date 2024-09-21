import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { ParenteDataComponent } from './componentes/parente-data/parente-data.component';
import { DiretivasComponent } from "./componentes/diretivas/diretivas.component";
import { CondicionalComponent } from "./componentes/condicional/condicional.component";
import { EventosComponent } from "./componentes/eventos/eventos.component";
import { EmissorComponent } from "./componentes/emissor/emissor.component";
import { ListasComponent } from "./componentes/listas/listas.component";
import { PipesComponent } from "./componentes/pipes/pipes.component";
import { TwoWayDataBindingComponent } from "./componentes/two-way-data-binding/two-way-data-binding.component";



import { TestandoRouteComponent } from './componentes/testando-route/testando-route.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppRoutingModule,
    PrimeiroComponenteComponent,
    ParenteDataComponent,
    DiretivasComponent,
    CondicionalComponent,
    EventosComponent,
    EmissorComponent,
    ListasComponent,
    PipesComponent,
    TwoWayDataBindingComponent,
    FormsModule,
    TestandoRouteComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estudando-Angular';
  Usuario = "Alvinho";

  dadosUsuario = {
    email: "generico@gmail.com",
    cargo: "ADM",
  };

  claTojo: string = "Um subsidiário do clã Tojo";
}
