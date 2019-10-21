import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengGeralModule } from 'src/app/primeng/primeng-geral.module';

import { ClienteComponent } from './cliente.component';
import { ClienteService } from './../../servicos/cliente.service';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteResolveGuard } from './aguarda/cliente-resolver.guard';

@NgModule({
  declarations: [
     ClienteComponent,
     ClienteCadastroComponent
  ],
  imports: [
    CommonModule,
    PrimengGeralModule,
    FormsModule,
    ClienteRoutingModule
  ],
  providers: [
    ClienteService,
    ConfirmationService,
    MessageService,
    ClienteResolveGuard
  ],
})
export class ClienteModule { }
