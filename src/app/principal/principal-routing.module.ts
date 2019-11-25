import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent
  },
  {
    path: 'cliente', loadChildren: () => import('./../cadastro/cliente/cliente.module').then(mod => mod.ClienteModule)
  },
  {
    path: 'tipo-de-pagamento',
    loadChildren: () => import('./../cadastro/tipo-pagamento/tipo-pagamento.module').then(mod => mod.TipoPagamentoModule)
  },
  {
    path: 'forma-de-pagamento',
    loadChildren: () => import('./../cadastro/forma-pagamento/forma-pagamento.module').then(mod => mod.FormaPagamentoModule)
  },
  {
    path: 'tipo-de-frete',
    loadChildren: () => import('./../cadastro/tipo-frete/tipo-frete.module').then(mod => mod.TipoFreteModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./../cadastro/produto/produto.module').then(mod => mod.ProdutoModule)
  },
  {
    path: 'grade',
    loadChildren: () => import('./../cadastro/grade/grade.module').then(mod => mod.GradeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
