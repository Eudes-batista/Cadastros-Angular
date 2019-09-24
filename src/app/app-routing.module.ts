import { ClienteComponent } from './cadastro/cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteModule } from './cadastro/cliente/cliente.module';


const routes: Routes = [
  { path: 'cliente', loadChildren: () => import('./cadastro/cliente/cliente.module').then(mod => mod.ClienteModule) },
  { path: '', redirectTo: 'cliente', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
