import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';

import { PrimengGeralModule } from '../../primeng/primeng-geral.module';

import { TipoPagamentoRoutingModule } from './tipo-pagamento-routing.module';
import { TipoPagamentoComponent } from './tipo-pagamento.component';
import { TipoPagamentoCadastroComponent } from './tipo-pagamento-cadastro/tipo-pagamento-cadastro.component';
import { TipoPagamentoService } from 'src/app/servicos/tipo-pagamento.service';
import { TipoPagamentoResolveGuard } from './aguarda/tipo-de-pagamento-resolver.guard';

@NgModule({
  declarations: [
     TipoPagamentoComponent,
     TipoPagamentoCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PrimengGeralModule,
    TipoPagamentoRoutingModule
  ],
   providers: [
    TipoPagamentoService,
    ConfirmationService,
    MessageService,
    TipoPagamentoResolveGuard
  ],
})
export class TipoPagamentoModule { }
