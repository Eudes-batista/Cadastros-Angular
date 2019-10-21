import { ContentRequest } from './../../modelo/servidor/ContentRequest.class';
import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Cliente } from './../../modelo/cliente.class';
import { ClienteService } from './../../servicos/cliente.service';
import { Componente } from 'src/app/components/componente.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  preserveWhitespaces: true
})
export class ClienteComponent extends Componente<Cliente> implements OnInit {

  constructor(
      private clienteService: ClienteService
    , public confirmationService: ConfirmationService
    , public messageService: MessageService
    , private router: Router
  ) {
    super(clienteService, confirmationService, messageService);
  }

  public alterar(id): void {
    this.router.navigate(['/cliente/', id]);
  }

  ngOnInit() {
    this.listarEntidades();
  }

}
