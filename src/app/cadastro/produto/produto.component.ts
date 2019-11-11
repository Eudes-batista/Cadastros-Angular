import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Componente } from 'src/app/components/componente.class';
import { Produto } from './../../modelo/produto.class';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  preserveWhitespaces: true
})
export class ProdutoComponent extends Componente<Produto> implements OnInit {

  constructor(
      produtoService: ProdutoService
    , confirmationService: ConfirmationService
    , messageService: MessageService
    , private router: Router
  ) {
    super(produtoService, confirmationService, messageService);
  }

  public alterar(id): void {
    this.router.navigate(['/produto/', id]);
  }

  ngOnInit() {
    this.listarEntidades();
  }

}
