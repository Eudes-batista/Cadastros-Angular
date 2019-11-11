import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoComponent } from './produto.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoResolveGuard } from './guarda/produto-resolver.guard';


const routes: Routes = [
  { path: '', component: ProdutoComponent }
  , { path: 'novo', component: ProdutoCadastroComponent }
  , { path: ':id', component: ProdutoCadastroComponent, resolve: { id: ProdutoResolveGuard } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
