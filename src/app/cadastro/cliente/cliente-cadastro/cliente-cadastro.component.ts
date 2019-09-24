import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ClienteService } from './../../../servicos/cliente.service';
import { Cliente } from './../../../modelo/cliente.class';
import { Componente } from 'src/app/components/componente.class';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css'],
  preserveWhitespaces: true
})
export class ClienteCadastroComponent extends Componente<Cliente> implements OnInit {

  estados = [{ nome: 'PE' }];
  cidades = [{ nome: 'OLINDA' }, { nome: 'RECIFE' }, { nome: 'JABOATÃO' }, { nome: 'CAMARAGIBE' }, { nome: 'PAULISTA' }];

  estado: any;
  cidade: any;

  constructor(
      private clienteService: ClienteService
    , public confirmationService: ConfirmationService
    , public messageService: MessageService
  ) {
    super(clienteService, confirmationService, messageService);
  }

  public salvar(cliente: Cliente): void {
    cliente.telefone = cliente.telefone.replace(/\D/g, '');
    cliente.cpf = cliente.cpf.replace(/\D/g, '');
    cliente.cep = cliente.cep.replace(/\D/g, '');
    cliente.estado = this.estado;
    cliente.cidade = this.cidade;
    super.salvar(cliente);
  }

  ngOnInit() {
    document.getElementById('nome').focus();
  }

}
