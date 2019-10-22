import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PrimengGeralModule } from './../../primeng/primeng-geral.module';
import { ConfirmationService, MessageService } from 'primeng/api';

import { FormaPagamentoRoutingModule } from './forma-pagamento-routing.module';
import { FormaPagamentoComponent } from './forma-pagamento.component';
import { FormaPagamentoCadastroComponent } from './forma-pagamento-cadastro/forma-pagamento-cadastro.component';
import { FormaPagamentoService } from './../../servicos/forma-pagamento.service';
import { FormaPagamentoResolveGuard } from './aguarda/forma-pagamento-resolver.guard';

import { TipoPagamentoService } from 'src/app/servicos/tipo-pagamento.service';


@NgModule({
  declarations: [FormaPagamentoComponent, FormaPagamentoCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PrimengGeralModule,
    FormaPagamentoRoutingModule
  ],
  providers: [
    FormaPagamentoService,
    ConfirmationService,
    MessageService,
    TipoPagamentoService,
    FormaPagamentoResolveGuard
  ]
})
export class FormaPagamentoModule { }
