import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Componente } from 'src/app/components/componente.class';
import { Produto } from 'src/app/modelo/produto.class';
import { ProdutoService } from 'src/app/servicos/produto.service';

class TipoProduto {
  nome: string;
}

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent extends Componente<Produto> implements OnInit, OnDestroy {

  tiposProdutos = [{ nome: 'Materia Prima' }, { nome: 'Produto Acabado' }];
  tipoProduto = new TipoProduto();

  constructor(
      produtoService: ProdutoService
    , confirmationService: ConfirmationService
    , messageService: MessageService
    , private router: Router
    , private route: ActivatedRoute
  ) {
    super(produtoService, confirmationService, messageService);
  }

  public salvar(): void {
    this.entidade.tipo = this.tipoProduto.nome;
    super.salvar();
  }

  ngOnInit() {
    this.buscarEntidade(this.route, new Produto());
    this.tipoProduto.nome = '';
  }

  ngOnDestroy() {
    this.inscricaoAlterar$.unsubscribe();
  }
}
