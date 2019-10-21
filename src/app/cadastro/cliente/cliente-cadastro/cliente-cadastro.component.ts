import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Componente } from 'src/app/components/componente.class';

import { ClienteService } from './../../../servicos/cliente.service';
import { Cliente } from './../../../modelo/cliente.class';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css'],
  preserveWhitespaces: true
})
export class ClienteCadastroComponent extends Componente<Cliente> implements OnInit, OnDestroy {

  cidades = [{ nome: 'OLINDA' }, { nome: 'RECIFE' }, { nome: 'JABOATÃO' }, { nome: 'CAMARAGIBE' }, { nome: 'PAULISTA' }];

  private estado = 'PE';
  cidade = { nome: 'OLINDA' };

  constructor(
    private clienteService: ClienteService
    , public confirmationService: ConfirmationService
    , public messageService: MessageService
    , private route: ActivatedRoute
  ) {
    super(clienteService, confirmationService, messageService);
  }

  public salvar(): void {
    this.entidade.telefone = this.entidade.telefone.replace(/\D/g, '');
    this.entidade.cpf = this.entidade.cpf.replace(/\D/g, '');
    this.entidade.cep = this.entidade.cep.replace(/\D/g, '');
    this.entidade.estado = this.estado;
    this.entidade.cidade = this.cidade.nome;
    super.salvar(this.entidade);
  }

  ngOnInit() {
    this.buscarEntidade(this.route, new Cliente());
    if (this.entidade.cidade) {
      this.cidade.nome = this.entidade.cidade;
    }
    document.getElementById('nome').focus();
  }

  ngOnDestroy() {
    this.inscricaoAlterar$.unsubscribe();
  }

}
