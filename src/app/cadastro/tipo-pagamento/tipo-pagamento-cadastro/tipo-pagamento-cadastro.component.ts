import { ConfirmationService, MessageService } from 'primeng/api';
import { TipoPagamento } from './../../../modelo/tipoPagamento.class';
import { Componente } from 'src/app/components/componente.class';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TipoPagamentoService } from 'src/app/servicos/tipo-pagamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-pagamento-cadastro',
  templateUrl: './tipo-pagamento-cadastro.component.html',
  styleUrls: ['./tipo-pagamento-cadastro.component.css'],
  preserveWhitespaces: true
})
export class TipoPagamentoCadastroComponent extends Componente<TipoPagamento> implements OnInit, OnDestroy {

  constructor(
      private tipoPagamentoService: TipoPagamentoService
    , public confirmationService: ConfirmationService
    , public messageService: MessageService
    , private route: ActivatedRoute
  ) {
    super(tipoPagamentoService, confirmationService, messageService);
  }

  ngOnInit() {
    this.buscarEntidade(this.route, new TipoPagamento());
  }

  ngOnDestroy() {
    this.inscricaoAlterar$.unsubscribe();
  }
}
