import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Componente } from 'src/app/components/componente.class';
import { TipoFrete } from 'src/app/modelo/tipoFrete.class';
import { TipoFreteService } from 'src/app/servicos/tipo-frete.service';

@Component({
  selector: 'app-tipo-frete-cadastro',
  templateUrl: './tipo-frete-cadastro.component.html',
  styleUrls: ['./tipo-frete-cadastro.component.css']
})
export class TipoFreteCadastroComponent extends Componente<TipoFrete> implements OnInit, OnDestroy {
  constructor(
      private tipoFreteService: TipoFreteService
    , public confirmationService: ConfirmationService
    , public messageService: MessageService
    , private route: ActivatedRoute
  ) {
    super(tipoFreteService, confirmationService, messageService);
  }

  ngOnInit() {
    this.buscarEntidade(this.route, new TipoFrete());
  }

  ngOnDestroy() {
    this.inscricaoAlterar$.unsubscribe();
  }
}
