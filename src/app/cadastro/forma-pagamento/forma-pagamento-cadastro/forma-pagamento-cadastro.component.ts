import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Componente } from 'src/app/components/componente.class';
import { FormaPagamento } from './../../../modelo/formaPagamento.class';
import { FormaPagamentoService } from './../../../servicos/forma-pagamento.service';

import { TipoPagamentoService } from './../../../servicos/tipo-pagamento.service';
import { TipoPagamento } from './../../../modelo/tipoPagamento.class';

@Component({
  selector: 'app-forma-pagamento-cadastro',
  templateUrl: './forma-pagamento-cadastro.component.html',
  styleUrls: ['./forma-pagamento-cadastro.component.css'],
})
export class FormaPagamentoCadastroComponent extends Componente<FormaPagamento> implements OnInit, OnDestroy {

  tipoDePagamentos: TipoPagamento[];

  constructor(
    private route: ActivatedRoute,
    private tipoPagamentoService: TipoPagamentoService,
    formaPagamentoService: FormaPagamentoService,
    confirmationService: ConfirmationService,
    messageService: MessageService) {
    super(formaPagamentoService, confirmationService, messageService);
  }

  private listarTiposDePagamentos(): void {
    this.tipoPagamentoService.listar(null).subscribe(success => this.tipoDePagamentos = success.content);
  }

  ngOnInit() {
    this.listarTiposDePagamentos();
    this.buscarEntidade(this.route, new FormaPagamento());
  }

  ngOnDestroy(): void {
    this.inscricaoAlterar$.unsubscribe();
  }

}
