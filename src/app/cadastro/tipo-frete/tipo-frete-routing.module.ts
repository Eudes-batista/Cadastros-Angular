import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoFreteComponent } from './tipo-frete.component';
import { TipoFreteCadastroComponent } from './tipo-frete-cadastro/tipo-frete-cadastro.component';
import { TipoFreteResolveGuard } from './guarda/tipo-frete-guard';

const routes: Routes = [
  {path: '' , component: TipoFreteComponent},
  {path: 'novo' , component: TipoFreteCadastroComponent},
  {path: ':id/editar' , component: TipoFreteCadastroComponent, resolve: {id: TipoFreteResolveGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoFreteRoutingModule { }
