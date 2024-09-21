import { Routes } from '@angular/router';

export const routes: Routes = [ {
    path: "", loadComponent: () => import('./componentes/primeiro-componente/primeiro-componente.component')
    .then(m => m.PrimeiroComponenteComponent)
},
{
    path: "experimento", loadComponent: () => import('./componentes/testando-route/testando-route.component')
    .then(m => m.TestandoRouteComponent)
},];
