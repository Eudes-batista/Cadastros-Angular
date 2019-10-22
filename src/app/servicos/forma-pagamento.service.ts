import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormaPagamento } from '../modelo/formaPagamento.class';
import { GenericService } from './generic.service';

@Injectable()
export class FormaPagamentoService extends GenericService<FormaPagamento>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getResource(): string {
    return 'formaPagamento';
  }
}
