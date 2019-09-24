import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteComponent } from './cliente.component';
import { ClienteService } from './../../servicos/cliente.service';
import { ClienteRoutingModule } from './cliente-routing.module';
import { PrimengGeralModule } from 'src/app/primeng/primeng-geral.module';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

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
    MessageService
  ],
})
export class ClienteModule { }
