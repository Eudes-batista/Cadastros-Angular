import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericService } from 'src/app/servicos/generic.service';
import { TipoPagamento } from '../modelo/tipoPagamento.class';

@Injectable()
export class TipoPagamentoService extends GenericService<TipoPagamento> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  public getResource(): string {
    return 'tipoPagamento';
  }
}
