import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericService } from './generic.service';
import { Produto } from '../modelo/produto.class';

@Injectable()
export class ProdutoService extends GenericService<Produto>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getResource(): string {
    return 'produto';
  }

}
