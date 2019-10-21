import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cliente', loadChildren: () => import('./cadastro/cliente/cliente.module').then(mod => mod.ClienteModule) },
  { path: 'tipo-de-pagamento',
  loadChildren: () => import('./cadastro/tipo-pagamento/tipo-pagamento.module').then(mod => mod.TipoPagamentoModule) },
  { path: '', redirectTo: 'cliente', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
