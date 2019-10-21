import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoPagamentoComponent } from './tipo-pagamento.component';
import { TipoPagamentoCadastroComponent } from './tipo-pagamento-cadastro/tipo-pagamento-cadastro.component';
import { TipoPagamentoResolveGuard } from './aguarda/tipo-de-pagamento-resolver.guard';

const routes: Routes = [
  { path: '', component: TipoPagamentoComponent },
  { path: 'novo', component: TipoPagamentoCadastroComponent },
  { path: ':id', component: TipoPagamentoCadastroComponent , resolve: {id: TipoPagamentoResolveGuard} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPagamentoRoutingModule { }
