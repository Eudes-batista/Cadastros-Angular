import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoFreteComponent } from './tipo-frete.component';

const routes: Routes = [
  {path: '' , component: TipoFreteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoFreteRoutingModule { }
