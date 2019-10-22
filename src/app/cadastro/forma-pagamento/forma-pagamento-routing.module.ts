import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormaPagamentoComponent } from './forma-pagamento.component';
import { FormaPagamentoCadastroComponent } from './forma-pagamento-cadastro/forma-pagamento-cadastro.component';
import { FormaPagamentoResolveGuard } from './aguarda/forma-pagamento-resolver.guard';

const routes: Routes = [
  { path: '', component: FormaPagamentoComponent },
  { path: 'novo', component: FormaPagamentoCadastroComponent },
  { path: ':id', component: FormaPagamentoCadastroComponent, resolve: { id: FormaPagamentoResolveGuard } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormaPagamentoRoutingModule { }
