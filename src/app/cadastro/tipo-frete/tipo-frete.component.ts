import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Componente } from 'src/app/components/componente.class';
import { TipoFrete } from 'src/app/modelo/tipoFrete.class';
import { TipoFreteService } from 'src/app/servicos/tipo-frete.service';

@Component({
  selector: 'app-tipo-frete',
  templateUrl: './tipo-frete.component.html',
  styleUrls: ['./tipo-frete.component.css']
})
export class TipoFreteComponent extends Componente<TipoFrete> implements OnInit {

  constructor(
      private tipoFreteService: TipoFreteService
    , public confirmationService: ConfirmationService
    , public messageService: MessageService
    , private router: Router) {
    super(tipoFreteService, confirmationService, messageService);
  }

  public alterar(id): void {
    this.router.navigate(['/tipo-de-frete/', id]);
  }

  ngOnInit() {
    this.listarEntidades();
  }

}