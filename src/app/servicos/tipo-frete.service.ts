import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TipoFrete } from '../modelo/tipoFrete.class';
import { GenericService } from './generic.service';

@Injectable()
export class TipoFreteService extends GenericService<TipoFrete>{

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }
   public getResource(): string {
    return 'tipoFrete';
  }
}
