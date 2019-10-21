import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Componente } from 'src/app/components/componente.class';
import { ConfirmationService, MessageService } from 'primeng/api';

import { TipoPagamento } from './../../modelo/tipoPagamento.class';
import { TipoPagamentoService } from './../../servicos/tipo-pagamento.service';

@Component({
  selector: 'app-tipo-pagamento',
  templateUrl: './tipo-pagamento.component.html',
  styleUrls: ['./tipo-pagamento.component.css'],
  preserveWhitespaces: true
})
export class TipoPagamentoComponent extends Componente<TipoPagamento> implements OnInit {

  constructor(
      private tipoPagamentoService: TipoPagamentoService
    , public confirmationService: ConfirmationService
    , public messageService: MessageService
    , private router: Router) {
    super(tipoPagamentoService, confirmationService, messageService);
  }

  public alterar(id): void {
    this.router.navigate(['/tipo-de-pagamento/', id]);
  }

  ngOnInit() {
    this.listarEntidades();
  }

}
