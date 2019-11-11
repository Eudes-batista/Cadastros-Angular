import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Componente } from 'src/app/components/componente.class';
import { FormaPagamento } from './../../modelo/formaPagamento.class';
import { FormaPagamentoService } from './../../servicos/forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css'],
  preserveWhitespaces: true
})
export class FormaPagamentoComponent extends Componente<FormaPagamento> implements OnInit {

  constructor(
    private route: Router,
    private formaPagamentoService: FormaPagamentoService,
    confirmationService: ConfirmationService,
    messageService: MessageService) {
    super(formaPagamentoService, confirmationService, messageService);
  }

  public alterar(id: number): void {
    this.route.navigate(['/forma-de-pagamento/', id]);
  }

  ngOnInit() {
    this.listarEntidades();
  }

}
