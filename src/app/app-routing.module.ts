import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { TestandoRouteComponent } from './componentes/testando-route/testando-route.component';

const routes: Routes = [
  { path: '', component: PrimeiroComponenteComponent },
  { path: 'experimento', component: TestandoRouteComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],aaaa
  exports: [RouterModule]
})
export class AppRoutingModule {}