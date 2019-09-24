import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClienteComponent } from './cliente.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

const routes: Routes = [
      { path: '', component: ClienteComponent }
    , { path: 'novo', component: ClienteCadastroComponent }
    , { path: ':id', component: ClienteCadastroComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {}
