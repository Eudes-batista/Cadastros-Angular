import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericService } from 'src/app/servicos/generic.service';
import { TipoFrete } from '../modelo/tipoFrete.class';

@Injectable()
export class TipoFreteService extends GenericService<TipoFrete> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  public getResource(): string {
    return 'tipoFrete';
  }
}
